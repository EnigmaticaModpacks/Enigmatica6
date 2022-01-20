onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/modularrouters/shaped/';
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
            output: Item.of('4x modularrouters:speed_upgrade'),
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'modularrouters:blank_upgrade',
                B: 'pneumaticcraft:glycerol',
                C: {
                    type: 'pneumaticcraft:fluid',
                    tag: 'forge:lubricant',
                    amount: 1000
                }
            },
            id: 'modularrouters:speed_upgrade'
        },
        {
            output: Item.of('3x modularrouters:fluid_upgrade'),
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:glass/colorless',
                B: 'thermal:cured_rubber',
                C: 'modularrouters:blank_upgrade'
            },
            id: 'modularrouters:fluid_upgrade'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
