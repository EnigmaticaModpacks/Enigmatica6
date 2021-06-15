onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            input: 'occultism:infused_lenses',
            fluid: 'astralsorcery:liquid_starlight',
            consumptionChance: 0.5,
            output: 'astralsorcery:glass_lens',
            count: 2,
            duration: 100
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'astralsorcery:infuser',
            fluidInput: recipe.fluid,
            input: Ingredient.of(recipe.input).toJson(),
            output: Item.of(recipe.output, recipe.count).toResultJson(),
            consumptionChance: recipe.consumptionChance,
            duration: recipe.duration,
            consumeMultipleFluids: false,
            acceptChaliceInput: true,
            copyNBTToOutputs: false
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
