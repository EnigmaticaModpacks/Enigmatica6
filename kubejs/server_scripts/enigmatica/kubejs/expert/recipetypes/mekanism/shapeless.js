onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'mekanism:hdpe_sheet',
            inputs: ['mekanism:hdpe_pellet', '#forge:tools/crafting_hammer', 'mekanism:hdpe_pellet'],
            id: 'mekanism:hdpe_sheet'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
