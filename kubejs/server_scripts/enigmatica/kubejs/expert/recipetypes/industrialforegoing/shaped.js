onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const newRecipes = [
        {
            output: 'industrialforegoing:machine_frame_pity',
            pattern: ['CDC', 'ABA', 'CDC'],
            key: {
                A: 'immersiveengineering:concrete_leaded',
                B: 'thermal:machine_frame',
                C: 'create:andesite_casing',
                D: 'immersiveengineering:component_iron'
            },
            id: 'industrialforegoing:machine_frame_pity'
        }
    ];

    newRecipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
