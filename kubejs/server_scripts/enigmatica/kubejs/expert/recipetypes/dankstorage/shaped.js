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
            output: 'dankstorage:dank_1',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'resourcefulbees:coal_honeycomb_block',
                B: 'framedcompactdrawers:framed_full_two',
                C: 'industrialforegoing:common_black_hole_unit'
            },
            id: 'dankstorage:1'
        },
        {
            output: 'dankstorage:dock',
            pattern: ['AAA', 'BDC', 'AAA'],
            key: {
                A: 'immersiveengineering:sheetmetal_colored_black',
                B: 'prettypipes:high_extraction_module',
                C: 'prettypipes:high_retrieval_module',
                D: 'thermal:machine_frame'
            },
            id: 'dankstorage:dock'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
