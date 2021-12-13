onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: 'minecraft:entity',
        pools: [
            {
                rolls: 1,
                entries: [
                    {
                        type: 'minecraft:item',
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: {
                                    min: 1.0,
                                    max: 1.0,
                                    type: 'minecraft:uniform'
                                }
                            },
                            {
                                function: 'minecraft:looting_enchant',
                                count: {
                                    min: 1.0,
                                    max: 2.0
                                }
                            }
                        ],
                        name: 'occultism:afrit_essence'
                    }
                ]
            }
        ]
    };

    event.addJson(`occultism:loot_tables/entities/afrit_wild.json`, loot_table);
});
