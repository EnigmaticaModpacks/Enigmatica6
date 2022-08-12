onEvent('recipes', (event) => {
    const id_prefix = 'architects_palette:base/shaped/';
    const recipes = [
        {
            output: '8x architects_palette:limestone',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:stone',
                B: '#forge:mushrooms'
            },
            id: `${id_prefix}limestone`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
