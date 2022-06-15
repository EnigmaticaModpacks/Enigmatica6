// This script is responsible for reading the kubejs server log,
// and determining whether it contained errors or not.

const fs = require('fs');
const server = fs.readFileSync('logs/kubejs/server.txt', 'utf-8');

let warnings = [];

server.split(/\r?\n/).forEach((line) => {

    // the 2nd reload causes this error, avoid reporting this
    if (line.includes('shadows.menu.PackMenuClient')) return;

    // get the log level from this line, expected values: [ undefined, INFO, WARN, ERR ]
    const in_brackets = line.match(/\[\d{2}:\d{2}:\d{2}] \[([A-Z\s]+)]/)?.[1];

    switch (in_brackets) {
        case 'ERR  ': warnings.push(line);
        case 'WARN ': console.log(line);
    }
});

warnings.forEach(warning => {
    console.log(`::warning::${warning}`);
});

process.exit(warnings.length === 0 ? 0 : 1);
