events.listen('recipes', function (event) {
    var recipes = [
        shapedRecipe(item.of('immersiveengineering:treated_wood_horizontal', 8), ['AAA', 'ABA', 'AAA'], {
            A: '#minecraft:planks',
            B: '#forge:coal_coke'
        })
    ];

    recipes.forEach(function (recipe) {
        event.shaped(recipe.result, recipe.pattern, recipe.key);
    });
});
