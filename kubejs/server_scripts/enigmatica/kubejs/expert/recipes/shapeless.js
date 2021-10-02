onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'mekanism:hdpe_sheet',
            inputs: ['mekanism:hdpe_pellet', '#forge:tools/crafting_hammer', 'mekanism:hdpe_pellet'],
            id: 'mekanism:hdpe_sheet'
        },
        {
            output: Item.of('architects_palette:sunmetal_brick', 9),
            inputs: ['architects_palette:sunmetal_block']
        },
        {
            output: 'ars_nouveau:potion_jar',
            inputs: ['ars_nouveau:mana_jar', ['minecraft:nether_wart', 'eidolon:fungus_sprouts']],
            id: 'ars_nouveau:potion_jar'
        },
        {
            output: 'naturesaura:bottle_two_the_rebottling',
            inputs: ['minecraft:glass_bottle', 'farmersdelight:tree_bark'],
            id: 'naturesaura:bottle_two_the_rebottling'
        },
        {
            output: 'botania:redstone_root',
            inputs: ['quark:root_item', '#forge:dusts/redstone'],
            id: 'botania:redstone_root'
        },
        {
            output: Item.of('bloodmagic:woodbrickpath', 4),
            inputs: [
                'eidolon:polished_planks',
                'eidolon:polished_planks',
                'eidolon:polished_planks',
                'eidolon:polished_planks',
                { type: 'bloodmagic:bloodorb', orb_tier: 2 }
            ],
            id: 'bloodmagic:path/path_wood'
        },
        {
            output: Item.of('bloodmagic:largebloodstonebrick', 4),
            inputs: [
                'naturesaura:infused_stone',
                'naturesaura:infused_stone',
                'naturesaura:infused_stone',
                'naturesaura:infused_stone',
                'bloodmagic:weakbloodshard'
            ],
            id: 'bloodmagic:largebloodstonebrick'
        },
        {
            output: Item.of('botania:red_string', 1),
            inputs: ['minecraft:string', '#forge:storage_blocks/redstone', 'atum:ectoplasm'],
            id: 'botania:red_string_alt'
        },
        {
            output: Item.of('botania:corporea_spark', 1),
            inputs: [
                'botania:spark',
                'atum:ectoplasm',
                Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:nether' })
            ],
            id: 'botania:corporea_spark'
        },
        {
            output: Item.of('botania:corporea_spark_master', 1),
            inputs: ['botania:corporea_spark', '#atum:godshards'],
            id: 'botania:corporea_spark_master'
        },
        {
            output: Item.of('botania:corporea_block', 8),
            inputs: ['naturesaura:infused_stone', 'botania:corporea_spark'],
            id: 'botania:corporea_block'
        },
        {
            output: Item.of('betterendforge:leather_wrapped_stick'),
            inputs: ['naturesaura:ancient_stick', 'betterendforge:leather_stripe'],
            id: 'betterendforge:leather_wrapped_stick'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
            : event.shapeless(recipe.output, recipe.inputs);
    });
});
