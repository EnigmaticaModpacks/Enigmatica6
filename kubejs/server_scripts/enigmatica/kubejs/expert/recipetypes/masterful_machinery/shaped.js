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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
