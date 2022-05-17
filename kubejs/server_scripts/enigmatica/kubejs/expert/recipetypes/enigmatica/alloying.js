onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/enigmatica/alloying/';

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
        md5(event.custom({
            type: 'betterendforge:alloying',
            ingredients: [Ingredient.of(recipe.inputs[0]).toJson(), Ingredient.of(recipe.inputs[1]).toJson()],
            result: recipe.output,
            experience: recipe.experience,
            smelttime: recipe.smelttime
        }), id_prefix);

        // create
        md5(event.recipes.create.mixing(recipe.output, recipe.inputs).heated(), id_prefix);

        // immersiveengineering
        md5(event.recipes.immersiveengineering.alloy(recipe.output, recipe.inputs[0], recipe.inputs[1]), id_prefix);
        md5(event.recipes.immersiveengineering.arc_furnace([recipe.output], recipe.inputs[0], [recipe.inputs[1]]), id_prefix);

        // thermal
        md5(event.recipes.thermal.smelter([recipe.output], recipe.inputs), id_prefix);
    };

    recipes.forEach((recipe) => {
        recipetypes_alloying(event, recipe);
    });
});
