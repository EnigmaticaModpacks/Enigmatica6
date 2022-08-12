onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/pneumaticcraft/fuel_quantity/';

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
            },
            {
                fluid: 'resourcefulbees:rocket_honey',
                air: 1500,
                rate: 2
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        fallback_id(
            event.custom({
                type: 'pneumaticcraft:fuel_quality',
                fluid: {
                    type: 'pneumaticcraft:fluid',
                    fluid: recipe.fluid,
                    amount: 1000
                },
                air_per_bucket: recipe.air * multiplier,
                burn_rate: recipe.rate
            }),
            id_prefix
        );
    });
});
