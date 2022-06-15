onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        pools: [
            {
                name: 'atum:pyramid_chest',
                rolls: { min: 2, max: 5 },
                entries: [
                    {
                        type: 'item',
                        name: 'minecraft:leather',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 75
                    },
                    {
                        type: 'item',
                        name: 'atum:cloth_scrap',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 75
                    },
                    {
                        type: 'item',
                        name: 'atum:fertile_soil_pile',
                        functions: [{ function: 'set_count', count: { min: 6, max: 9 } }],
                        weight: 40
                    },
                    { type: 'loot_table', name: 'atum:chests/subloot/iron_weapons_25', weight: 15, quality: 2 },
                    { type: 'loot_table', name: 'atum:chests/subloot/iron_armor_25', weight: 15, quality: 2 },
                    { type: 'loot_table', name: 'atum:chests/subloot/diamond_weapons_35', weight: 10, quality: 2 },
                    { type: 'loot_table', name: 'atum:chests/subloot/diamond_armor_35', weight: 10, quality: 2 },
                    {
                        type: 'item',
                        name: 'minecraft:iron_ingot',
                        functions: [{ function: 'set_count', count: { min: 1, max: 2 } }],
                        weight: 20
                    },
                    {
                        type: 'item',
                        name: 'minecraft:gold_ingot',
                        functions: [{ function: 'set_count', count: { min: 1, max: 2 } }],
                        weight: 20
                    },
                    {
                        type: 'item',
                        name: 'atum:nebu_torch',
                        functions: [{ function: 'set_count', count: { min: 1, max: 1 } }],
                        weight: 40
                    },
                    {
                        type: 'item',
                        name: 'atum:coin_dirty',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 45
                    },
                    {
                        type: 'item',
                        name: 'atum:relic_dirty_ring',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 20
                    },
                    {
                        type: 'item',
                        name: 'atum:relic_dirty_necklace',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 15
                    },
                    {
                        type: 'item',
                        name: 'atum:relic_dirty_brooch',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 10
                    },
                    {
                        type: 'item',
                        name: 'atum:relic_dirty_bracelet',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 5
                    },
                    {
                        type: 'item',
                        name: 'atum:relic_dirty_idol',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 1
                    },
                    { type: 'item', name: 'minecraft:name_tag', weight: 10 },
                    {
                        type: 'item',
                        name: 'atum:desert_wolf_iron_armor',
                        weight: 10
                    },
                    {
                        type: 'item',
                        name: 'atum:desert_wolf_gold_armor',
                        weight: 5
                    },
                    {
                        type: 'item',
                        name: 'atum:desert_wolf_diamond_armor',
                        weight: 3
                    },
                    { type: 'item', name: 'atum:camel_iron_armor', weight: 10 },
                    { type: 'item', name: 'atum:camel_gold_armor', weight: 5 },
                    { type: 'item', name: 'atum:camel_diamond_armor', weight: 3 },
                    { type: 'item', name: 'minecraft:totem_of_undying', weight: 5 },
                    {
                        type: 'item',
                        name: 'minecraft:book',
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
                    count: 2
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"atum:desert_wolf"}'),
                    weight: 10,
                    count: 2
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"atum:camel"}'),
                    weight: 10,
                    count: 2
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"alexsmobs:crocodile"}'),
                    weight: 10,
                    count: 2
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"alexsmobs:crow"}'),
                    weight: 20,
                    count: 2
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"alexsmobs:rattlesnake"}'),
                    weight: 10,
                    count: 2
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"alexsmobs:komodo_dragon"}'),
                    weight: 10,
                    count: 2
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"alexsmobs:kangaroo"}'),
                    weight: 10,
                    count: 2
                },
                {
                    item: 'ars_nouveau:carbuncle_shards',
                    weight: 10,
                    count: 1
                },
                {
                    item: 'ars_nouveau:sylph_shards',
                    weight: 10,
                    count: 1
                },
                {
                    item: 'ars_nouveau:drygmy_shard',
                    weight: 10,
                    count: 1
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
                    enchantLevel: 20
                },
                {
                    item: 'ars_nouveau:apprentice_leggings',
                    weight: 20,
                    enchantLevel: 20
                },
                {
                    item: 'ars_nouveau:apprentice_robes',
                    weight: 20,
                    enchantLevel: 20
                },
                {
                    item: 'ars_nouveau:apprentice_hood',
                    weight: 20,
                    enchantLevel: 20
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
                },
                {
                    item: 'botania:corporea_spark',
                    count: [2, 5],
                    weight: 50
                },
                {
                    item: 'betterendforge:silk_fiber',
                    count: [2, 5],
                    weight: 30
                },
                {
                    item: 'immersiveengineering:hemp_fabric',
                    count: [2, 5],
                    weight: 30
                },
                {
                    item: 'eidolon:tattered_cloth',
                    count: [2, 5],
                    weight: 30
                },
                {
                    item: 'atum:linen_cloth',
                    count: [2, 5],
                    weight: 30
                },
                {
                    item: 'minecraft:leather',
                    count: [2, 5],
                    weight: 30
                },
                {
                    item: 'farmersdelight:canvas',
                    count: [8, 16],
                    weight: 30
                }
            ]
        },
        {
            rolls: { min: 2, max: 3 },
            entries: [
                {
                    item: 'atum:emmer_block',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    item: 'farmersdelight:potato_crate',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    item: 'farmersdelight:carrot_crate',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    item: 'farmersdelight:straw_bale',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    item: 'farmersdelight:onion_crate',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    item: 'farmersdelight:rice_bag',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    item: 'farmersdelight:cabbage_crate',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    item: 'quark:cocoa_beans_sack',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    item: 'simplefarming:wine',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    item: 'simplefarming:beer',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    item: 'simplefarming:cauim',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    item: 'atum:crunchy_scarab',
                    weight: 100,
                    count: [5, 10]
                },
                {
                    item: 'atum:date',
                    weight: 100,
                    count: [1, 2]
                },
                {
                    item: 'atum:golden_date',
                    weight: 50,
                    count: 1
                },
                {
                    item: 'atum:golden_date_enchanted',
                    weight: 20,
                    count: 1
                }
            ]
        },
        {
            rolls: { min: 1, max: 4 },
            entries: [
                {
                    item: 'minecraft:gold_ingot',
                    weight: 75,
                    count: [1, 8]
                },
                {
                    item: 'minecraft:iron_ingot',
                    weight: 75,
                    count: [1, 8]
                },
                {
                    item: 'emendatusenigmatica:tin_ingot',
                    weight: 75,
                    count: [1, 16]
                },
                {
                    item: 'emendatusenigmatica:copper_ingot',
                    weight: 75,
                    count: [1, 16]
                },
                {
                    item: 'emendatusenigmatica:silver_ingot',
                    weight: 75,
                    count: [1, 8]
                },
                {
                    item: 'emendatusenigmatica:lead_ingot',
                    weight: 75,
                    count: [1, 8]
                },
                {
                    item: 'emendatusenigmatica:nickel_ingot',
                    weight: 75,
                    count: [1, 8]
                },
                {
                    item: 'emendatusenigmatica:electrum_ingot',
                    weight: 75,
                    count: [1, 8]
                },
                {
                    item: 'emendatusenigmatica:aluminum_ingot',
                    weight: 75,
                    count: [1, 8]
                },
                {
                    item: 'atum:nebu_drop',
                    weight: 20,
                    count: [1, 4]
                },
                {
                    item: 'minecraft:diamond',
                    weight: 20,
                    count: [1, 4]
                },
                {
                    item: 'minecraft:emerald',
                    weight: 30,
                    count: [1, 8]
                },
                {
                    item: 'minecraft:lapis_lazuli',
                    weight: 30,
                    count: [1, 16]
                },
                {
                    item: 'minecraft:coal',
                    weight: 30,
                    count: [1, 16]
                },
                {
                    item: 'minecraft:redstone',
                    weight: 30,
                    count: [1, 16]
                },
                {
                    item: 'quark:white_crystal',
                    weight: 50,
                    count: [1, 8]
                }
            ]
        }
    ];

    event.modify('atum:pyramid_chest', (table) => {
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
