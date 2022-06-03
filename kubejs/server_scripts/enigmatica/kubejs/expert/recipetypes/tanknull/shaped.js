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
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
