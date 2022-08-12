//priority: 1004
setMode = (player) => {
    const expertModeQuestId = '0000000000000FEB';
    console.log(`setting mode for player: ${player}`);
    if (global.packmode == 'expert') {
        player.data.ftbquests.complete(expertModeQuestId);
        console.log(`set mode to expert for player: ${player}`);
    } else {
        player.data.ftbquests.reset(expertModeQuestId);
    }
};

onEvent('server.datapack.high_priority', (event) => {
    if (event.getServer()) {
        event.getServer().players.forEach((player) => {
            setMode(player);
        });
        event.getServer().sendDataToAll('reload', {});
        if (event.getServer().isDedicated()) global.onReload();
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
    config = defaultConfig;
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
