// This script is responsible for relaying logs from the Minecraft server instance to the console.

const fsp = require('fs/promises');
const { spawn } = require('child_process');

const child = spawn(process.argv[2], [process.argv[3]]);

child.stderr.on('data', (data) => {
    process.stdout.write(`${data}`);
});

const exits = [
    '[minecraft/DedicatedServer]: Done (',
    '[minecraft/MinecraftServer]: Exception stopping the server'
];

child.stdout.on('data', (data) => {
    const line = data.toString();
    process.stdout.write(line);

    // forge starting, at this point either serverstarter or instancesync made sure the kubejs common config exists.
    if(line.includes('[cp.mo.mo.Launcher/MODLAUNCHER]: ModLauncher running')) {
        fsp.readFile('kubejs/config/common.properties').then(data => {
            fsp.writeFile('kubejs/config/common.properties', data.toString().replace('debugInfo=false', 'debugInfo=true'))
        })
    }

    exits.forEach((exit, code) => {
        if (line.includes(exit)) {
            console.log(`nodejs: process.exit(${code})`);
            process.exit(code);
        }
    });
});
