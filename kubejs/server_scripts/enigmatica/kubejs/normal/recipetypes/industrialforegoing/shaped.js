onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
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
            output: 'industrialforegoing:mob_slaughter_factory',
            pattern: ['PDP', 'SMS', 'ARA'],
            key: {
                P: '#forge:plastic',
                D: '#forge:gears/gold_bronze',
                S: 'minecraft:iron_sword',
                A: 'minecraft:iron_axe',
                M: '#industrialforegoing:machine_frame/pity',
                R: 'minecraft:redstone'
            },
            id: 'industrialforegoing:mob_slaughter_factory'
        },
        {
            output: 'industrialforegoing:dissolution_chamber',
            pattern: ['PCP', 'BMB', 'GDG'],
            key: {
                P: '#forge:plastic',
                C: '#forge:chests',
                B: 'minecraft:bucket',
                M: '#industrialforegoing:machine_frame/pity',
                G: '#forge:ingots/gold_tin',
                D: '#forge:gears/diamond'
            },
            id: 'industrialforegoing:dissolution_chamber'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
