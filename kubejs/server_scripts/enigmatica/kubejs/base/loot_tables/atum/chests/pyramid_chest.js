onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        pools: [
            {
                name: 'atum:pyramid_chest',
                rolls: { min: 2, max: 5 },
                entries: [
                    {
                        type: 'item',
                        name: 'minecraft:string',
                        entryName: 'string',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 75
                    },
                    {
                        type: 'item',
                        name: 'minecraft:feather',
                        entryName: 'feather',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 75
                    },
                    {
                        type: 'item',
                        name: 'minecraft:leather',
                        entryName: 'leather',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 75
                    },
                    {
                        type: 'item',
                        name: 'atum:cloth_scrap',
                        entryName: 'cloth_scrap',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 75
                    },
                    {
                        type: 'item',
                        name: 'minecraft:gunpowder',
                        entryName: 'gunpowder',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 50
                    },
                    {
                        type: 'item',
                        name: 'atum:fertile_soil_pile',
                        entryName: 'fertile_soil_pile',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 40
                    },
                    {
                        type: 'item',
                        name: 'minecraft:rotten_flesh',
                        entryName: 'rotten_flesh',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 100
                    },
                    {
                        type: 'item',
                        name: 'atum:dusty_bone',
                        entryName: 'dusty_bone',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 100
                    },
                    {
                        type: 'item',
                        name: 'minecraft:redstone',
                        entryName: 'redstone',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 50
                    },
                    {
                        type: 'item',
                        name: 'minecraft:coal',
                        entryName: 'coal',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 45
                    },
                    {
                        type: 'item',
                        name: 'atum:date',
                        entryName: 'date',
                        functions: [{ function: 'set_count', count: { min: 1, max: 2 } }],
                        weight: 45
                    },
                    {
                        type: 'item',
                        name: 'atum:emmer_seeds',
                        entryName: 'emmer_seeds',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 40
                    },
                    {
                        type: 'item',
                        name: 'melon_seeds',
                        entryName: 'melon_seeds',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 20
                    },
                    { type: 'item', name: 'atum:golden_date', entryName: 'golden_date', weight: 1 },
                    { type: 'item', name: 'atum:golden_date_enchanted', entryName: 'golden_date_enchanted', weight: 1 },
                    { type: 'loot_table', name: 'atum:chests/subloot/iron_weapons_0', weight: 75, quality: 2 },
                    { type: 'loot_table', name: 'atum:chests/subloot/iron_weapons_25', weight: 10, quality: 2 },
                    { type: 'loot_table', name: 'atum:chests/subloot/iron_armor_0', weight: 75, quality: 2 },
                    { type: 'loot_table', name: 'atum:chests/subloot/iron_armor_25', weight: 10, quality: 2 },
                    { type: 'loot_table', name: 'atum:chests/subloot/diamond_weapons_35', weight: 2, quality: 2 },
                    { type: 'loot_table', name: 'atum:chests/subloot/diamond_armor_35', weight: 2, quality: 2 },
                    {
                        type: 'item',
                        name: 'minecraft:iron_ingot',
                        entryName: 'iron_ingot',
                        functions: [{ function: 'set_count', count: { min: 1, max: 2 } }],
                        weight: 20
                    },
                    {
                        type: 'item',
                        name: 'minecraft:gold_ingot',
                        entryName: 'gold_ingot',
                        functions: [{ function: 'set_count', count: { min: 1, max: 2 } }],
                        weight: 20
                    },
                    {
                        type: 'item',
                        name: 'atum:nebu_torch',
                        entryName: 'nebu_torch',
                        functions: [{ function: 'set_count', count: { min: 1, max: 1 } }],
                        weight: 40
                    },
                    {
                        type: 'item',
                        name: 'atum:coin_dirty',
                        entryName: 'coin_dirty',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 45
                    },
                    { type: 'item', name: 'atum:relic_dirty_ring', entryName: 'loot_dirty_ring', weight: 20 },
                    { type: 'item', name: 'atum:relic_dirty_necklace', entryName: 'loot_dirty_necklace', weight: 15 },
                    { type: 'item', name: 'atum:relic_dirty_brooch', entryName: 'loot_dirty_brooch', weight: 10 },
                    { type: 'item', name: 'atum:relic_dirty_bracelet', entryName: 'loot_dirty_bracelet', weight: 5 },
                    { type: 'item', name: 'atum:relic_dirty_idol', entryName: 'loot_dirty_idol', weight: 1 },
                    { type: 'item', name: 'minecraft:name_tag', entryName: 'name_tag', weight: 10 },
                    {
                        type: 'item',
                        name: 'atum:desert_wolf_iron_armor',
                        entryName: 'desert_wolf_iron_armor',
                        weight: 10
                    },
                    {
                        type: 'item',
                        name: 'atum:desert_wolf_gold_armor',
                        entryName: 'desert_wolf_gold_armor',
                        weight: 5
                    },
                    {
                        type: 'item',
                        name: 'atum:desert_wolf_diamond_armor',
                        entryName: 'desert_wolf_diamond_armor',
                        weight: 3
                    },
                    { type: 'item', name: 'atum:camel_iron_armor', entryName: 'camel_iron_armor', weight: 10 },
                    { type: 'item', name: 'atum:camel_gold_armor', entryName: 'camel_gold_armor', weight: 5 },
                    { type: 'item', name: 'atum:camel_diamond_armor', entryName: 'camel_diamond_armor', weight: 3 },
                    { type: 'item', name: 'minecraft:totem_of_undying', entryName: 'totem_of_undying', weight: 5 },
                    {
                        type: 'item',
                        name: 'minecraft:book',
                        entryName: 'enchanted_book',
                        functions: [{ function: 'enchant_randomly' }],
                        weight: 20
                    }
                ]
            },
            {
                name: 'atum:pyramid_sand',
                rolls: 1,
                entries: [
                    {
                        type: 'item',
                        name: 'atum:sand',
                        entryName: 'sand',
                        functions: [{ function: 'set_count', count: { min: 1, max: 8 } }],
                        weight: 1
                    }
                ]
            },
            {
                name: 'atum:pyramid_chest_artifact',
                rolls: { min: 0, max: 1 },
                entries: [
                    { type: 'loot_table', name: 'atum:gods/all', weight: 1, quality: 2 },
                    { type: 'empty', weight: 100 }
                ]
            }
        ]
    };
    event.addJson(`atum:loot_tables/chests/pyramid_chest.json`, loot_table);
});

