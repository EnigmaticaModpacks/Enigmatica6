onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/pneumaticcraft/thermo_plant/';

    const recipes = [
        {
            type: 'pneumaticcraft:thermo_plant',
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'sophisticatedbackpacks:xp_still', amount: 1000 },
            fluid_output: { fluid: 'industrialforegoing:essence', amount: 1000 },
            pressure: 1.0,
            speed: 5.0,
            exothermic: false,
            id: `${id_prefix}if_memory_essence_from_sbp_essence`
        },
        {
            type: 'pneumaticcraft:thermo_plant',
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'industrialforegoing:essence', amount: 1000 },
            fluid_output: { fluid: 'cofh_core:experience', amount: 1000 },
            pressure: 1.0,
            speed: 5.0,
            exothermic: false,
            id: `${id_prefix}cofh_experience_from_if_essence`
        },
        {
            type: 'pneumaticcraft:thermo_plant',
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'cofh_core:experience', amount: 1000 },
            fluid_output: { fluid: 'pneumaticcraft:memory_essence', amount: 1000 },
            pressure: 1.0,
            speed: 5.0,
            exothermic: false,
            id: `${id_prefix}pnc_essence_from_cofh_experience`
        },
        {
            type: 'pneumaticcraft:thermo_plant',
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'pneumaticcraft:memory_essence', amount: 1000 },
            fluid_output: { fluid: 'sophisticatedbackpacks:xp_still', amount: 1000 },
            pressure: 1.0,
            speed: 5.0,
            exothermic: false,
            id: `${id_prefix}sbp_essence_from_pnc_experience`
        },
        {
            type: 'pneumaticcraft:thermo_plant',
            item_input: { tag: 'forge:terracotta' },
            item_output: { item: 'minecraft:clay' },
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'minecraft:water', amount: 10 },
            pressure: 2.0,
            speed: 2.0,
            exothermic: false,
            temperature: { min_temp: 373 },
            id: `${id_prefix}clay`
        },
        {
            type: 'pneumaticcraft:thermo_plant',
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'thermal:sap', amount: 20 },
            fluid_output: { fluid: 'thermal:syrup', amount: 1 },
            speed: 10.0,
            exothermic: false,
            temperature: { min_temp: 377 },
            id: `${id_prefix}syrup`
        },
        {
            type: 'pneumaticcraft:thermo_plant',
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'thermal:syrup', amount: 25 },
            item_output: { item: 'minecraft:sugar', count: 2 },
            speed: 10.0,
            exothermic: false,
            temperature: { min_temp: 377 },
            id: `${id_prefix}sugar`
        },
        {
            type: 'pneumaticcraft:thermo_plant',
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'thermal:resin', amount: 400 },
            fluid_output: { fluid: 'thermal:tree_oil', amount: 200 },
            item_output: { item: 'thermal:rosin', count: 1 },
            exothermic: false,
            temperature: { min_temp: 377 },
            id: `${id_prefix}tree_oil_with_rosin`
        }
    ];

    recipes.forEach((recipe) => {
        event.custom(recipe).id(recipe.id);
    });
});
