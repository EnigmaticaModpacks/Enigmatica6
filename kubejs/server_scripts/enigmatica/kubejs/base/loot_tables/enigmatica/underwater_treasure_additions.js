onEvent('chest.loot_tables', (event) => {
    const pools = [
        {
            rolls: { min: 1, max: 5 },
            entries: [
                {
                    item: Item.of('minecraft:potion', '{Potion:"minecraft:water_breathing"}'),
                    weight: 100,
                    count: [1, 3]
                },
                {
                    item: Item.of('minecraft:potion', '{Potion:"minecraft:long_water_breathing"}'),
                    weight: 75,
                    count: [0, 2]
                },
                {
                    item: 'create:diving_helmet',
                    count: 1,
                    weight: 25,
                    enchantLevel: 15
                },
                {
                    item: 'create:diving_boots',
                    count: 1,
                    weight: 25,
                    enchantLevel: 15
                },
                {
                    item: 'create:copper_backtank',
                    count: 1,
                    weight: 25,
                    enchantLevel: 15
                },
                {
                    item: 'thermal:diving_helmet',
                    count: 1,
                    weight: 50,
                    enchantLevel: 10
                },
                {
                    item: 'thermal:diving_chestplate',
                    count: 1,
                    weight: 50,
                    enchantLevel: 10
                },
                {
                    item: 'thermal:diving_boots',
                    count: 1,
                    weight: 50,
                    enchantLevel: 10
                },
                {
                    item: 'thermal:diving_leggings',
                    count: 1,
                    weight: 50,
                    enchantLevel: 10
                },
                {
                    item: 'artifacts:charm_of_sinking'
                },
                {
                    item: 'artifacts:flippers'
                },
                {
                    item: 'artifacts:snorkel'
                }
            ]
        }
    ];

    const underwater_chests = [
        'minecraft:shipwreck_supply',
        'minecraft:underwater_ruin_big',
        'minecraft:underwater_ruin_small',
        'repurposed_structures:dungeon/ocean',
        'repurposed_structures:mineshaft/ocean',
        'dungeons_plus:warped_garden/common'
    ];
    underwater_chests.forEach((underwater_chest) => {
        event.modify(underwater_chest, (table) => {
            pools.forEach((pool) => {
                table.addPool((newPool) => {
                    pool.entries.forEach((entry) => {
                        let count = entry.count ? entry.count : 1,
                            weight = entry.weight ? entry.weight : 1;

                        const re = newPool.addItem(entry.item, weight, count);
                        if (entry.enchantLevel) {
                            re.enchantWithLevels(entry.enchantLevel, false);
                        }
                    });
                });
            });
        });
    });
});