onEvent('chest.loot_tables', (event) => {
    const pools = [
        {
            rolls: { min: 0, max: 1 },
            entries: [
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"minecraft:cat"}'),
                    weight: 20,
                    count: [1, 2]
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"atum:desert_wolf"}'),
                    weight: 10,
                    count: [1, 2]
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"atum:camel"}'),
                    weight: 10,
                    count: [1, 2]
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"alexsmobs:crocodile"}'),
                    weight: 10,
                    count: [1, 2]
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"alexsmobs:crow"}'),
                    weight: 20,
                    count: [1, 2]
                },
                {
                    item: 'ars_nouveau:carbuncle_shard',
                    weight: 10,
                    count: [1, 2]
                },
                {
                    item: 'ars_nouveau:sylph_shard',
                    weight: 10,
                    count: [1, 2]
                },
                {
                    item: 'ars_nouveau:drygmy_shard',
                    weight: 10,
                    count: [1, 2]
                }
            ]
        },
        {
            rolls: { min: 1, max: 5 },
            entries: [
                {
                    item: 'ars_nouveau:ritual_binding',
                    weight: 20
                },
                {
                    item: 'ars_nouveau:ritual_restoration',
                    weight: 20
                },
                {
                    item: 'ars_nouveau:ritual_sunrise',
                    weight: 20
                },
                {
                    item: 'ars_nouveau:ritual_fertility',
                    weight: 20
                },
                {
                    item: 'ars_nouveau:ritual_overgrowth',
                    weight: 20
                },
                {
                    item: 'ars_nouveau:apprentice_boots',
                    weight: 20,
                    enchantLevel: 15
                },
                {
                    item: 'ars_nouveau:apprentice_leggings',
                    weight: 20,
                    enchantLevel: 15
                },
                {
                    item: 'ars_nouveau:apprentice_robes',
                    weight: 20,
                    enchantLevel: 15
                },
                {
                    item: 'ars_nouveau:apprentice_hood',
                    weight: 20,
                    enchantLevel: 15
                },
                {
                    item: 'botania:manaweave_cloth',
                    count: [1, 5],
                    weight: 50
                },
                {
                    item: Item.of('naturesaura:aura_cache', '{aura:400000}'),
                    count: [0, 1],
                    weight: 10
                },
                {
                    item: Item.of('naturesaura:aura_cache', '{aura:200000}'),
                    count: [0, 1],
                    weight: 20
                }
            ]
        }
    ];

    event.modify('atum:pyramid_chest', (table) => {
        pools.forEach((pool) => {
            table.addPool((newPool) => {
                pool.entries.forEach((entry) => {
                    let count = 1,
                        weight = 1;

                    if (entry.count) {
                        count = entry.count;
                    }

                    if (entry.weight) {
                        weight = entry.weight;
                    }

                    const re = newPool.addItem(entry.item, weight, count);
                    if (entry.enchantLevel) {
                        re.enchantWithLevels(entry.enchantLevel, false);
                    }
                });
            });
        });
    });
});
