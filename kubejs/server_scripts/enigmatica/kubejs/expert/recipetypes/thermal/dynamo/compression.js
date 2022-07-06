onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/thermal/compression_fuel/';

    var multiplier = 10;
    var data = {
        recipes: [{ input: 'industrialforegoing:biofuel', energy: 1000000 }]
    };

    data.recipes.forEach((recipe) => {
        //event.recipes.thermal.compression_fuel(recipe.fluid).energy(recipe.energy * multiplier);
        fallback_id(
            event.recipes.thermal.compression_fuel(Fluid.of(recipe.input, 1000)).energy(recipe.energy * multiplier),
            id_prefix
        );
    });
});
