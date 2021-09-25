//priority: 1004
setMode = (player) => {
    if (global.packmode == 'expert') {
        player.data.ftbquests.complete('0000000000000FEB');
    } else {
        player.data.ftbquests.reset('0000000000000FEB');
    }
};

onEvent('server.datapack.high_priority', (event) => {
    if (event.server) {
        event.server.players.forEach((player) => {
            console.log('setting mode for player: ' + player);
            setMode(player);
        });
    }
});

const defaultConfig = {
    mode: 'normal',
    message: 'Valid modes are normal and expert.'
};
const configName = 'mode.json';
let config = JsonIO.read(configName);
if (!config || !config.mode) {
    JsonIO.write(configName, defaultConfig);
    console.log(`Created new ${configName}`);
}
if (config.mode == 'none') {
    JsonIO.write(configName, defaultConfig);
    config.mode = defaultConfig.mode;
    console.log(`Overwrote ${configName}, because the mode 'none' was found. Valid modes are 'normal' and 'expert'.`);
}

let packMode = config.mode;

global.packmode = packMode;
global.isNormalMode = packMode == 'normal';
global.isExpertMode = packMode == 'expert';
const isNormalMode = packMode == 'normal';
const isExpertMode = packMode == 'expert';

console.log(`Current packmode is: ${global.packmode}`);
