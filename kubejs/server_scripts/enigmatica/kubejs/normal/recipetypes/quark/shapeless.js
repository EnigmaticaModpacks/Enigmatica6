onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'quark:white_candle',
            inputs: ['#quark:candles', 'minecraft:white_dye'],
        },
        {   output: 'quark:white_candle',
            inputs: 'eidolon:candle',

        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            event.shapeless(recipe.output, recipe.inputs);
    });
});
