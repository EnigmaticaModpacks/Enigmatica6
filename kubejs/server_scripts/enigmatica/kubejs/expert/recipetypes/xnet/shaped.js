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
                B: 'minecraft:repeater',
                C: 'minecraft:comparator',
                D: '#forge:ingots/iron_tin',
                E: 'thermal:redstone_servo'
            },
            id: 'xnet:controller'
        },
        {
            output: 'xnet:router',
            pattern: ['CDC', 'DAD', 'CBC'],
            key: {
                A: 'thermal:energy_cell_frame',
                B: '#forge:gems/ender',
                C: '#forge:ingots/iron_tin',
                D: 'minecraft:powered_rail'
            },
            id: 'xnet:router'
        },
        {
            output: 'xnet:wireless_router',
            pattern: ['BDB', 'CAC', 'BCB'],
            key: {
                A: 'thermal:energy_cell_frame',
                B: '#forge:ingots/enderium',
                C: '#forge:dusts/redstone',
                D: 'minecraft:comparator'
            },
            id: 'xnet:wireless_router'
        },
        {
            output: 'xnet:antenna',
            pattern: ['ABA', 'ABA', ' B '],
            key: {
                A: 'minecraft:iron_bars',
                B: '#forge:rods/iron_osmium'
            },
            id: 'xnet:antenna'
        },
        {
            output: 'xnet:antenna_base',
            pattern: [' B ', ' B ', 'CAC'],
            key: {
                A: '#forge:storage_blocks/iron_osmium',
                B: '#forge:rods/iron_osmium',
                C: '#forge:plates/iron_osmium'
            },
            id: 'xnet:antenna_base'
        },
        {
            output: 'xnet:antenna_base',
            pattern: [' B ', ' B ', 'CAC'],
            key: {
                A: '#forge:storage_blocks/iron_osmium',
                B: '#forge:rods/iron_osmium',
                C: '#forge:plates/iron_osmium'
            },
            id: 'xnet:antenna_base'
        },

        {
            output: 'xnet:connector_routing',
            pattern: ['ADA', 'CBC', 'ADA'],
            key: {
                A: '#forge:ingots/uranium',
                B: `thermal:light_blue_rockwool`,
                C: '#forge:dusts/redstone',
                D: 'minecraft:hopper'
            },
            id: 'xnet:connector_routing'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });

    ['red', 'green', 'blue', 'yellow'].forEach((color) => {
        event
            .shaped(Item.of(`xnet:netcable_${color}`, 16), [' A ', 'ACA', 'BAB'], {
                A: '#forge:dusts/redstone',
                B: `thermal:${color}_rockwool`,
                C: '#forge:ingots/signalum'
            })
            .id(`xnet:netcable_${color}`);

        event
            .shaped(Item.of(`xnet:connector_${color}`, 2), ['ADA', 'CBC', 'ADA'], {
                A: '#forge:ingots/uranium',
                B: `thermal:${color}_rockwool`,
                C: '#forge:dusts/redstone',
                D: 'minecraft:hopper'
            })
            .id(`xnet:connector_${color}`);
    });
});
