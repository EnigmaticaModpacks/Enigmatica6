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
            output: Item.of('2x farmersdelight:canvas'),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'farmersdelight:straw',
                B: 'resourcefulbees:wax'
            },
            id: 'farmersdelight:canvas'
        },
        {
            output: 'farmersdelight:basket',
            pattern: ['A A', 'B B', 'ABA'],
            key: {
                A: 'kubejs:scented_stick',
                B: 'farmersdelight:canvas'
            },
            id: 'farmersdelight:basket'
        },
        {
            output: 'farmersdelight:cooking_pot',
            pattern: ['ABA', 'CDC', 'CEC'],
            key: {
                A: 'minecraft:brick',
                B: 'kubejs:scented_stick',
                C: '#forge:ingots/iron',
                D: 'minecraft:conduit',
                E: '#forge:plates/copper'
            },
            id: 'farmersdelight:cooking_pot'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
