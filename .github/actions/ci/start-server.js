// This script is responsible for relaying logs from the Minecraft server instance to the console.

const fsp = require('fs/promises');
const { spawn } = require('child_process');

const child = spawn(process.argv[2], [process.argv[3]]);

child.stderr.on('data', (data) => {
    const line = data.toString();
    process.stdout.write(line);
});

child.stdout.on('data', (data) => {
    const line = data.toString();
    process.stdout.write(line);

    // forge starting, at this point either serverstarter or instancesync made sure the kubejs common config exists.
    if(line.includes('[cp.mo.mo.Launcher/MODLAUNCHER]: ModLauncher running')) {
        fsp.readFile('kubejs/config/common.properties').then(data => {
            fsp.writeFile('kubejs/config/common.properties', data.toString().replace('debugInfo=false', 'debugInfo=true'))
        })
    }

    if(line.includes('[minecraft/DedicatedServer]: Done (')) {
        console.log('requesting a kubejs export..');
        return child.stdin.write("kubejs export\n");
    }

    if(line.includes('[minecraft/DedicatedServer]: Done! Export in kubejs/exported/kubejs-server-export.json')) {
        console.log('exit(0)');
        return process.exit(0);
    }

    if(line.includes('[minecraft/MinecraftServer]: Exception stopping the server')) {
        console.log('exit(1)');
        return process.exit(1);
    }
});
