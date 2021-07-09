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
            output: Item.of('prettypipes:pipe', 8),
            pattern: ['CCC', 'ABA', 'CCC'],
            key: {
                A: '#forge:plates/tin',
                B: '#forge:glass/colorless',
                C: 'create:shaft'
            }
        },
        {
            output: Item.of('ppfluids:fluid_pipe', 8),
            pattern: ['CCC', 'ABA', 'CCC'],
            key: {
                A: 'thermal:cured_rubber',
                B: '#forge:glass/colorless',
                C: 'create:shaft'
            }
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
