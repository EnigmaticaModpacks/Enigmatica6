onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'eidolon:candle',
            inputs: ['occultism:candle_white'],
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            event.shapeless(recipe.output, recipe.inputs);
    });
});
