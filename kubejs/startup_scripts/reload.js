global.onReload = function onReload() {
    //reload powah configs
    var configs = java('owmii.powah.config.Configs');
    configs.ALL.forEach((config) => config.reload());

    //reload packmenu config
    var client = java('shadows.menu.PackMenuClient');
    client.loadConfig();

    //reload randompatches config
    let randompatches = java('com.therandomlabs.randompatches.RandomPatches');
    randompatches.reloadConfig();
};

onEvent('postinit', (event) => {
    global.onReload();
});
