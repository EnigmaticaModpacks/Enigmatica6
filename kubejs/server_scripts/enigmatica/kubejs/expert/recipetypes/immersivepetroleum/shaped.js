onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersivepetroleum/';
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
            output: 'immersivepetroleum:flarestack',
            pattern: ['ABA', 'CDC', 'AEA'],
            key: {
                A: '#forge:plates/steel',
                B: '#forge:dusts/blaze',
                C: 'thermal:redstone_servo',
                D: 'immersiveengineering:fluid_placer',
                E: 'immersiveengineering:fluid_pipe'
            },
            id: 'immersivepetroleum:flarestack'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
