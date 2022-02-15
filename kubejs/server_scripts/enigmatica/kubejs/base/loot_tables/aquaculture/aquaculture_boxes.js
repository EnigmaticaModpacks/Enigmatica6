onEvent('generic.loot_tables', (event) => {
    const pools = [
        {
            rolls: { min: 1, max: 1 },
            entries: [
                {
                    item: 'upgrade_aquatic:tongue_kelp',
                    weight: 100,
                    count: [5, 10],
                    loot_conditions: [
                        {
                            condition: 'random_chance',
                            chance: 0.1
                        }
                    ]
                },
                {
                    item: 'upgrade_aquatic:thorny_kelp',
                    weight: 100,
                    count: [5, 10],
                    loot_conditions: [
                        {
                            condition: 'random_chance',
                            chance: 0.1
                        }
                    ]
                },
                {
                    item: 'upgrade_aquatic:ochre_kelp',
                    weight: 100,
                    count: [5, 10],
                    loot_conditions: [
                        {
                            condition: 'random_chance',
                            chance: 0.1
                        }
                    ]
                },
                {
                    item: 'upgrade_aquatic:polar_kelp',
                    weight: 100,
                    count: [5, 10],
                    loot_conditions: [
                        {
                            condition: 'random_chance',
                            chance: 0.1
                        }
                    ]
                }
            ]
        }
    ];

    const chests = ['aquaculture:box/neptunes_bounty_junk'];
    chests.forEach((chest) => {
        event.modify(chest, (table) => {
            pools.forEach((pool) => {
                table.addPool((newPool) => {
                    pool.entries.forEach((entry) => {
                        let count = entry.count ? entry.count : 1,
                            weight = entry.weight ? entry.weight : 1;

                        const re = newPool.addItem(entry.item, weight, count);
                        if (entry.enchantLevel) {
                            re.enchantWithLevels(entry.enchantLevel, false);
                        }
                        if (entry.loot_conditions) {
                            entry.loot_conditions.forEach((loot_condition) => {
                                re.addCondition(loot_condition);
                            });
                        }
                        if (entry.loot_functions) {
                            entry.loot_functions.forEach((loot_function) => {
                                re.addFunction(loot_function);
                            });
                        }
                    });
                });
            });
        });
    });
});
