onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    var data = {
        recipes: []
    };

    colors.forEach((color) => {
        data.recipes.push({
            inputs: [`#forge:dyes/${color}`, '#enigmatica:candle_materials', '#forge:string'],
            output: `quark:${color}_candle`,
            count: 1,
            cookingTime: 100,
            id: `quark:building/crafting/candles/${color}_candle`
        });
    });

    data.recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input).toJson());
        });

        const re = event.custom({
            type: 'farmersdelight:cooking',
            ingredients: ingredients,
            result: Ingredient.of(recipe.output).toJson(),
            cookingtime: recipe.cookingTime
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
