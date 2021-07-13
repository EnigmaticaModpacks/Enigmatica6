onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            output: Item.of('occultism:candle_white'),
            pattern: [' B ', 'AAA', 'AAA'],
            key: {
                A: '#forge:wax',
                B: '#forge:string'
            }
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
