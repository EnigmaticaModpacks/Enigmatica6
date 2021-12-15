//priority: 1004

// This duplicate packmode file is here to get the packmode
// in the event that the client loads before the server
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
