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
            rolls: { min: 1, max: 3 },
            entries: [
                {
                    name: 'alexsmobs:centipede_leg',
                    weight: 10,
                    count: [1, 2]
                },
                {
                    name: 'alexsmobs:rattlesnake_rattle',
                    weight: 20,
                    count: [1, 3]
                },
                {
                    name: 'alexsmobs:emu_feather',
                    weight: 20,
                    count: [1, 5]
                },
                {
                    name: 'alexsmobs:maggot',
                    weight: 10,
                    count: [5, 10]
                },
                {
                    name: 'alexsmobs:komodo_spit',
                    weight: 20,
                    count: [1, 2]
                },
                {
                    name: 'alexsmobs:crocodile_scute',
                    weight: 10,
                    count: [1, 2]
                },
                {
                    name: 'atum:wolf_pelt',
                    weight: 100,
                    count: [1, 3]
                },
                {
                    name: 'minecraft:rabbit_hide',
                    weight: 100,
                    count: [3, 6]
                },
                {
                    name: 'minecraft:rabbit_foot',
                    weight: 50,
                    count: [1, 2]
                },
                {
                    name: 'minecraft:leather',
                    weight: 10,
                    count: [1, 2]
                },
                {
                    name: 'minecraft:feather',
                    weight: 20,
                    count: [1, 5]
                }
            ]
        },
        {
            rolls: { min: 2, max: 4 },
            entries: [
                {
                    name: 'minecraft:egg',
                    weight: 20,
                    count: [6, 12]
                },
                {
                    name: 'alexsmobs:crocodile_egg',
                    weight: 20,
                    count: [1, 2]
                },
                {
                    name: 'alexsmobs:emu_egg',
                    weight: 20,
                    count: [1, 6]
                },
                {
                    name: 'atum:quail_egg',
                    weight: 50,
                    count: [6, 12]
                },
                {
                    name: 'atum:emmer_bread',
                    weight: 100,
                    count: [1, 6]
                },
                {
                    name: 'simplefarming:jaffa_cake',
                    weight: 100,
                    count: [1, 6]
                },
                {
                    name: 'simplefarming:cheese_block',
                    weight: 100,
                    count: 1
                },
                {
                    name: 'simplefarming:curry_powder',
                    weight: 100,
                    count: [6, 12]
                },
                {
                    name: 'farmersdelight:cooked_bacon',
                    weight: 100,
                    count: [6, 12]
                },
                {
                    name: 'farmersdelight:smoked_ham',
                    weight: 100,
                    count: [1, 2]
                }
            ]
        },
        {
            rolls: { min: 2, max: 3 },
            entries: [
                {
                    name: 'atum:emmer_block',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    name: 'farmersdelight:potato_crate',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    name: 'farmersdelight:carrot_crate',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    name: 'farmersdelight:straw_bale',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    name: 'farmersdelight:onion_crate',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    name: 'farmersdelight:rice_bag',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    name: 'farmersdelight:cabbage_crate',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    name: 'quark:cocoa_beans_sack',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    name: 'farmersdelight:canvas',
                    weight: 100,
                    count: [8, 16]
                },
                {
                    name: 'simplefarming:wine',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    name: 'simplefarming:beer',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    name: 'simplefarming:cauim',
                    weight: 100,
                    count: [1, 4]
                },
                {
                    name: 'atum:date',
                    weight: 100,
                    count: [1, 2]
                },
                {
                    name: 'atum:golden_date',
                    weight: 50,
                    count: 1
                },
                {
                    name: 'atum:golden_date_enchanted',
                    weight: 20,
                    count: 1
                }
            ]
        },
        {
            rolls: { min: 1, max: 2 },
            entries: [
                {
                    name: 'supplementaries:bomb_blue',
                    weight: 20,
                    count: [1, 2]
                },
                {
                    name: 'supplementaries:bomb',
                    weight: 50,
                    count: [1, 4]
                },
                {
                    name: 'atum:linen_bandage',
                    weight: 100,
                    count: [4, 8]
                },
                {
                    name: 'supplementaries:slingshot',
                    weight: 10,
                    count: 1
                },
                {
                    name: 'quark:gunpowder_sack',
                    weight: 100,
                    count: [1, 2]
                },
                {
                    name: 'emendatusenigmatica:potassium_nitrate_dust',
                    weight: 100,
                    count: [4, 8]
                },
                {
                    name: 'emendatusenigmatica:sulfur_dust',
                    weight: 100,
                    count: [4, 8]
                }
            ]
        },
        {
            rolls: { min: 0, max: 4 },
            entries: [
                {
                    name: 'minecraft:gold_nugget',
                    weight: 100,
                    count: [1, 16]
                },
                {
                    name: 'minecraft:iron_nugget',
                    weight: 100,
                    count: [1, 16]
                },
                {
                    name: 'emendatusenigmatica:tin_nugget',
                    weight: 100,
                    count: [1, 32]
                },
                {
                    name: 'emendatusenigmatica:copper_nugget',
                    weight: 100,
                    count: [1, 32]
                },
                {
                    name: 'emendatusenigmatica:silver_nugget',
                    weight: 100,
                    count: [1, 16]
                },
                {
                    name: 'emendatusenigmatica:lead_nugget',
                    weight: 100,
                    count: [1, 16]
                },
                {
                    name: 'emendatusenigmatica:nickel_nugget',
                    weight: 100,
                    count: [1, 16]
                },
                {
                    name: 'emendatusenigmatica:electrum_nugget',
                    weight: 100,
                    count: [1, 16]
                },
                {
                    name: 'emendatusenigmatica:aluminum_nugget',
                    weight: 100,
                    count: [1, 16]
                },
                {
                    name: 'atum:nebu_drop',
                    weight: 20,
                    count: [1, 4]
                },
                {
                    name: 'minecraft:diamond',
                    weight: 20,
                    count: [1, 4]
                },
                {
                    name: 'minecraft:emerald',
                    weight: 30,
                    count: [1, 8]
                },
                {
                    name: 'minecraft:lapis_lazuli',
                    weight: 50,
                    count: [1, 16]
                },
                {
                    name: 'minecraft:coal',
                    weight: 50,
                    count: [1, 16]
                },
                {
                    name: 'minecraft:redstone',
                    weight: 50,
                    count: [1, 16]
                },
                {
                    name: 'quark:white_crystal',
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
                    newPool.addItem(entry.name, entry.weight, entry.count);
                });
            });
        });
    });
});
