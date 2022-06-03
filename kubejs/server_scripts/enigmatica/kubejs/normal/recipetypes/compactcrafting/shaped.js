onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            output: Item.of('compactmachines:tunnel', { definition: { id: 'compactmachines:item' } }),
            pattern: ['ABA', 'BCB', 'DBD'],
            key: {
                A: 'minecraft:hopper',
                B: '#forge:gems/dimensional',
                C: 'occultism:wormhole_frame',
                D: '#forge:chests'
            },
            id: 'compactmachines:tunnel/item'
        },
        {
            output: Item.of('compactmachines:tunnel', { definition: { id: 'compactmachines:redstone_in' } }),
            pattern: ['ABA', 'BCB', 'DBD'],
            key: {
                A: 'glassential:glass_redstone',
                B: '#forge:gems/dimensional',
                C: 'occultism:wormhole_frame',
                D: 'minecraft:redstone_torch'
            },
            id: 'compactmachines:tunnel/redstone'
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
