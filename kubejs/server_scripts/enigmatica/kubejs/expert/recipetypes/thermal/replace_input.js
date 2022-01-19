onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            replaceTarget: { id: 'thermal:machine_pyrolyzer' },
            toReplace: 'thermal:machine_frame',
            replaceWith: Item.of('thermal:fluid_cell').ignoreNBT()
        },
        {
            replaceTarget: { id: 'thermal:machine_pyrolyzer' },
            toReplace: '#forge:netherbricks',
            replaceWith: 'immersiveengineering:blastbrick'
        },
        {
            replaceTarget: { id: 'thermal:machine_bottler' },
            toReplace: 'thermal:machine_frame',
            replaceWith: 'thermal:fluid_cell_frame'
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.replaceTarget, recipe.toReplace, recipe.replaceWith);
    });
});
