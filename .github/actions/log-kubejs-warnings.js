// This script is responsible for reading the kubejs server log,
// and determining whether it contained errors or not.

const fs = require('fs');

const server = fs.readFileSync('logs/kubejs/server.txt', 'utf-8');

let code = 0;

server.split(/\r?\n/).forEach((line) => {
    if (line.includes('[ERR  ] Error')) {
        console.log(`::warning::${line}`);
        // code = 1;
    } else if (line.includes('[ERR  ]') || line.includes('[WARN ]')) {
        console.log(line);
    }
});

process.exit(code);
