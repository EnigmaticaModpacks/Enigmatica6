events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'thermal:blizz_rod',
                output: Item.of('thermal:blizz_powder', 4),
                secondary: [Item.of('minecraft:snowball').chance(0.5)]
            },
            {
                input: 'thermal:blitz_rod',
                output: Item.of('thermal:blitz_powder', 4),
                secondary: [Item.of('emendatusenigmatica:potassium_nitrate_gem').chance(0.5)]
            },
            {
                input: 'thermal:basalz_rod',
                output: Item.of('thermal:basalz_powder', 4),
                secondary: [Item.of('thermal:slag').chance(0.5)]
            },
            {
                input: '#forge:ores/nickel',
                output: Item.of('emendatusenigmatica:nickel_dust', 2),
                secondary: [Item.of('emendatusenigmatica:iron_dust').chance(0.1)]
            },
            {
                input: '#forge:ores/gold',
                output: Item.of('emendatusenigmatica:gold_dust', 2),
                secondary: [Item.of('emendatusenigmatica:zinc_dust').chance(0.1)]
            },
            {
                input: '#forge:ores/aluminum',
                output: Item.of('emendatusenigmatica:aluminum_dust', 2),
                secondary: [Item.of('emendatusenigmatica:iron_dust').chance(0.1)]
            },
            {
                input: '#forge:ores/osmium',
                output: Item.of('emendatusenigmatica:osmium_dust', 2),
                secondary: [Item.of('emendatusenigmatica:tin_dust').chance(0.1)]
            },
            {
                input: '#forge:ores/tin',
                output: Item.of('emendatusenigmatica:tin_dust', 2),
                secondary: [Item.of('emendatusenigmatica:osmium_dust').chance(0.1)]
            },
            {
                input: '#forge:ores/zinc',
                output: Item.of('emendatusenigmatica:zinc_dust', 2),
                secondary: [Item.of('emendatusenigmatica:gold_dust').chance(0.1)]
            },
            {
                input: 'byg:pink_sandstone',
                output: Item.of('byg:pink_sand', 2),
                secondary: [Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.5)]
            },
            {
                input: 'byg:purple_sandstone',
                output: Item.of('byg:purple_sand', 2),
                secondary: [Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.5)]
            },
            {
                input: 'byg:blue_sandstone',
                output: Item.of('byg:blue_sand', 2),
                secondary: [Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.5)]
            },
            {
                input: 'byg:white_sandstone',
                output: Item.of('byg:white_sand', 2),
                secondary: [Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.5)]
            },
            {
                input: 'byg:black_sandstone',
                output: Item.of('byg:black_sand', 2),
                secondary: [Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.5)]
            },
            {
                input: 'atmospheric:arid_sandstone',
                output: Item.of('atmospheric:arid_sand', 2),
                secondary: [Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.5)]
            },
            {
                input: 'atmospheric:red_arid_sandstone',
                output: Item.of('atmospheric:red_arid_sand', 2),
                secondary: [Item.of('emendatusenigmatica:potassium_nitrate_dust').chance(0.5)]
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.remove({
            input: recipe.input,
            mod: 'immersiveengineering',
            type: 'immersiveengineering:crusher'
        });
        event.recipes.immersiveengineering.crusher(recipe.output, recipe.input, recipe.secondary);
    });
});
