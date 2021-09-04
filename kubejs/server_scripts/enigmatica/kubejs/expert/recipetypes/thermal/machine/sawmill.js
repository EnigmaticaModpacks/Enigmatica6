onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            input: 'occultism:dimensional_matrix',
            outputs: [
                Item.of('kubejs:dimensional_storage_crystal', 6),
                Item.of('kubejs:dimensional_storage_crystal').chance(0.25)
            ]
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.sawmill(recipe.outputs, recipe.input);
    });
});
