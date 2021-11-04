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
            output: 'sophisticatedbackpacks:upgrade_base',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'kubejs:scented_stick',
                B: 'farmersdelight:canvas'
            },
            id: 'sophisticatedbackpacks:upgrade_base'
        },
        {
            output: 'sophisticatedbackpacks:backpack',
            pattern: ['ABA', 'ACA', 'BBB'],
            key: {
                A: 'betterendforge:leather_stripe',
                B: 'farmersdelight:canvas',
                C: 'farmersdelight:basket'
            },
            id: 'sophisticatedbackpacks:backpack'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
