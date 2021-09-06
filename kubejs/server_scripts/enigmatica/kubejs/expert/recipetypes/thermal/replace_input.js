onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            replaceTarget: { id: /thermal:machine_(refinery|pyrolyzer|centrifuge)/ },
            toReplace: 'thermal:machine_frame',
            replaceWith: 'thermal:fluid_cell'
        },
        {
            replaceTarget: { id: /thermal:machine_(crucible|bottler)/ },
            toReplace: 'thermal:machine_frame',
            replaceWith: 'thermal:fluid_cell_frame'
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.replaceTarget, recipe.toReplace, recipe.replaceWith);
    });
});
