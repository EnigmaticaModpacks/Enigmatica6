events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'mekanism:hdpe_sheet',
            inputs: [
                'mekanism:hdpe_pellet',
                ['immersiveengineering:hammer', 'emendatusenigmatica:enigmatic_hammer'],
                'mekanism:hdpe_pellet'
            ],
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
        }
    ];

    recipes.forEach((recipe) => {
        recipe.id
            ? event.shapeless(recipe.output, recipe.inputs).id(recipe.id)
            : event.shapeless(recipe.output, recipe.inputs);
    });
});
