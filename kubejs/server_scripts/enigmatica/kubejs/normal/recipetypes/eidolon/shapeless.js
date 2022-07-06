onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:normal/eidolon/shapeless/';

    const recipes = [
        {
            output: 'eidolon:candle',
            inputs: ['occultism:candle_white'],
            id: `${id_prefix}candle`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
