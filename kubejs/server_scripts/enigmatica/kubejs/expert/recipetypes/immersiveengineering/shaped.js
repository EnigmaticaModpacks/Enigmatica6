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
            output: Item.of('immersiveengineering:cokebrick', 3),
            pattern: ['CAC', 'ABA', 'CAC'],
            key: {
                A: '#forge:stones/basalt',
                B: 'create:cinder_flour',
                C: '#forge:clay'
            },
            id: 'immersiveengineering:crafting/cokebrick'
        },
        {
            output: 'immersiveengineering:workbench',
            pattern: ['A  ', 'BCC', 'E D'],
            key: {
                A: '#forge:rods/steel',
                B: '#forge:plates/steel',
                C: '#forge:treated_wood_slab',
                D: 'immersiveengineering:treated_fence',
                E: 'immersiveengineering:craftingtable'
            },
            id: 'immersiveengineering:crafting/workbench'
        },
        {
            output: Item.of('immersiveengineering:alloybrick', 4),
            pattern: ['CAC', 'ABA', 'CAC'],
            key: {
                A: '#forge:ingots/brick',
                B: 'kubejs:smoldering_lapis_lazuli_compound',
                C: 'immersiveengineering:blastbrick'
            },
            id: 'immersiveengineering:crafting/alloybrick'
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
