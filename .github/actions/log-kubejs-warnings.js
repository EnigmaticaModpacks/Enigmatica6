const fs = require('fs');

const server = fs.readFileSync('logs/kubejs/server.txt', 'utf-8');

let code = 0;

server.split(/\r?\n/).forEach((line) => {
    if (line.includes('[WARN ]')) {
        console.log(line);
    } else if (line.includes('[ERR  ]')) {
        console.log(`::warning::${line}`);
        code = 1;
    }
});

process.exit(code);
