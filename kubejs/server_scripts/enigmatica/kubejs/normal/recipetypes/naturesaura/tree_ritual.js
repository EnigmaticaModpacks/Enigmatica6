onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const data = {
        recipes: [
            {
                inputs: [
                    { item: 'naturesaura:gold_brick' },
                    { item: 'naturesaura:infused_stone' },
                    { item: 'minecraft:brewing_stand' },
                    { tag: 'forge:ingots/sky' },
                    { item: 'naturesaura:gold_leaf' },
                    { item: 'minecraft:glowstone' }
                ],
                sapling: 'quark:lavender_blossom_sapling',
                output: { item: 'naturesaura:conversion_catalyst' },
                time: 600,
                id: 'naturesaura:tree_ritual/conversion_catalyst'
            },
            {
                inputs: [
                    { item: 'naturesaura:gold_brick' },
                    { item: 'naturesaura:infused_stone' },
                    { item: 'minecraft:piston' },
                    { item: 'minecraft:flint' },
                    { item: 'naturesaura:token_anger' }
                ],
                sapling: 'quark:yellow_blossom_sapling',
                output: { item: 'naturesaura:crushing_catalyst' },
                time: 600,
                id: 'naturesaura:tree_ritual/crushing_catalyst'
            },
            {
                inputs: [
                    { item: 'naturesaura:gold_powder' },
                    { item: 'naturesaura:gold_powder' },
                    { tag: 'forge:ingots/sky' },
                    { item: 'naturesaura:aura_cache' }
                ],
                sapling: 'quark:yellow_blossom_sapling',
                output: { nbt: { effect: 'naturesaura:cache_recharge' }, item: 'naturesaura:effect_powder', count: 32 },
                time: 400,
                id: 'naturesaura:tree_ritual/cache_powder'
            },
            {
                inputs: [
                    { item: 'naturesaura:gold_powder' },
                    { item: 'naturesaura:gold_powder' },
                    { tag: 'forge:ingots/sky' },
                    { item: 'minecraft:egg' }
                ],
                sapling: 'quark:lavender_blossom_sapling',
                output: { nbt: { effect: 'naturesaura:animal' }, item: 'naturesaura:effect_powder', count: 8 },
                time: 400,
                id: 'naturesaura:tree_ritual/animal_powder'
            },
            {
                inputs: [
                    { item: 'naturesaura:gold_powder' },
                    { item: 'naturesaura:gold_powder' },
                    { tag: 'forge:ingots/sky' },
                    { item: 'minecraft:wheat' }
                ],
                sapling: 'quark:yellow_blossom_sapling',
                output: { nbt: { effect: 'naturesaura:plant_boost' }, item: 'naturesaura:effect_powder', count: 24 },
                time: 400,
                id: 'naturesaura:tree_ritual/plant_powder'
            },
            {
                inputs: [
                    { item: 'naturesaura:gold_powder' },
                    { item: 'naturesaura:gold_powder' },
                    { tag: 'forge:ores/diamond' },
                    { tag: 'forge:ores/redstone' }
                ],
                sapling: 'quark:yellow_blossom_sapling',
                output: { nbt: { effect: 'naturesaura:ore_spawn' }, item: 'naturesaura:effect_powder', count: 4 },
                time: 400,
                id: 'naturesaura:tree_ritual/ore_spawn_powder'
            },
            {
                inputs: [
                    { item: 'naturesaura:gold_powder' },
                    { item: 'naturesaura:gold_powder' },
                    { item: 'minecraft:netherrack' },
                    { item: 'minecraft:grass' }
                ],
                sapling: 'quark:yellow_blossom_sapling',
                output: { nbt: { effect: 'naturesaura:nether_grass' }, item: 'naturesaura:effect_powder', count: 24 },
                time: 400,
                id: 'naturesaura:tree_ritual/nether_grass_powder'
            },
            {
                inputs: [
                    { item: 'naturesaura:gold_powder' },
                    { item: 'naturesaura:gold_powder' },
                    { item: 'astralsorcery:illumination_powder' },
                    { item: 'astralsorcery:aquamarine' }
                ],
                sapling: 'quark:yellow_blossom_sapling',
                output: {
                    nbt: { effect: 'naturesstarlight:starlight_increase' },
                    item: 'naturesaura:effect_powder',
                    count: 8
                },
                time: 400,
                id: 'naturesstarlight:tree_ritual/starlight_increase_powder'
            },
            {
                inputs: [
                    { item: 'minecraft:diamond' },
                    { tag: 'forge:ingots/tainted_gold' },
                    { tag: 'forge:ingots/sky' },
                    { item: 'naturesaura:token_fear' }
                ],
                sapling: 'quark:yellow_blossom_sapling',
                output: { item: 'naturesaura:break_prevention' },
                time: 200,
                id: 'naturesaura:tree_ritual/break_prevention'
            },
            {
                inputs: [
                    { tag: 'minecraft:saplings' },
                    { item: 'minecraft:dandelion' },
                    { item: 'minecraft:poppy' },
                    { item: 'minecraft:wheat_seeds' },
                    { item: 'minecraft:sugar_cane' },
                    { item: 'naturesaura:gold_leaf' }
                ],
                sapling: 'quark:yellow_blossom_sapling',
                output: { item: 'naturesaura:ancient_sapling', count: 2 },
                time: 200,
                id: 'naturesaura:tree_ritual/ancient_sapling'
            },
            {
                inputs: [
                    {
                        type: 'forge:nbt',
                        item: 'naturesaura:aura_bottle',
                        count: 1,
                        nbt: '{stored_type:"naturesaura:overworld"}'
                    },
                    { item: 'naturesaura:gold_leaf' },
                    { item: 'minecraft:ghast_tear' },
                    [
                        { item: 'minecraft:beef' },
                        { item: 'minecraft:mutton' },
                        { item: 'minecraft:chicken' },
                        { item: 'minecraft:porkchop' },
                        { item: 'minecraft:rabbit' },
                        { item: 'simplefarming:raw_horse_meat' },
                        { item: 'environmental:venison' },
                        { item: 'environmental:duck' }
                    ],
                    { item: 'minecraft:glass' },
                    { tag: 'minecraft:fishes' }
                ],
                sapling: 'quark:yellow_blossom_sapling',
                output: { item: 'naturesaura:token_sorrow', count: 2 },
                time: 200,
                id: 'naturesaura:tree_ritual/token_sorrow'
            },
            {
                inputs: [
                    {
                        type: 'forge:nbt',
                        item: 'naturesaura:aura_bottle',
                        count: 1,
                        nbt: '{stored_type:"naturesaura:overworld"}'
                    },
                    { item: 'naturesaura:gold_leaf' },
                    { tag: 'minecraft:small_flowers' },
                    { item: 'minecraft:apple' },
                    { item: 'minecraft:torch' },
                    { tag: 'forge:ingots/iron' }
                ],
                sapling: 'quark:yellow_blossom_sapling',
                output: { item: 'naturesaura:token_joy', count: 2 },
                time: 200,
                id: 'naturesaura:tree_ritual/token_joy'
            },
            {
                inputs: [
                    {
                        type: 'forge:nbt',
                        item: 'naturesaura:aura_bottle',
                        count: 1,
                        nbt: '{stored_type:"naturesaura:nether"}'
                    },
                    { item: 'naturesaura:gold_leaf' },
                    { item: 'minecraft:rotten_flesh' },
                    { item: 'minecraft:feather' },
                    { item: 'minecraft:bone' },
                    { item: 'minecraft:soul_sand' }
                ],
                sapling: 'quark:yellow_blossom_sapling',
                output: { item: 'naturesaura:token_fear', count: 2 },
                time: 200,
                id: 'naturesaura:tree_ritual/token_fear'
            },
            {
                inputs: [
                    {
                        type: 'forge:nbt',
                        item: 'naturesaura:aura_bottle',
                        count: 1,
                        nbt: '{stored_type:"naturesaura:nether"}'
                    },
                    { item: 'naturesaura:gold_leaf' },
                    { item: 'minecraft:magma_block' },
                    { item: 'minecraft:blaze_powder' },
                    { item: 'minecraft:gunpowder' },
                    { item: 'minecraft:ender_pearl' }
                ],
                sapling: 'quark:yellow_blossom_sapling',
                output: { item: 'naturesaura:token_anger', count: 2 },
                time: 200,
                id: 'naturesaura:tree_ritual/token_anger'
            },
            {
                inputs: [
                    { item: 'minecraft:stone' },
                    { item: 'minecraft:stone' },
                    { item: 'minecraft:stone' },
                    { item: 'naturesaura:gold_leaf' },
                    { tag: 'forge:ingots/gold' },
                    { item: 'naturesaura:token_joy' }
                ],
                sapling: 'quark:yellow_blossom_sapling',
                output: { item: 'naturesaura:nature_altar' },
                time: 500,
                id: 'naturesaura:tree_ritual/nature_altar'
            },
            {
                inputs: [
                    { item: 'naturesaura:infused_stone' },
                    { item: 'naturesaura:infused_stone' },
                    { tag: 'forge:ingots/tainted_gold' },
                    { tag: 'forge:ingots/infused_iron' },
                    { item: 'minecraft:fire_charge' },
                    { item: 'minecraft:flint' },
                    { item: 'minecraft:magma_block' },
                    { item: 'naturesaura:token_fear' }
                ],
                sapling: 'quark:yellow_blossom_sapling',
                output: { item: 'naturesaura:furnace_heater' },
                time: 600,
                id: 'naturesaura:tree_ritual/furnace_heater'
            },
            {
                inputs: [
                    { item: 'naturesaura:eye' },
                    { tag: 'forge:ingots/sky' },
                    { tag: 'forge:ingots/sky' },
                    { item: 'naturesaura:end_flower' },
                    { item: 'naturesaura:gold_leaf' },
                    { item: 'naturesaura:gold_leaf' }
                ],
                sapling: 'quark:yellow_blossom_sapling',
                output: { item: 'naturesaura:eye_improved' },
                time: 500,
                id: 'naturesaura:tree_ritual/eye_improved'
            },
            {
                inputs: [
                    { item: 'minecraft:spider_eye' },
                    { tag: 'forge:ingots/gold' },
                    { item: 'naturesaura:gold_leaf' },
                    { item: 'naturesaura:gold_leaf' }
                ],
                sapling: 'quark:yellow_blossom_sapling',
                output: { item: 'naturesaura:eye' },
                time: 250,
                id: 'naturesaura:tree_ritual/eye'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'naturesaura:tree_ritual',
            ingredients: recipe.inputs,
            sapling: { item: recipe.sapling },
            output: recipe.output,
            time: recipe.time
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
