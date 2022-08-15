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
                B: 'immersiveengineering:alloybrick',
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
                B: 'immersiveengineering:blastbrick_reinforced',
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
            output: Item.of('5x mekanism:structural_glass'),
            pattern: ['CBC', 'BCB', 'CBC'],
            key: {
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
                C: 'immersiveengineering:alloybrick',
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
                E: 'pneumaticcraft:advanced_pcb'
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
            pattern: [' A ', 'BAB', 'CDC'],
            key: {
                A: '#forge:gems/nitro',
                B: '#mekanism:alloys/infused',
                C: 'mekanism:advanced_induction_cell',
                D: '#industrialforegoing:machine_frame/simple'
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
                C: Item.of('thermal:fluid_cell').ignoreNBT(),
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
                B: 'pneumaticcraft:advanced_pcb',
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
                B: 'pneumaticcraft:advanced_pcb',
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
                D: industrialforegoing.laser_lens.red
            },
            id: 'mekanism:laser_amplifier'
        },
        {
            output: 'mekanismgenerators:laser_focus_matrix',
            pattern: [' B ', 'BAB', ' B '],
            key: {
                A: 'mekanismgenerators:reactor_glass',
                B: industrialforegoing.laser_lens.red
            },
            id: 'mekanismgenerators:laser_focus_matrix'
        },
        {
            output: 'mekanism:rotary_condensentrator',
            pattern: ['ABA', 'CDE', 'FGF'],
            key: {
                A: 'immersiveengineering:steel_wallmount',
                B: 'immersiveengineering:turntable',
                C: 'mekanism:basic_chemical_tank',
                D: '#industrialforegoing:machine_frame/pity',
                E: 'mekanism:basic_fluid_tank',
                F: 'pneumaticcraft:advanced_pcb',
                G: 'thermal:rf_coil'
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
                A: '#forge:gears/osmium',
                B: 'engineersdecor:factory_hopper',
                C: '#sophisticatedbackpacks:upgrades/advanced_filter',
                D: '#industrialforegoing:machine_frame/pity',
                E: 'pneumaticcraft:advanced_pcb',
                F: 'thermal:rf_coil'
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
        },
        {
            output: 'mekanism:pressurized_reaction_chamber',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#thermal:glass/hardened',
                B: 'mekanism:basic_fluid_tank',
                C: 'mekanism:basic_chemical_tank',
                D: '#industrialforegoing:machine_frame/pity',
                E: 'pneumaticcraft:advanced_pcb',
                F: 'thermal:rf_coil'
            },
            id: 'mekanism:pressurized_reaction_chamber'
        },
        {
            output: 'mekanism:chemical_injection_chamber',
            pattern: ['ABB', 'CDG', 'EFE'],
            key: {
                A: 'immersiveengineering:toolupgrade_chemthrower_focus',
                B: 'mekanism:advanced_pressurized_tube',
                C: 'create:basin',
                D: '#industrialforegoing:machine_frame/advanced',
                E: '#forge:circuits/advanced',
                F: 'rftoolspower:cell2',
                G: 'mekanism:advanced_chemical_tank'
            },
            id: 'mekanism:chemical_injection_chamber'
        },
        {
            output: 'mekanism:chemical_crystallizer',
            pattern: ['ABC', 'DEF', 'GHG'],
            key: {
                A: 'mekanism:advanced_pressurized_tube',
                B: 'mekanismgenerators:saturating_condenser',
                C: 'create:basin',
                D: 'mekanism:advanced_chemical_tank',
                E: '#industrialforegoing:machine_frame/advanced',
                F: 'thermal:machine_chiller',
                G: '#forge:circuits/advanced',
                H: 'rftoolspower:cell2'
            },
            id: 'mekanism:chemical_crystallizer'
        },
        {
            output: 'mekanism:isotopic_centrifuge',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'resourcefulbees:elite_centrifuge_casing',
                B: 'mekanism:elite_chemical_tank',
                C: 'mekanismgenerators:reactor_glass',
                D: 'resourcefulbees:elite_centrifuge_controller',
                E: '#forge:circuits/elite',
                F: 'rftoolspower:cell3'
            },
            id: 'mekanism:isotopic_centrifuge'
        },
        {
            output: 'mekanism:chemical_oxidizer',
            pattern: ['ABC', 'DEC', 'FGF'],
            key: {
                A: 'mekanism:elite_mechanical_pipe',
                B: 'mekanism:electrolytic_separator',
                C: 'mekanism:elite_pressurized_tube',
                D: 'thermal:device_water_gen',
                E: 'mekanism:chemical_injection_chamber',
                F: '#forge:circuits/elite',
                G: 'rftoolspower:cell3'
            },
            id: 'mekanism:chemical_oxidizer'
        },
        {
            output: 'mekanism:chemical_infuser',
            pattern: ['ABA', 'BCB', 'DED'],
            key: {
                A: 'rftoolspower:blazing_agitator',
                B: 'mekanism:elite_chemical_tank',
                C: '#industrialforegoing:machine_frame/advanced',
                D: '#forge:circuits/elite',
                E: 'rftoolspower:cell3'
            },
            id: 'mekanism:chemical_infuser'
        },
        {
            output: 'mekanism:chemical_dissolution_chamber',
            pattern: ['ABB', 'CDB', 'EFE'],
            key: {
                A: 'mekanism:elite_chemical_tank',
                B: 'mekanism:elite_pressurized_tube',
                C: 'industrialforegoing:dissolution_chamber',
                D: '#industrialforegoing:machine_frame/advanced',
                E: '#forge:circuits/elite',
                F: 'rftoolspower:cell3'
            },
            id: 'mekanism:chemical_dissolution_chamber'
        },
        {
            output: 'mekanism:chemical_washer',
            pattern: ['ABB', 'CDA', 'EFE'],
            key: {
                A: 'mekanism:elite_chemical_tank',
                B: 'mekanism:elite_pressurized_tube',
                C: 'mekanism:elite_fluid_tank',
                D: '#industrialforegoing:machine_frame/supreme',
                E: '#forge:circuits/elite',
                F: 'mekanism:elite_induction_provider'
            },
            id: 'mekanism:chemical_washer'
        },
        {
            output: 'mekanism:antiprotonic_nucleosynthesizer',
            pattern: ['ABA', 'CDC', 'EBE'],
            key: {
                A: '#forge:pellets/antimatter',
                B: '#forge:circuits/ultimate',
                C: 'mekanism:supercharged_coil',
                D: 'mekanism:sps_casing',
                E: 'mekanism:ultimate_induction_provider'
            },
            id: 'mekanism:antiprotonic_nucleosynthesizer'
        },
        {
            output: 'mekanismgenerators:heat_generator',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'immersiveengineering:blastbrick_reinforced',
                B: 'powah:thermoelectric_plate',
                C: 'minecraft:blast_furnace'
            },
            id: 'mekanismgenerators:generator/heat'
        },
        {
            output: 'mekanismgenerators:gas_burning_generator',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:gears/compressed_iron',
                B: 'mekanism:basic_chemical_tank',
                C: 'pneumaticcraft:turbine_rotor',
                D: '#industrialforegoing:machine_frame/pity',
                E: 'immersiveengineering:coil_lv',
                F: 'thermal:rf_coil'
            },
            id: 'mekanismgenerators:generator/gas_burning'
        },
        {
            output: 'mekanismgenerators:bio_generator',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:gears/invar',
                B: 'mekanism:basic_fluid_tank',
                C: 'create:propeller',
                D: '#industrialforegoing:machine_frame/pity',
                E: 'immersiveengineering:coil_lv',
                F: 'thermal:rf_coil'
            },
            id: 'mekanismgenerators:generator/bio'
        },
        {
            output: 'mekanism:free_runners',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'create:precision_mechanism',
                B: 'immersiveengineering:capacitor_lv',
                C: '#forge:gears/bronze',
                D: 'immersiveengineering:toolupgrade_drill_lube',
                E: 'immersiveengineering:component_steel',
                F: 'immersiveengineering:armor_faraday_feet'
            },
            id: 'mekanism:free_runners'
        },
        {
            output: 'mekanism:electric_bow',
            pattern: [' BC', 'A C', ' BC'],
            key: {
                A: 'powah:dielectric_rod',
                B: 'powah:capacitor_hardened',
                C: '#forge:wires/aluminum'
            },
            id: 'mekanism:electric_bow'
        },
        {
            output: 'mekanism:configurator',
            pattern: ['  A', ' B ', 'C  '],
            key: {
                A: '#forge:rods/lapis',
                B: 'thermal:rf_coil',
                C: '#forge:rods/steel'
            },
            id: 'mekanism:configurator'
        },
        {
            output: 'mekanism:chargepad',
            pattern: ['AAA', 'BCB'],
            key: {
                A: 'minecraft:polished_blackstone_pressure_plate',
                B: '#forge:ingots/steel',
                C: 'thermal:rf_coil'
            },
            id: 'mekanism:chargepad'
        },
        {
            output: 'mekanism:network_reader',
            pattern: [' B ', 'ACA', ' B '],
            key: {
                A: '#forge:alloys/advanced',
                B: '#forge:ingots/steel',
                C: 'thermal:rf_coil'
            },
            id: 'mekanism:network_reader'
        },
        {
            output: 'mekanism:portable_teleporter',
            pattern: ['ABA', 'CDC'],
            key: {
                A: 'thermal:rf_coil',
                B: 'mekanism:teleportation_core',
                C: '#forge:plates/steel',
                D: 'rftoolsbase:tablet'
            },
            id: 'mekanism:portable_teleporter'
        },
        {
            output: 'mekanism:formulaic_assemblicator',
            pattern: ['ABA', 'BCB', 'DED'],
            key: {
                A: 'create:electron_tube',
                B: '#forge:gears/brass',
                C: 'create:mechanical_crafter',
                D: '#forge:plates/lead',
                E: 'thermal:rf_coil'
            },
            id: 'mekanism:formulaic_assemblicator'
        },
        {
            output: Item.of('8x mekanism:crafting_formula'),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:paper',
                B: 'create:electron_tube'
            },
            id: 'mekanism:crafting_formula'
        },
        {
            output: `mekanism:basic_bin`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:lime_terracotta',
                B: 'minecraft:smooth_stone',
                C: '#forge:ingots/copper'
            },
            id: `mekanism:bin/basic`
        },
        {
            output: `mekanism:advanced_bin`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:red_terracotta',
                B: 'minecraft:smooth_stone',
                C: '#forge:ingots/bronze'
            },
            id: `mekanism:bin/advanced`
        },
        {
            output: `mekanism:elite_bin`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:light_blue_terracotta',
                B: 'minecraft:smooth_stone',
                C: '#forge:ingots/brass'
            },
            id: `mekanism:bin/elite`
        },
        {
            output: `mekanism:ultimate_bin`,
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:blue_terracotta',
                B: 'minecraft:smooth_stone',
                C: '#forge:ingots/hepatizon'
            },
            id: `mekanism:bin/ultimate`
        },
        {
            output: `mekanism:logistical_sorter`,
            pattern: ['ABA', 'ACA', 'EDE'],
            key: {
                A: 'immersiveengineering:sheetmetal_colored_black',
                B: 'prettypipes:medium_extraction_module',
                C: 'prettypipes:medium_filter_module',
                D: 'prettypipes:round_robin_sorting_modifier',
                E: '#forge:plates/iron_osmium'
            },
            id: `mekanism:logistical_sorter`
        },
        {
            output: Item.of(`8x mekanism:basic_logistical_transporter`),
            pattern: ['ABA'],
            key: {
                A: '#forge:ingots/steel',
                B: 'pneumaticcraft:logistics_core'
            },
            id: `mekanism:transmitter/logistical_transporter/basic`
        },
        {
            output: `mekanism:painting_machine`,
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:plastic',
                B: 'create:nozzle',
                C: 'mekanism:dye_base',
                D: '#industrialforegoing:machine_frame/pity',
                E: '#forge:gears/osmium',
                F: 'thermal:rf_coil'
            },
            id: `mekanism:painting_machine`
        },
        {
            output: `mekanism:pigment_mixer`,
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:plastic',
                B: 'immersiveengineering:turntable',
                C: 'mekanism:hdpe_rod',
                D: '#industrialforegoing:machine_frame/pity',
                E: '#forge:gears/osmium',
                F: 'thermal:rf_coil'
            },
            id: `mekanism:pigment_mixer`
        },
        {
            output: `mekanism:pigment_extractor`,
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: '#forge:plastic',
                B: 'ppfluids:high_fluid_retrieval_module',
                C: 'mekanism:basic_fluid_tank',
                D: '#industrialforegoing:machine_frame/pity',
                E: '#forge:gears/osmium',
                F: 'thermal:rf_coil'
            },
            id: `mekanism:pigment_extractor`
        },
        {
            output: `mekanism:security_desk`,
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'rftoolsbase:tablet',
                B: 'refinedstorage:security_card',
                C: '#industrialforegoing:machine_frame/simple',
                D: '#forge:circuits/advanced',
                E: 'rftoolspower:cell1'
            },
            id: `mekanism:security_desk`
        },
        {
            output: `mekanism:modification_station`,
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'rftoolsbase:tablet',
                B: 'pneumaticcraft:assembly_io_unit_import',
                C: '#industrialforegoing:machine_frame/simple',
                D: '#forge:circuits/advanced',
                E: 'rftoolspower:cell1'
            },
            id: `mekanism:modification_station`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
