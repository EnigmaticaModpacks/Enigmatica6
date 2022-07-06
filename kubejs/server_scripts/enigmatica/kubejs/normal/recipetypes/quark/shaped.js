onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:normal/quark/shaped/';

    const recipes = [
        {
            output: Item.of('quark:white_candle', 4),
            pattern: ['B', 'A', 'A'],
            key: {
                A: '#enigmatica:candle_materials',
                B: '#forge:string'
            },
            id: `${id_prefix}white_candle`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
