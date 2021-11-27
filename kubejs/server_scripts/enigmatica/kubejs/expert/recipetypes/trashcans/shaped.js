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
            output: 'trashcans:item_trash_can',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'engineersdecor:halfslab_sheetmetal_aluminum',
                B: 'quark:cactus_block',
                C: 'immersiveengineering:chute_aluminum'
            },
            id: 'trashcans:item_trash_can'
        },
        {
            output: 'trashcans:liquid_trash_can',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'engineersdecor:halfslab_sheetmetal_aluminum',
                B: 'create:item_drain',
                C: 'immersiveengineering:chute_aluminum'
            },
            id: 'trashcans:liquid_trash_can'
        },
        {
            output: 'trashcans:energy_trash_can',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'engineersdecor:halfslab_sheetmetal_aluminum',
                B: 'thermal:rf_coil',
                C: 'immersiveengineering:chute_aluminum'
            },
            id: 'trashcans:energy_trash_can'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
