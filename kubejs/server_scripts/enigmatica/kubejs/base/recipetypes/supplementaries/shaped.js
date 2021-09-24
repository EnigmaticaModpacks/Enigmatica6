onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'supplementaries:candle_holder',
            pattern: ['A', 'B'],
            key: {
                A: '#quark:candles',
                B: '#forge:nuggets/pewter'
            },
            id: 'supplementaries:candle_holder'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
