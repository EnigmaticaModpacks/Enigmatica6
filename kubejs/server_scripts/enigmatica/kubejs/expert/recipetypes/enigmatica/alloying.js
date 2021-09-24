onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            inputs: ['#forge:ingots/compressed_iron', '#forge:gems/quartz'],
            output: Item.of('refinedstorage:quartz_enriched_iron', 2)
        }
    ];

    recipetypes_alloying = (event, recipe) => {
        if (!recipe.smelttime) {
            recipe.smelttime = 200;
        }
        if (!recipe.experience) {
            recipe.experience = 0.0;
        }

        // betterendforge
        event.custom({
            type: 'betterendforge:alloying',
            ingredients: [Ingredient.of(recipe.inputs[0]).toJson(), Ingredient.of(recipe.inputs[1]).toJson()],
            result: recipe.output,
            experience: recipe.experience,
            smelttime: recipe.smelttime
        });

        // create
        event.recipes.create.mixing(recipe.output, recipe.inputs).heated();

        // immersiveengineering
        event.recipes.immersiveengineering.alloy(recipe.output, recipe.inputs[0], recipe.inputs[1]);
        event.recipes.immersiveengineering.arc_furnace([recipe.output], recipe.inputs[0], [recipe.inputs[1]]);

        // thermal
        event.recipes.thermal.smelter([recipe.output], recipe.inputs);
    };

    recipes.forEach((recipe) => {
        recipetypes_alloying(event, recipe);
    });
});
