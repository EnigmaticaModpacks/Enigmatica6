events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            input: '#forge:ingots/froststeel',
            output: 'botania:manasteel_ingot',
            mana: 3000,
            catalyst: 'architects_palette:sunstone',
            id: 'botania:mana_infusion/manasteel'
        },
        {
            input: '#forge:storage_blocks/froststeel',
            output: 'botania:manasteel_block',
            mana: 27000,
            catalyst: 'architects_palette:sunstone',
            id: 'botania:mana_infusion/manasteel_block'
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'botania:mana_infusion',
            input: Ingredient.of(recipe.input).toJson(),
            output: Ingredient.of(recipe.output).toJson(),
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
