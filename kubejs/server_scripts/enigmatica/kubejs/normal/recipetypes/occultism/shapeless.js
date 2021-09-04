onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'occultism:candle_white',
            inputs: ['#quark:candles'],
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            event.shapeless(recipe.output, recipe.inputs);
    });
});
