onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/environmental/shaped';
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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
