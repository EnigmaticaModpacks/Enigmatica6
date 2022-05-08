onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/storagedrawers/';
    const recipes = [
        {
            output: 'storagedrawers:obsidian_storage_upgrade',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'kubejs:scented_stick',
                B: 'tconstruct:seared_brick',
                C: 'storagedrawers:upgrade_template'
            },
            id: 'storagedrawers:obsidian_storage_upgrade'
        },
        {
            output: 'storagedrawers:iron_storage_upgrade',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'kubejs:scented_stick',
                B: '#forge:ingots/andesite_alloy',
                C: 'storagedrawers:obsidian_storage_upgrade'
            },
            id: 'storagedrawers:iron_storage_upgrade'
        },
        {
            output: 'storagedrawers:gold_storage_upgrade',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'kubejs:scented_stick',
                B: '#forge:gems/blazing',
                C: 'storagedrawers:iron_storage_upgrade'
            },
            id: 'storagedrawers:gold_storage_upgrade'
        },
        {
            output: 'storagedrawers:diamond_storage_upgrade',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'kubejs:scented_stick',
                B: '#forge:gems/niotic',
                C: 'storagedrawers:gold_storage_upgrade'
            },
            id: 'storagedrawers:diamond_storage_upgrade'
        },
        {
            output: 'storagedrawers:emerald_storage_upgrade',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'kubejs:scented_stick',
                B: '#forge:gems/spirited',
                C: 'storagedrawers:diamond_storage_upgrade'
            },
            id: 'storagedrawers:emerald_storage_upgrade'
        },
        {
            output: Item.of('2x storagedrawers:void_upgrade'),
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'kubejs:scented_stick',
                B: 'storagedrawers:upgrade_template',
                C: 'trashcans:item_trash_can'
            },
            id: 'storagedrawers:void_upgrade'
        },
        {
            output: Item.of('4x storagedrawers:upgrade_template'),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'kubejs:scented_stick',
                B: 'framedcompactdrawers:framed_full_four'
            },
            id: 'storagedrawers:upgrade_template'
        },
        {
            output: 'storagedrawers:compacting_drawers_3',
            pattern: ['ABA', 'BCB', 'ADA'],
            key: {
                A: '#forge:gears/osmium',
                B: '#forge:sheetmetals/aluminum',
                C: '#storagedrawers:drawers',
                D: 'pedestals:coin/compactor3'
            },
            id: 'storagedrawers:compacting_drawers_3'
        },
        {
            output: 'storagedrawers:controller',
            pattern: ['AAA', 'ABA', 'ACA'],
            key: {
                A: '#forge:sheetmetals/aluminum',
                B: '#storagedrawers:drawers',
                C: 'rftoolscontrol:processor'
            },
            id: 'storagedrawers:controller'
        },
        {
            output: 'storagedrawers:controller_slave',
            pattern: ['AAA', 'ABA', 'ACA'],
            key: {
                A: '#forge:sheetmetals/aluminum',
                B: '#storagedrawers:drawers',
                C: 'rftoolscontrol:node'
            },
            id: 'storagedrawers:controller_slave'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
