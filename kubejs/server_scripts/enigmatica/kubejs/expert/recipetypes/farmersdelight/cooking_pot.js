events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    var data = {
        recipes: [
            {
                inputs: ['#forge:wax', '#forge:string'],
                output: 'buildersaddition:large_candle',
                count: 1,
                cookingTime: 100,
                id: 'buildersaddition:large_candle'
            },
            {
                inputs: ['#forge:tallow', '#forge:string'],
                output: 'buildersaddition:large_candle',
                count: 1,
                cookingTime: 100
            },
            {
                inputs: ['minecraft:honeycomb', '#forge:string'],
                output: 'buildersaddition:large_candle',
                count: 1,
                cookingTime: 100
            },
            {
                inputs: ['minecraft:soul_sand', 'buildersaddition:large_candle'],
                output: 'buildersaddition:large_soul_candle',
                count: 1,
                cookingTime: 100,
                id: 'buildersaddition:large_soul_candle_soul_sand'
            },
            {
                inputs: ['minecraft:soul_soil', 'buildersaddition:large_candle'],
                output: 'buildersaddition:large_soul_candle',
                count: 1,
                cookingTime: 100,
                id: 'buildersaddition:large_soul_candle_soul_soil'
            }
        ]
    };

    colors.forEach((color) => {
        data.recipes.push({
            inputs: [`#forge:dyes/${color}`, 'buildersaddition:large_candle'],
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
