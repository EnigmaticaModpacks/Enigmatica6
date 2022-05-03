onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/atum/shaped/';
    const recipes = [
        {
            output: 'atum:emmer_dough',
            pattern: ['A', 'B'],
            key: {
                A: 'atum:emmer_flour',
                B: { type: 'pneumaticcraft:fluid', fluid: 'minecraft:water', amount: 1000 }
            },
            id: `${id_prefix}emmer_dough`
        },
        {
            output: Item.of('8x atum:nebu_chain'),
            pattern: ['A', 'B', 'A'],
            key: {
                A: '#forge:nuggets/nebu',
                B: '#forge:ingots/nebu'
            },
            id: 'atum:nebu_chain'
        },
        {
            output: Item.of('6x atum:sand_layer'),
            pattern: ['AAA'],
            key: {
                A: 'atum:sand'
            },
            id: `${id_prefix}sand_layer`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
