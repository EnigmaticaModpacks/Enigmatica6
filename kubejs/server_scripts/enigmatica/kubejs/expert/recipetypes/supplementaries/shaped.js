onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/supplementaries/';

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
            output: 'supplementaries:bellows',
            pattern: ['AAA', 'B B', 'AAA'],
            key: {
                A: '#forge:treated_wood_slab',
                B: '#forge:fabric_hemp'
            },
            id: 'supplementaries:bellows'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
