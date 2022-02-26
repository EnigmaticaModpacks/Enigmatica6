onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/atmospheric/shaped/';
    const recipes = [
        {
            output: Item.of('3x atmospheric:aspen_sign'),
            pattern: ['AAA', 'AAA', ' B '],
            key: {
                A: ['byg:aspen_planks', 'atmospheric:aspen_planks', 'projectvibrantjourneys:aspen_planks'],
                B: '#forge:rods/wooden'
            },
            id: 'atmospheric:aspen_sign'
        },
        {
            output: 'atmospheric:aspen_chest',
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: ['byg:aspen_planks', 'atmospheric:aspen_planks', 'projectvibrantjourneys:aspen_planks']
            },
            id: 'atmospheric:aspen_chest'
        },
        {
            output: Item.of('4x atmospheric:aspen_chest'),
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: ['byg:aspen_log', 'atmospheric:aspen_log', 'projectvibrantjourneys:aspen_log']
            },
            id: `${id_prefix}aspen_chest_from_logs`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
