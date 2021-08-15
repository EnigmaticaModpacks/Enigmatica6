onEvent('worldgen.add', (event) => {
    event.addSpawn((spawn) => {
        spawn.category = 'creature';
        spawn.entity = 'minecraft:turtle';
        spawn.weight = 40;
        spawn.minCount = 1;
        spawn.maxCount = 3;
        spawn.biomes.blacklist = false;
        spawn.biomes.values = ['#beach'];
    });
});
