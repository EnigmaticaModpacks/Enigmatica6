events.listen('recipes', (event) => {
    var multiplier = 1000;
    var data = {
        recipes: [
            {
                fluid: 'mekanismgenerators:bioethanol',
                air: 400,
                rate: 1
            },
            {
                fluid: 'industrialforegoing:biofuel',
                air: 400,
                rate: 1
            },
            {
                fluid: 'thermal:tree_oil',
                air: 100,
                rate: 0.5
            },
            {
                fluid: 'thermal:creosote',
                air: 20,
                rate: 0.25
            },
            {
                fluid: 'thermal:refined_fuel',
                air: 1500,
                rate: 1.5
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.pneumaticcraft.fuel_quality({
            type: 'pneumaticcraft:fuel_quality',
            fluid: {
                type: 'pneumaticcraft:fluid',
                fluid: recipe.fluid,
                amount: 1000
            },
            air_per_bucket: recipe.air * multiplier,
            burn_rate: recipe.rate
        });
    });
});
