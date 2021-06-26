onEvent('recipes', (event) => {
    const recipes = [
        {
            input: 'resourcefulbees:iron_bee_spawn_egg',
            output: 'resourcefulbees:mana_bee_spawn_egg',
            count: 1,
            mana: 99999
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
