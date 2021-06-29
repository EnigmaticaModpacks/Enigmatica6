onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const recipes = [
        {
            input: 'resourcefulbees:mana_honeycomb',
            output: 'botania:manasteel_ingot',
            count: 1,
            mana: 2000
        },
        {
            input: 'resourcefulbees:mana_honeycomb_block',
            output: 'botania:manasteel_block',
            count: 1,
            mana: 19000
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'botania:mana_infusion',
            input: Ingredient.of(recipe.input).toJson(),
            output: { item: recipe.output, count: recipe.count },
            mana: recipe.mana
        };
        if (recipe.catalyst) {
            constructed_recipe.catalyst = {
                type: 'block',
                block: recipe.catalyst
            };
        }
        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
