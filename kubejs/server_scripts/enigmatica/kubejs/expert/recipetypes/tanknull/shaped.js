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
            output: 'tanknull:tank_1',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'resourcefulbees:coal_honeycomb_block',
                B: 'mekanism:basic_fluid_tank',
                C: 'minecraft:sponge'
            },
            id: 'tanknull:1'
        },
        {
            output: 'tanknull:dock',
            pattern: ['AAA', 'BDC', 'AAA'],
            key: {
                A: 'immersiveengineering:sheetmetal_colored_white',
                B: 'ppfluids:high_fluid_extraction_module',
                C: 'ppfluids:high_fluid_retrieval_module',
                D: 'thermal:fluid_cell_frame'
            },
            id: 'tanknull:dock'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
