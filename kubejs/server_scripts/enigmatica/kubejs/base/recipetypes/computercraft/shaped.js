onEvent('recipes', (event) => {
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
            output: 'computercraft:wired_modem',
            pattern: ['ACA', 'CBC', 'ACA'],
            key: {
                A: 'minecraft:smooth_stone',
                B: '#forge:glass_panes/black',
                C: '#forge:dusts/redstone'
            },
            id: 'computercraft:wired_modem'
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
