//priority: 1000

events.listen('recipes', function (event) {
    var config = json.read('config/packmode.json');
    if (!config || !config.packmode) {
        config = {
            packmode: 'normal',
            message: 'Valid modes are normal and expert.'
        };
        json.write('config/packmode.json', config);
        console.log('Wrote new config/packmode.json');
    }
    global.packmode = config.packmode;
    console.log('Current packmode is: ' + global.packmode);
});
