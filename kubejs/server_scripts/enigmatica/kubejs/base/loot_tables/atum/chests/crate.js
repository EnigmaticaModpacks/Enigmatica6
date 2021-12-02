onEvent('chest.loot_tables', (event) => {
    const pools = [
        {
            rolls: { min: 1, max: 3 },
            entries: [
                {
                    name: 'alexsmobs:centipede_leg',
                    count: [0, 3]
                },
                {
                    name: 'alexsmobs:rattlesnake_rattle',
                    count: [0, 3]
                },
                {
                    name: 'alexsmobs:emu_feather',
                    count: [0, 5]
                },
                {
                    name: 'alexsmobs:maggot',
                    count: [5, 10]
                },
                {
                    name: 'alexsmobs:komodo_spit',
                    count: [0, 3]
                },
                {
                    name: 'alexsmobs:crocodile_scute',
                    count: [0, 3]
                },
                {
                    name: 'atum:wolf_pelt',
                    weight: 2,
                    count: [3, 5]
                },
                {
                    name: 'minecraft:rabbit_hide',
                    weight: 2,
                    count: [6, 12]
                },
                {
                    name: 'minecraft:rabbit_foot',
                    weight: 2,
                    count: [1, 2]
                }
            ]
        },
        {
            rolls: { min: 2, max: 4 },
            entries: [
                {
                    name: 'minecraft:egg',
                    count: [6, 12]
                },
                {
                    name: 'alexsmobs:crocodile_egg',
                    count: [6, 12]
                },
                {
                    name: 'alexsmobs:emu_egg',
                    count: [1, 6]
                },
                {
                    name: 'atum:quail_egg',
                    count: [6, 12]
                },
                {
                    name: 'atum:emmer_bread',
                    count: [1, 6]
                },
                {
                    name: 'simplefarming:jaffa_cake',
                    count: [1, 6]
                },
                {
                    name: 'simplefarming:cheese_block',
                    count: 1
                },
                {
                    name: 'simplefarming:curry_powder',
                    count: [6, 12]
                },
                {
                    name: 'farmersdelight:cooked_bacon',
                    count: [6, 12]
                },
                {
                    name: 'farmersdelight:smoked_ham',
                    count: [1, 2]
                }
            ]
        },
        {
            rolls: { min: 1, max: 2 },
            entries: [
                {
                    name: 'atum:emmer_block',
                    count: [1, 4]
                },
                {
                    name: 'farmersdelight:potato_crate',
                    count: [1, 4]
                },
                {
                    name: 'farmersdelight:carrot_crate',
                    count: [1, 4]
                },
                {
                    name: 'farmersdelight:straw_bale',
                    count: [1, 4]
                },
                {
                    name: 'farmersdelight:onion_crate',
                    count: [1, 4]
                },
                {
                    name: 'farmersdelight:rice_bag',
                    count: [1, 4]
                },
                {
                    name: 'farmersdelight:cabbage_crate',
                    count: [1, 4]
                },
                {
                    name: 'quark:cocoa_beans_sack',
                    count: [1, 4]
                },
                {
                    name: 'farmersdelight:canvas',
                    count: [8, 16]
                },
                {
                    name: 'simplefarming:wine',
                    count: [1, 4]
                },
                {
                    name: 'simplefarming:beer',
                    count: [1, 4]
                },
                {
                    name: 'simplefarming:cauim',
                    count: [1, 4]
                }
            ]
        },
        {
            rolls: { min: 0, max: 4 },
            entries: [
                {
                    name: 'supplementaries:bomb_blue',
                    count: [0, 2]
                },
                {
                    name: 'supplementaries:bomb',
                    count: [0, 4]
                },
                {
                    name: 'atum:linen_bandage',
                    count: [4, 8]
                },
                {
                    name: 'supplementaries:slingshot',
                    count: [0, 1]
                },
                {
                    name: 'quark:gunpowder_sack',
                    count: [0, 8]
                },
                {
                    name: 'emendatusenigmatica:potassium_nitrate_dust',
                    count: [4, 8]
                },
                {
                    name: 'emendatusenigmatica:sulfur_dust',
                    count: [4, 8]
                }
            ]
        },
        {
            rolls: { min: 0, max: 4 },
            entries: [
                {
                    name: 'thermal:gold_coin',
                    count: [0, 16]
                },
                {
                    name: 'thermal:iron_coin',
                    count: [0, 16]
                },
                {
                    name: 'thermal:tin_coin',
                    count: [0, 32]
                },
                {
                    name: 'thermal:copper_coin',
                    count: [0, 32]
                },
                {
                    name: 'thermal:silver_coin',
                    count: [0, 16]
                },
                {
                    name: 'thermal:lead_coin',
                    count: [0, 16]
                },
                {
                    name: 'thermal:nickel_coin',
                    count: [0, 16]
                },
                {
                    name: 'minecraft:diamond',
                    count: [0, 4]
                },
                {
                    name: 'minecraft:emerald',
                    count: [0, 8]
                },
                {
                    name: 'minecraft:lapis_lazuli',
                    count: [0, 16]
                },
                {
                    name: 'quark:white_crystal',
                    count: [0, 8]
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

                    newPool.addItem(entry.item, weight, count);
                });
            });
        });
    });
});
