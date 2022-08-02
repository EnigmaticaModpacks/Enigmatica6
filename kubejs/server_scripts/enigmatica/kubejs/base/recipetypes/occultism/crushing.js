onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/occultism/crushing/';
    const recipes = [
        {
            input: '#forge:end_stones',
            output: 'occultism:crushed_end_stone',
            count: 4,
            time: 200,
            ignore_crushing_multiplier: true,
            id: 'occultism:crushing/crushed_end_stone'
        },
        {
            input: '#forge:obsidian',
            output: 'emendatusenigmatica:obsidian_dust',
            count: 4,
            time: 400,
            ignore_crushing_multiplier: true,
            id: 'occultism:crushing/obsidian_dust'
        },
        {
            input: '#forge:grain',
            output: 'create:wheat_flour',
            count: 1,
            time: 50,
            ignore_crushing_multiplier: false,
            id: `${id_prefix}wheat_flour`
        },
        {
            input: 'atum:emmer',
            output: 'atum:emmer_flour',
            count: 1,
            time: 50,
            ignore_crushing_multiplier: false,
            id: `${id_prefix}emmer_flour`
        },
        {
            input: 'minecraft:sugar_cane',
            output: 'minecraft:sugar',
            count: 2,
            time: 50,
            ignore_crushing_multiplier: false,
            id: `${id_prefix}sugar`
        },
        {
            input: '#forge:ores/netherite',
            output: 'minecraft:netherite_scrap',
            count: 1,
            time: 400,
            ignore_crushing_multiplier: false,
            id: `${id_prefix}netherite_scrap`
        },
        {
            input: '#minecraft:logs',
            output: 'emendatusenigmatica:wood_dust',
            count: 4,
            time: 100,
            ignore_crushing_multiplier: false,
            id: `${id_prefix}wood_dust`
        },
        {
            input: '#forge:cobblestone',
            output: 'minecraft:gravel',
            count: 1,
            time: 200,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}gravel`
        },
        {
            input: '#forge:gravel',
            output: 'minecraft:sand',
            count: 1,
            time: 200,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}sand_from_gravel`
        },
        {
            input: '#forge:slag',
            output: 'minecraft:sand',
            count: 1,
            time: 100,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}sand_from_slag`
        },
        {
            input: '#forge:glass',
            output: 'minecraft:sand',
            count: 1,
            time: 100,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}sand_from_glass`
        },
        {
            input: '#forge:sandstone/colorless',
            output: 'minecraft:sand',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}sand_from_sandstone`
        },
        {
            input: 'atmospheric:arid_sandstone',
            output: 'atmospheric:arid_sand',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}arid_sand`
        },
        {
            input: 'atmospheric:red_arid_sandstone',
            output: 'atmospheric:red_arid_sand',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}red_arid_sand`
        },
        {
            input: 'byg:pink_sandstone',
            output: 'byg:pink_sand',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}pink_sand`
        },
        {
            input: 'byg:black_sandstone',
            output: 'byg:black_sand',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}black_sand`
        },
        {
            input: 'byg:white_sandstone',
            output: 'byg:white_sand',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}white_sand`
        },
        {
            input: 'byg:blue_sandstone',
            output: 'byg:blue_sand',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}blue_sand`
        },
        {
            input: 'byg:purple_sandstone',
            output: 'byg:purple_sand',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}purple_sand`
        },
        {
            input: '#forge:sandstone/red',
            output: 'minecraft:red_sand',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}red_sand_from_red_sandstone`
        },
        {
            input: 'buildinggadgets:construction_block_dense',
            output: 'buildinggadgets:construction_paste',
            count: 3,
            time: 100,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}construction_paste`
        },
        {
            input: 'minecraft:glowstone',
            output: 'minecraft:glowstone_dust',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}glowstone_dust_from_glowstone`
        },
        {
            input: '#forge:rods/basalz',
            output: 'thermal:basalz_powder',
            count: 3,
            time: 100,
            ignore_crushing_multiplier: false,
            id: `${id_prefix}basalz_powder`
        },
        {
            input: '#forge:rods/blitz',
            output: 'thermal:blitz_powder',
            count: 3,
            time: 100,
            ignore_crushing_multiplier: false,
            id: `${id_prefix}blitz_powder`
        },
        {
            input: '#forge:rods/blizz',
            output: 'thermal:blizz_powder',
            count: 3,
            time: 100,
            ignore_crushing_multiplier: false,
            id: `${id_prefix}blizz_powder`
        },
        {
            input: 'minecraft:granite',
            output: 'minecraft:red_sand',
            count: 1,
            time: 200,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}red_sand_from_granite`
        },
        {
            input: 'minecraft:diorite',
            output: 'create:limesand',
            count: 1,
            time: 200,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}limesand`
        },
        {
            input: 'byg:blue_glowcane',
            output: 'byg:blue_glowcane_dust',
            count: 3,
            time: 50,
            ignore_crushing_multiplier: false,
            id: `${id_prefix}blue_glowcane_dust_from_blue_glowcane`
        },
        {
            input: 'byg:blue_glowcane_block',
            output: 'byg:blue_glowcane_dust',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}blue_glowcane_dust_from_blue_glowcane_block`
        },
        {
            input: 'byg:pink_glowcane',
            output: 'byg:pink_glowcane_dust',
            count: 3,
            time: 50,
            ignore_crushing_multiplier: false,
            id: `${id_prefix}pink_glowcane_dust_from_pink_glowcane`
        },
        {
            input: 'byg:pink_glowcane_block',
            output: 'byg:pink_glowcane_dust',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}pink_glowcane_dust_from_pink_glowcane_block`
        },
        {
            input: 'byg:purple_glowcane_block',
            output: 'byg:purple_glowcane_dust',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}purple_glowcane_dust_from_purple_glowcane_block`
        },
        {
            input: 'byg:purple_glowcane',
            output: 'byg:purple_glowcane_dust',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}purple_glowcane_dust_from_purple_glowcane`
        },
        {
            input: 'byg:red_glowcane_block',
            output: 'byg:red_glowcane_dust',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}red_glowcane_dust_from_red_glowcane_block`
        },
        {
            input: 'byg:red_glowcane',
            output: 'byg:red_glowcane_dust',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}red_glowcane_dust_from_red_glowcane`
        },
        {
            input: 'minecraft:clay',
            output: 'minecraft:clay_ball',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}clay_ball`
        },
        {
            input: 'betterendforge:aurora_crystal',
            output: 'betterendforge:crystal_shards',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}crystal_shards`
        },
        {
            input: 'byg:ether_stone',
            output: 'byg:cobbled_ether_stone',
            count: 1,
            time: 200,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}cobbled_ether_stone`
        },
        {
            input: 'byg:dacite',
            output: 'byg:dacite_cobblestone',
            count: 1,
            time: 200,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}dacite_cobblestone`
        },
        {
            input: 'minecraft:nether_wart_block',
            output: 'minecraft:nether_wart',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}nether_wart`
        },
        {
            input: 'byg:pervaded_netherrack',
            output: 'minecraft:glowstone_dust',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: false,
            id: `${id_prefix}glowstone_dust_from_pervaded_netherrack`
        },
        {
            input: '#minecraft:wool',
            output: 'minecraft:string',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}string`
        },
        {
            input: 'byg:red_rock',
            output: 'minecraft:red_sand',
            count: 1,
            time: 200,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}red_sand_from_red_rock`
        },
        {
            input: 'minecraft:terracotta',
            output: 'minecraft:red_sand',
            count: 1,
            time: 200,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}red_sand_from_terracotta`
        },
        {
            input: '#forge:coal_petcoke',
            output: 'immersivepetroleum:petcoke_dust',
            count: 1,
            time: 200,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}petcoke_dust`
        },
        {
            input: '#forge:storage_blocks/coal_petcoke',
            output: 'immersivepetroleum:petcoke_dust',
            count: 9,
            time: 1600,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}petcoke_dust_from_block`
        },
        {
            input: '#forge:storage_blocks/coal_coke',
            output: 'emendatusenigmatica:coke_dust',
            count: 9,
            time: 1600,
            ignore_crushing_multiplier: true,
            id: `${id_prefix}coke_dust_from_block`
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'occultism:crushing',
                ingredient: Ingredient.of(recipe.input),
                result: {
                    item: recipe.output,
                    count: recipe.count
                },
                crushing_time: recipe.time,
                ignore_crushing_multiplier: recipe.ignore_crushing_multiplier
            })
            .id(recipe.id);
    });
});
