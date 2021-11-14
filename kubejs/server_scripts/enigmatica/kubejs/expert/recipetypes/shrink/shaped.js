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
            output: 'shrink:shrinking_device',
            pattern: ['ABA', 'CDC', 'ECE'],
            key: {
                A: '#forge:gems/ender',
                B: '#forge:glass_panes/lime',
                C: '#forge:plates/lead',
                D: 'thermal:flux_capacitor',
                E: '#resourcefulbees:resourceful_honeycomb'
            },
            id: 'shrink:shrinking_device'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
