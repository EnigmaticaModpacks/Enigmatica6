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
            output: 'eidolon:brazier',
            pattern: ['AAA', 'CBC', 'ABA'],
            key: {
                A: '#forge:ingots/pewter',
                B: 'minecraft:conduit',
                C: 'eidolon:ender_calx',
                D: 'minecraft:nether_brick_fence'
            },
            id: 'eidolon:brazier'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
