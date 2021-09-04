onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            input: 'occultism:dimensional_matrix',
            output: Item.of('kubejs:dimensional_storage_crystal', 9),
            extraOutput: Item.of('kubejs:dimensional_storage_crystal').chance(0.5)
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.recipes.mekanism.sawing(recipe.output, recipe.input, recipe.extraOutput);

        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
