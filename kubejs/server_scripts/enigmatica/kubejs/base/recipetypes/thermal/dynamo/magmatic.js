onEvent('recipes', (event) => {
    var multiplier = 10;
    var data = {
        recipes: [
            {
                fluid: 'tconstruct:blazing_blood',
                energy: 1000000
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.thermal.magmatic_fuel({
            type: 'thermal.magmatic_fuel',
            ingredient: { fluid: recipe.fluid, amount: 1000 },
            energy: recipe.energy * multiplier
        });
    });
});
