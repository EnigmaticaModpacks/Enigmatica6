onEvent('recipes', (event) => {
    const recipes = [
        {
            input: { tag: 'forge:end_stones' },
            output: 'occultism:crushed_end_stone',
            count: 4,
            time: 200,
            ignore_crushing_multiplier: true,
            id: 'occultism:crushing/crushed_end_stone'
        },
        {
            input: { tag: 'forge:obsidian' },
            output: 'emendatusenigmatica:obsidian_dust',
            count: 4,
            time: 400,
            ignore_crushing_multiplier: true,
            id: 'occultism:crushing/obsidian_dust'
        },
        {
            input: { tag: 'forge:grain' },
            output: 'create:wheat_flour',
            count: 1,
            time: 50,
            ignore_crushing_multiplier: false
        },
        {
            input: { item: 'minecraft:sugar_cane' },
            output: 'minecraft:sugar',
            count: 2,
            time: 50,
            ignore_crushing_multiplier: false
        },
        {
            input: { tag: 'forge:ores/netherite' },
            output: 'minecraft:netherite_scrap',
            count: 1,
            time: 400,
            ignore_crushing_multiplier: false
        },
        {
            input: { tag: 'minecraft:logs' },
            output: 'emendatusenigmatica:wood_dust',
            count: 4,
            time: 100,
            ignore_crushing_multiplier: false
        },
        {
            input: { tag: 'forge:cobblestone' },
            output: 'minecraft:gravel',
            count: 1,
            time: 200,
            ignore_crushing_multiplier: true
        },
        {
            input: { tag: 'forge:gravel' },
            output: 'minecraft:sand',
            count: 1,
            time: 200,
            ignore_crushing_multiplier: true
        },
        {
            input: { tag: 'forge:slag' },
            output: 'minecraft:sand',
            count: 1,
            time: 100,
            ignore_crushing_multiplier: true
        },
        {
            input: { tag: 'forge:glass' },
            output: 'minecraft:sand',
            count: 1,
            time: 100,
            ignore_crushing_multiplier: true
        },
        {
            input: { tag: 'forge:sandstone/colorless' },
            output: 'minecraft:sand',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'atmospheric:arid_sandstone' },
            output: 'atmospheric:arid_sand',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'atmospheric:red_arid_sandstone' },
            output: 'atmospheric:red_arid_sand',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'byg:pink_sandstone' },
            output: 'byg:pink_sand',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'byg:black_sandstone' },
            output: 'byg:black_sand',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'byg:white_sandstone' },
            output: 'byg:white_sand',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'byg:blue_sandstone' },
            output: 'byg:blue_sand',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'byg:purple_sandstone' },
            output: 'byg:purple_sand',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: true
        },
        {
            input: { tag: 'forge:sandstone/red' },
            output: 'minecraft:red_sand',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'buildinggadgets:construction_block_dense' },
            output: 'buildinggadgets:construction_paste',
            count: 3,
            time: 100,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'minecraft:glowstone' },
            output: 'minecraft:glowstone_dust',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true
        },
        {
            input: { tag: 'forge:rods/basalz' },
            output: 'thermal:basalz_powder',
            count: 3,
            time: 100,
            ignore_crushing_multiplier: false
        },
        {
            input: { tag: 'forge:rods/blitz' },
            output: 'thermal:blitz_powder',
            count: 3,
            time: 100,
            ignore_crushing_multiplier: false
        },
        {
            input: { tag: 'forge:rods/blizz' },
            output: 'thermal:blizz_powder',
            count: 3,
            time: 100,
            ignore_crushing_multiplier: false
        },
        {
            input: { item: 'minecraft:granite' },
            output: 'minecraft:red_sand',
            count: 1,
            time: 200,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'minecraft:diorite' },
            output: 'create:limesand',
            count: 1,
            time: 200,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'byg:blue_glowcane' },
            output: 'byg:blue_glowcane_dust',
            count: 3,
            time: 50,
            ignore_crushing_multiplier: false
        },
        {
            input: { item: 'byg:pink_glowcane' },
            output: 'byg:pink_glowcane_dust',
            count: 3,
            time: 50,
            ignore_crushing_multiplier: false
        },
        {
            input: { item: 'byg:purple_glowcane_block' },
            output: 'byg:purple_glowcane_dust',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'byg:red_glowcane_block' },
            output: 'byg:red_glowcane_dust',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'byg:blue_glowcane_block' },
            output: 'byg:blue_glowcane_dust',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'byg:pink_glowcane_block' },
            output: 'byg:pink_glowcane_dust',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'byg:purple_glowcane_block' },
            output: 'byg:purple_glowcane_dust',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'byg:red_glowcane_block' },
            output: 'byg:red_glowcane_dust',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'minecraft:clay' },
            output: 'minecraft:clay_ball',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'betterendforge:aurora_crystal' },
            output: 'betterendforge:crystal_shards',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'byg:ether_stone' },
            output: 'byg:cobbled_ether_stone',
            count: 1,
            time: 200,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'byg:dacite' },
            output: 'byg:dacite_cobblestone',
            count: 1,
            time: 200,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'minecraft:nether_wart_block' },
            output: 'minecraft:nether_wart',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'byg:pervaded_netherrack' },
            output: 'minecraft:glowstone_dust',
            count: 2,
            time: 100,
            ignore_crushing_multiplier: false
        },
        {
            input: { tag: 'minecraft:wool' },
            output: 'minecraft:string',
            count: 4,
            time: 50,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'byg:red_rock' },
            output: 'minecraft:red_sand',
            count: 1,
            time: 200,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'minecraft:basalt' },
            output: 'byg:black_sand',
            count: 1,
            time: 200,
            ignore_crushing_multiplier: true
        },
        {
            input: { item: 'minecraft:terracotta' },
            output: 'minecraft:red_sand',
            count: 1,
            time: 200,
            ignore_crushing_multiplier: true
        }
    ];

    recipes.forEach((recipe) => {
        let re = event.custom({
            type: 'occultism:crushing',
            ingredient: recipe.input,
            result: {
                item: recipe.output,
                count: recipe.count
            },
            crushing_time: recipe.time,
            ignore_crushing_multiplier: recipe.ignore_crushing_multiplier
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
