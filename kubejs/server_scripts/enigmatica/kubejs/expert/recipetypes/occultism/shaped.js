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

    const id_prefix = 'enigmatica:expert/occultism/shaped/';
    const newRecipes = [
        {
            output: 'occultism:divination_rod',
            pattern: [' CD', ' AC', 'AB '],
            key: {
                A: 'betterendforge:leather_wrapped_stick',
                B: 'eidolon:tattered_cloth',
                C: '#forge:rods/copper',
                D: 'occultism:spirit_attuned_gem'
            },
            id: 'occultism:crafting/divination_rod'
        },
        {
            output: 'occultism:sacrificial_bowl',
            pattern: ['ABA', 'CAC'],
            key: {
                A: 'occultism:otherstone_slab',
                B: '#forge:dusts/mana',
                C: '#forge:inlays/pewter'
            },
            id: 'occultism:crafting/sacrificial_bowl'
        }
    ];

    newRecipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
