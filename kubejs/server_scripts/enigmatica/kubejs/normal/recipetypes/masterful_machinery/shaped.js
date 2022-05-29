onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/masterful_machinery/shaped';
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
            output: 'masterfulmachinery:stellar_neutron_activator_controller',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: 'immersiveengineering:hempcrete',
                B: Item.of('mekanism:resistive_heater').ignoreNBT(),
                C: 'mekanism:thermal_evaporation_valve',
                D: 'mekanism:thermal_evaporation_controller'
            },
            id: `${id_prefix}stellar_neutron_activator_controller`
        },
        {
            output: Item.of('2x masterfulmachinery:stellar_neutron_activator_mana_port_botania_mana_input'),
            pattern: ['CBC', 'BDB', 'CBC'],
            key: {
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
            output: 'masterfulmachinery:industrial_deuterium_plant_controller',
            pattern: ['ABA', 'BCB', 'ADA'],
            key: {
                A: 'immersiveengineering:concrete_leaded',
                B: 'mekanism:electrolytic_core',
                C: '#industrialforegoing:machine_frame/supreme',
                D: '#forge:circuits/ultimate'
            },
            id: `${id_prefix}industrial_deuterium_plant_controller`
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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
