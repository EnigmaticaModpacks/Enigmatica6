onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('minecraft:paper', 3),
            pattern: ['AAA'],
            key: {
                A: '#forge:dusts/wood'
            },
            id: 'mekanism:paper'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
