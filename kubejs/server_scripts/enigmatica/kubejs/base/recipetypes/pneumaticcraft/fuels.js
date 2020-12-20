events.listen('recipes', (event) => {
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
                air: 700,
                rate: 0.5
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
            air_per_bucket: recipe.air * 1000,
            burn_rate: recipe.rate
        });
    });
});
