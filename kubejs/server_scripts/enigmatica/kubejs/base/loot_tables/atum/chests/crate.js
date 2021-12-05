onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        pools: [
            {
                rolls: { min: 2, max: 6 },
                entries: [
                    {
                        type: 'item',
                        name: 'minecraft:saddle',
                        weight: 10
                    },
                    {
                        type: 'item',
                        functions: [
                            {
                                function: 'minecraft:exploration_map',
                                destination: 'atum:pyramid',
                                decoration: 'red_x',
                                zoom: 1,
                                skip_existing_chunks: false
                            }
                        ],
                        name: 'minecraft:map',
                        weight: 15
                    },
                    {
                        type: 'item',
                        name: 'minecraft:string',
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
                        functions: [{ function: 'set_count', count: { min: 3, max: 6 } }],
                        weight: 40
                    },
                    {
                        type: 'item',
                        name: 'atum:dusty_bone',
                        functions: [{ function: 'set_count', count: { min: 1, max: 3 } }],
                        weight: 100
                    },
                    {
                        type: 'loot_table',
                        name: 'atum:chests/subloot/iron_weapons_0',
                        weight: 25,
                        quality: 2
                    },
                    {
                        type: 'loot_table',
                        name: 'atum:chests/subloot/iron_weapons_25',
                        weight: 10,
                        quality: 2
                    },
                    {
                        type: 'loot_table',
                        name: 'atum:chests/subloot/iron_armor_0',
                        weight: 25,
                        quality: 2
                    },
                    {
                        type: 'loot_table',
                        name: 'atum:chests/subloot/iron_armor_25',
                        weight: 10,
                        quality: 2
                    },
                    {
                        type: 'item',
                        name: 'atum:nebu_torch',
                        functions: [{ function: 'set_count', count: { min: 1, max: 1 } }],
                        weight: 20
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
                        weight: 20
                    },
                    {
                        type: 'item',
                        name: 'atum:relic_dirty_necklace',
                        weight: 15
                    },
                    {
                        type: 'item',
                        name: 'atum:relic_dirty_brooch',
                        weight: 10
                    },
                    {
                        type: 'item',
                        name: 'atum:relic_dirty_bracelet',
                        weight: 5
                    },
                    {
                        type: 'item',
                        name: 'atum:relic_dirty_idol',
                        weight: 1
                    },
                    {
                        type: 'item',
                        name: 'minecraft:name_tag',
                        weight: 10
                    },
                    {
                        type: 'item',
                        name: 'atum:desert_wolf_iron_armor',
                        weight: 5
                    },
                    {
                        type: 'item',
                        name: 'atum:desert_wolf_gold_armor',
                        weight: 2
                    },
                    {
                        type: 'item',
                        name: 'atum:desert_wolf_diamond_armor',
                        weight: 1
                    },
                    {
                        type: 'item',
                        name: 'atum:camel_iron_armor',
                        weight: 5
                    },
                    {
                        type: 'item',
                        name: 'atum:camel_gold_armor',
                        weight: 2
                    },
                    {
                        type: 'item',
                        name: 'atum:camel_diamond_armor',
                        weight: 1
                    },
                    {
                        type: 'item',
                        name: 'minecraft:book',
                        functions: [{ function: 'enchant_randomly' }],
                        weight: 5
                    }
                ]
            },
            {
                name: 'atum:ruins_sand',
                rolls: 1,
                entries: [
                    {
                        type: 'item',
                        name: 'atum:sand',
                        functions: [{ function: 'set_count', count: { min: 2, max: 9 } }],
                        weight: 1
                    }
                ]
            },
            {
                name: 'atum:ruins_artifact',
                rolls: { min: 0, max: 1 },
                entries: [
                    {
                        type: 'loot_table',
                        name: 'atum:gods/all',
                        weight: 1,
                        quality: 2
                    },
                    { type: 'empty', weight: 175 }
                ]
            }
        ]
    };
    event.addJson(`atum:loot_tables/chests/crate.json`, loot_table);
});

