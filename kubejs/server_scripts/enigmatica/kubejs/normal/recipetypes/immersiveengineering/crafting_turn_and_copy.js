onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const recipes = [
        {
            group: 'ie_concrete',
            pattern: ['scs', 'gbg', 'scs'],
            key: {
                s: { tag: 'forge:slag' },
                c: { tag: 'forge:clay' },
                g: { tag: 'forge:gravel' },
                b: {
                    tag: 'minecraft:water',
                    amount: 1000,
                    type: 'immersiveengineering:fluid'
                }
            },
            result: { item: 'immersiveengineering:concrete', count: 12 },
            quarter_turn: true,
            id: 'immersiveengineering:crafting/concrete2'
        }
    ];
    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'immersiveengineering:turn_and_copy',
            pattern: recipe.pattern,
            key: recipe.key,
            result: recipe.result,
            quarter_turn: recipe.quarter_turn
        };

        if (recipe.group) {
            constructed_recipe.group = recipe.group;
        }

        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
