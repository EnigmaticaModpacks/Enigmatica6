onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:normal/botania/mana_infusion/';

    const recipes = [
        {
            input: 'resourcefulbees:mana_honeycomb',
            output: 'botania:manasteel_ingot',
            count: 1,
            mana: 2000,
            id: `${id_prefix}manasteel_ingot`
        },
        {
            input: 'resourcefulbees:mana_honeycomb_block',
            output: 'botania:manasteel_block',
            count: 1,
            mana: 19000,
            id: `${id_prefix}manasteel_block`
        },
        {
            input: 'architects_palette:sunstone',
            output: 'architects_palette:moonstone',
            count: 1,
            mana: 50,
            id: `${id_prefix}moonstone_from_sunstone`
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

        event.custom(constructed_recipe).id(recipe.id);
    });
});
