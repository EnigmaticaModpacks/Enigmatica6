onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/thermal/insolator_catalyst/';

    var data = {
        recipes: [
            {
                input: 'industrialforegoing:fertilizer',
                primaryMod: 2.0,
                secondaryMod: 2.0,
                energyMod: 0.8,
                minChance: 0.8,
                useChance: 0.8,
                id: `${id_prefix}fertilizer`
            },
            {
                input: 'botania:fertilizer',
                primaryMod: 1.7,
                secondaryMod: 1.7,
                energyMod: 0.9,
                minChance: 0.5,
                useChance: 0.5,
                id: `${id_prefix}floral_fertilizer`
            },
            {
                input: 'farmingforblockheads:red_fertilizer', // no green fertilizer here too?
                primaryMod: 2.3,
                secondaryMod: 2.3,
                energyMod: 0.8,
                minChance: 0.15,
                useChance: 0.15,
                id: `${id_prefix}red_fertilizer`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.thermal
            .insolator_catalyst(recipe.input)
            .primaryMod(recipe.primaryMod)
            .secondaryMod(recipe.secondaryMod)
            .energyMod(recipe.energyMod)
            .minChance(recipe.minChance)
            .useChance(recipe.useChance)
            .id(recipe.id);
    });
});
