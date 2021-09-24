onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'betterendforge:end_mycelium',
            input: 'minecraft:end_stone',
            infusionInput: 'mekanism:fungi',
            infusionAmount: 10
        },
        {
            output: 'minecraft:crimson_nylium',
            input: 'minecraft:netherrack',
            infusionInput: 'mekanism:fungi',
            infusionAmount: 10,
            id: 'mekanism:metallurgic_infusing/netherrack_to_crimson_nylium'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.recipes.mekanism
                  .metallurgic_infusing(recipe.output, recipe.input, recipe.infusionInput, recipe.infusionAmount)
                  .id(recipe.id)
            : event.recipes.mekanism.metallurgic_infusing(
                  recipe.output,
                  recipe.input,
                  recipe.infusionInput,
                  recipe.infusionAmount
              );
    });
});
