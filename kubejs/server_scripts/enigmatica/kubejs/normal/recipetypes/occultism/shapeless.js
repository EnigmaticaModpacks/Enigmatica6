onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:normal/occultism/shapeless/';

    const recipes = [
        {
            output: 'occultism:candle_white',
            inputs: ['#quark:candles'],
            id: `${id_prefix}candle_white`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
