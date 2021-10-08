onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/kubejs/';
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
            output: Item.of('refinedstorage:importer'),
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
            output: Item.of('refinedstorage:exporter'),
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
            output: Item.of('refinedstorage:external_storage'),
            pattern: [' C ', 'AEB', ' D '],
            key: {
                A: 'refinedstorage:cable',
                B: 'refinedstorage:improved_processor',
                C: 'refinedstorage:construction_core',
                D: 'refinedstorage:destruction_core',
                E: '#xnet:connectors'
            },
            id: 'refinedstorage:external_storage'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
