const { exec, execSync } = require("child_process")
const fs = require("fs")
const util = require('node:util')

const negative = '\x1B[31m- #'
const positive = '\x1B[32m+\x1B[m\x1B[32m #'

const a = __dirname +    '/artifact' // base
const b = __dirname + '/../../../..' // head

const kubejs = {
  [a]: JSON.parse(fs.readFileSync(`${a}/kubejs/exported/kubejs-server-export.json`)),
  [b]: JSON.parse(fs.readFileSync(`${b}/kubejs/exported/kubejs-server-export.json`)),
}

let changes = 0
let notices = []

// [ 'blocks', 'items', 'fluids', 'entity_types' ]
const types = Object.keys({...kubejs[a].tags, ...kubejs[b].tags})

types.forEach(type => {
  [a, b].forEach(c => {
    let lines = []

    const keys = Object.keys(kubejs[c].tags[type]).sort()
    keys.forEach(key => {
      kubejs[c].tags[type][key].sort().forEach(item => lines.push(` #${key} > ${item}`))
      lines.push('')
    })

    fs.writeFileSync(`${c}/kubejs/exported/tags/${type}.txt`, lines.join('\n'))
  })

  let diff = execSync(`git --no-pager diff --color --no-index '${a}/kubejs/exported/tags/${type}.txt' '${b}/kubejs/exported/tags/${type}.txt' || true`).toString()

  let positives = 0
  let negatives = 0

  diff.split('\n').forEach(line => {
    if (diff == '') return

    // remove the + and - for empty lines
    if (line == '\x1B[31m-\x1B[m' || line == '\x1B[32m+\x1B[m') line = '\x1B[m'
    console.log(line) // debug: console.log(util.inspect(line, {colors: false}))

    if (line.startsWith(positive)) {
      positives++
      changes++
    } else 
    if (line.startsWith(negative)) {
      negatives++
      changes++
    }
  })

  notices.push(`${type}(+${positives} -${negatives})`)
})

console.log(`::notice::${changes} changes to tags: ${notices.join(' ')}`)
