onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/masterful_machinery/shaped';
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
            output: 'masterfulmachinery:auto_iridescent_altar_item_port_items_input',
            pattern: ['BEB', 'ACA', 'BDB'],
            key: {
                A: '#forge:plates/steel',
                B: 'mekanism:ultimate_logistical_transporter',
                C: 'pneumaticcraft:smart_chest',
                D: 'xnet:advanced_connector_green',
                E: 'astralsorcery:resonating_gem'
            },
            id: `${id_prefix}auto_iridescent_altar_item_port_items_input`
        },
        {
            output: 'masterfulmachinery:auto_iridescent_altar_item_port_items_output',
            pattern: ['BEB', 'ACA', 'BDB'],
            key: {
                A: '#forge:plates/steel',
                B: 'mekanism:ultimate_logistical_transporter',
                C: 'pneumaticcraft:smart_chest',
                D: 'xnet:advanced_connector_red',
                E: 'astralsorcery:resonating_gem'
            },
            id: `${id_prefix}auto_iridescent_altar_item_port_items_output`
        },
        {
            output: 'masterfulmachinery:auto_iridescent_altar_fluid_port_fluids_input',
            pattern: ['BEB', 'ACA', 'BDB'],
            key: {
                A: '#forge:plates/steel',
                B: 'mekanism:ultimate_mechanical_pipe',
                C: 'pneumaticcraft:huge_tank',
                D: 'xnet:advanced_connector_green',
                E: 'astralsorcery:resonating_gem'
            },
            id: `${id_prefix}auto_iridescent_altar_fluid_port_fluids_input`
        },
        {
            output: 'masterfulmachinery:auto_iridescent_altar_energy_port_energy_input',
            pattern: ['BEB', 'ACA', 'BDB'],
            key: {
                A: '#forge:plates/steel',
                B: 'mekanism:ultimate_universal_cable',
                C: 'mekanism:ultimate_induction_provider',
                D: 'xnet:advanced_connector_green',
                E: 'astralsorcery:resonating_gem'
            },
            id: `${id_prefix}auto_iridescent_altar_energy_port_energy_input`
        },
        {
            output: 'masterfulmachinery:advanced_assembly_table_high_pressure_port_pncr_pressure_input',
            pattern: ['BDB', 'ACA', 'BAB'],
            key: {
                A: '#forge:alloys/elite',
                B: 'pneumaticcraft:advanced_pressure_tube',
                C: '#industrialforegoing:machine_frame/simple',
                D: '#forge:ingots/compressed_iron'
            },
            id: `${id_prefix}advanced_assembly_table_high_pressure_port_pncr_pressure_input`
        },
        {
            output: 'masterfulmachinery:advanced_assembly_table_controller',
            pattern: ['BAB', 'DCD', 'BDB'],
            key: {
                A: 'rftoolsbase:tablet',
                B: 'pneumaticcraft:advanced_pressure_tube',
                C: '#industrialforegoing:machine_frame/supreme',
                D: '#forge:alloys/elite'
            },
            id: `${id_prefix}advanced_assembly_table_controller`
        },
        {
            output: 'masterfulmachinery:advanced_assembly_table_item_port_items_input',
            pattern: ['BAB', 'ACA', 'BDB'],
            key: {
                A: '#forge:alloys/elite',
                B: 'pneumaticcraft:advanced_pressure_tube',
                C: 'pneumaticcraft:pressure_chamber_valve',
                D: 'thermal:lime_rockwool'
            },
            id: `${id_prefix}advanced_assembly_table_item_port_items_input`
        },
        {
            output: 'masterfulmachinery:advanced_assembly_table_item_port_items_output',
            pattern: ['BAB', 'ACA', 'BDB'],
            key: {
                A: '#forge:alloys/elite',
                B: 'pneumaticcraft:advanced_pressure_tube',
                C: 'pneumaticcraft:pressure_chamber_valve',
                D: 'thermal:red_rockwool'
            },
            id: `${id_prefix}advanced_assembly_table_item_port_items_output`
        },
        {
            output: Item.of('2x masterfulmachinery:stellar_neutron_activator_mana_port_botania_mana_input'),
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'kubejs:observatory_lens',
                B: 'botania:mana_diamond_block',
                C: '#botania:runes/mana',
                D: 'botania:fabulous_pool'
            },
            id: `${id_prefix}stellar_neutron_activator_mana_port_botania_mana_input`
        },
        {
            output: 'masterfulmachinery:stellar_neutron_activator_fluid_port_fluids_input',
            pattern: ['BEB', 'ACA', 'BDB'],
            key: {
                A: 'immersiveengineering:hempcrete',
                B: 'mekanism:ultimate_mechanical_pipe',
                C: 'pneumaticcraft:huge_tank',
                D: 'xnet:advanced_connector_green',
                E: 'mekanism:hdpe_sheet'
            },
            id: `${id_prefix}stellar_neutron_activator_fluid_port_fluids_input`
        },
        {
            output: 'masterfulmachinery:stellar_neutron_activator_fluid_port_fluids_output',
            pattern: ['BEB', 'ACA', 'BDB'],
            key: {
                A: 'immersiveengineering:hempcrete',
                B: 'mekanism:ultimate_mechanical_pipe',
                C: 'pneumaticcraft:huge_tank',
                D: 'xnet:advanced_connector_red',
                E: 'mekanism:hdpe_sheet'
            },
            id: `${id_prefix}stellar_neutron_activator_fluid_port_fluids_output`
        },
        {
            output: 'masterfulmachinery:stellar_neutron_activator_energy_port_energy_input',
            pattern: ['BEB', 'ACA', 'BDB'],
            key: {
                A: 'immersiveengineering:hempcrete',
                B: 'mekanism:ultimate_universal_cable',
                C: 'mekanism:ultimate_induction_provider',
                D: 'xnet:advanced_connector_green',
                E: 'mekanism:hdpe_sheet'
            },
            id: `${id_prefix}stellar_neutron_activator_energy_port_energy_input`
        },
        {
            output: 'masterfulmachinery:gaia_reactor_energy_port_energy_input',
            pattern: ['BEB', 'ACA', 'BDB'],
            key: {
                A: '#forge:plates/steel',
                B: 'mekanism:ultimate_universal_cable',
                C: 'mekanism:ultimate_induction_provider',
                D: 'xnet:advanced_connector_green',
                E: '#forge:ingots/terrasteel'
            },
            id: `${id_prefix}gaia_reactor_energy_port_energy_input`
        },
        {
            output: 'masterfulmachinery:gaia_reactor_high_pressure_port_pncr_pressure_input',
            pattern: ['BDB', 'ACA', 'BAB'],
            key: {
                A: '#forge:alloys/elite',
                B: 'pneumaticcraft:advanced_pressure_tube',
                C: '#industrialforegoing:machine_frame/simple',
                D: '#forge:ingots/terrasteel'
            },
            id: `${id_prefix}gaia_reactor_high_pressure_port_pncr_pressure_input`
        },
        {
            output: 'masterfulmachinery:gaia_reactor_fluid_port_fluids_input',
            pattern: ['BEB', 'ACA', 'BDB'],
            key: {
                A: '#forge:plates/steel',
                B: 'mekanism:ultimate_mechanical_pipe',
                C: 'pneumaticcraft:huge_tank',
                D: 'xnet:advanced_connector_green',
                E: '#forge:ingots/terrasteel'
            },
            id: `${id_prefix}gaia_reactor_fluid_port_fluids_input`
        },
        {
            output: 'masterfulmachinery:gaia_reactor_item_port_items_output',
            pattern: ['BEB', 'ACA', 'BDB'],
            key: {
                A: '#forge:plates/steel',
                B: 'mekanism:ultimate_logistical_transporter',
                C: 'pneumaticcraft:smart_chest',
                D: 'xnet:advanced_connector_red',
                E: '#forge:ingots/terrasteel'
            },
            id: `${id_prefix}gaia_reactor_item_port_items_output`
        },
        {
            output: Item.of('2x masterfulmachinery:gaia_reactor_mana_port_botania_mana_output'),
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'botania:life_essence',
                B: '#forge:storage_blocks/bronze',
                C: '#botania:runes/mana',
                D: 'botania:fabulous_pool'
            },
            id: `${id_prefix}gaia_reactor_mana_port_botania_mana_output`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
