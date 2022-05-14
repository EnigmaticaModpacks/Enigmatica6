import { spawn } from 'child_process';

const child = spawn(process.argv[2], [process.argv[3]]);

child.stderr.on('data', (data) => {
    process.stdout.write(`${data}`);
});

const exits = ['[minecraft/DedicatedServer]: Done (', '[minecraft/MinecraftServer]: Exception stopping the server'];

child.stdout.on('data', (data) => {
    process.stdout.write(`${data}`);

    exits.forEach((exit, code) => {
        if (`${data}`.includes(exit)) {
            console.log(`nodejs: process.exit(${code})`);
            process.exit(code);
        }
    });
});
