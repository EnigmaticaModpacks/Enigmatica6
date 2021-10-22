onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/reaction';
    const recipes = [
        {
            itemInput: { ingredient: { tag: 'forge:ingots/manyullyn', count: 2 } },
            fluidInput: { amount: 144, fluid: 'materialis:molten_shadow_steel' },
            gasInput: { amount: 1000, gas: 'mekanism:polonium' },
            energyRequired: 1000,
            duration: 300,
            itemOutput: { item: 'mekanism:alloy_atomic', count: 3 },
            gasOutput: { gas: 'mekanism:spent_nuclear_waste', amount: 1000 },
            id: `${id_prefix}alloy_atomic`
        }
    ];

    recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'mekanism:reaction',
            itemInput: recipe.itemInput,
            fluidInput: recipe.fluidInput,
            gasInput: recipe.gasInput,
            duration: recipe.duration,
            itemOutput: recipe.itemOutput,
            gasOutput: recipe.gasOutput
        };
        if (recipe.energyRequired) {
            constructed_recipe.energyRequired = recipe.energyRequired;
        }
        event.custom(constructed_recipe).id(recipe.id);
    });
});
