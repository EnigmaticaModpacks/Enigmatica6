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
            output: 'tconstruct:silky_cloth',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'ars_nouveau:mana_fiber',
                B: '#forge:ingots/rose_gold'
            },
            id: 'tconstruct:tools/modifiers/silky_cloth'
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
