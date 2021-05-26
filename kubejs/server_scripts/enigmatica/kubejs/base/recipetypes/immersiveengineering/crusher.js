events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'thermal:blizz_rod',
                output: Item.of('thermal:blizz_powder', 4),
                secondary: [Item.of('minecraft:snowball').chance(0.5)],
                id: 'immersiveengineering:crusher/blizz_rod'
            },
            {
                input: 'thermal:blitz_rod',
                output: Item.of('thermal:blitz_powder', 4),
                secondary: [Item.of('emendatusenigmatica:potassium_nitrate_gem').chance(0.5)],
                id: 'immersiveengineering:crusher/blitz_rod'
            },
            {
                input: 'thermal:basalz_rod',
                output: Item.of('thermal:basalz_powder', 4),
                secondary: [Item.of('thermal:slag').chance(0.5)],
                id: 'immersiveengineering:crusher/basalz_rod'
            },
            {
                input: 'byg:pink_sandstone',
                output: Item.of('byg:pink_sand', 2),
                secondary: [Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.5)],
                id: 'immersiveengineering:crusher/pink_sandstone'
            },
            {
                input: 'byg:purple_sandstone',
                output: Item.of('byg:purple_sand', 2),
                secondary: [Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.5)],
                id: 'immersiveengineering:crusher/purple_sandstone'
            },
            {
                input: 'byg:blue_sandstone',
                output: Item.of('byg:blue_sand', 2),
                secondary: [Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.5)],
                id: 'immersiveengineering:crusher/blue_sandstone'
            },
            {
                input: 'byg:white_sandstone',
                output: Item.of('byg:white_sand', 2),
                secondary: [Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.5)],
                id: 'immersiveengineering:crusher/white_sandstone'
            },
            {
                input: 'byg:black_sandstone',
                output: Item.of('byg:black_sand', 2),
                secondary: [Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.5)],
                id: 'immersiveengineering:crusher/black_sandstone'
            },
            {
                input: 'atmospheric:arid_sandstone',
                output: Item.of('atmospheric:arid_sand', 2),
                secondary: [Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.5)],
                id: 'immersiveengineering:crusher/arid_sandstone'
            },
            {
                input: 'atmospheric:red_arid_sandstone',
                output: Item.of('atmospheric:red_arid_sand', 2),
                secondary: [Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.5)],
                id: 'immersiveengineering:crusher/red_arid_sandstone'
            },
            {
                input: '#forge:storage_blocks/aurora',
                output: Item.of('betterendforge:crystal_shards', 4),
                secondary: [],
                id: 'immersiveengineering:crusher/aurora'
            },
            {
                input: '#forge:end_stones',
                output: Item.of('occultism:crushed_end_stone', 4),
                secondary: [],
                id: 'immersiveengineering:crusher/end_stone'
            },
            {
                input: '#forge:obsidian',
                output: Item.of('emendatusenigmatica:obsidian_dust', 1),
                secondary: [Item.of('minecraft:obsidian').chance(0.75)],
                id: 'immersiveengineering:crusher/obsidian'
            },
            {
                input: 'byg:raw_quartz_block',
                output: Item.of('byg:quartzite_sand', 2),
                secondary: [Item.of('byg:quartzite_sand').chance(0.5)]
            },
            {
                input: 'byg:quartzite_sand',
                output: Item.of('minecraft:sand'),
                secondary: [Item.of('minecraft:quartz').chance(0.1)]
            },
            {
                input: 'minecraft:sugar_cane',
                output: Item.of('minecraft:sugar', 2),
                secondary: [Item.of('minecraft:sugar').chance(0.1)]
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.immersiveengineering.crusher(recipe.output, recipe.input, recipe.secondary);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
