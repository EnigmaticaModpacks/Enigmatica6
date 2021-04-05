events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                type: 'pneumaticcraft:thermo_plant',
                fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'industrialforegoing:essence', amount: 1000 },
                fluid_output: { fluid: 'pneumaticcraft:memory_essence', amount: 1000 },
                pressure: 1.0,
                speed: 5.0,
                exothermic: false
            },
            {
                type: 'pneumaticcraft:thermo_plant',
                fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'pneumaticcraft:memory_essence', amount: 1000 },
                fluid_output: { fluid: 'industrialforegoing:essence', amount: 1000 },
                pressure: 1.0,
                speed: 5.0,
                exothermic: false
            },
            {
                type: 'pneumaticcraft:thermo_plant',
                item_input: { tag: 'integrateddynamics:menril_logs' },
                item_output: { item: 'integrateddynamics:crystalized_menril_chunk', count: 4 },
                fluid_output: { fluid: 'integrateddynamics:menril_resin', amount: 1000 },
                pressure: 3.0,
                exothermic: false
            },
            {
                type: 'pneumaticcraft:thermo_plant',
                item_input: { item: 'integrateddynamics:menril_planks' },
                item_output: { item: 'integrateddynamics:crystalized_menril_chunk' },
                fluid_output: { fluid: 'integrateddynamics:menril_resin', amount: 250 },
                pressure: 3.0,
                exothermic: false
            },
            {
                type: 'pneumaticcraft:thermo_plant',
                item_input: { item: 'minecraft:popped_chorus_fruit' },
                item_output: { item: 'integrateddynamics:crystalized_chorus_chunk', count: 4 },
                fluid_output: { fluid: 'integrateddynamics:liquid_chorus', amount: 125 },
                pressure: 3.0,
                exothermic: false
            },
            {
                type: 'pneumaticcraft:thermo_plant',
                item_input: { item: 'integrateddynamics:proto_chorus' },
                item_output: { item: 'integrateddynamics:crystalized_chorus_chunk', count: 2 },
                fluid_output: { fluid: 'integrateddynamics:liquid_chorus', amount: 125 },
                pressure: 3.0,
                exothermic: false
            },
            {
                type: 'pneumaticcraft:thermo_plant',
                item_input: { tag: 'forge:glass/colorless' },
                item_output: { item: 'integratedterminals:menril_glass' },
                fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'integrateddynamics:menril_resin', amount: 1000 },
                pressure: 3.0,
                exothermic: false,
                temperature: { min_temp: 1273 }
            },
            {
                type: 'pneumaticcraft:thermo_plant',
                item_input: { tag: 'forge:glass/colorless' },
                item_output: { item: 'integratedterminals:chorus_glass' },
                fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'integrateddynamics:liquid_chorus', amount: 1000 },
                pressure: 3.0,
                exothermic: false,
                temperature: { min_temp: 1273 }
            },
            {
                type: 'pneumaticcraft:thermo_plant',
                item_input: { tag: 'forge:terracotta' },
                item_output: { item: 'minecraft:clay' },
                fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'minecraft:water', amount: 10 },
                pressure: 2.0,
                speed: 2.0,
                exothermic: false,
                temperature: { min_temp: 373 }
            },
            {
                type: 'pneumaticcraft:thermo_plant',
                fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'thermal:sap', amount: 20 },
                fluid_output: { fluid: 'thermal:syrup', amount: 1 },
                speed: 10.0,
                exothermic: false,
                temperature: { min_temp: 377 }
            },
            {
                type: 'pneumaticcraft:thermo_plant',
                fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'thermal:syrup', amount: 25 },
                item_output: { item: 'minecraft:sugar', count: 2 },
                speed: 10.0,
                exothermic: false,
                temperature: { min_temp: 377 }
            },
            {
                type: 'pneumaticcraft:thermo_plant',
                fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'thermal:resin', amount: 400 },
                fluid_output: { fluid: 'thermal:tree_oil', amount: 200 },
                item_output: { item: 'thermal:rosin', count: 1 },
                exothermic: false,
                temperature: { min_temp: 377 }
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom(recipe);
    });
});
