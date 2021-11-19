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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
