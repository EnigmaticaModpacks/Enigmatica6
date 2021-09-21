onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/';

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
            output: 'kubejs:pneumatic_helmet_package',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: 'pneumaticcraft:air_canister',
                B: 'pneumaticcraft:printed_circuit_board',
                C: 'pneumaticcraft:compressed_iron_helmet',
                D: 'mekanism:cardboard_box'
            },
            id: 'pneumaticcraft:pneumatic_helmet'
        },
        {
            output: 'kubejs:pneumatic_chestplate_package',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: 'pneumaticcraft:air_canister',
                B: 'pneumaticcraft:printed_circuit_board',
                C: 'pneumaticcraft:compressed_iron_chestplate',
                D: 'mekanism:cardboard_box'
            },
            id: 'pneumaticcraft:pneumatic_chestplate'
        },
        {
            output: 'kubejs:pneumatic_leggings_package',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: 'pneumaticcraft:air_canister',
                B: 'pneumaticcraft:printed_circuit_board',
                C: 'pneumaticcraft:compressed_iron_leggings',
                D: 'mekanism:cardboard_box'
            },
            id: 'pneumaticcraft:pneumatic_leggings'
        },
        {
            output: 'kubejs:pneumatic_boots_package',
            pattern: ['ABA', 'ACA', ' D '],
            key: {
                A: 'pneumaticcraft:air_canister',
                B: 'pneumaticcraft:printed_circuit_board',
                C: 'pneumaticcraft:compressed_iron_boots',
                D: 'mekanism:cardboard_box'
            },
            id: 'pneumaticcraft:pneumatic_boots'
        },
        {
            output: 'pneumaticcraft:armor_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#pneumaticcraft:upgrade_components',
                B: '#mekanism:enriched/diamond',
                C: '#forge:ingots/compressed_iron'
            },
            id: 'pneumaticcraft:armor_upgrade'
        },
        {
            output: 'pneumaticcraft:flippers_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#pneumaticcraft:upgrade_components',
                B: '#pneumaticcraft:plastic_sheets',
                C: 'thermal:diving_boots'
            },
            id: 'pneumaticcraft:flippers_upgrade'
        },
        {
            output: 'pneumaticcraft:magnet_upgrade',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#pneumaticcraft:upgrade_components',
                B: '#pneumaticcraft:plastic_sheets',
                C: 'thermal:flux_magnet'
            },
            id: 'pneumaticcraft:magnet_upgrade'
        },
        {
            output: Item.of(
                'pneumaticcraft:liquid_compressor',
                '{BlockEntityTag:{UpgradeInventory:{Size:4,Items:[{Slot:0,id:"pneumaticcraft:security_upgrade",Count:1b}]}}}'
            ),
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'supplementaries:bellows',
                B: 'pneumaticcraft:small_tank',
                C: '#forge:gears/compressed_iron',
                D: 'thermal:machine_frame',
                E: 'pneumaticcraft:pressure_tube',
                F: 'thermal:upgrade_augment_1'
            },
            id: 'pneumaticcraft:liquid_compressor'
        },
        {
            output: Item.of('12x pneumaticcraft:pressure_tube'),
            pattern: ['ABA'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: '#thermal:glass/hardened'
            },
            id: 'pneumaticcraft:pressure_tube'
        },
        {
            output: 'pneumaticcraft:small_tank',
            pattern: ['AAA', 'CBC', 'AAA'],
            key: {
                A: 'pneumaticcraft:reinforced_stone_slab',
                B: '#thermal:glass/hardened',
                C: 'pneumaticcraft:reinforced_brick_wall'
            },
            id: 'pneumaticcraft:small_tank'
        },
        {
            output: Item.of(
                'pneumaticcraft:pressure_chamber_valve',
                '{BlockEntityTag:{UpgradeInventory:{Size:4,Items:[{Slot:0,id:"pneumaticcraft:security_upgrade",Count:1b}]}}}'
            ),
            pattern: [' A ', 'CBC'],
            key: {
                A: 'thermal:upgrade_augment_1',
                B: 'pneumaticcraft:pressure_chamber_wall',
                C: 'pneumaticcraft:pressure_tube'
            },
            id: 'pneumaticcraft:pressure_chamber_valve'
        },
        {
            output: 'pneumaticcraft:pressure_chamber_interface',
            pattern: [' A ', 'CBC', ' A '],
            key: {
                A: 'thermal:redstone_servo',
                B: 'pneumaticcraft:pressure_chamber_wall',
                C: '#forge:gears/compressed_iron'
            },
            id: 'pneumaticcraft:pressure_chamber_interface'
        },
        {
            output: 'pneumaticcraft:safety_tube_module',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'pneumaticcraft:pressure_gauge',
                B: 'pneumaticcraft:pressure_tube',
                C: 'thermal:redstone_servo'
            },
            id: 'pneumaticcraft:safety_tube_module'
        },
        {
            output: 'pneumaticcraft:pressure_gauge',
            pattern: ['AB ', 'BCB', ' BA'],
            key: {
                A: 'minecraft:paper',
                B: '#forge:nuggets/signalum',
                C: '#forge:nuggets/iron'
            },
            id: 'pneumaticcraft:pressure_gauge'
        },
        {
            output: 'pneumaticcraft:pressure_gauge_module',
            pattern: [' A ', 'BCB'],
            key: {
                A: 'pneumaticcraft:pressure_gauge',
                B: '#forge:nuggets/signalum',
                C: 'pneumaticcraft:pressure_tube'
            },
            id: 'pneumaticcraft:pressure_gauge_module'
        },
        {
            output: Item.of(
                'pneumaticcraft:advanced_liquid_compressor',
                '{BlockEntityTag:{UpgradeInventory:{Size:4,Items:[{Slot:0,id:"pneumaticcraft:security_upgrade",Count:1b}]}}}'
            ),
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: 'pneumaticcraft:heat_pipe',
                B: '#forge:circuits/basic',
                C: 'pneumaticcraft:advanced_pressure_tube',
                D: 'pneumaticcraft:liquid_compressor',
                E: 'thermal:upgrade_augment_2'
            },
            id: 'pneumaticcraft:advanced_liquid_compressor'
        },
        {
            output: Item.of(
                'pneumaticcraft:electrostatic_compressor',
                '{BlockEntityTag:{UpgradeInventory:{Size:4,Items:[{Slot:0,id:"pneumaticcraft:security_upgrade",Count:1b}]}}}'
            ),
            pattern: ['ABA', 'FDG', 'CEC'],
            key: {
                A: '#botania:runes/air',
                B: '#forge:circuits/basic',
                C: 'pneumaticcraft:advanced_pressure_tube',
                D: 'thermal:machine_frame',
                E: 'thermal:upgrade_augment_3',
                F: 'supplementaries:bellows',
                G: 'pneumaticcraft:turbine_rotor'
            },
            id: 'pneumaticcraft:electrostatic_compressor'
        },
        {
            output: Item.of(
                'pneumaticcraft:thermal_compressor',
                '{BlockEntityTag:{UpgradeInventory:{Size:4,Items:[{Slot:0,id:"pneumaticcraft:security_upgrade",Count:1b}]}}}'
            ),
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:ingots/compressed_iron',
                B: 'pneumaticcraft:pressure_tube',
                C: '#forge:plates/copper',
                D: 'thermal:machine_frame'
            },
            id: 'pneumaticcraft:thermal_compressor'
        },
        {
            output: 'pneumaticcraft:advanced_pcb',
            pattern: ['ABA', 'BCB', 'ADA'],
            key: {
                A: '#forge:wires/copper',
                B: 'rftoolscontrol:ram_chip',
                C: 'immersiveengineering:logic_circuit',
                D: 'immersiveengineering:connector_probe'
            },
            id: `${id_prefix}advanced_pcb_alternate`
        },
        {
            output: Item.of('24x pneumaticcraft:programming_puzzle'),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#pneumaticcraft:plastic_sheets',
                B: 'pneumaticcraft:printed_circuit_board'
            },
            id: 'pneumaticcraft:programming_puzzle'
        },
        {
            output: 'pneumaticcraft:pneumatic_dynamo',
            pattern: [' A ', 'BCB', 'DED'],
            key: {
                A: 'thermal:rf_coil',
                B: 'pneumaticcraft:turbine_rotor',
                C: 'pneumaticcraft:printed_circuit_board',
                D: '#forge:gears/compressed_iron',
                E: 'thermal:machine_frame'
            },
            id: 'pneumaticcraft:pneumatic_dynamo'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
