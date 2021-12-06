onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    var multiplier = 10;
    var data = {
        recipes: [{ input: 'industrialforegoing:biofuel', energy: 100000 }]
    };
    data.recipes.forEach((recipe) => {
        //event.recipes.thermal.compression_fuel(recipe.fluid).energy(recipe.energy * multiplier);
        event.recipes.thermal.compression_fuel(Fluid.of(recipe.input, 1000)).energy(recipe.energy * multiplier);
    });
});
