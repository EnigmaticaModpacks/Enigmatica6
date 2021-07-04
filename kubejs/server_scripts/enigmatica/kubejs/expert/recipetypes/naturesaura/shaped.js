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

    const newRecipes = [
        {
            output: 'naturesaura:grated_chute',
            pattern: ['A A', 'ABA', ' A '],
            key: {
                A: 'naturesaura:infused_iron',
                B: '#forge:chests'
            },
            id: 'naturesaura:grated_chute'
        },
        {
            output: 'naturesaura:offering_table',
            pattern: ['BAB', 'CBD', 'EEE'],
            key: {
                A: '#forge:ingots/infused_iron',
                B: 'naturesaura:infused_stone',
                C: 'naturesaura:token_fear',
                D: 'naturesaura:token_sorrow',
                E: 'naturesaura:ancient_bark'
            },
            id: 'naturesaura:offering_table'
        }
    ];

    newRecipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
