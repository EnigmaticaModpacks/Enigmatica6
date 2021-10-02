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

    const recipes = [
        {
            output: 'pedestals:pedestal/stone333',
            pattern: ['ABA', ' C ', 'CCC'],
            key: {
                A: 'botania:livingrock_slab',
                B: 'botania:light_relay',
                C: 'botania:livingrock'
            },
            id: 'pedestals:pedestal'
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
