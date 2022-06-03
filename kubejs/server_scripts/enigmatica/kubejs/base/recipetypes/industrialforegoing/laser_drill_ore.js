onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/industrialforegoing/laser_drill_ore/';

    const endBiomes = {
        type: 'minecraft:worldgen/biome',
        values: end_biomes
    };

    const netherBiomes = {
        type: 'minecraft:worldgen/biome',
        values: nether_biomes
    };

    const netherAndEndBiomes = {
        type: 'minecraft:worldgen/biome',
        values: end_biomes.concat(nether_biomes)
    };

    const undergardenBiomes = {
        type: 'undergarden:worldgen/biome',
        values: undergarden_biomes
    };

    const recipes = [
        {
            output: { tag: 'forge:chunks/potassium_nitrate' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 32,
                    weight: 6
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.light_gray },
            id: `${id_prefix}potassium_nitrate`
        },
        {
            output: { tag: 'forge:chunks/mana' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 32,
                    weight: 6
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.magenta },
            id: `${id_prefix}mana`
        },
        {
            output: { tag: 'forge:chunks/bitumen' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 10,
                    depth_max: 40,
                    weight: 5
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.black },
            id: `${id_prefix}bitumen`
        },
        {
            output: { tag: 'forge:chunks/fluorite' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 16,
                    weight: 4
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.gray },
            id: `${id_prefix}fluorite`
        },
        {
            output: { item: 'emendatusenigmatica:dimensional_chunk' },
            rarity: [
                {
                    whitelist: endBiomes,
                    blacklist: {},
                    depth_min: 30,
                    depth_max: 60,
                    weight: 12
                },
                {
                    whitelist: netherBiomes,
                    blacklist: {},
                    depth_min: 7,
                    depth_max: 117,
                    weight: 12
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.white },
            id: `${id_prefix}dimensional_chunk`
        },
        {
            output: { tag: 'forge:chunks/aluminum' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 68,
                    depth_max: 84,
                    weight: 5
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.white },
            id: `${id_prefix}aluminum`
        },
        {
            output: { tag: 'forge:chunks/coal' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 132,
                    weight: 10
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 4
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.black },
            id: `${id_prefix}coal`
        },
        {
            output: { tag: 'forge:chunks/copper' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 35,
                    depth_max: 65,
                    weight: 10
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 2
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.orange },
            id: `${id_prefix}copper`
        },
        {
            output: { tag: 'forge:chunks/diamond' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 16,
                    weight: 4
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.light_blue },
            id: `${id_prefix}diamond`
        },
        {
            output: { tag: 'forge:chunks/cinnabar' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 30,
                    depth_max: 70,
                    weight: 2
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.pink },
            id: `${id_prefix}cinnabar`
        },
        {
            output: { tag: 'forge:chunks/lapis' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 13,
                    depth_max: 34,
                    weight: 14
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 2
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.blue },
            id: `${id_prefix}lapis`
        },
        {
            output: { tag: 'forge:chunks/lead' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 10,
                    depth_max: 40,
                    weight: 6
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.purple },
            id: `${id_prefix}lead`
        },
        {
            output: { tag: 'forge:chunks/zinc' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 10,
                    depth_max: 40,
                    weight: 4
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.brown },
            id: `${id_prefix}zinc`
        },
        {
            output: { tag: 'forge:chunks/apatite' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 40,
                    depth_max: 80,
                    weight: 16
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 2
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.cyan },
            id: `${id_prefix}apatite`
        },
        {
            output: { tag: 'forge:chunks/nickel' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 68,
                    weight: 4
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.brown },
            id: `${id_prefix}nickel`
        },
        {
            output: { tag: 'forge:chunks/quartz' },
            rarity: [
                {
                    whitelist: netherBiomes,
                    blacklist: {},
                    depth_min: 7,
                    depth_max: 117,
                    weight: 12
                },
                {
                    whitelist: netherBiomes,
                    blacklist: {},
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.white },
            id: `${id_prefix}quartz`
        },
        {
            output: { tag: 'forge:chunks/cobalt' },
            rarity: [
                {
                    whitelist: netherBiomes,
                    blacklist: {},
                    depth_min: 20,
                    depth_max: 53,
                    weight: 3
                },
                {
                    whitelist: netherBiomes,
                    blacklist: {},
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.blue },
            id: `${id_prefix}cobalt`
        },
        {
            output: { tag: 'forge:chunks/redstone' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 16,
                    weight: 28
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 4
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.red },
            id: `${id_prefix}redstone`
        },
        {
            output: { tag: 'forge:chunks/silver' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 10,
                    depth_max: 40,
                    weight: 5
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.light_gray },
            id: `${id_prefix}silver`
        },
        {
            output: { tag: 'forge:chunks/sulfur' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 10,
                    weight: 6
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.yellow },
            id: `${id_prefix}sulfur`
        },
        {
            output: { tag: 'forge:chunks/tin' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 64,
                    depth_max: 96,
                    weight: 8
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 2
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.gray },
            id: `${id_prefix}tin`
        },
        {
            output: { tag: 'forge:chunks/uranium' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 29,
                    weight: 5
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.lime },
            id: `${id_prefix}uranium`
        },
        {
            output: { tag: 'forge:chunks/emerald' },
            rarity: [
                {
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: [
                            'minecraft:mountains',
                            'minecraft:mountain_edge',
                            'minecraft:gravelly_mountains',
                            'minecraft:modified_gravelly_mountains',
                            'minecraft:snowy_mountains',
                            'minecraft:snowy_taiga_mountains'
                        ]
                    },
                    blacklist: {},
                    depth_min: 5,
                    depth_max: 29,
                    weight: 8
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.green },
            id: `${id_prefix}emerald`
        },
        {
            output: { item: 'minecraft:glowstone' },
            rarity: [
                {
                    whitelist: netherBiomes,
                    blacklist: {},
                    depth_min: 7,
                    depth_max: 117,
                    weight: 8
                },
                {
                    whitelist: netherBiomes,
                    blacklist: {},
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.yellow },
            id: `${id_prefix}glowstone`
        },
        {
            output: { tag: 'forge:chunks/gold' },
            rarity: [
                {
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: [
                            'minecraft:badlands',
                            'minecraft:badlands_plateau',
                            'minecraft:eroded_badlands',
                            'minecraft:modified_badlands_plateau',
                            'minecraft:modified_wooded_badlands_plateau',
                            'minecraft:wooded_badlands_plateau'
                        ]
                    },
                    blacklist: {},
                    depth_min: 32,
                    depth_max: 80,
                    weight: 16
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 32,
                    weight: 6
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.yellow },
            id: `${id_prefix}gold`
        },
        {
            output: { tag: 'forge:chunks/iron' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 68,
                    weight: 20
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 3
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.gray },
            id: `${id_prefix}iron`
        },
        {
            output: { tag: 'forge:chunks/osmium' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 36,
                    weight: 8
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 2
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.light_gray },
            id: `${id_prefix}osmium`
        },
        {
            output: { item: 'minecraft:ancient_debris' },
            rarity: [
                {
                    whitelist: netherBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 20,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.brown },
            id: `${id_prefix}ancient_debris`
        },
        {
            output: { item: 'undergarden:cloggrum_ore' },
            rarity: [
                {
                    whitelist: undergardenBiomes,
                    blacklist: {},
                    depth_min: 5,
                    depth_max: 200,
                    weight: 20
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.brown },
            id: `${id_prefix}cloggrum_ore`
        },
        {
            output: { item: 'undergarden:froststeel_ore' },
            rarity: [
                {
                    whitelist: undergardenBiomes,
                    blacklist: {},
                    depth_min: 50,
                    depth_max: 100,
                    weight: 20
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.cyan },
            id: `${id_prefix}froststeel_ore`
        },
        {
            output: { item: 'undergarden:utherium_ore' },
            rarity: [
                {
                    whitelist: undergardenBiomes,
                    blacklist: {},
                    depth_min: 5,
                    depth_max: 50,
                    weight: 20
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.orange },
            id: `${id_prefix}utherium_ore`
        },
        {
            output: { item: 'undergarden:regalium_ore' },
            rarity: [
                {
                    whitelist: undergardenBiomes,
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 10,
                    weight: 2
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.yellow },
            id: `${id_prefix}regalium_ore`
        },
        {
            output: { tag: 'forge:ores/aquamarine' },
            rarity: [
                {
                    whitelist: {},
                    blacklist: netherAndEndBiomes,
                    depth_min: 60,
                    depth_max: 70,
                    weight: 8
                },
                {
                    whitelist: {},
                    blacklist: netherAndEndBiomes,
                    depth_min: 10,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.light_blue },
            id: `${id_prefix}aquamarine`
        },
        {
            output: { item: 'betterendforge:thallasium_ore' },
            rarity: [
                {
                    whitelist: endBiomes,
                    blacklist: {},
                    depth_min: 30,
                    depth_max: 60,
                    weight: 36
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.cyan },
            id: `${id_prefix}thallasium_ore`
        },
        {
            output: { item: 'betterendforge:ender_ore' },
            rarity: [
                {
                    whitelist: endBiomes,
                    blacklist: {},
                    depth_min: 30,
                    depth_max: 60,
                    weight: 50
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.green },
            id: `${id_prefix}ender_ore`
        },
        {
            output: { item: 'betterendforge:amber_ore' },
            rarity: [
                {
                    whitelist: endBiomes,
                    blacklist: {},
                    depth_min: 30,
                    depth_max: 60,
                    weight: 50
                },

                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: { item: industrialforegoing.laser_lens.yellow },
            id: `${id_prefix}amber_ore`
        }
    ];
    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'industrialforegoing:laser_drill_ore',
                output: recipe.output,
                rarity: recipe.rarity,
                pointer: 0,
                catalyst: recipe.catalyst
            })
            .id(recipe.id);
    });
});
