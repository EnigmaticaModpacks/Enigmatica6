events.listen('server.datapack.low_priority', (event) => {
    var data = {
        recipes: [
            { result: 'emendatusenigmatica:aluminum_ore', weight: 1200 },
            { result: 'emendatusenigmatica:apatite_ore', weight: 700 },
            { result: 'emendatusenigmatica:bitumen_ore', weight: 600 },
            { result: 'emendatusenigmatica:cinnabar_ore', weight: 800 },
            { result: 'emendatusenigmatica:coal_ore', weight: 3200 },
            { result: 'emendatusenigmatica:copper_ore', weight: 2000 },
            { result: 'emendatusenigmatica:diamond_ore', weight: 50 },
            { result: 'emendatusenigmatica:emerald_ore', weight: 30 },
            { result: 'emendatusenigmatica:fluorite_ore', weight: 50 },
            { result: 'emendatusenigmatica:gold_ore', weight: 500 },
            { result: 'emendatusenigmatica:iron_ore', weight: 2500 },
            { result: 'emendatusenigmatica:lapis_ore', weight: 250 },
            { result: 'emendatusenigmatica:lead_ore', weight: 1500 },
            { result: 'emendatusenigmatica:mana_ore', weight: 500 },
            { result: 'emendatusenigmatica:nickel_ore', weight: 100 },
            { result: 'emendatusenigmatica:osmium_ore', weight: 1500 },
            { result: 'emendatusenigmatica:potassium_nitrate_ore', weight: 500 },
            { result: 'emendatusenigmatica:redstone_ore', weight: 200 },
            { result: 'emendatusenigmatica:silver_ore', weight: 1000 },
            { result: 'emendatusenigmatica:sulfur_ore', weight: 300 },
            { result: 'emendatusenigmatica:tin_ore', weight: 1800 },
            { result: 'emendatusenigmatica:uranium_ore', weight: 400 },
            { result: 'emendatusenigmatica:zinc_ore', weight: 1000 }
        ]
    };
    var recipeList = [];
    data.recipes.forEach((recipe) => {
        if (recipe.result.charAt(0) == '#') {
            recipeList.push({
                type: 'tag',
                tag: recipe.result.slice(1),
                weight: recipe.weight
            });
        } else {
            recipeList.push({
                type: 'block',
                block: recipe.result,
                weight: recipe.weight
            });
        }
    });

    event.addJson('botania:orechid_ore_weights/orechid.json', { values: recipeList });
});
