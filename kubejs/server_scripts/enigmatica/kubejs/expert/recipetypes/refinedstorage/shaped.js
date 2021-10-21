onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/refinedstorage/';
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
            output: Item.of('12x refinedstorage:cable'),
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'refinedstorage:quartz_enriched_iron',
                B: 'immersiveengineering:connector_bundled',
                C: 'immersiveengineering:wirecoil_redstone'
            },
            id: 'refinedstorage:cable'
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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
