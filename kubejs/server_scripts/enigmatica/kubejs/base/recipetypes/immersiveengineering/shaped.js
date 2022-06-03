onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('immersiveengineering:sawdust', 6),
            pattern: ['AAA', 'AAA'],
            key: {
                A: '#forge:sawdust'
            },
            id: 'immersiveengineering:crafting/sawdust'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