onEvent('chest.loot_tables', (event) => {
    const pools = [
        {
            rolls: { min: 0, max: 2 },
            entries: [
                {
                    item: 'alexsmobs:centipede_leg',
                    weight: 10,
                    count: [1, 2]
                },
                {
                    item: 'alexsmobs:rattlesnake_rattle',
                    weight: 20,
                    count: [1, 3]
                },
                {
                    item: 'alexsmobs:emu_feather',
                    weight: 20,
                    count: [1, 5]
                },
                {
                    item: 'alexsmobs:maggot',
                    weight: 10,
                    count: [5, 10]
                },
                {
                    item: 'alexsmobs:komodo_spit',
                    weight: 20,
                    count: [1, 2]
                },
                {
                    item: 'alexsmobs:crocodile_scute',
                    weight: 10,
                    count: [1, 2]
                },
                {
                    item: 'atum:wolf_pelt',
                    weight: 100,
                    count: [1, 3]
                },
                {
                    item: 'minecraft:rabbit_hide',
                    weight: 100,
                    count: [3, 6]
                },
                {
                    item: 'minecraft:rabbit_foot',
                    weight: 50,
                    count: [1, 2]
                },
                {
                    item: 'minecraft:leather',
                    weight: 10,
                    count: [1, 2]
                },
                {
                    item: 'minecraft:feather',
                    weight: 20,
                    count: [1, 5]
                }
            ]
        },
        {
            rolls: { min: 0, max: 2 },
            entries: [
                {
                    item: 'minecraft:egg',
                    weight: 20,
                    count: [6, 12]
                },
                {
                    item: 'alexsmobs:crocodile_egg',
                    weight: 20,
                    count: [1, 2]
                },
                {
                    item: 'alexsmobs:emu_egg',
                    weight: 20,
                    count: [1, 6]
                },
                {
                    item: 'atum:quail_egg',
                    weight: 50,
                    count: [6, 12]
                },
                {
                    item: 'atum:emmer_bread',
                    weight: 100,
                    count: [1, 6]
                },
                {
                    item: 'simplefarming:jaffa_cake',
                    weight: 100,
                    count: [1, 6]
                },
                {
                    item: 'simplefarming:cheese_block',
                    weight: 100,
                    count: 1
                },
                {
                    item: 'simplefarming:curry_powder',
                    weight: 100,
                    count: [6, 12]
                },
                {
                    item: 'farmersdelight:cooked_bacon',
                    weight: 100,
                    count: [6, 12]
                },
                {
                    item: 'farmersdelight:smoked_ham',
                    weight: 100,
                    count: [1, 2]
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
            rolls: { min: 0, max: 3 },
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
                    item: 'farmersdelight:canvas',
                    weight: 100,
                    count: [8, 16]
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
                }
            ]
        },
        {
            rolls: { min: 0, max: 2 },
            entries: [
                {
                    item: 'supplementaries:bomb_blue',
                    weight: 20,
                    count: [1, 2]
                },
                {
                    item: 'supplementaries:bomb',
                    weight: 50,
                    count: [1, 4]
                },
                {
                    item: 'atum:linen_bandage',
                    weight: 100,
                    count: [4, 8]
                },
                {
                    item: 'supplementaries:slingshot',
                    weight: 10,
                    count: 1
                },
                {
                    item: 'quark:gunpowder_sack',
                    weight: 100,
                    count: [1, 2]
                },
                {
                    item: 'emendatusenigmatica:potassium_nitrate_dust',
                    weight: 100,
                    count: [4, 8]
                },
                {
                    item: 'emendatusenigmatica:sulfur_dust',
                    weight: 100,
                    count: [4, 8]
                }
            ]
        },
        {
            rolls: { min: 0, max: 1 },
            entries: [
                {
                    item: 'minecraft:gold_nugget',
                    weight: 100,
                    count: [1, 16]
                },
                {
                    item: 'minecraft:iron_nugget',
                    weight: 100,
                    count: [1, 16]
                },
                {
                    item: 'emendatusenigmatica:tin_nugget',
                    weight: 100,
                    count: [1, 32]
                },
                {
                    item: 'emendatusenigmatica:copper_nugget',
                    weight: 100,
                    count: [1, 32]
                },
                {
                    item: 'emendatusenigmatica:silver_nugget',
                    weight: 100,
                    count: [1, 16]
                },
                {
                    item: 'emendatusenigmatica:lead_nugget',
                    weight: 100,
                    count: [1, 16]
                },
                {
                    item: 'emendatusenigmatica:nickel_nugget',
                    weight: 100,
                    count: [1, 16]
                },
                {
                    item: 'emendatusenigmatica:electrum_nugget',
                    weight: 100,
                    count: [1, 16]
                },
                {
                    item: 'emendatusenigmatica:aluminum_nugget',
                    weight: 100,
                    count: [1, 16]
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
                    weight: 50,
                    count: [1, 16]
                },
                {
                    item: 'minecraft:coal',
                    weight: 50,
                    count: [1, 16]
                },
                {
                    item: 'minecraft:redstone',
                    weight: 50,
                    count: [1, 16]
                },
                {
                    item: 'quark:white_crystal',
                    weight: 30,
                    count: [1, 8]
                }
            ]
        }
    ];

    event.modify('atum:crate', (table) => {
        pools.forEach((pool) => {
            table.addPool((newPool) => {
                newPool.setUniformRolls(pool.rolls.min, pool.rolls.max);
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
