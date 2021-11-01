onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/storagedrawers/';
    const recipes = [
        {
            output: 'storagedrawers:shroud_key',
            pattern: ['AB ', ' B ', ' C '],
            key: {
                A: '#forge:nuggets/gold',
                B: '#forge:ingots/gold',
                C: '#minecraft:signs'
            },
            id: `${id_prefix}shroud_key`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
