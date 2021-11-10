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
            output: 'gunswithoutroses:hunger_bullet',
            pattern: ['ABA', 'CDC', 'CEC'],
            key: {
                A: 'undergarden:brute_tusk',
                B: 'undergarden:masticator_scales',
                C: 'undergarden:utheric_shard',
                D: '#botania:runes/gluttony',
                E: '#forge:ingots/forgotten_metal'
            },
            id: 'gunswithoutroses:hunger_bullet'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
