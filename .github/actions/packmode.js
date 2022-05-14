// This script is responsible for setting the packmode in the mode.json
console.log(JSON.stringify({ mode: process.argv[2] }, null, ' '));
