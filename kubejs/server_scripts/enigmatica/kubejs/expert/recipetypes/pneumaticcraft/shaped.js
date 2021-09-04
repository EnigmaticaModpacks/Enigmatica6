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

    const newRecipes = [
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
        }
    ];

    newRecipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
