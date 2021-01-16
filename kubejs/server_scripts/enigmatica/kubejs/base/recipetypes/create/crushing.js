events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                outputs: [Item.of('emendatusenigmatica:obsidian_dust'), Item.of('minecraft:obsidian').withChance(0.75)],
                input: 'minecraft:obsidian'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.create.crushing(recipe.outputs, recipe.input);
    });
});
