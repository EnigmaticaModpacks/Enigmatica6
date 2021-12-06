onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/atum/';
    const recipes = [
        {
            output: 'atum:emmer_dough',
            pattern: ['A', 'B'],
            key: {
                A: 'atum:emmer_flour',
                B: { type: 'pneumaticcraft:fluid', fluid: 'minecraft:water', amount: 1000 }
            },
            id: `${id_prefix}emmer_dough`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
