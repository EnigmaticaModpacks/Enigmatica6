onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/environmental/';
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
            output: 'environmental:kiln',
            pattern: ['AAA', 'ABA', 'CCC'],
            key: {
                A: 'environmental:mud_bricks',
                B: 'minecraft:blast_furnace',
                C: 'minecraft:smooth_stone'
            },
            id: 'environmental:crafting/kiln'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
