onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/thermal/compression_fuel/';

    var multiplier = 10;
    var data = {
        recipes: [
            { input: 'pneumaticcraft:diesel', energy: 1000000 },
            { input: 'immersivepetroleum:diesel', energy: 1000000 },
            { input: 'pneumaticcraft:biodiesel', energy: 1000000 },
            { input: 'immersiveengineering:biodiesel', energy: 1000000 },
            { input: 'pneumaticcraft:kerosene', energy: 1100000 },
            { input: 'pneumaticcraft:gasoline', energy: 1500000 },
            { input: 'immersivepetroleum:gasoline', energy: 1500000 },
            { input: 'pneumaticcraft:lpg', energy: 1800000 },
            { input: 'mekanism:ethene', energy: 1800000 },
            { input: 'pneumaticcraft:ethanol', energy: 400000 },
            { input: 'mekanismgenerators:bioethanol', energy: 400000 },
            { input: 'immersiveengineering:ethanol', energy: 400000 },
            { input: 'thermal:tree_oil', energy: 100000 },
            { input: 'thermal:creosote', energy: 20000 },
            { input: 'immersiveengineering:creosote', energy: 20000 },
            { input: 'thermal:refined_fuel', energy: 1500000 },
            { input: 'resourcefulbees:rocket_honey', energy: 1500000 }
        ]
    };
    data.recipes.forEach((recipe) => {
        //event.recipes.thermal.compression_fuel(recipe.fluid).energy(recipe.energy * multiplier);
        fallback_id(
            event.recipes.thermal.compression_fuel(Fluid.of(recipe.input, 1000)).energy(recipe.energy * multiplier),
            id_prefix
        );
    });
});
