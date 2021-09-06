onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/thermo_plant/';
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
            id: `${id_prefix}antenna_dish`
        },
        {
            ingredients: [{ item: 'thermal:energy_cell_frame' }, { tag: 'forge:storage_blocks/redstone' }],
            energy: '250000',
            result: {
                item: 'xnet:redstone_proxy',
                count: 1
            },
            id: `${id_prefix}redstone_proxy_from_energy_cell_frame`
        },
        {
            ingredients: [{ item: 'xnet:redstone_proxy_upd' }],
            energy: '100000',
            result: {
                item: 'xnet:redstone_proxy',
                count: 1
            },
            id: `${id_prefix}redstone_proxy_from_redstone_proxy_upd`
        },
        {
            ingredients: [{ item: 'xnet:redstone_proxy' }],
            energy: '100000',
            result: {
                item: 'xnet:redstone_proxy_upd',
                count: 1
            },
            id: `${id_prefix}redstone_proxy_upd`
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
            id: `${id_prefix}raw_neural_processor`
        },
        {
            ingredients: [
                { tag: 'forge:storage_blocks/dimensional' },
                { tag: 'forge:gems/diamond' },
                { item: 'integrateddynamics:crystalized_menril_block' }
            ],
            energy: '9000000',
            result: {
                item: 'rftoolsbase:infused_diamond',
                count: 1
            },
            id: 'rftoolsbase:infused_diamond'
        },
        {
            ingredients: [
                { tag: 'forge:storage_blocks/dimensional' },
                { tag: 'forge:gems/ender' },
                { item: 'integrateddynamics:crystalized_chorus_block' }
            ],
            energy: '18000000',
            result: {
                item: 'rftoolsbase:infused_enderpearl',
                count: 1
            },
            id: 'rftoolsbase:infused_enderpearl'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe).id(recipe.id);
    });
});
