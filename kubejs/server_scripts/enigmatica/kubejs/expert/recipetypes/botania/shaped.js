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
            output: 'botania:mana_pool',
            pattern: ['A A', 'ABA'],
            key: {
                A: 'botania:livingrock',
                B: 'ars_nouveau:warding_stone'
            },
            id: 'botania:mana_pool'
        },
        {
            output: 'botania:diluted_pool',
            pattern: ['A A', 'ABA'],
            key: {
                A: 'botania:livingrock_slab',
                B: 'ars_nouveau:warding_stone'
            },
            id: 'botania:diluted_pool'
        },
        {
            output: 'botania:fabulous_pool',
            pattern: ['A A', 'ABA'],
            key: {
                A: 'botania:shimmerrock',
                B: 'ars_nouveau:warding_stone'
            },
            id: 'botania:fabulous_pool'
        },
        {
            output: 'botania:corporea_index',
            pattern: ['ABA', 'BCB', 'DBD'],
            key: {
                A: 'atum:ectoplasm',
                B: 'glassential:glass_ghostly',
                C: 'botania:corporea_block',
                D: 'occultism:spirit_attuned_gem'
            },
            id: 'botania:corporea_index'
        },
        {
            output: 'botania:corporea_crystal_cube',
            pattern: ['A', 'B', 'C'],
            key: {
                A: 'botania:corporea_spark',
                B: 'glassential:glass_ghostly',
                C: 'botania:corporea_block'
            },
            id: 'botania:corporea_crystal_cube'
        },
        {
            output: 'botania:hourglass',
            pattern: ['ABA', 'CDC', 'ABA'],
            key: {
                A: '#forge:nuggets/nebu',
                B: 'atum:crystal_glass',
                C: '#forge:dusts/redstone',
                D: '#forge:gems/mana'
            },
            id: 'botania:hourglass'
        },
        {
            output: 'botania:ender_eye_block',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'create:polished_rose_quartz',
                B: 'minecraft:ender_eye',
                C: 'architects_palette:abyssaline'
            },
            id: 'botania:ender_eye_block'
        },
        {
            output: 'botania:forest_eye',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: '#forge:ingots/infused_iron',
                B: 'naturesaura:infused_stone',
                C: 'minecraft:ender_eye'
            },
            id: 'botania:forest_eye'
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
