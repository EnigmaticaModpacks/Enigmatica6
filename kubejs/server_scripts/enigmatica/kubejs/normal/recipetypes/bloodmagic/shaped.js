onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            output: Item.of('bloodmagic:dungeon_stone', 8),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:stone',
                B: '#bloodmagic:crystals/demon'
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
