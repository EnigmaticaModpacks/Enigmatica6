onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/environmental/shaped/';
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
            output: Item.of('environmental:mud_ball', 16),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:dirt',
                B: { type: 'pneumaticcraft:fluid', fluid: 'minecraft:water', amount: 1000 }
            },
            id: 'environmental:building/mud_balls_from_dirt'
        },
        {
            output: Item.of('8x environmental:ice_chain'),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:chain',
                B: '#forge:ices/packed'
            },
            id: 'environmental:building/ice_chain'
        },
        {
            output: Item.of('3x environmental:willow_sign'),
            pattern: ['AAA', 'AAA', ' B '],
            key: {
                A: ['byg:willow_planks', 'environmental:willow_planks', 'projectvibrantjourneys:willow_planks'],
                B: '#forge:rods/wooden'
            },
            id: 'environmental:building/wood/willow/willow_sign'
        },
        {
            output: Item.of('3x environmental:cherry_sign'),
            pattern: ['AAA', 'AAA', ' B '],
            key: {
                A: ['byg:cherry_planks', 'environmental:cherry_planks', 'projectvibrantjourneys:sakura_planks'],
                B: '#forge:rods/wooden'
            },
            id: 'environmental:building/wood/cherry/cherry_sign'
        },

        {
            output: 'environmental:willow_chest',
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: ['byg:willow_planks', 'environmental:willow_planks', 'projectvibrantjourneys:willow_planks']
            },
            id: 'environmental:building/wood/willow/willow_chest'
        },
        {
            output: 'environmental:cherry_chest',
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: ['byg:cherry_planks', 'environmental:cherry_planks', 'projectvibrantjourneys:sakura_planks']
            },
            id: 'environmental:building/wood/cherry/cherry_chest'
        },

        {
            output: Item.of('4x environmental:willow_chest'),
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: ['byg:willow_log', 'environmental:willow_log', 'projectvibrantjourneys:willow_log']
            },
            id: `${id_prefix}willow_chest_from_logs`
        },
        {
            output: Item.of('4x environmental:cherry_chest'),
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: ['byg:cherry_log', 'environmental:cherry_log', 'projectvibrantjourneys:sakura_log']
            },
            id: `${id_prefix}cherry_chest_from_logs`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
