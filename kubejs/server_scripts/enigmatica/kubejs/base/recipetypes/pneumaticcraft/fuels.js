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
                fluid: 'immersiveengineering:creosote',
                air: 50,
                rate: 0.25
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.custom({
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
