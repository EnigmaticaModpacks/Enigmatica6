//priority: 1004
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
console.log(`isNormalMode: ${global.isNormalMode}`);
console.log(`isExpertMode: ${global.isExpertMode}`);
console.log(`isNormalMode var: ${isNormalMode}`);
console.log(`isExpertMode var: ${isExpertMode}`);

events.listen('server.datapack.high_priority', (event) => {
    if (event.server) {
        event.server.players.forEach((player) => {
            setMode(player);
        });
    }

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
        console.log(
            `Overwrote ${configName}, because the mode 'none' was found. Valid modes are 'normal' and 'expert'.`
        );
    }
    let packMode = config.mode;
    global.packmode = config.mode;
    global.isNormalMode = packMode == 'normal';
    global.isExpertMode = packMode == 'expert';
    console.log(`inEvent: Current packmode is: ${global.packmode}`);
    console.log(`inEvent: isNormalMode: ${global.isNormalMode}`);
    console.log(`inEvent: isExpertMode: ${global.isExpertMode}`);

    const isNormalMode = packMode == 'normal';
    const isExpertMode = packMode == 'expert';

    console.log(`inEvent: isNormalMode var: ${isNormalMode}`);
    console.log(`inEvent: isExpertMode var: ${isExpertMode}`);
});
