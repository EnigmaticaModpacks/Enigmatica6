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

    const newRecipes = [
        {
            output: 'rftoolsutility:screen_controller',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: '#forge:dusts/redstone',
                B: 'minecraft:ender_pearl',
                C: 'rftoolsbase:machine_base',
                D: '#forge:glass'
            },
            id: 'rftoolsutility:screen_controller'
        },
        {
            output: 'rftoolsutility:module_template',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:gems/dimensional',
                B: '#forge:ingots/iron_aluminum',
                C: 'pneumaticcraft:printed_circuit_board'
            },
            id: 'rftoolsutility:module_template'
        },
        {
            output: 'rftoolsutility:matter_receiver',
            pattern: ['AAA', 'BCB', 'DDD'],
            key: {
                A: '#forge:ingots/iron_aluminum',
                B: '#forge:dusts/redstone',
                C: 'rftoolsbase:machine_base',
                D: 'minecraft:ender_pearl'
            },
            id: 'rftoolsutility:matter_receiver'
        },
        {
            output: 'rftoolsutility:matter_transmitter',
            pattern: ['DDD', 'BCB', 'AAA'],
            key: {
                A: '#forge:ingots/iron_aluminum',
                B: '#forge:dusts/redstone',
                C: 'rftoolsbase:machine_base',
                D: 'minecraft:ender_pearl'
            },
            id: 'rftoolsutility:matter_transmitter'
        },
        {
            output: 'rftoolsutility:charged_porter',
            pattern: [' C ', 'CBC', 'ACA'],
            key: {
                A: '#forge:ingots/iron_aluminum',
                B: 'pneumaticcraft:printed_circuit_board',
                C: 'minecraft:ender_pearl'
            },
            id: 'rftoolsutility:charged_porter'
        },
        {
            output: 'rftoolsbuilder:shape_card_pump',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:dusts/redstone',
                B: 'minecraft:water_bucket',
                C: 'pneumaticcraft:printed_circuit_board',
                D: 'rftoolsbuilder:shape_card_def',
                E: 'minecraft:lava_bucket'
            },
            id: 'rftoolsbuilder:shape_card_pump'
        },
        {
            output: 'rftoolsbuilder:shape_card_quarry',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:dusts/redstone',
                B: 'minecraft:diamond_pickaxe',
                C: 'pneumaticcraft:printed_circuit_board',
                D: 'rftoolsbuilder:shape_card_def',
                E: 'minecraft:diamond_shovel'
            },
            id: 'rftoolsbuilder:shape_card_quarry'
        },
        {
            output: 'rftoolsbase:machine_infuser',
            pattern: ['ABA', 'DCD', 'ABA'],
            key: {
                A: '#forge:gems/dimensional',
                B: '#forge:dusts/redstone',
                C: 'rftoolsbase:machine_base',
                D: '#forge:gems/diamond'
            },
            id: 'rftoolsbase:machine_infuser'
        },
        {
            output: 'rftoolsbuilder:builder',
            pattern: ['ADA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:bricks',
                B: '#forge:dusts/redstone',
                C: 'rftoolsbase:machine_base',
                D: '#forge:gems/ender'
            },
            id: 'rftoolsbuilder:builder'
        },
        {
            output: 'rftoolsbase:machine_base',
            pattern: ['AAA', 'BBB'],
            key: {
                A: '#forge:nuggets/invar',
                B: 'pneumaticcraft:reinforced_stone_slab'
            },
            id: 'rftoolsbase:machine_base'
        }
    ];

    newRecipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
