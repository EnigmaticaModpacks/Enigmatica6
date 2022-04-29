const { spawn } = require('child_process');

const child = spawn('bash', [process.argv[2]]);

child.stdout.on('data', (data) => {
    process.stdout.write(`${data}`);

    if(`${data}`.includes('[minecraft/DedicatedServer]: Done (')) {
        child.stdin.write("kubejs export\n");
    }

    if(`${data}`.includes('[minecraft/DedicatedServer]: Done! Export in kubejs/exported/kubejs-server-export.json')) {
        process.exit(0);
    }

    if(`${data}`.includes('Server will restart in ~10 seconds') || `${data}`.includes('Failed to start the minecraft server') || `${data}`.endsWith('Exception stopping the server')) {
        process.exit(1);
    }
});

child.stderr.on('data', (data) => {
    process.stdout.write(`${data}`);
});

// process.stdin.pipe(child.stdin);
// const process = require("process")
// process.stdin.on('data', data => {
//     console.log(data.toString())
// })
