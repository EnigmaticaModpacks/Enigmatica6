onEvent('recipes', (event) => {
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

    const id_prefix = 'enigmatica:base/redstonepen/shaped/';
    const newRecipes = [
        {
            output: 'redstonepen:relay',
            pattern: ['AB', 'AC'],
            key: {
                A: 'minecraft:cobblestone_slab',
                B: 'minecraft:redstone_torch',
                C: '#forge:dusts/redstone'
            },
            id: 'redstonepen:relay_recipe'
        }
    ];

    newRecipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
