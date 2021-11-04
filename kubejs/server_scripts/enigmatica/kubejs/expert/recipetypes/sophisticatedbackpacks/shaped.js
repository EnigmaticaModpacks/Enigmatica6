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
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'ars_nouveau:blaze_fiber',
                B: '#forge:rods/aluminum',
                C: 'tconstruct:diamond_item_frame'
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
