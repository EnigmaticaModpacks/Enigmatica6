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
            pattern: ['CCC', 'ABA', 'CCC'],
            key: {
                A: { item: 'immersiveengineering:concrete_leaded' },
                B: { item: 'thermal:machine_frame' },
                C: { item: 'create:andesite_casing' }
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
