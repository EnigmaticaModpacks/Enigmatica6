onEvent('recipes', (event) => {
    /* 
    Fluid Cooling/Heating
    {
        fluid: 'immersiveengineering:concrete',
        temperature: 293, // Fluid's native heat. Will heat/cool things based on this
        thermalResistance: 100, // How slow fluid transfers heat. Higher = Slower
        transformCold: { block: 'immersiveengineering:concrete' }, // Block to convert to when cooled
        transformHot: { block: 'immersiveengineering:concrete' }, // Block to convert to when heated
        heatCapacity: 10000 // amount of heat the fluid can transfer before transforming
    }
    
    Block Cooling/Heating
    
    {
        block: 'immersiveengineering:concrete',
        temperature: 293, // block's native heat. Will heat/cool things based on this
        thermalResistance: 100, // How slow block transfers heat. Higher = Slower
        transformCold: { block: 'immersiveengineering:concrete' }, // Block to convert to when cooled
        transformHot: { block: 'immersiveengineering:concrete' }, // Block to convert to when heated
        heatCapacity: 10000 // amount of heat the block can transfer before transforming
    }
    
    */

    const recipes = [
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
        },
        {
            fluid: 'industrialforegoing:ether_gas',
            temperature: 204,
            thermalResistance: 10,
            transformHot: {
                block: 'minecraft:air'
            },
            heatCapacity: 200000
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:heat_properties';
        event.custom(recipe);
    });
});
