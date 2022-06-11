onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/eidolon/shaped/';
    const recipes = [
        {
            output: 'eidolon:polished_planks_stairs',
            pattern: ['A  ', 'AA ', 'AAA'],
            key: {
                A: 'eidolon:polished_planks'
            },
            id: `${id_prefix}polished_planks_stairs`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
