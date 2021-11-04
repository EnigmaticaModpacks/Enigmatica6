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
                B: 'minecraft:honeycomb'
            },
            id: 'farmersdelight:canvas'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
