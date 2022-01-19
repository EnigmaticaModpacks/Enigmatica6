onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/betterend/shaped/';
    const recipes = [
        {
            output: Item.of('8x betterendforge:thallasium_chain'),
            pattern: ['A', 'B', 'A'],
            key: {
                A: '#forge:nuggets/thallasium',
                B: '#forge:ingots/thallasium'
            },
            id: 'betterendforge:thallasium_chain'
        },
        {
            output: Item.of('8x betterendforge:terminite_chain'),
            pattern: ['A', 'B', 'A'],
            key: {
                A: '#forge:nuggets/terminite',
                B: '#forge:ingots/terminite'
            },
            id: 'betterendforge:terminite_chain'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
