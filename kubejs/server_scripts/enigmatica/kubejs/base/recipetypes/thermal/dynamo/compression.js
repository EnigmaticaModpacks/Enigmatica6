events.listen('recipes', (event) => {
    event.remove({ type: 'thermal:compression_fuel' });
    var multiplier = 10;
    var data = {
        recipes: [
            {
                fluid: 'pneumaticcraft:diesel',
                energy: 500000
            },
            {
                fluid: 'immersivepetroleum:diesel',
                energy: 500000
            },
            {
                fluid: 'pneumaticcraft:biodiesel',
                energy: 500000
            },
            {
                fluid: 'immersiveengineering:biodiesel',
                energy: 500000
            },
            {
                fluid: 'pneumaticcraft:kerosene',
                energy: 550000
            },
            {
                fluid: 'pneumaticcraft:gasoline',
                energy: 750000
            },
            {
                fluid: 'immersivepetroleum:gasoline',
                energy: 750000
            },
            {
                fluid: 'pneumaticcraft:lpg',
                energy: 900000
            },
            {
                fluid: 'mekanism:ethene',
                energy: 900000
            },
            {
                fluid: 'pneumaticcraft:ethanol',
                energy: 100000
            },
            {
                fluid: 'mekanismgenerators:bioethanol',
                energy: 100000
            },
            {
                fluid: 'immersiveengineering:ethanol',
                energy: 100000
            },
            {
                fluid: 'industrialforegoing:biofuel',
                energy: 64000
            },
            {
                fluid: 'thermal:tree_oil',
                energy: 100000
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.thermal.compression_fuel({
            ingredient: {
                fluid: recipe.fluid,
                amount: 1000
            },
            energy: recipe.energy * multiplier
        });
    });
});
