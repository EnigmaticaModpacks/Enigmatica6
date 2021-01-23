events.listen('recipes', (event) => {
    event.remove({ type: 'thermal:compression_fuel' });
    var multiplier = 10;
    var data = {
        recipes: [
            {
                fluid: 'pneumaticcraft:diesel',
                energy: 1000000
            },
            {
                fluid: 'immersivepetroleum:diesel',
                energy: 1000000
            },
            {
                fluid: 'pneumaticcraft:biodiesel',
                energy: 1000000
            },
            {
                fluid: 'immersiveengineering:biodiesel',
                energy: 1000000
            },
            {
                fluid: 'pneumaticcraft:kerosene',
                energy: 1100000
            },
            {
                fluid: 'pneumaticcraft:gasoline',
                energy: 1500000
            },
            {
                fluid: 'immersivepetroleum:gasoline',
                energy: 1500000
            },
            {
                fluid: 'pneumaticcraft:lpg',
                energy: 1800000
            },
            {
                fluid: 'mekanism:ethene',
                energy: 1800000
            },
            {
                fluid: 'pneumaticcraft:ethanol',
                energy: 400000
            },
            {
                fluid: 'mekanismgenerators:bioethanol',
                energy: 400000
            },
            {
                fluid: 'immersiveengineering:ethanol',
                energy: 400000
            },
            {
                fluid: 'industrialforegoing:biofuel',
                energy: 100000
            },
            {
                fluid: 'thermal:tree_oil',
                energy: 100000
            },
            {
                fluid: 'thermal:creosote',
                energy: 20000
            },
            {
                fluid: 'immersiveengineering:creosote',
                energy: 20000
            },
            {
                fluid: 'thermal:refined_fuel',
                energy: 1500000
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        //event.recipes.thermal.compression_fuel(recipe.fluid).energy(recipe.energy * multiplier);
        event.recipes.thermal.compression_fuel({
            type: 'thermal.compression_fuel',
            ingredient: {
                fluid: recipe.fluid,
                amount: 1000
            },
            energy: recipe.energy * multiplier
        });
    });
});
