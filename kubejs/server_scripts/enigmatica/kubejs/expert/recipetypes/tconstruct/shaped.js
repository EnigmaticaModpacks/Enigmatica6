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
            output: 'tconstruct:silky_cloth',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'ars_nouveau:mana_fiber',
                B: '#forge:ingots/rose_gold'
            },
            id: 'tconstruct:tools/modifiers/silky_cloth'
        },
        {
            output: 'tconstruct:earth_slime_boots',
            pattern: ['ABA', 'C C'],
            key: {
                A: '#forge:slimeball/earth',
                B: 'quark:bottled_cloud',
                C: 'tconstruct:earth_congealed_slime'
            },
            id: 'tconstruct:gadgets/slimeboots/earth'
        },
        {
            output: 'tconstruct:sky_slime_boots',
            pattern: ['ABA', 'C C'],
            key: {
                A: '#forge:slimeball/sky',
                B: 'quark:bottled_cloud',
                C: 'tconstruct:sky_congealed_slime'
            },
            id: 'tconstruct:gadgets/slimeboots/sky'
        },
        {
            output: 'tconstruct:ender_slime_boots',
            pattern: ['ABA', 'C C'],
            key: {
                A: '#forge:slimeball/ender',
                B: 'quark:bottled_cloud',
                C: 'tconstruct:ender_congealed_slime'
            },
            id: 'tconstruct:gadgets/slimeboots/ender'
        },
        {
            output: 'tconstruct:ichor_slime_boots',
            pattern: ['ABA', 'C C'],
            key: {
                A: '#forge:slimeball/ichor',
                B: 'quark:bottled_cloud',
                C: 'tconstruct:ichor_congealed_slime'
            },
            id: 'tconstruct:gadgets/slimeboots/ichor'
        },
        {
            output: 'tconstruct:blood_slime_boots',
            pattern: ['ABA', 'C C'],
            key: {
                A: '#forge:slimeball/blood',
                B: 'quark:bottled_cloud',
                C: 'tconstruct:blood_congealed_slime'
            },
            id: 'tconstruct:gadgets/slimeboots/blood'
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
