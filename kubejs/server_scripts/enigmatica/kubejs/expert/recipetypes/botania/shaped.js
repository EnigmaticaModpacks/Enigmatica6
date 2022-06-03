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
                C: 'botania:corporea_interceptor',
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
        },
        {
            output: 'botania:knockback_belt',
            pattern: ['B  ', ' C ', 'D A'],
            key: {
                A: '#botania:runes/earth',
                B: '#botania:runes/fire',
                C: 'eidolon:basic_belt',
                D: '#forge:ingots/manasteel'
            },
            id: 'botania:knockback_belt'
        },
        {
            output: 'botania:travel_belt',
            pattern: ['B  ', ' C ', 'D A'],
            key: {
                A: '#botania:runes/air',
                B: '#botania:runes/earth',
                C: 'eidolon:basic_belt',
                D: '#forge:ingots/manasteel'
            },
            id: 'botania:travel_belt'
        },
        {
            output: 'botania:crafting_halo',
            pattern: [' A ', 'BCB', ' B '],
            key: {
                A: 'botania:corporea_spark',
                B: 'ars_nouveau:marvelous_clay',
                C: 'ars_nouveau:glyph_craft'
            },
            id: 'botania:crafting_halo'
        },
        {
            output: 'botania:glass_pickaxe',
            pattern: ['ABA', ' C ', ' C '],
            key: {
                A: 'glassential:glass_ghostly',
                B: '#forge:gems/mana',
                C: 'naturesaura:ancient_stick'
            },
            id: 'botania:glass_pickaxe'
        },
        {
            output: Item.of('botania:corporea_spark', 6),
            pattern: ['ABA', 'ACA', 'ABA'],
            key: {
                A: 'botania:spark',
                B: 'atum:ectoplasm',
                C: Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:nether' })
            },
            id: 'botania:corporea_spark'
        },
        {
            output: 'botania:vine_ball',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:vine',
                B: '#forge:slimeballs'
            },
            id: 'botania:vine_ball'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
