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
            output: 'eidolon:wooden_altar',
            pattern: ['AAA', 'B B', 'B B'],
            key: {
                A: 'eidolon:polished_planks_slab',
                B: 'eidolon:polished_planks'
            },
            id: 'eidolon:wooden_altar'
        },
        {
            output: 'eidolon:worktable',
            pattern: ['AAA', 'BCB', 'DDD'],
            key: {
                A: 'atum:linen_carpet_red',
                B: 'eidolon:pewter_inlay',
                C: 'minecraft:conduit',
                D: 'ars_nouveau:purple_archwood_wood'
            },
            id: 'eidolon:worktable'
        },
        {
            output: 'eidolon:basic_belt',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'betterendforge:silk_fiber',
                B: 'betterendforge:leather_stripe',
                C: '#forge:gems/mana'
            },
            id: 'eidolon:basic_belt'
        },
        {
            output: 'eidolon:crucible',
            pattern: ['A A', 'ABA', 'AAA'],
            key: {
                A: '#forge:ingots/pewter',
                B: 'minecraft:conduit'
            },
            id: 'eidolon:crucible'
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
