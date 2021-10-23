onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/mekanism/';

    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    const recipes = [
        {
            output: 'mekanism:fuelwood_heater',
            pattern: ['BAB', 'CDC', 'BAB'],
            key: {
                A: '#forge:plates/copper',
                B: 'engineersdecor:clinker_brick_block',
                C: 'environmental:kiln',
                D: 'thermal:machine_frame'
            },
            id: 'mekanism:fuelwood_heater'
        },
        {
            output: 'mekanism:resistive_heater',
            pattern: ['BEB', 'CDC', 'BAB'],
            key: {
                A: '#forge:circuits/advanced',
                B: 'engineersdecor:clinker_brick_block',
                C: 'immersiveengineering:coil_hv',
                D: '#industrialforegoing:machine_frame/simple',
                E: 'pneumaticcraft:heat_sink'
            },
            id: 'mekanism:resistive_heater'
        },
        {
            output: 'mekanism:metallurgic_infuser',
            pattern: ['ACA', 'BDB', 'AEA'],
            key: {
                A: '#forge:gears/osmium',
                B: '#forge:circuits/basic',
                C: 'rftoolspower:blazing_agitator',
                D: 'thermal:machine_bottler',
                E: 'rftoolspower:cell1'
            },
            id: 'mekanism:metallurgic_infuser'
        },
        {
            output: 'mekanism:thermal_evaporation_controller',
            pattern: ['AAA', 'BCD', 'AAA'],
            key: {
                A: 'mekanism:thermal_evaporation_block',
                B: '#forge:circuits/elite',
                C: '#industrialforegoing:machine_frame/advanced',
                D: 'rftoolsbase:tablet'
            },
            id: 'mekanism:thermal_evaporation/controller'
        },
        {
            output: Item.of('2x mekanism:thermal_evaporation_block'),
            pattern: ['ADA', 'BCB', 'ADA'],
            key: {
                A: '#forge:plates/bronze',
                B: 'pneumaticcraft:heat_pipe',
                C: 'immersiveengineering:alloybrick',
                D: '#mekanism:alloys/reinforced'
            },
            id: 'mekanism:thermal_evaporation/block'
        },
        {
            output: 'mekanism:thermal_evaporation_valve',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'mekanism:thermal_evaporation_block',
                B: 'create:copper_valve_handle',
                C: 'create:fluid_pipe',
                D: 'create:fluid_valve',
                E: '#forge:circuits/elite'
            },
            id: 'mekanism:thermal_evaporation/valve'
        },
        {
            output: Item.of('3x mekanism:structural_glass'),
            pattern: ['ABC', 'BCB', 'CBA'],
            key: {
                A: '#mekanism:alloys/reinforced',
                B: '#forge:plates/aluminum',
                C: '#thermal:glass/hardened'
            },
            id: 'mekanism:structural_glass'
        },
        {
            output: 'mekanism:steel_casing',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:plates/steel',
                B: '#mekanism:alloys/infused',
                C: 'thermal:machine_frame'
            },
            id: 'mekanism:steel_casing'
        },
        {
            output: 'mekanism:boiler_valve',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'mekanism:boiler_casing',
                B: 'create:copper_valve_handle',
                C: 'create:fluid_pipe',
                D: 'create:fluid_valve',
                E: '#forge:circuits/elite'
            },
            id: 'mekanism:boiler_valve'
        },
        {
            output: Item.of('2x mekanism:boiler_casing'),
            pattern: ['ADA', 'BCB', 'ADA'],
            key: {
                A: '#forge:plates/constantan',
                B: 'pneumaticcraft:heat_pipe',
                C: 'mekanism:steel_casing',
                D: '#mekanism:alloys/reinforced'
            },
            id: 'mekanism:boiler_casing'
        },
        {
            output: 'mekanism:superheating_element',
            pattern: ['AAA', 'DCD', 'BDB'],
            key: {
                A: 'pneumaticcraft:heat_sink',
                B: 'pneumaticcraft:heat_pipe',
                C: 'mekanism:steel_casing',
                D: 'immersiveengineering:coil_mv'
            },
            id: 'mekanism:superheating_element'
        },
        {
            output: 'mekanism:pressure_disperser',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'pneumaticcraft:advanced_pressure_tube',
                B: 'mekanism:steel_casing'
            },
            id: 'mekanism:pressure_disperser'
        },
        {
            output: 'mekanism:dynamic_valve',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'mekanism:dynamic_tank',
                B: 'create:copper_valve_handle',
                C: 'create:fluid_pipe',
                D: 'create:fluid_valve',
                E: ['immersiveengineering:logic_circuit', 'pneumaticcraft:printed_circuit_board']
            },
            id: 'mekanism:dynamic_valve'
        },
        {
            output: Item.of('8x mekanism:dynamic_tank'),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'immersiveengineering:sheetmetal_colored_black',
                B: '#immersiveengineering:scaffoldings/aluminum'
            },
            id: 'mekanism:dynamic_tank'
        },
        {
            output: Item.of('2x mekanismgenerators:turbine_casing'),
            pattern: ['ADA', 'BCB', 'ADA'],
            key: {
                A: '#forge:plates/aluminum',
                B: 'mekanism:hdpe_sheet',
                C: 'mekanism:steel_casing',
                D: '#mekanism:alloys/reinforced'
            },
            id: 'mekanismgenerators:turbine/casing'
        },
        {
            output: 'mekanismgenerators:turbine_valve',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'mekanismgenerators:turbine_casing',
                B: 'create:copper_valve_handle',
                C: 'create:fluid_pipe',
                D: 'create:fluid_valve',
                E: '#forge:circuits/elite'
            },
            id: 'mekanismgenerators:turbine/valve'
        },
        {
            output: Item.of('2x mekanismgenerators:turbine_vent'),
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'mekanismgenerators:turbine_casing',
                B: 'create:fluid_pipe',
                C: 'engineersdecor:straight_pipe_valve'
            },
            id: 'mekanismgenerators:turbine/vent'
        },
        {
            output: 'mekanismgenerators:saturating_condenser',
            pattern: ['BAB', 'BCB', 'BBB'],
            key: {
                A: 'pneumaticcraft:heat_sink',
                B: 'create:fluid_pipe',
                C: 'mekanism:steel_casing'
            },
            id: 'mekanismgenerators:saturating_condenser'
        },
        {
            output: 'mekanismgenerators:electromagnetic_coil',
            pattern: ['CAC', 'ABA', 'CAC'],
            key: {
                A: 'immersiveengineering:coil_lv',
                B: '#industrialforegoing:machine_frame/supreme',
                C: 'mekanism:basic_induction_cell'
            },
            id: 'mekanismgenerators:electromagnetic_coil'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
