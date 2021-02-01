events.listen('worldgen.add', (event) => {
    var data = {
        stones: [
            {
                block: 'create:natural_scoria',
                clusterMinSize: 128,
                clusterMaxSize: 128,
                minHeight: 0,
                maxHeight: 8,
                clusterCount: 1
            },
            {
                block: 'quark:jasper',
                clusterMinSize: 128,
                clusterMaxSize: 128,

                minHeight: 8,
                maxHeight: 16,
                clusterCount: 1
            },
            {
                block: 'create:gabbro',
                clusterMinSize: 128,
                clusterMaxSize: 128,
                minHeight: 16,
                maxHeight: 24,
                clusterCount: 1
            },
            {
                block: 'quark:slate',
                clusterMinSize: 128,
                clusterMaxSize: 128,
                minHeight: 24,
                maxHeight: 32,
                clusterCount: 1
            },
            {
                block: 'quark:marble',
                clusterMinSize: 128,
                clusterMaxSize: 128,
                minHeight: 32,
                maxHeight: 40,
                clusterCount: 1
            },
            {
                block: 'minecraft:andesite',
                clusterMinSize: 128,
                clusterMaxSize: 128,
                minHeight: 40,
                maxHeight: 48,
                clusterCount: 1
            },
            {
                block: 'create:limestone',
                clusterMinSize: 128,
                clusterMaxSize: 128,
                minHeight: 48,
                maxHeight: 56,
                clusterCount: 1
            },
            {
                block: 'create:weather_limestone',
                clusterMinSize: 128,
                clusterMaxSize: 128,
                minHeight: 56,
                maxHeight: 64,
                clusterCount: 1
            }
        ]
    };
    let i = 1;
    data.stones.forEach((stone) => {
        let minHeight = i * 8 - 4;
        let maxHeight = i * 8 + 4;
        event.addOre((ore) => {
            ore.block = stone.block;
            ore.clusterMinSize = stone.clusterMinSize;
            ore.clusterMaxSize = stone.clusterMaxSize;
            ore.minHeight = minHeight;
            ore.maxHeight = maxHeight;
            ore.clusterCount = stone.clusterCount;

            // WorldgenLayer is specified to ensure Emendatus Enigmatica can spawn ores in the stones we generate
            ore.worldgenLayer = 'local_modifications';
        });
        i++;
    });
});
