onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'modularrouters:item_router',
            inputs: ['minecraft:observer', 'immersiveengineering:circuit_board', 'modularrouters:augment_core'],
            heated: true,
            id: 'modularrouters:item_router'
        },
        {
            output: 'kubejs:rough_machine_frame',
            inputs: [
                'rftoolsbase:machine_base',
                'kubejs:coated_machine_frame_top',
                '#forge:plates/invar',
                '#forge:plates/invar'
            ],
            heated: true,
            id: 'kubejs:rough_machine_frame'
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.heated) {
            event.recipes.create.compacting(recipe.output, recipe.inputs).heated().id(recipe.id);
        } else if (recipe.superheated) {
            event.recipes.create.compacting(recipe.output, recipe.inputs).superheated().id(recipe.id);
        } else {
            event.recipes.create.compacting(recipe.output, recipe.inputs).id(recipe.id);
        }
    });
});
