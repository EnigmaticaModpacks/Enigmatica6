onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            inputs: ['resourcefulbees:mana_bee_spawn_egg'],
            output: 'resourcefulbees:terrestrial_bee_spawn_egg',
            mana: 2000000,
            fromColor: 16711821,
            toColor: 16750080
        },
        {
            inputs: ['resourcefulbees:terrestrial_honeycomb', 'botania:mana_pearl', 'botania:mana_diamond'],
            output: 'botania:terrasteel_ingot',
            mana: 300000,
            fromColor: 16711821,
            toColor: 16750080
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'mythicbotany:infusion',
            group: 'infuser',
            output: Item.of(recipe.output).toJson(),
            mana: 2000000,
            ingredients: recipe.inputs.map((input) => Ingredient.of(input).toJson()),
            fromColor: recipe.fromColor,
            toColor: recipe.toColor
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
