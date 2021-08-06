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
            output: Item.of('xnet:netcable_routing', 16),
            pattern: [' A ', 'ACA', 'BAB'],
            key: {
                A: '#forge:dusts/redstone',
                B: 'thermal:white_rockwool',
                C: '#forge:plates/signalum'
            },
            id: 'xnet:netcable_routing'
        },
        {
            output: 'xnet:controller',
            pattern: ['DCD', 'BAB', 'DED'],
            key: {
                A: 'thermal:energy_cell_frame',
                B: 'minecraft:comparator',
                C: 'minecraft:repeater',
                D: '#forge:ingots/iron_tin',
                E: 'thermal:redstone_servo'
            },
            id: 'xnet:controller'
        }
    ];

    newRecipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });

    ['red', 'green', 'blue', 'yellow'].forEach((color) => {
        event
            .shaped(Item.of(`xnet:netcable_${color}`, 16), [' A ', 'ACA', 'BAB'], {
                A: '#forge:dusts/redstone',
                B: `thermal:${color}_rockwool`,
                C: '#forge:plates/signalum'
            })
            .id(`xnet:netcable_${color}`);
    });
});
