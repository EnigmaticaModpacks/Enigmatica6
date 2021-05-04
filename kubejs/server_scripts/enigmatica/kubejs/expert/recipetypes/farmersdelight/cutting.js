function cuttingRecipe(ingredient, tool, result) {
    return {
        type: 'farmersdelight:cutting',
        ingredients: [ingredient],
        tool: tool,
        result: result
    };
}

function filletRecipe(fish, filletCount) {
    return cuttingRecipe(Ingredient.of(fish), Ingredient.of('#forge:tools/knives'), [
        Item.of('aquaculture:fish_fillet_raw', filletCount),
        Item.of('minecraft:bone_meal', Math.ceil(filletCount / 3))
    ]);
}

events.listen('recipes', (event) => {
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
