onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/ars_nouveau/crush/';
    const recipes = [
        {
            input: 'minecraft:prismarine_bricks',
            outputs: [
                Item.of('minecraft:prismarine_shard', 6).withChance(1.0),
                Item.of('minecraft:prismarine_shard', 3).withChance(0.75)
            ],

            id: `${id_prefix}prismarine_shard_from_bricks`
        },
        {
            input: 'minecraft:prismarine',
            outputs: [
                Item.of('minecraft:prismarine_shard', 3).withChance(1.0),
                Item.of('minecraft:prismarine_shard').withChance(0.75)
            ],

            id: `${id_prefix}prismarine_shard`
        },
        {
            input: '#forge:obsidian',
            outputs: [
                Item.of('emendatusenigmatica:obsidian_dust').withChance(1.0),
                Item.of('minecraft:obsidian').withChance(0.75)
            ],

            id: `${id_prefix}obsidian_dust`
        },
        {
            input: '#forge:grain',
            outputs: [Item.of('create:wheat_flour').withChance(1.0), Item.of('create:wheat_flour', 2).withChance(0.25)],
            id: `${id_prefix}wheat_flour`
        },
        {
            input: 'atum:emmer',
            outputs: [Item.of('atum:emmer_flour').withChance(1.0), Item.of('atum:emmer_flour', 2).withChance(0.25)],
            id: `${id_prefix}wheat_flour`
        },
        {
            input: '#forge:ores/netherite',
            outputs: [
                Item.of('minecraft:netherite_scrap').withChance(1.0),
                Item.of('minecraft:ancient_debris').withChance(0.66)
            ],

            id: `${id_prefix}netherite_scrap`
        },
        {
            input: '#minecraft:logs',
            outputs: [Item.of('emendatusenigmatica:wood_dust', 4).withChance(1.0)],
            id: `${id_prefix}wood_dust`
        },
        {
            input: '#forge:glass',
            outputs: [Item.of('minecraft:sand').withChance(1.0)],
            id: `${id_prefix}sand_from_glass`
        },
        {
            input: '#forge:sandstone/colorless',
            outputs: [Item.of('minecraft:sand', 2).withChance(1.0)],
            id: `${id_prefix}sand_from_sandstone`
        },
        {
            input: 'atmospheric:arid_sandstone',
            outputs: [Item.of('atmospheric:arid_sand', 2).withChance(1.0)],
            id: `${id_prefix}arid_sand`
        },
        {
            input: 'atmospheric:red_arid_sandstone',
            outputs: [Item.of('atmospheric:red_arid_sand', 2).withChance(1.0)],
            id: `${id_prefix}red_arid_sand`
        },
        {
            input: 'byg:pink_sandstone',
            outputs: [Item.of('byg:pink_sand', 2).withChance(1.0)],
            id: `${id_prefix}pink_sand`
        },
        {
            input: 'byg:black_sandstone',
            outputs: [Item.of('byg:black_sand', 2).withChance(1.0)],
            id: `${id_prefix}black_sand`
        },
        {
            input: 'byg:white_sandstone',
            outputs: [Item.of('byg:white_sand', 2).withChance(1.0)],
            id: `${id_prefix}white_sand`
        },
        {
            input: 'byg:blue_sandstone',
            outputs: [Item.of('byg:blue_sand', 2).withChance(1.0)],
            id: `${id_prefix}blue_sand`
        },
        {
            input: 'byg:purple_sandstone',
            outputs: [Item.of('byg:purple_sand', 2).withChance(1.0)],
            id: `${id_prefix}purple_sand`
        },
        {
            input: '#forge:sandstone/red',
            outputs: [Item.of('minecraft:red_sand', 2).withChance(1.0)],
            id: `${id_prefix}red_sand_from_red_sandstone`
        },
        {
            input: 'buildinggadgets:construction_block_dense',
            outputs: [Item.of('buildinggadgets:construction_paste', 3).withChance(1.0)],
            id: `${id_prefix}construction_paste`
        },
        {
            input: 'minecraft:glowstone',
            outputs: [
                Item.of('minecraft:glowstone_dust', 3).withChance(1.0),
                Item.of('minecraft:glowstone_dust').withChance(0.75)
            ],
            id: `${id_prefix}glowstone_dust_from_glowstone`
        },
        {
            input: '#forge:rods/basalz',
            outputs: [Item.of('thermal:basalz_powder').withChance(1.0), Item.of('thermal:basalz_rod').withChance(0.8)],

            id: `${id_prefix}basalz_powder`
        },
        {
            input: '#forge:rods/blitz',
            outputs: [Item.of('thermal:blitz_powder').withChance(1.0), Item.of('thermal:blitz_rod').withChance(0.8)],

            id: `${id_prefix}blitz_powder`
        },
        {
            input: '#forge:rods/blizz',
            outputs: [Item.of('thermal:blizz_powder').withChance(1.0), Item.of('thermal:blizz_rod').withChance(0.8)],

            id: `${id_prefix}blizz_powder`
        },
        {
            input: '#forge:rods/blaze',
            outputs: [
                Item.of('minecraft:blaze_powder').withChance(1.0),
                Item.of('minecraft:blaze_rod').withChance(0.8)
            ],

            id: `${id_prefix}blaze_powder`
        },
        {
            input: 'minecraft:granite',
            outputs: [Item.of('minecraft:red_sand').withChance(1.0)],
            id: `${id_prefix}red_sand_from_granite`
        },
        {
            input: 'minecraft:diorite',
            outputs: [Item.of('create:limesand').withChance(1.0)],
            id: `${id_prefix}limesand`
        },
        {
            input: 'byg:blue_glowcane',
            outputs: [
                Item.of('byg:blue_glowcane_dust', 2).withChance(1.0),
                Item.of('byg:blue_glowcane_dust').withChance(0.5)
            ],
            id: `${id_prefix}blue_glowcane_dust_from_blue_glowcane`
        },
        {
            input: 'byg:blue_glowcane_block',
            outputs: [
                Item.of('byg:blue_glowcane_dust', 3).withChance(1.0),
                Item.of('byg:blue_glowcane_dust').withChance(0.5)
            ],
            id: `${id_prefix}blue_glowcane_dust_from_blue_glowcane_block`
        },
        {
            input: 'byg:pink_glowcane',
            outputs: [
                Item.of('byg:pink_glowcane_dust', 2).withChance(1.0),
                Item.of('byg:pink_glowcane_dust').withChance(0.5)
            ],
            id: `${id_prefix}pink_glowcane_dust_from_pink_glowcane`
        },
        {
            input: 'byg:pink_glowcane_block',
            outputs: [
                Item.of('byg:pink_glowcane_dust', 3).withChance(1.0),
                Item.of('byg:pink_glowcane_dust').withChance(0.5)
            ],
            id: `${id_prefix}pink_glowcane_dust_from_pink_glowcane_block`
        },
        {
            input: 'byg:purple_glowcane',
            outputs: [
                Item.of('byg:purple_glowcane_dust', 2).withChance(1.0),
                Item.of('byg:purple_glowcane_dust').withChance(0.5)
            ],
            id: `${id_prefix}purple_glowcane_dust_from_purple_glowcane`
        },
        {
            input: 'byg:purple_glowcane_block',
            outputs: [
                Item.of('byg:purple_glowcane_dust', 3).withChance(1.0),
                Item.of('byg:purple_glowcane_dust').withChance(0.5)
            ],
            id: `${id_prefix}purple_glowcane_dust_from_purple_glowcane_block`
        },
        {
            input: 'byg:red_glowcane',
            outputs: [
                Item.of('byg:red_glowcane_dust', 2).withChance(1.0),
                Item.of('byg:red_glowcane_dust').withChance(0.5)
            ],
            id: `${id_prefix}red_glowcane_dust_from_red_glowcane`
        },
        {
            input: 'byg:red_glowcane_block',
            outputs: [
                Item.of('byg:red_glowcane_dust', 3).withChance(1.0),
                Item.of('byg:red_glowcane_dust').withChance(0.5)
            ],
            id: `${id_prefix}red_glowcane_dust_from_red_glowcane_block`
        },
        {
            input: 'minecraft:clay',
            outputs: [Item.of('minecraft:clay_ball').withChance(1.0), Item.of('minecraft:clay').withChance(0.75)],
            id: `${id_prefix}clay_ball`
        },
        {
            input: 'betterendforge:aurora_crystal',
            outputs: [
                Item.of('betterendforge:crystal_shards').withChance(1.0),
                Item.of('betterendforge:aurora_crystal').withChance(0.75)
            ],
            id: `${id_prefix}crystal_shards`
        },
        {
            input: 'byg:ether_stone',
            outputs: [Item.of('byg:cobbled_ether_stone').withChance(1.0)],
            id: `${id_prefix}cobbled_ether_stone`
        },
        {
            input: 'byg:dacite',
            outputs: [Item.of('byg:dacite_cobblestone').withChance(1.0)],
            id: `${id_prefix}dacite_cobblestone`
        },
        {
            input: 'minecraft:nether_wart_block',
            outputs: [Item.of('minecraft:nether_wart', 4).withChance(1.0)],
            id: `${id_prefix}nether_wart`
        },
        {
            input: 'byg:pervaded_netherrack',
            outputs: [
                Item.of('minecraft:glowstone_dust', 2).withChance(1.0),
                Item.of('minecraft:glowstone_dust', 1).withChance(0.5)
            ],
            id: `${id_prefix}glowstone_dust_from_pervaded_netherrack`
        },
        {
            input: '#minecraft:wool',
            outputs: [Item.of('minecraft:string').withChance(1.0), Item.of('#minecraft:wool').withChance(0.75)],
            id: `${id_prefix}string`
        },
        {
            input: 'byg:red_rock',
            outputs: [Item.of('minecraft:red_sand').withChance(1.0)],
            id: `${id_prefix}red_sand_from_red_rock`
        },
        {
            input: 'minecraft:terracotta',
            outputs: [Item.of('minecraft:red_sand').withChance(1.0)],
            id: `${id_prefix}red_sand_from_terracotta`
        },
        {
            input: '#forge:coal_petcoke',
            outputs: [Item.of('immersivepetroleum:petcoke_dust').withChance(1.0)],
            id: `${id_prefix}petcoke_dust`
        },
        {
            input: '#forge:storage_blocks/coal_petcoke',
            outputs: [Item.of('immersivepetroleum:petcoke_dust', 9).withChance(1.0)],
            id: `${id_prefix}petcoke_dust_from_block`
        },
        {
            input: '#forge:gems/coal_coke',
            outputs: [Item.of('emendatusenigmatica:coke_dust').withChance(1.0)],
            id: `${id_prefix}coke_dust`
        },
        {
            input: '#forge:storage_blocks/coal_coke',
            outputs: [Item.of('emendatusenigmatica:coke_dust', 9).withChance(1.0)],
            id: `${id_prefix}coke_dust_from_block`
        },
        {
            input: '#forge:end_stones',
            outputs: [Item.of('occultism:crushed_end_stone', 4).withChance(1.0)],
            id: `${id_prefix}crushed_end_stone`
        },
        {
            input: 'byg:quartzite_sand',
            outputs: [Item.of('minecraft:quartz').withChance(1.0)],
            id: `${id_prefix}quartz_from_quartzite_sand`
        },
        {
            input: 'byg:raw_quartz_block',
            outputs: [Item.of('byg:quartzite_sand', 2).withChance(1.0), Item.of('byg:quartzite_sand').withChance(0.5)],
            id: `${id_prefix}quartz_from_quartzite_sand`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:crush';
        recipe.input = Ingredient.of(recipe.input).toJson();
        recipe.output = recipe.outputs;

        event.custom(recipe).id(recipe.id);
    });
});
