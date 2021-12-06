onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/environmental/';
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
            output: 'environmental:kiln',
            pattern: ['AAA', 'ABA', 'CCC'],
            key: {
                A: 'environmental:mud_bricks',
                B: 'minecraft:blast_furnace',
                C: 'minecraft:smooth_stone'
            },
            id: 'environmental:crafting/kiln'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
