onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [{ item: 'kubejs:disabled_recipe_indicator' }],
            output: { item: 'mythicbotany:raindeletia' },
            id: 'mythicbotany:petal_apothecary/raindeletia'
        },
        {
            inputs: [{ item: 'kubejs:disabled_recipe_indicator' }],
            output: { item: 'mythicbotany:wither_aconite' },
            id: 'mythicbotany:petal_apothecary/wither_aconite'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:petal_apothecary',
            output: recipe.output,
            ingredients: recipe.inputs
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
