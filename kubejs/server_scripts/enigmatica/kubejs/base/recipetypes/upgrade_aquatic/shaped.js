onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'upgrade_aquatic:mulberry_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: 'upgrade_aquatic:mulberry'
            },
            id: 'upgrade_aquatic:mulberry_pie'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
