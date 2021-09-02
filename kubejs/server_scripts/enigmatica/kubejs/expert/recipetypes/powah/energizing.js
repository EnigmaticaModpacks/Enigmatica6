onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            ingredients: [
                { tag: 'forge:plates/enderium' },
                { tag: 'forge:ingots/netherite' },
                { tag: 'forge:storage_blocks/iron_osmium' },
                { tag: 'forge:storage_blocks/iron_osmium' }
            ],
            energy: '1000000',
            result: {
                item: 'xnet:antenna_dish',
                count: 1
            },
            id: 'xnet:antenna_dish'
        },
        {
            ingredients: [{ item: 'thermal:energy_cell_frame' }, { tag: 'forge:storage_blocks/redstone' }],
            energy: '250000',
            result: {
                item: 'xnet:redstone_proxy',
                count: 1
            },
            id: 'xnet:redstone_proxy'
        },
        {
            ingredients: [{ item: 'xnet:redstone_proxy_upd' }],
            energy: '100000',
            result: {
                item: 'xnet:redstone_proxy',
                count: 1
            },
            id: 'testid'
        },
        {
            ingredients: [{ item: 'xnet:redstone_proxy' }],
            energy: '100000',
            result: {
                item: 'xnet:redstone_proxy_upd',
                count: 1
            },
            id: 'xnet:redstoneproxy_update'
        },
        {
            ingredients: [
                { item: 'ars_nouveau:wixie_charm' },
                { item: 'refinedstorage:raw_advanced_processor' },
                { item: 'refinedstorage:raw_advanced_processor' },
                { item: 'refinedstorage:raw_advanced_processor' }
            ],
            energy: '3000000',
            result: {
                item: 'extrastorage:raw_neural_processor',
                count: 3
            },
            id: 'extrastorage:raw_neural_processor'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe).id(recipe.id);
    });
});
