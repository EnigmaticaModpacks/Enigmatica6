onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/thermal/smelter_catalyst/';
    const recipes = [
        {
            catalyst: '#botania:runes/fire',
            primaryMod: 3.5,
            secondaryMod: 5.0,
            energyMod: 0.1,
            minChance: 0.0,
            useChance: 0.05,
            id: `${id_prefix}earth_rune`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal
            .smelter_catalyst(recipe.catalyst)
            .primaryMod(recipe.primaryMod)
            .secondaryMod(recipe.secondaryMod)
            .energyMod(recipe.energyMod)
            .minChance(recipe.minChance)
            .useChance(recipe.useChance)
            .id(recipe.id);
    });
});
