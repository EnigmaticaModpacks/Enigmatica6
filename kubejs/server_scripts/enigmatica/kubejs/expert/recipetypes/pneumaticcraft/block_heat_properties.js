onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/pneumaticcraft/block_heat_properties/';

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
            fluid: 'immersiveengineering:concrete',
            temperature: 333,
            thermalResistance: 100,
            transformCold: { block: 'immersiveengineering:concrete' },
            heatCapacity: 10000,
            id: `${id_prefix}concrete`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:heat_properties';
        event.custom(recipe).id(recipe.id);
    });
});
