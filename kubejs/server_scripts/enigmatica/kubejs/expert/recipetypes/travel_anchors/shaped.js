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
            output: 'travel_anchors:travel_staff',
            pattern: ['  C', ' B ', 'A  '],
            key: {
                A: '#forge:rods/lead',
                B: 'entangled:item',
                C: 'atum:horus_godshard'
            },
            id: 'travel_anchors:travel_staff'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
