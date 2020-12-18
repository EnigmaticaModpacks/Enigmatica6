events.listen('recipes', (event) => {
    event.remove({ type: 'thermal:compression_fuel' });
    var multiplier = 10;
    var data = {
        recipes: [
            {
                fluid: 'pneumaticcraft:diesel',
                energy: 125000,
                amount: 250
            },
            {
                fluid: 'pneumaticcraft:biodiesel',
                energy: 125000,
                amount: 250
            },
            {
                fluid: 'immersiveengineering:biodiesel',
                energy: 125000,
                amount: 250
            },
            {
                fluid: 'pneumaticcraft:kerosene',
                energy: 137500,
                amount: 250
            },
            {
                fluid: 'pneumaticcraft:gasoline',
                energy: 187500,
                amount: 250
            },
            {
                fluid: 'pneumaticcraft:lpg',
                energy: 225000,
                amount: 250
            },
            {
                fluid: 'mekanism:ethene',
                energy: 225000,
                amount: 250
            },
            {
                fluid: 'pneumaticcraft:ethanol',
                energy: 50000,
                amount: 500
            },
            {
                fluid: 'mekanismgenerators:bioethanol',
                energy: 50000,
                amount: 500
            },
            {
                fluid: 'immersiveengineering:ethanol',
                energy: 50000,
                amount: 500
            },
            {
                fluid: 'industrialforegoing:biofuel',
                energy: 64000,
                amount: 1000
            },
            {
                fluid: 'thermal:tree_oil',
                energy: 100000,
                amount: 250
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.thermal.compression_fuel({
            ingredient: {
                fluid: recipe.fluid,
                amount: recipe.amount
            },
            energy: recipe.energy * multiplier
        });
    });
});
