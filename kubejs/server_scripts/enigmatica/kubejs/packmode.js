//priority: 1004
setMode = (player) => {
    if (global.packmode == 'expert') {
        player.data.ftbquests.complete('0000000000000FEB');
    } else {
        player.data.ftbquests.reset('0000000000000FEB');
    }
};

const defaultConfig = {
    mode: 'normal',
    message: 'Valid modes are normal and expert.'
};
const configName = 'mode.json';
let config = json.read(configName);
if (!config || !config.mode) {
    json.write(configName, defaultConfig);
    console.log(`Created new ${configName}`);
}
if (config.mode == 'none') {
    json.write(configName, defaultConfig);
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

onEvent('player.data_from_server.mode_channel', (event) => {
    console.log('message received by client: ');
    console.log(event.data.get('mode'));
    console.log(event.data.get('message'));
    console.log(event.data.get());
});
onEvent('server.datapack.high_priority', (event) => {
    if (event.server) {
        event.server.players.forEach((player) => {
            console.log('setting mode for player: ' + player);
            setMode(player);
        });

        event.server.players.forEach((player) => {
            console.log('sending mode to player through mode_channel');
            player.sendData('mode_channel', {
                mode: global.packmode,
                message: 'hello there, I am the server'
            });
        });
    }
});
