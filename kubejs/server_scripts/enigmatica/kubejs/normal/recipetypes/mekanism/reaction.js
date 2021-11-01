onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/thermal/reaction';
    const recipes = [
        {
            itemInput: { amount: 2, ingredient: { tag: 'forge:fuels/bio' } },
            fluidInput: { amount: 10, tag: 'minecraft:water' },
            gasInput: { amount: 100, gas: 'mekanism:hydrogen' },
            energyRequired: 595,
            duration: 2000,
            itemOutput: { item: 'mekanism:substrate' },
            gasOutput: { gas: 'mekanism:ethene', amount: 100 },
            id: 'mekanism:reaction/substrate/water_hydrogen'
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
        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
