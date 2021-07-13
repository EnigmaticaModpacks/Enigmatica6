onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'minecraft:furnace',
            pattern: ['LLL', 'L L', 'LLL'],
            key: {
                L: '#forge:stone'
            }
        },
        {
            output: Item.of('minecraft:stick', 16),
            pattern: ['A', 'A'],
            key: {
                A: '#minecraft:logs'
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
