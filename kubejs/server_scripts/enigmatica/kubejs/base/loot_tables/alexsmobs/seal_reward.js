onEvent('generic.loot_tables', (event) => {
    const pools = [
        {
            rolls: { min: 1, max: 1 },
            entries: [
                // Coral
                { item: 'upgrade_aquatic:elder_prismarine_coral', count: [1, 4], weight: 100 },
                { item: 'upgrade_aquatic:prismarine_coral', count: [1, 4], weight: 100 },
                { item: 'upgrade_aquatic:chrome_coral', count: [1, 4], weight: 100 },
                { item: 'upgrade_aquatic:silk_coral', count: [1, 4], weight: 100 },
                { item: 'upgrade_aquatic:pillow_coral', count: [1, 4], weight: 100 },
                { item: 'upgrade_aquatic:rock_coral', count: [1, 4], weight: 100 },
                { item: 'upgrade_aquatic:branch_coral', count: [1, 4], weight: 100 },
                { item: 'upgrade_aquatic:petal_coral', count: [1, 4], weight: 100 },
                { item: 'upgrade_aquatic:moss_coral', count: [1, 4], weight: 100 },
                { item: 'upgrade_aquatic:star_coral', count: [1, 4], weight: 100 },
                { item: 'upgrade_aquatic:finger_coral', count: [1, 4], weight: 100 },
                { item: 'upgrade_aquatic:acan_coral', count: [1, 4], weight: 100 },
                { item: 'minecraft:horn_coral', count: [1, 4], weight: 100 },
                { item: 'minecraft:fire_coral', count: [1, 4], weight: 100 },
                { item: 'minecraft:bubble_coral', count: [1, 4], weight: 100 },
                { item: 'minecraft:brain_coral', count: [1, 4], weight: 100 },
                { item: 'minecraft:tube_coral', count: [1, 4], weight: 100 },

                // Kelp
                { item: 'minecraft:kelp', count: [5, 8], weight: 100 },
                { item: 'sushigocrafting:seaweed', count: [5, 8], weight: 100 },
                { item: 'upgrade_aquatic:tongue_kelp', count: [5, 8], weight: 100 },
                { item: 'upgrade_aquatic:thorny_kelp', count: [5, 8], weight: 100 },
                { item: 'upgrade_aquatic:ochre_kelp', count: [5, 8], weight: 100 },
                { item: 'upgrade_aquatic:polar_kelp', count: [5, 8], weight: 100 },

                // Good Loots!
                { item: 'minecraft:prismarine_shard', count: [1, 4], weight: 2000 },
                { item: 'minecraft:nautilus_shell', count: [1, 4], weight: 1500 },
                { item: 'minecraft:prismarine_crystals', weight: 1000 },
                { item: 'minecraft:wet_sponge', weight: 1000 },
                { item: 'alexsmobs:shark_tooth', weight: 500 },
                { item: 'upgrade_aquatic:thrasher_tooth', weight: 500 },
                { item: 'minecraft:heart_of_the_sea', weight: 400 },
                { item: 'minecraft:scute', weight: 400 },
                { item: 'minecraft:turtle_egg', weight: 300 },
                { item: 'alexsmobs:music_disc_thime', weight: 100 }
            ]
        }
    ];

    const chests = ['alexsmobs:gameplay/seal_reward'];
    chests.forEach((chest) => {
        event.removeAll();
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
