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
            output: 'entangled:block',
            pattern: ['ABC', 'BDB', 'CBA'],
            key: {
                A: 'botania:corporea_spark',
                B: 'botania:red_string',
                C: 'botania:red_string_container',
                D: 'botania:corporea_spark_master'
            },
            id: 'entangled:block'
        },
        {
            output: 'entangled:item',
            pattern: [' AB', ' CA', 'DE '],
            key: {
                A: '#forge:rods/lead',
                B: 'eidolon:warped_sprouts',
                C: 'botania:twig_wand',
                D: 'botania:livingwood_twig',
                E: 'betterendforge:leather_stripe'
            },
            id: 'entangled:item'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
