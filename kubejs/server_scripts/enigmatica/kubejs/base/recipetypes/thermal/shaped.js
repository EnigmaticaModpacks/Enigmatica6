onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'thermal:sawdust_block',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: '#forge:sawdust'
            },
            id: 'thermal:storage/sawdust_block'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
