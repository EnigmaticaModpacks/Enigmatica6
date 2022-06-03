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
            output: 'computercraft:computer_normal',
            pattern: ['ACA', 'DBE', 'AFA'],
            key: {
                A: 'immersiveengineering:slab_sheetmetal_aluminum',
                B: 'rftoolsbase:machine_frame',
                C: ['rftoolscontrol:ram_chip', 'kubejs:advanced_ram_chip'],
                D: 'kubejs:cpu_core_eg_28222',
                E: 'rftoolscontrol:graphics_card',
                F: 'rsgauges:industrial_button'
            },
            id: 'computercraft:computer_normal'
        },
        {
            output: 'computercraft:computer_advanced',
            pattern: ['BCB', 'CAC', 'BCB'],
            key: {
                A: 'computercraft:computer_normal',
                B: 'immersiveengineering:slab_sheetmetal_gold',
                C: 'resourcefulbees:rgbee_honeycomb'
            },
            id: 'computercraft:computer_advanced'
        },
        {
            output: 'computercraft:wired_modem',
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: '#forge:sheetmetals/aluminum',
                B: 'rftoolscontrol:network_card',
                C: 'rftoolsbase:machine_base'
            },
            id: 'computercraft:wired_modem'
        },
        {
            output: 'computercraft:monitor_normal',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: 'immersiveengineering:slab_sheetmetal_aluminum',
                B: 'rftoolsbase:information_screen'
            },
            id: 'computercraft:monitor_normal'
        },
        {
            output: 'computercraft:monitor_advanced',
            pattern: ['BCB', 'CAC', 'BCB'],
            key: {
                A: 'computercraft:monitor_normal',
                B: 'immersiveengineering:slab_sheetmetal_gold',
                C: 'resourcefulbees:rgbee_honeycomb'
            },
            id: 'computercraft:monitor_advanced'
        },
        {
            output: Item.of('computercraft:cable', 8),
            pattern: [' B ', 'BAB', ' B '],
            key: {
                A: 'immersiveengineering:wirecoil_redstone',
                B: '#forge:plastic'
            },
            id: 'computercraft:cable'
        },
        {
            output: 'computercraft:wireless_modem_normal',
            pattern: ['AB', 'CD'],
            key: {
                A: 'computercraft:wired_modem',
                B: 'refinedstorage:wireless_transmitter',
                C: 'pneumaticcraft:network_api',
                D: 'refinedstorage:range_upgrade'
            },
            id: 'computercraft:wireless_modem_normal'
        },
        {
            output: 'computercraft:wireless_modem_advanced',
            pattern: ['AB', 'C '],
            key: {
                A: 'computercraft:wireless_modem_normal',
                B: 'rftoolsbase:infused_enderpearl',
                C: 'rsinfinitybooster:infinity_card'
            },
            id: 'computercraft:wireless_modem_advanced'
        }
    ];
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
