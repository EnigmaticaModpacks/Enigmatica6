events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                block: 'powah:uraninite_block',
                temperature: 623,
                thermalResistance: 500,
                transformCold: {
                    block: 'emendatusenigmatica:uranium_block'
                },
                heatCapacity: 1500000
            },
            {
                block: 'quark:magma_bricks',
                temperature: 1300,
                thermalResistance: 500,
                transformCold: {
                    block: 'minecraft:magma_block'
                },
                heatCapacity: 10000
            },
            {
                block: 'powah:blazing_crystal_block',
                temperature: 1700,
                heatCapacity: 20000,
                transformCold: {
                    block: 'botania:blaze_block'
                }
            },
            {
                block: 'emendatusenigmatica:uranium_block',
                temperature: 438,
                thermalResistance: 500,
                transformCold: {
                    block: 'emendatusenigmatica:lead_block'
                },
                heatCapacity: 500000
            },
            {
                block: 'emendatusenigmatica:uranium_block',
                temperature: 438,
                thermalResistance: 500,
                transformCold: {
                    block: 'emendatusenigmatica:lead_block'
                },
                heatCapacity: 500000
            },
            {
                block: 'betterendforge:dense_snow',
                temperature: 263,
                thermalResistance: 500,
                transformCold: {
                    block: 'minecraft:snow_block'
                },
                heatCapacity: 2000
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'pneumaticcraft:heat_properties',
            block: recipe.block,
            temperature: recipe.temperature,
            thermalResistance: recipe.thermalResistance,
            transformCold: recipe.transformCold,
            heatCapacity: recipe.heatCapacity
        });
    });
});
