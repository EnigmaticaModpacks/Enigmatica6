onEvent('recipes', (event) => {
    const recipes = [
        {
            pattern: [' g ', 'idi', ' g '],
            key: {
                g: { tag: 'forge:glass' },
                i: { tag: 'forge:dusts/iron_aluminum' },
                d: { tag: 'forge:dyes/green' }
            },
            result: { item: 'immersiveengineering:insulating_glass', count: 2 },
            quarter_turn: true,
            id: 'immersiveengineering:crafting/insulating_glass'
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
