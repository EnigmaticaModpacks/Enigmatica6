onEvent('server.datapack.low_priority', (event) => {
    let lootTables = [
        {
            name: 'soggy_treasures',
            rolls: [1, 1],
            entries: [
                { weight: 100, item: 'minecraft:name_tag' },
                { weight: 100, item: 'minecraft:nautilus_shell' },
                { weight: 100, item: 'projectvibrantjourneys:seashells', amount: [2.0, 4.0] },
                { weight: 100, item: 'minecraft:scute' },
                { weight: 100, item: 'minecraft:prismarine_crystals' },
                { weight: 100, item: 'upgrade_aquatic:glowing_ink_sac', amount: [1.0, 2.0] },
                { weight: 100, item: 'minecraft:ink_sac', amount: [1.0, 2.0] },
                { weight: 50, item: 'thermal:tin_coin', amount: [2.0, 8.0] },
                { weight: 20, item: 'thermal:lumium_coin', amount: [2.0, 4.0] },
                { weight: 10, item: 'thermal:enderium_coin', amount: [1.0, 2.0] },
                {
                    item: 'minecraft:bow',
                    weight: 100,
                    damage: [0.0, 0.25],
                    enchantRange: [30, 30]
                },
                {
                    item: 'minecraft:fishing_rod',
                    weight: 100,
                    damage: [0.0, 0.25],
                    enchantRange: [30, 30]
                },
                {
                    item: 'minecraft:book',
                    weight: 100,
                    enchantRange: [30, 30]
                },
                {
                    item: 'botania:mana_ring',
                    weight: 10,
                    nbt: '{mana:50000}'
                },
                {
                    item: 'botania:mana_ring',
                    weight: 5,
                    nbt: '{mana:100000}'
                },
                {
                    item: 'botania:mana_ring',
                    weight: 1,
                    nbt: '{mana:250000}'
                }
            ]
        },
        {
            name: 'soggy_junk',
            rolls: [1, 2],
            entries: [
                { weight: 100, item: 'undergarden:glowing_kelp' },
                { weight: 100, item: 'upgrade_aquatic:polar_kelp' },
                { weight: 100, item: 'upgrade_aquatic:ochre_kelp' },
                { weight: 100, item: 'upgrade_aquatic:thorny_kelp' },
                { weight: 100, item: 'upgrade_aquatic:tongue_kelp' },
                { weight: 100, item: 'minecraft:kelp' },
                { weight: 100, item: 'minecraft:seagrass' },
                { weight: 100, item: 'upgrade_aquatic:blue_pickerelweed' },
                { weight: 100, item: 'upgrade_aquatic:purple_pickerelweed' }
            ]
        },
        {
            type: 'combo_table',
            name: 'soggy_treasure_box',
            rolls: [5, 5],
            entries: [
                { item: 'soggy_treasures', weight: 20 },
                { item: 'soggy_junk', weight: 80 }
            ]
        }
    ];

    lootTables.forEach((lootTable) => {
        if (lootTable.type == 'multi_pool') {
            let pools = [];
            lootTable.pools.forEach((pool) => {
                pools.push({
                    rolls: { min: 1, max: 1 },
                    entries: [
                        {
                            type: 'loot_table',
                            weight: pool.weight,
                            name: `enigmatica:chests/${pool.table}`
                        }
                    ]
                });
            });

            event.addJson(`enigmatica:loot_tables/chests/${lootTable.name}.json`, {
                pools: pools
            });
        } else {
            let entries = [];
            lootTable.entries.forEach((entry) => {
                let functions = [],
                    conditions = [];
                if (entry.amount) {
                    functions.push({
                        function: 'set_count',
                        count: { min: entry.amount[0], max: entry.amount[1] }
                    });
                }
                if (entry.enchantRange) {
                    functions.push({
                        function: 'enchant_with_levels',
                        levels: { min: entry.enchantRange[0], max: entry.enchantRange[1] },
                        treasure: true
                    });
                }
                if (entry.nbt) {
                    functions.push({ function: 'set_nbt', tag: entry.nbt });
                }
                if (entry.damage) {
                    functions.push({
                        function: 'set_damage',
                        damage: { min: entry.damage[0], max: entry.damage[1] }
                    });
                }
                if (entry.chance) {
                    conditions.push({
                        condition: 'random_chance',
                        chance: entry.chance
                    });
                }
                if (lootTable.type == 'combo_table') {
                    entries.push({
                        type: 'loot_table',
                        weight: entry.weight,
                        name: `enigmatica:chests/${entry.item}`
                    });
                } else {
                    entries.push({
                        type: 'item',
                        weight: entry.weight,
                        name: entry.item,
                        functions: functions,
                        conditions: conditions
                    });
                }
            });

            event.addJson(`enigmatica:loot_tables/chests/${lootTable.name}.json`, {
                pools: [{ rolls: { min: lootTable.rolls[0], max: lootTable.rolls[1] }, entries: entries }]
            });
        }
    });
});
