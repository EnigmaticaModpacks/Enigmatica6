onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/pulverizer_catalyst/';
    const recipes = [
        {
            catalyst: '#botania:runes/earth',
            primaryMod: 2.5,
            secondaryMod: 5.0,
            energyMod: 0.1,
            minChance: 0.0,
            useChance: 0.05,
            id: `${id_prefix}earth_rune`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal
            .pulverizer_catalyst(recipe.catalyst)
            .primaryMod(recipe.primaryMod)
            .secondaryMod(recipe.secondaryMod)
            .energyMod(recipe.energyMod)
            .minChance(recipe.minChance)
            .useChance(recipe.useChance)
            .id(recipe.id);
    });
});
