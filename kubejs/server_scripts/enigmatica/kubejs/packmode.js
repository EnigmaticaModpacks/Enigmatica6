//priority: 1000

events.listen('recipes', function (event) {
    var configName = 'mode.json';
    var config = json.read(configName);
    if (!config || !config.packmode) {
        config = {
            packmode: 'normal',
            message: 'Valid modes are normal and expert.'
        };
        json.write(configName, config);
        console.log('Created new ' + configName);
    }
    global.packmode = config.packmode;
    console.log('Current packmode is: ' + global.packmode);
});
