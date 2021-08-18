onEvent('recipes', (event) => {
    const recipes = [
        {
            input: Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:iron_bee", BeeType: "iron", Color: "#ffcc99"}),
            output: Item.of('resourcefulbees:bee_jar', {Entity: "resourcefulbees:mana_bee", BeeType: "mana", Color: "#4c97ff"}),
            mana: 99999
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'botania:mana_infusion',
            input: Item.of(recipe.input).weakNBT().toJson(),
            output: Item.of(recipe.output).toJson(),
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
