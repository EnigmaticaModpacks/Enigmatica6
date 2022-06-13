const fs = require('fs')
const { execSync } = require('child_process')
const clc = require('cli-color');

const server_txt = fs.readFileSync('./logs/kubejs/server.txt').toString().split('\n')

// [INFO ] server_scripts:enigmatica/kubejs/kubejs-pre.js:3: Object.keys(this): <csv in csv format>
const regex = /server_scripts:enigmatica\/kubejs\/kubejs-(\w+)\.js:\d+: Object\.keys\(this\): (.*)/

// store all the globals available when kubejs starts parsing files,
// which will then be subtracted from the ones when parsing finishes.

const ignored = {}
const created = []

server_txt.forEach(line => {
  if (regex.test(line)) {
    const match = line.match(regex)
    const keys = match[2].split(',')

    if (match[1] == 'pre') keys.forEach(key => ignored[key] = true)
    if (match[1] == 'post') keys.filter(key => ignored[key] != true).forEach(key => created.push(key))
  }
})

// take a rough shot at finding the file where the variable/const/function is defined.
// if it does not use one of the simple expected formats, ? is returned instead.
// in that case you can use the ones printed above & below as a compass.

const backtrace = {}
created.forEach(key => {
  const lines = execSync(`grep -r -e '${key} =' -e 'function ${key}(' ./kubejs/server_scripts || true`).toString().trim().split('\n')
  console.log(lines)
  if (lines.length != 1) {
    backtrace[key] = '?'
  } else {
    backtrace[key] = lines[0].match(/^(.*?):/)[1]
  }
})

// colorizes the output of `console.log(backtrace)`:
// - anything that likely shouldn't be global is red
// - anything defined the constants becomes is green
// - anything defined in the function file is yellow

console.log('{')
for (const [key, value] of Object.entries(backtrace)) {

  // default to red
  let color = clc.red

  if(value.includes('/constants/')) color = clc.green
  if(value.includes('functions.js')) color = clc.yellow

  console.log(`  ${key}: ` + color(`'${value}'`) + ',')
}
console.log('}')
