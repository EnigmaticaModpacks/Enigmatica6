const fs = require('fs')
const clc = require('cli-color');

// each of the kubejs log files
const filenames = ['startup', 'client', 'server'];

const loaded_script = / Loaded script (.*) in /;
const new_global = / - new global variable: (.*)/;

// color the string from the point where `Loaded script` & `- new global` start
function console_log(color, line) {
  const matches = line.match(/\[INFO ] (SourceFile:\d+:)?(.*)/);
  console.log(line.replace(matches[2], color(matches[2])));
}

// filter out the lines that do not relate to `new global variable` and its context
filenames.forEach(filename => {
  console.log(`${filename}.txt:`);
  const lines = fs.readFileSync(`./logs/kubejs/${filename}.txt`).toString().split('\n');

  let color = null;

  lines.forEach((line, i) => {

    if (new_global.test(line)) {
      const previous_line = lines[i-1];
      if (loaded_script.test(previous_line)) {

        // - anything that likely shouldn't be global is red
        // - anything defined the constants becomes is green
        // - anything defined in the function file is yellow

        color = clc.red;
        if (previous_line.includes('constants')) color = clc.green;
        if (previous_line.includes('functions')) color = clc.yellow;

        console_log(color, previous_line);
      }
      console_log(color, line);
    }
  });
});
