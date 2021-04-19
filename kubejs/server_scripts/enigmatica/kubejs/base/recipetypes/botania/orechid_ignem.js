events.listen('server.datapack.low_priority', (event) => {
    var data = {
        recipes: [
            { result: 'emendatusenigmatica:quartz_netherrack_ore', weight: 8000 },
            { result: 'emendatusenigmatica:gold_netherrack_ore', weight: 1000 },
            { result: '#forge:ores/netherite', weight: 1 }
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

    event.addJson('botania:orechid_ore_weights/orechid_ignem.json', { values: recipeList });
});
