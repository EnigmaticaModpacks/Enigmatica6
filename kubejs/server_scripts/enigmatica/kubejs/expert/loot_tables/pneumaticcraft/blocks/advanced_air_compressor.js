onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: 'minecraft:block',
        pools: [
            {
                name: 'advanced_air_compressor',
                rolls: { min: 4, max: 6 },
                entries: [
                    {
                        type: 'minecraft:item',
                        weight: 1,
                        name: 'pneumaticcraft:reinforced_bricks'
                    }
                ]
            }
        ]
    };

    event.addJson(`pneumaticcraft:loot_tables/blocks/advanced_air_compressor.json`, loot_table);
});
