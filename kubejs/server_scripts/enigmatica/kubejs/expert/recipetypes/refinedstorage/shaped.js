onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/refinedstorage/shaped/';
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
            output: Item.of('8x refinedstorage:cable'),
            pattern: ['ADA', 'BCB', 'ADA'],
            key: {
                A: 'refinedstorage:quartz_enriched_iron',
                B: 'immersiveengineering:connector_bundled',
                C: 'immersiveengineering:wirecoil_redstone',
                D: 'prettypipes:pipe'
            },
            id: 'refinedstorage:cable'
        },
        {
            output: Item.of('8x refinedstorage:cable'),
            pattern: ['DBD', 'ACA', 'DBD'],
            key: {
                A: 'refinedstorage:quartz_enriched_iron',
                B: 'immersiveengineering:connector_bundled',
                C: 'immersiveengineering:wirecoil_redstone',
                D: 'integrateddynamics:cable'
            },
            id: `${id_prefix}cable_alt`
        },
        {
            output: 'refinedstorage:importer',
            pattern: [' C ', 'ADB', ' C '],
            key: {
                A: 'refinedstorage:cable',
                B: 'refinedstorage:improved_processor',
                C: 'refinedstorage:destruction_core',
                D: '#xnet:connectors'
            },
            id: 'refinedstorage:importer'
        },
        {
            output: 'refinedstorage:exporter',
            pattern: [' C ', 'ADB', ' C '],
            key: {
                A: 'refinedstorage:cable',
                B: 'refinedstorage:improved_processor',
                C: 'refinedstorage:construction_core',
                D: '#xnet:connectors'
            },
            id: 'refinedstorage:exporter'
        },
        {
            output: 'refinedstorage:external_storage',
            pattern: [' C ', 'AEB', ' D '],
            key: {
                A: 'refinedstorage:cable',
                B: 'refinedstorage:improved_processor',
                C: 'refinedstorage:construction_core',
                D: 'refinedstorage:destruction_core',
                E: '#xnet:connectors'
            },
            id: 'refinedstorage:external_storage'
        },
        {
            output: 'refinedstorage:crafter',
            pattern: ['ABA', 'CEC', 'ADA'],
            key: {
                A: 'create:mechanical_crafter',
                B: 'refinedstorage:construction_core',
                C: 'refinedstorage:advanced_processor',
                D: 'refinedstorage:destruction_core',
                E: 'refinedstorage:machine_casing'
            },
            id: 'refinedstorage:crafter'
        },
        {
            output: 'refinedstorage:wireless_transmitter',
            pattern: [' AC', 'ABA', 'BA '],
            key: {
                A: '#forge:wires/aluminum',
                B: '#forge:rods/aluminum',
                C: 'refinedstorage:advanced_processor'
            },
            id: 'refinedstorage:wireless_transmitter'
        },
        {
            output: 'refinedstorage:range_upgrade',
            pattern: ['ADA', 'CBC', 'AAA'],
            key: {
                A: 'refinedstorage:quartz_enriched_iron',
                B: 'refinedstorage:upgrade',
                C: 'refinedstorage:basic_processor',
                D: 'refinedstorage:wireless_transmitter'
            },
            id: 'refinedstorage:range_upgrade'
        },
        {
            output: Item.of('4x refinedstorage:speed_upgrade'),
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'refinedstorage:upgrade',
                B: 'pneumaticcraft:glycerol',
                C: {
                    type: 'pneumaticcraft:fluid',
                    tag: 'forge:lubricant',
                    amount: 1000
                }
            },
            id: 'refinedstorage:speed_upgrade'
        },
        {
            output: 'refinedstorage:network_card',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: 'refinedstorage:quartz_enriched_iron',
                B: 'pneumaticcraft:printed_circuit_board',
                C: 'refinedstorage:upgrade',
                D: 'refinedstorage:advanced_processor'
            },
            id: 'refinedstorage:network_card'
        },
        {
            output: 'refinedstorage:network_transmitter',
            pattern: ['ABA', 'CDE', 'FGF'],
            key: {
                A: '#forge:gears/enderium',
                B: 'rftoolsutility:matter_transmitter',
                C: 'refinedstorage:construction_core',
                D: 'refinedstorage:machine_casing',
                E: 'refinedstorage:destruction_core',
                F: '#forge:ingots/aeternium',
                G: 'kubejs:cpu_core_as_81221'
            },
            id: 'refinedstorage:network_transmitter'
        },
        {
            output: 'refinedstorage:network_receiver',
            pattern: ['FGF', 'CDE', 'ABA'],
            key: {
                A: '#forge:gears/enderium',
                B: 'rftoolsutility:matter_receiver',
                C: 'refinedstorage:construction_core',
                D: 'refinedstorage:machine_casing',
                E: 'refinedstorage:destruction_core',
                F: '#forge:ingots/aeternium',
                G: 'kubejs:cpu_core_as_81221'
            },
            id: 'refinedstorage:network_receiver'
        },
        {
            output: 'refinedstorage:disk_drive',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:circuits/elite',
                B: 'extrastorage:neural_processor',
                C: 'immersiveengineering:logic_unit',
                D: 'refinedstorage:machine_casing'
            },
            id: `${id_prefix}disk_drive_alternate`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
