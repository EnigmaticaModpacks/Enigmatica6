onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/pneumaticcraft/thermo_plant/';
    const recipes = [
        {
            type: 'pneumaticcraft:thermo_plant',
            item_input: { tag: 'integrateddynamics:menril_logs' },
            item_output: { item: 'integrateddynamics:crystalized_menril_chunk', count: 4 },
            fluid_output: { fluid: 'integrateddynamics:menril_resin', amount: 1000 },
            pressure: 3.0,
            exothermic: false,
            id: `${id_prefix}crystalized_menril_chunk_with_resin_from_logs`
        },
        {
            type: 'pneumaticcraft:thermo_plant',
            item_input: { item: 'integrateddynamics:menril_planks' },
            item_output: { item: 'integrateddynamics:crystalized_menril_chunk' },
            fluid_output: { fluid: 'integrateddynamics:menril_resin', amount: 250 },
            pressure: 3.0,
            exothermic: false,
            id: `${id_prefix}crystalized_menril_chunk_with_resin_from_planks`
        },
        {
            type: 'pneumaticcraft:thermo_plant',
            item_input: { item: 'minecraft:popped_chorus_fruit' },
            item_output: { item: 'integrateddynamics:crystalized_chorus_chunk', count: 4 },
            fluid_output: { fluid: 'integrateddynamics:liquid_chorus', amount: 125 },
            pressure: 3.0,
            exothermic: false,
            id: `${id_prefix}crystalized_chorus_chunk_with_liquid_from_chorus_fruit`
        },
        {
            type: 'pneumaticcraft:thermo_plant',
            item_input: { item: 'integrateddynamics:proto_chorus' },
            item_output: { item: 'integrateddynamics:crystalized_chorus_chunk', count: 2 },
            fluid_output: { fluid: 'integrateddynamics:liquid_chorus', amount: 125 },
            pressure: 3.0,
            exothermic: false,
            id: `${id_prefix}crystalized_chorus_chunk_with_liquid_from_proto_chorus`
        },
        {
            type: 'pneumaticcraft:thermo_plant',
            item_input: { tag: 'forge:glass/colorless' },
            item_output: { item: 'integratedterminals:menril_glass' },
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'integrateddynamics:menril_resin', amount: 1000 },
            pressure: 3.0,
            exothermic: false,
            temperature: { min_temp: 1273 },
            id: `${id_prefix}menril_glass`
        },
        {
            type: 'pneumaticcraft:thermo_plant',
            item_input: { tag: 'forge:glass/colorless' },
            item_output: { item: 'integratedterminals:chorus_glass' },
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'integrateddynamics:liquid_chorus', amount: 1000 },
            pressure: 3.0,
            exothermic: false,
            temperature: { min_temp: 1273 },
            id: `${id_prefix}chorus_glass`
        }
    ];

    recipes.forEach((recipe) => {
        event.custom(recipe).id(recipe.id);
    });
});
