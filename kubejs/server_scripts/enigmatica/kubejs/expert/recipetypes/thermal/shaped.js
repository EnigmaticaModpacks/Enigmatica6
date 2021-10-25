onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

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
            output: 'thermal:machine_frame',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:plates/iron_tin',
                B: '#forge:glass_panes',
                C: '#forge:gears/iron_aluminum'
            },
            id: 'thermal:machine_frame'
        },
        {
            output: 'thermal:energy_cell_frame',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:plates/lead',
                B: '#forge:glass_panes',
                C: '#forge:gears/electrum'
            },
            id: 'thermal:energy_cell_frame'
        },
        {
            output: 'thermal:fluid_cell_frame',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:plates/copper',
                B: '#forge:glass_panes',
                C: '#forge:gears/bronze'
            },
            id: 'thermal:fluid_cell_frame'
        },
        {
            output: Item.of('thermal:rf_coil'),
            pattern: ['CA ', 'ABA', ' AC'],
            key: {
                A: '#forge:dusts/redstone',
                B: '#forge:rods/gold_copper',
                C: '#forge:nuggets/gold'
            },
            id: 'thermal:rf_coil'
        },
        {
            output: Item.of('thermal:redstone_servo'),
            pattern: ['A A', ' B ', 'A A'],
            key: {
                A: '#forge:dusts/redstone',
                B: ['#forge:rods/iron', '#forge:rods/tin']
            },
            id: 'thermal:redstone_servo'
        },
        {
            output: Item.of('thermal:redstone_servo', 2),
            pattern: ['A A', ' B ', 'A A'],
            key: {
                A: '#forge:dusts/redstone',
                B: '#forge:rods/lead'
            },
            id: 'kubejs:thermal_redstone_servo_with_lead'
        },
        {
            output: 'thermal:charge_bench',
            pattern: ['AAA', 'BCB', 'DBD'],
            key: {
                A: '#forge:ingots/electrum',
                B: 'thermal:rf_coil',
                C: 'thermal:energy_cell_frame',
                D: '#forge:ingots/lead'
            },
            id: 'thermal:charge_bench'
        },
        {
            output: 'thermal:upgrade_augment_1',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:gears/invar',
                B: 'thermal:energy_cell',
                C: '#xnet:connectors',
                D: 'pneumaticcraft:advanced_pcb',
                E: 'thermal:fluid_cell'
            },
            id: 'thermal:augments/upgrade_augment_1'
        },
        {
            output: 'thermal:upgrade_augment_2',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:gears/lumium',
                B: 'rftoolscontrol:cpu_core_1000',
                C: 'kubejs:memory_advanced_filled',
                D: 'thermal:upgrade_augment_1',
                E: 'powah:capacitor_hardened'
            },
            id: 'thermal:augments/upgrade_augment_2'
        },
        {
            output: 'thermal:upgrade_augment_3',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:gears/enderium',
                B: 'rftoolscontrol:cpu_core_2000',
                C: 'kubejs:memory_elite_filled',
                D: 'thermal:upgrade_augment_2',
                E: 'powah:capacitor_niotic'
            },
            id: 'thermal:augments/upgrade_augment_3'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
