onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'decorative_blocks:lattice',
            pattern: ['A A', '   ', 'A A'],
            key: {
                A: '#forge:rods/wooden'
            },
            id: 'decorative_blocks:lattice'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
