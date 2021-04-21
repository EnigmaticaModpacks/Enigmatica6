events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                output: 'betterendforge:end_mycelium',
                input: 'minecraft:end_stone',
                infusionInput: 'mekanism:fungi',
                infusionAmount: 10
            }
        ]
    };

    data.recipes.forEach((recipe) => {
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
