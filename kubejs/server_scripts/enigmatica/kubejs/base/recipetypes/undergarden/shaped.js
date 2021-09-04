onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'undergarden:gloomgourd_pie',
            pattern: ['CCC', 'EDE', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: '#undergarden:mushrooms',
                C: 'undergarden:glowing_kelp',
                D: 'undergarden:gloomgourd',
                E: '#forge:eggs'
            },
            id: 'undergarden:gloomgourd_pie'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
