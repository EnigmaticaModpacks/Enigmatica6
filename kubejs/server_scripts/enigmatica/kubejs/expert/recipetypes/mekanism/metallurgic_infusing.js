onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            output: 'mekanism:alloy_infused',
            input: '#forge:ingots/energized_steel',
            infusionInput: 'mekanism:redstone',
            infusionAmount: 10,
            id: 'mekanism:metallurgic_infusing/alloy/infused'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanism
            .metallurgic_infusing(recipe.output, recipe.input, recipe.infusionInput, recipe.infusionAmount)
            .id(recipe.id);
    });
});
