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
            pattern: ['BAB', 'ACA', 'BDB'],
            key: {
                A: '#forge:plates/steel',
                B: 'mekanism:ultimate_logistical_transporter',
                C: 'pneumaticcraft:smart_chest',
                D: 'xnet:advanced_connector_green'
            },
            id: `${id_prefix}auto_iridescent_altar_item_port_items_input`
        },
        {
            output: 'masterfulmachinery:auto_iridescent_altar_item_port_items_output',
            pattern: ['BAB', 'ACA', 'BDB'],
            key: {
                A: '#forge:plates/steel',
                B: 'mekanism:ultimate_logistical_transporter',
                C: 'pneumaticcraft:smart_chest',
                D: 'xnet:advanced_connector_red'
            },
            id: `${id_prefix}auto_iridescent_altar_item_port_items_output`
        },
        {
            output: 'masterfulmachinery:auto_iridescent_altar_fluid_port_fluids_input',
            pattern: ['BAB', 'ACA', 'BDB'],
            key: {
                A: '#forge:plates/steel',
                B: 'mekanism:ultimate_mechanical_pipe',
                C: 'pneumaticcraft:huge_tank',
                D: 'xnet:advanced_connector_green'
            },
            id: `${id_prefix}auto_iridescent_altar_fluid_port_fluids_input`
        },
        {
            output: 'masterfulmachinery:auto_iridescent_altar_energy_port_energy_input',
            pattern: ['BAB', 'ACA', 'BDB'],
            key: {
                A: '#forge:plates/steel',
                B: 'mekanism:ultimate_universal_cable',
                C: 'mekanism:ultimate_induction_provider',
                D: 'xnet:advanced_connector_green'
            },
            id: `${id_prefix}auto_iridescent_altar_energy_port_energy_input`
        },
        {
            output: 'masterfulmachinery:advanced_assembly_table_high_pressure_port_pncr_pressure_input',
            pattern: ['BAB', 'ACA', 'BAB'],
            key: {
                A: '#forge:alloys/elite',
                B: 'pneumaticcraft:advanced_pressure_tube',
                C: '#industrialforegoing:machine_frame/simple'
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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
