//priority: 1000

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
    global.packmode = config.mode;
    console.log(`Current packmode is: ${global.packmode}`);

    if (event.server) {
        event.server.players.forEach((player) => {
            setMode(player);
        });
    }
});
