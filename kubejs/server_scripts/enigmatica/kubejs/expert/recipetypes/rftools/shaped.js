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
            output: 'rftoolsutility:screen_controller',
            pattern: ['ABA', 'DCD', 'ADA'],
            key: {
                A: '#forge:dusts/redstone',
                B: 'minecraft:ender_pearl',
                C: '#industrialforegoing:machine_frame/pity',
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
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: 'portality:frame',
                B: 'atum:yellow_stained_crystal_glass',
                C: 'occultism:stable_wormhole',
                D: '#industrialforegoing:machine_frame/pity'
            },
            id: 'rftoolsutility:matter_receiver'
        },
        {
            output: 'rftoolsutility:matter_transmitter',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: 'portality:frame',
                B: 'atum:cyan_stained_crystal_glass',
                C: 'occultism:stable_wormhole',
                D: '#industrialforegoing:machine_frame/pity'
            },
            id: 'rftoolsutility:matter_transmitter'
        },
        {
            output: 'rftoolsutility:dialing_device',
            pattern: ['ABA', 'ACA', 'AAA'],
            key: {
                A: 'portality:frame',
                B: 'portality:controller',
                C: 'xnet:wireless_router'
            },
            id: 'rftoolsutility:dialing_device'
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
                C: '#industrialforegoing:machine_frame/pity',
                D: '#forge:gems/diamond'
            },
            id: 'rftoolsbase:machine_infuser'
        },
        {
            output: 'rftoolsbuilder:builder',
            pattern: ['ADA', 'BCB', 'ABA'],
            key: {
                A: 'minecraft:bricks',
                B: 'portality:frame',
                C: '#industrialforegoing:machine_frame/pity',
                D: 'portality:controller'
            },
            id: 'rftoolsbuilder:builder'
        },
        {
            output: 'rftoolsbase:machine_base',
            pattern: [' A ', 'ACA', 'BBB'],
            key: {
                A: '#forge:nuggets/invar',
                B: 'pneumaticcraft:reinforced_stone_slab',
                C: 'pneumaticcraft:advanced_pcb'
            },
            id: 'rftoolsbase:machine_base'
        },
        {
            output: 'rftoolsutility:flight_module',
            pattern: ['ABA', 'CDC', 'EFG'],
            key: {
                A: 'alexsmobs:mysterious_worm',
                B: Item.of(
                    'rftoolsutility:syringe',
                    '{mobName:"alexsmobs:warped_mosco",mobId:"alexsmobs:warped_mosco",level:10}'
                ),
                C: 'meetyourfight:aether_glazed_cupcake',
                D: 'rftoolsutility:moduleplus_template',
                E: Item.of(
                    'rftoolsutility:syringe',
                    '{mobName:"upgrade_aquatic:flare",mobId:"upgrade_aquatic:flare",level:10}'
                ),
                F: 'alexsmobs:tarantula_hawk_elytra',
                G: Item.of(
                    'rftoolsutility:syringe',
                    '{mobName:"alexsmobs:void_worm",mobId:"alexsmobs:void_worm",level:10}'
                )
            },
            id: 'rftoolsutility:flight_module'
        },
        {
            output: 'rftoolspower:blazing_agitator',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'rftoolspower:blazing_rod',
                B: 'powah:energizing_rod_blazing',
                C: 'rftoolsbase:machine_base'
            },
            id: 'rftoolspower:blazing_agitator'
        },
        {
            output: 'rftoolspower:cell1',
            pattern: ['ABA', 'CDC', 'ACA'],
            key: {
                A: 'rftoolspower:power_core1',
                B: 'immersiveengineering:transformer_hv',
                C: 'mekanism:basic_universal_cable',
                D: 'rftoolsbase:machine_frame'
            },
            id: 'rftoolspower:cell1'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
