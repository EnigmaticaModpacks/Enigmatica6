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
        },
        {
            output: 'immersivepetroleum:gas_generator',
            pattern: ['ABA', 'CDE', 'F F'],
            key: {
                A: 'immersiveengineering:sheetmetal_colored_red',
                B: Item.of('thermal:fluid_cell').ignoreNBT(),
                C: 'immersiveengineering:generator',
                D: 'immersiveengineering:radiator',
                E: 'create:propeller',
                F: '#forge:rods/aluminum'
            },
            id: 'immersivepetroleum:gas_generator'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
