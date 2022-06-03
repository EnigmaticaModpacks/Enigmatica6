onEvent('recipes', (event) => {
    const recipes = [
        {
            gas: 'mekanism:lithium',
            amount: 100,
            output: 'emendatusenigmatica:lithium_dust',
            id: 'mekanism:crystallizing/lithium'
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'mekanism:crystallizing',
            chemicalType: 'gas',
            input: { amount: recipe.amount, gas: recipe.gas },
            output: item.of(recipe.output).toJson()
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
