events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'mekanism:hdpe_sheet',
            inputs: [
                'mekanism:hdpe_pellet',
                ['immersiveengineering:hammer', 'emendatusenigmatica:enigmatic_hammer'],
                'mekanism:hdpe_pellet'
            ],
            id: 'mekanism:hdpe_sheet'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
            : event.shapeless(recipe.output, recipe.inputs);
    });
});
