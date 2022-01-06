onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/rangedpumps/';
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
            output: 'rangedpumps:pump',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'tconstruct:nahuatl',
                B: 'thermal:obsidian_glass',
                C: 'mekanism:electric_pump'
            },
            id: 'rangedpumps:pump'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
