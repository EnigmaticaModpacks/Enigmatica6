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
            output: Item.of('2x farmersdelight:canvas'),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'farmersdelight:straw',
                B: 'resourcefulbees:wax'
            },
            id: 'farmersdelight:canvas'
        },
        {
            output: 'farmersdelight:basket',
            pattern: ['A A', 'B B', 'ABA'],
            key: {
                A: 'kubejs:scented_stick',
                B: 'farmersdelight:canvas'
            },
            id: 'farmersdelight:basket'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
