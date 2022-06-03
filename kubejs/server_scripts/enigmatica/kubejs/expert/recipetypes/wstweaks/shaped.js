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
            output: 'wstweaks:lava_blade',
            pattern: [' AB', 'ACA', 'DA '],
            key: {
                A: 'rftoolspower:blazing_rod',
                B: 'betterendforge:aeternium_sword_blade',
                C: '#forge:gems/nitro',
                D: 'betterendforge:aeternium_sword_handle'
            },
            id: 'wstweaks:lava_blade'
        },
        {
            output: 'wstweaks:blaze_blade',
            pattern: [' A ', 'ABA', ' A '],
            key: {
                A: 'tconstruct:blazing_bone',
                B: 'wstweaks:lava_blade'
            },
            id: 'wstweaks:blaze_blade'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
