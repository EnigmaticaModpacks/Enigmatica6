//todo remove in 0.6.0
//moved to expert/recipetypes/mythicbotany/infusion.js
onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'mythicbotany:infusion',
            group: 'infuser',
            output: Item.of(recipe.output).toJson(),
            mana: recipe.mana,
            ingredients: recipe.inputs.map((input) => Ingredient.of(input).toJson()),
            fromColor: recipe.fromColor,
            toColor: recipe.toColor
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
