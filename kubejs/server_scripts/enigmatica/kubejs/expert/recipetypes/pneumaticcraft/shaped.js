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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
