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
            output: Item.of('12x engineersdecor:metal_bar'),
            pattern: ['  A', ' A ', 'A B'],
            key: {
                A: '#forge:rods/aluminum',
                B: 'fluxnetworks:flux_dust'
            },
            id: 'engineersdecor:dependent/metal_bar_recipe'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
