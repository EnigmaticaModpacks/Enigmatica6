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
        },
        {
            output: 'mekanismgenerators:fission_fuel_assembly',
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: '#forge:rods/cobalt',
                B: 'mekanism:elite_pressurized_tube',
                C: 'thermal:machine_frame'
            },
            id: 'mekanismgenerators:fission_reactor/fuel_assembly'
        },
        {
            output: 'mekanismgenerators:control_rod_assembly',
            pattern: ['DCD', 'EFE', 'ABA'],
            key: {
                A: '#forge:rods/cobalt',
                B: 'mekanism:elite_pressurized_tube',
                C: 'thermal:machine_frame',
                D: 'thermal:redstone_servo',
                E: '#forge:gears/cobalt',
                F: '#forge:circuits/elite'
            },
            id: 'mekanismgenerators:fission_reactor/control_rod_assembly'
        },
        {
            output: Item.of('2x mekanism:sps_port'),
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'mekanism:sps_casing',
                B: 'mekanism:ultimate_universal_cable',
                C: 'mekanism:ultimate_pressurized_tube',
                D: '#forge:circuits/ultimate'
            },
            id: 'mekanism:sps_port'
        },
        {
            output: 'mekanismgenerators:fission_reactor_port',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'mekanismgenerators:fission_reactor_casing',
                B: 'create:copper_valve_handle',
                C: 'create:fluid_pipe',
                D: 'create:fluid_valve',
                E: '#forge:circuits/elite'
            },
            id: 'mekanismgenerators:fission_reactor/port'
        },
        {
            output: 'mekanism:laser',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'industrialforegoing:laser_lens14',
                B: '#mekanism:alloys/infused',
                C: '#forge:gems/nitro',
                D: 'mekanism:advanced_induction_cell',
                E: '#industrialforegoing:machine_frame/supreme'
            },
            id: 'mekanism:laser'
        },
        {
            output: Item.of('2x mekanism:induction_port'),
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'mekanism:induction_casing',
                B: '#forge:circuits/elite',
                C: 'rftoolsbase:tablet'
            },
            id: 'mekanism:induction/port'
        },
        {
            output: 'mekanism:electrolytic_separator',
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: '#forge:gears/osmium',
                B: 'mekanism:electrolytic_core',
                C: 'thermal:fluid_cell',
                D: 'thermal:machine_frame'
            },
            id: 'mekanism:electrolytic_separator'
        },
        {
            output: 'mekanism:electrolytic_core',
            pattern: ['ABA', 'CBD', 'ABA'],
            key: {
                A: 'immersiveengineering:wirecoil_copper',
                B: 'thermal:diving_fabric',
                C: '#forge:plates/zinc',
                D: '#forge:plates/aluminum'
            },
            id: 'mekanism:electrolytic_core'
        },
        {
            output: 'mekanism:jetpack',
            pattern: ['ABA', 'CDC', 'E E'],
            key: {
                A: '#forge:plates/bronze',
                B: 'immersiveengineering:logic_circuit',
                C: 'create:copper_backtank',
                D: 'thermal:hazmat_chestplate',
                E: 'immersiveengineering:toolupgrade_chemthrower_focus'
            },
            id: 'mekanism:jetpack'
        },
        {
            output: 'mekanism:jetpack_armored',
            pattern: ['A A', 'BCB', ' D '],
            key: {
                A: '#forge:gears/aluminum',
                B: '#forge:plates/signalum',
                C: ['mekanismtools:steel_chestplate', 'immersiveengineering:armor_steel_chest'],
                D: 'mekanism:jetpack'
            },
            id: 'mekanism:jetpack_armored'
        },
        {
            output: 'mekanismgenerators:solar_panel',
            pattern: ['AAA', 'AAA', 'BBB'],
            key: {
                A: 'quark:blue_framed_glass_pane',
                B: 'powah:thermoelectric_plate'
            },
            id: 'mekanismgenerators:solar_panel'
        },
        {
            output: 'mekanismgenerators:solar_generator',
            pattern: ['ABA', 'ACA', ' D '],
            key: {
                A: 'mekanismgenerators:solar_panel',
                B: 'immersiveengineering:logic_circuit',
                C: 'thermal:redstone_servo',
                D: 'engineersdecor:thick_steel_pole_head'
            },
            id: 'mekanismgenerators:generator/solar'
        },
        {
            output: 'mekanismgenerators:advanced_solar_generator',
            pattern: ['ACA', 'ABA', ' D '],
            key: {
                A: 'mekanismgenerators:solar_generator',
                B: 'engineersdecor:thick_steel_pole',
                C: 'thermal:redstone_servo',
                D: 'engineersdecor:thick_steel_pole_head'
            },
            id: 'mekanismgenerators:generator/advanced_solar'
        },
        {
            output: Item.of('2x mekanismgenerators:fusion_reactor_port'),
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'mekanismgenerators:fusion_reactor_frame',
                B: 'mekanism:ultimate_universal_cable',
                C: 'mekanism:ultimate_pressurized_tube',
                D: '#forge:circuits/ultimate'
            },
            id: 'mekanismgenerators:reactor/port'
        },
        {
            output: 'mekanism:laser_amplifier',
            pattern: ['ABA', 'BCD', 'ABA'],
            key: {
                A: '#mekanism:alloys/infused',
                B: 'mekanismgenerators:laser_focus_matrix',
                C: 'mekanism:basic_induction_cell',
                D: 'industrialforegoing:laser_lens14'
            },
            id: 'mekanism:laser_amplifier'
        },
        {
            output: 'mekanismgenerators:laser_focus_matrix',
            pattern: [' B ', 'BAB', ' B '],
            key: {
                A: 'mekanismgenerators:reactor_glass',
                B: 'industrialforegoing:laser_lens14'
            },
            id: 'mekanismgenerators:laser_focus_matrix'
        },
        {
            output: 'mekanism:rotary_condensentrator',
            pattern: ['ABA', 'CDE', 'FGF'],
            key: {
                A: 'immersiveengineering:steel_wallmount',
                B: 'immersiveengineering:turntable',
                C: 'mekanism:advanced_chemical_tank',
                D: '#industrialforegoing:machine_frame/simple',
                E: 'mekanism:advanced_fluid_tank',
                F: '#forge:circuits/basic',
                G: 'rftoolspower:cell1'
            },
            id: 'mekanism:rotary_condensentrator'
        },
        {
            output: 'mekanism:enrichment_chamber',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: Item.of('immersiveengineering:graphite_electrode', '{graphDmg:0}'),
                B: 'minecraft:cauldron',
                C: 'mekanism:basic_induction_cell',
                D: '#industrialforegoing:machine_frame/simple',
                E: '#forge:circuits/basic',
                F: 'rftoolspower:cell1'
            },
            id: 'mekanism:enrichment_chamber'
        },
        {
            output: 'mekanism:crusher',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:gears/compressed_iron',
                B: 'engineersdecor:factory_hopper',
                C: 'create:filter',
                D: '#industrialforegoing:machine_frame/simple',
                E: '#forge:circuits/basic',
                F: 'rftoolspower:cell1'
            },
            id: 'mekanism:crusher'
        },
        {
            output: 'mekanism:energized_smelter',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'immersiveengineering:blastbrick_reinforced',
                B: 'minecraft:cauldron',
                C: 'immersiveengineering:coil_hv',
                D: '#industrialforegoing:machine_frame/simple',
                E: '#forge:circuits/basic',
                F: 'rftoolspower:cell1'
            },
            id: 'mekanism:energized_smelter'
        },
        {
            output: 'mekanism:precision_sawmill',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'create:rotation_speed_controller',
                B: 'immersiveengineering:rockcutter',
                C: 'immersiveengineering:heavy_engineering',
                D: '#industrialforegoing:machine_frame/simple',
                E: '#forge:circuits/basic',
                F: 'rftoolspower:cell1'
            },
            id: 'mekanism:precision_sawmill'
        },
        {
            output: 'mekanism:nutritional_liquifier',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'immersiveengineering:steel_wallmount',
                B: 'immersiveengineering:turntable',
                C: 'mekanism:advanced_chemical_tank',
                D: '#industrialforegoing:machine_frame/simple',
                E: '#forge:circuits/basic',
                F: 'rftoolspower:cell1'
            },
            id: 'mekanism:nutritional_liquifier'
        },
        {
            output: 'mekanism:electric_pump',
            pattern: ['ABC', 'ADC', 'AEC'],
            key: {
                A: 'mekanism:dynamic_tank',
                B: 'create:mechanical_pump',
                C: 'create:fluid_pipe',
                D: 'supplementaries:cog_block',
                E: 'immersiveengineering:turntable'
            },
            id: 'mekanism:electric_pump'
        },
        {
            output: 'mekanism:fluidic_plenisher',
            pattern: ['AEC', 'ADC', 'ABC'],
            key: {
                A: 'mekanism:dynamic_tank',
                B: 'create:mechanical_pump',
                C: 'create:fluid_pipe',
                D: 'supplementaries:cog_block',
                E: 'immersiveengineering:turntable'
            },
            id: 'mekanism:fluidic_plenisher'
        },
        {
            output: 'mekanism:purification_chamber',
            pattern: ['AAA', 'BDC', 'EFE'],
            key: {
                A: 'architects_palette:abyssaline_lamp',
                B: 'glassential:glass_dark',
                C: 'mekanism:advanced_chemical_tank',
                D: '#industrialforegoing:machine_frame/advanced',
                E: '#forge:circuits/advanced',
                F: 'rftoolspower:cell2'
            },
            id: 'mekanism:purification_chamber'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
