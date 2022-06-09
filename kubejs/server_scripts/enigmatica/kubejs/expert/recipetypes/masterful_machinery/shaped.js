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
        },
        {
            output: 'masterfulmachinery:industrial_deuterium_plant_fluid_port_fluids_input',
            pattern: ['BEB', 'ACA', 'BDB'],
            key: {
                A: '#forge:plates/steel',
                B: 'mekanism:ultimate_mechanical_pipe',
                C: 'pneumaticcraft:huge_tank',
                D: 'xnet:advanced_connector_green',
                E: '#forge:circuits/elite'
            },
            id: `${id_prefix}industrial_deuterium_plant_fluid_port_fluids_input`
        },
        {
            output: 'masterfulmachinery:industrial_deuterium_plant_fluid_port_fluids_output',
            pattern: ['BEB', 'ACA', 'BDB'],
            key: {
                A: '#forge:plates/steel',
                B: 'mekanism:ultimate_mechanical_pipe',
                C: 'pneumaticcraft:huge_tank',
                D: 'xnet:advanced_connector_red',
                E: '#forge:circuits/elite'
            },
            id: `${id_prefix}industrial_deuterium_plant_fluid_port_fluids_output`
        },
        {
            output: 'masterfulmachinery:industrial_deuterium_plant_energy_port_energy_input',
            pattern: ['BEB', 'ACA', 'BDB'],
            key: {
                A: '#forge:plates/steel',
                B: 'mekanism:ultimate_universal_cable',
                C: 'mekanism:ultimate_induction_provider',
                D: 'xnet:advanced_connector_green',
                E: '#forge:circuits/elite'
            },
            id: `${id_prefix}industrial_deuterium_plant_energy_port_energy_input`
        },
        {
            output: 'masterfulmachinery:industrial_deuterium_plant_pressure_port_pncr_pressure_input',
            pattern: ['BDB', 'ACA', 'BEB'],
            key: {
                A: '#forge:plates/steel',
                B: 'pneumaticcraft:advanced_pressure_tube',
                C: 'pneumaticcraft:reinforced_air_canister',
                D: '#forge:circuits/elite',
                E: 'xnet:advanced_connector_green'
            },
            id: `${id_prefix}industrial_deuterium_plant_pressure_port_pncr_pressure_input`
        },
        {
            output: 'masterfulmachinery:industrial_deuterium_plant_spinny_port_create_rotation_input',
            pattern: ['BDB', 'ACA', 'BEB'],
            key: {
                A: '#forge:plates/steel',
                B: 'create:brass_casing',
                C: 'create:rotation_speed_controller',
                D: '#forge:circuits/elite',
                E: 'xnet:advanced_connector_green'
            },
            id: `${id_prefix}industrial_deuterium_plant_spinny_port_create_rotation_input`
        },
        {
            output: 'masterfulmachinery:enigmatic_tree_of_life_item_port_items_output',
            pattern: ['ABA', 'BCB', 'ADA'],
            key: {
                A: 'mythicbotany:yggdrasil_branch',
                B: 'botania:abstruse_platform',
                C: 'botania:light_relay',
                D: 'botania:red_petal_block'
            },
            id: `${id_prefix}enigmatic_tree_of_life_item_port_items_output`
        },
        {
            output: 'masterfulmachinery:enigmatic_tree_of_life_item_port_items_input',
            pattern: ['ABA', 'BCB', 'ADA'],
            key: {
                A: 'mythicbotany:yggdrasil_branch',
                B: 'botania:abstruse_platform',
                C: 'botania:light_relay',
                D: 'botania:green_petal_block'
            },
            id: `${id_prefix}enigmatic_tree_of_life_item_port_items_input`
        },
        {
            output: 'masterfulmachinery:enigmatic_tree_of_life_fluid_port_fluids_input',
            pattern: ['ABA', 'CEC', 'ADA'],
            key: {
                A: 'mythicbotany:yggdrasil_branch',
                B: 'create:copper_valve_handle',
                C: 'create:fluid_pipe',
                D: 'botania:green_petal_block',
                E: 'create:fluid_valve'
            },
            id: `${id_prefix}enigmatic_tree_of_life_fluid_port_fluids_input`
        },
        {
            output: 'masterfulmachinery:enigmatic_tree_of_life_mana_port_botania_mana_input',
            pattern: ['ADA', 'BCB', 'ADA'],
            key: {
                A: 'mythicbotany:yggdrasil_branch',
                B: 'botania:abstruse_platform',
                C: 'botania:fabulous_pool',
                D: '#botania:runes/mana'
            },
            id: `${id_prefix}enigmatic_tree_of_life_mana_port_botania_mana_input`
        },
        {
            output: 'masterfulmachinery:wicked_altar_controller',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'eidolon:polished_wood_pillar',
                B: 'bloodmagic:blankslate',
                C: 'minecraft:conduit'
            },
            id: `${id_prefix}wicked_altar_controller`
        },
        {
            output: 'masterfulmachinery:wicked_altar_item_port_items_output',
            pattern: ['ABA', 'BCB', 'ADA'],
            key: {
                A: 'eidolon:polished_wood_pillar',
                B: '#forge:ingots/silicon_bronze',
                C: 'ironchest:silver_chest',
                D: 'atum:linen_red'
            },
            id: `${id_prefix}wicked_altar_item_port_items_output`
        },
        {
            output: 'masterfulmachinery:wicked_altar_item_port_items_input',
            pattern: ['ABA', 'BCB', 'ADA'],
            key: {
                A: 'eidolon:polished_wood_pillar',
                B: '#forge:ingots/silicon_bronze',
                C: 'ironchest:silver_chest',
                D: 'atum:linen_lime'
            },
            id: `${id_prefix}wicked_altar_item_port_items_input`
        },
        {
            output: 'masterfulmachinery:wicked_altar_fluid_port_fluids_input',
            pattern: ['ABA', 'BCB', 'ADA'],
            key: {
                A: 'eidolon:polished_wood_pillar',
                B: '#forge:ingots/silicon_bronze',
                C: 'pneumaticcraft:small_tank',
                D: 'atum:linen_lime'
            },
            id: `${id_prefix}wicked_altar_fluid_port_fluids_input`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
