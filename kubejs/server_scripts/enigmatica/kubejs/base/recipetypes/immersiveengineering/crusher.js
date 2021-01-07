events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'thermal:blizz_rod',
                output: item.of('thermal:blizz_powder', 4),
                secondary: [item.of('minecraft:snowball').chance(0.5)]
            },
            {
                input: 'thermal:blitz_rod',
                output: item.of('thermal:blitz_powder', 4),
                secondary: [item.of('emendatusenigmatica:potassium_nitrate_gem').chance(0.5)]
            },
            {
                input: 'thermal:basalz_rod',
                output: item.of('thermal:basalz_powder', 4),
                secondary: [item.of('thermal:slag').chance(0.5)]
            },
            {
                input: '#forge:ores/nickel',
                output: item.of('emendatusenigmatica:nickel_dust', 2),
                secondary: [item.of('emendatusenigmatica:iron_dust').chance(0.1)]
            },
            {
                input: '#forge:ores/gold',
                output: item.of('emendatusenigmatica:gold_dust', 2),
                secondary: [item.of('emendatusenigmatica:zinc_dust').chance(0.1)]
            },
            {
                input: '#forge:ores/aluminum',
                output: item.of('emendatusenigmatica:aluminum_dust', 2),
                secondary: [item.of('emendatusenigmatica:iron_dust').chance(0.1)]
            },
            {
                input: '#forge:ores/osmium',
                output: item.of('emendatusenigmatica:osmium_dust', 2),
                secondary: [item.of('emendatusenigmatica:tin_dust').chance(0.1)]
            },
            {
                input: '#forge:ores/tin',
                output: item.of('emendatusenigmatica:tin_dust', 2),
                secondary: [item.of('emendatusenigmatica:osmium_dust').chance(0.1)]
            },
            {
                input: '#forge:ores/zinc',
                output: item.of('emendatusenigmatica:zinc_dust', 2),
                secondary: [item.of('emendatusenigmatica:gold_dust').chance(0.1)]
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
