onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'modularrouters:item_router',
            inputs: ['minecraft:observer', 'immersiveengineering:circuit_board', 'modularrouters:augment_core'],
            heated: true
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.heated) {
            event.recipes.create.compacting(recipe.output, recipe.inputs).heated();
        } else if (recipe.superheated) {
            event.recipes.create.compacting(recipe.output, recipe.inputs).superheated();
        } else {
            event.recipes.create.compacting(recipe.output, recipe.inputs);
        }
    });
});
