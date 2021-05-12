function cuttingRecipe(ingredient, tool, result) {
    return {
        type: 'farmersdelight:cutting',
        ingredients: [ingredient],
        tool: tool,
        result: result
    };
}

events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    var data = {
        recipes: [
            cuttingRecipe(Ingredient.of('minecraft:leather'), Ingredient.of('#forge:tools/knives'), [
                Item.of('betterendforge:leather_stripe', 3)
            ])
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom(recipe);
    });
});
