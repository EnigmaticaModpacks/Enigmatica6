onEvent('recipes', (event) => {
    const recipes = [
        {
            output: Item.of('engineersdecor:slag_brick_block', 8),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#engineersdecor:brick_ingots',
                B: '#forge:slag'
            },
            id: 'engineersdecor:dependent/slag_brick_block_recipe'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
