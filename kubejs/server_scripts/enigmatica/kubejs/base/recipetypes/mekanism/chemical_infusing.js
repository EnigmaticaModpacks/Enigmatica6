onEvent('recipes', (event) => {
    const recipes = [
        {
            output: ['mekanismgenerators:fusion_fuel', 2],
            leftInput: ['mekanismgenerators:deuterium', 1],
            rightInput: ['mekanismgenerators:tritium', 1],
            id: 'mekanismgenerators:chemical_infusing/fusion_fuel'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'mekanism:chemical_infusing',
            leftInput: { amount: recipe.leftInput[1], gas: recipe.leftInput[0] },
            rightInput: { amount: recipe.rightInput[1], gas: recipe.rightInput[0] },
            output: { gas: recipe.output[0], amount: recipe.output[1] }
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
