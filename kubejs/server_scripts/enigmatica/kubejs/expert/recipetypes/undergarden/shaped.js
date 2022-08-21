onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/undergarden/shaped';
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
            output: 'undergarden:forgotten_pickaxe',
            pattern: ['AAA', ' B ', ' B '],
            key: {
                A: '#forge:ingots/forgotten_metal',
                B: 'betterendforge:leather_wrapped_stick'
            },
            id: `${id_prefix}forgotten_pickaxe`
        },
        {
            output: 'undergarden:forgotten_sword',
            pattern: [' A ', ' A ', ' B '],
            key: {
                A: '#forge:ingots/forgotten_metal',
                B: 'betterendforge:leather_wrapped_stick'
            },
            id: `${id_prefix}forgotten_sword`
        },
        {
            output: 'undergarden:forgotten_axe',
            pattern: ['AA ', 'AB ', ' B '],
            key: {
                A: '#forge:ingots/forgotten_metal',
                B: 'betterendforge:leather_wrapped_stick'
            },
            id: `${id_prefix}forgotten_axe`
        },
        {
            output: 'undergarden:forgotten_hoe',
            pattern: ['AA ', ' B ', ' B '],
            key: {
                A: '#forge:ingots/forgotten_metal',
                B: 'betterendforge:leather_wrapped_stick'
            },
            id: `${id_prefix}forgotten_hoe`
        },
        {
            output: 'undergarden:forgotten_shovel',
            pattern: [' A ', ' B ', ' B '],
            key: {
                A: '#forge:ingots/forgotten_metal',
                B: 'betterendforge:leather_wrapped_stick'
            },
            id: `${id_prefix}forgotten_shovel`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
