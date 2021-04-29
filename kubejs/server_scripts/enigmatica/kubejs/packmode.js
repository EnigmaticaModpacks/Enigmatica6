//priority: 1004
events.listen('server.datapack.high_priority', (event) => {
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
    global.mode = config.mode;
    global.isNormalMode = global.mode == 'normal';
    global.isExpertMode = global.mode == 'expert';
    console.log(`Current packmode is: ${global.mode}`);

    if (event.server) {
        if (event.server.players) {
            event.server.players.forEach((player) => {
                setMode(player);
            });
        }
    }
});
