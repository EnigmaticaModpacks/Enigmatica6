onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/thermal/magmatic_fuel/';

    var multiplier = 10;
    const recipes = [
        {
            input: 'tconstruct:blazing_blood',
            energy: 1000000,
            id: `${id_prefix}blazing_blood`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal
            .magmatic_fuel(Fluid.of(recipe.input, 1000))
            .energy(recipe.energy * multiplier)
            .id(recipe.id);
    });
});
