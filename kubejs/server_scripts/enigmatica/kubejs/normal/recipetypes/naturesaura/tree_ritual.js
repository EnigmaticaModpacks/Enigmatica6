onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            ingredients: [
                'naturesaura:gold_brick',
                'naturesaura:infused_stone',
                'minecraft:brewing_stand',
                '#forge:ingots/sky',
                'naturesaura:gold_leaf',
                'minecraft:glowstone'
            ],
            sapling: 'quark:lavender_blossom_sapling',
            output: 'naturesaura:conversion_catalyst',
            time: 600,
            id: 'naturesaura:tree_ritual/conversion_catalyst'
        },
        {
            ingredients: [
                'naturesaura:gold_brick',
                'naturesaura:infused_stone',
                'minecraft:piston',
                'minecraft:flint',
                'naturesaura:token_anger'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:crushing_catalyst',
            time: 600,
            id: 'naturesaura:tree_ritual/crushing_catalyst'
        },
        {
            ingredients: [
                'naturesaura:gold_powder',
                'naturesaura:gold_powder',
                '#forge:ingots/sky',
                'naturesaura:aura_cache'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: Item.of('naturesaura:effect_powder', 32, '{effect:"naturesaura:cache_recharge"}'),
            time: 400,
            id: 'naturesaura:tree_ritual/cache_powder'
        },
        {
            ingredients: ['naturesaura:gold_powder', 'naturesaura:gold_powder', '#forge:ingots/sky', 'minecraft:egg'],
            sapling: 'quark:lavender_blossom_sapling',
            output: Item.of('naturesaura:effect_powder', 8, '{effect:"naturesaura:animal"}'),
            time: 400,
            id: 'naturesaura:tree_ritual/animal_powder'
        },
        {
            ingredients: ['naturesaura:gold_powder', 'naturesaura:gold_powder', '#forge:ingots/sky', 'minecraft:wheat'],
            sapling: 'quark:yellow_blossom_sapling',
            output: Item.of('naturesaura:effect_powder', 24, '{effect:"naturesaura:plant_boost"}'),
            time: 400,
            id: 'naturesaura:tree_ritual/plant_powder'
        },
        {
            ingredients: [
                'naturesaura:gold_powder',
                'naturesaura:gold_powder',
                '#forge:ores/diamond',
                '#forge:ores/redstone'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: Item.of('naturesaura:effect_powder', 4, '{effect:"naturesaura:ore_spawn"}'),
            time: 400,
            id: 'naturesaura:tree_ritual/ore_spawn_powder'
        },
        {
            ingredients: [
                'naturesaura:gold_powder',
                'naturesaura:gold_powder',
                'minecraft:netherrack',
                'minecraft:grass'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: Item.of('naturesaura:effect_powder', 24, '{effect:"naturesaura:nether_grass"}'),
            time: 400,
            id: 'naturesaura:tree_ritual/nether_grass_powder'
        },
        {
            ingredients: [
                'naturesaura:gold_powder',
                'naturesaura:gold_powder',
                'astralsorcery:illumination_powder',
                'astralsorcery:aquamarine'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: Item.of('naturesaura:effect_powder', 8, '{effect:"naturesstarlight:starlight_increase"}'),
            time: 400,
            id: 'naturesstarlight:tree_ritual/starlight_increase_powder'
        },
        {
            ingredients: [
                'minecraft:diamond',
                '#forge:ingots/tainted_gold',
                '#forge:ingots/sky',
                'naturesaura:token_fear'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:break_prevention',
            time: 200,
            id: 'naturesaura:tree_ritual/break_prevention'
        },
        {
            ingredients: [
                '#minecraft:saplings',
                'minecraft:dandelion',
                'minecraft:poppy',
                'minecraft:wheat_seeds',
                'minecraft:sugar_cane',
                'naturesaura:gold_leaf'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:ancient_sapling',
            count: 2,
            time: 200,
            id: 'naturesaura:tree_ritual/ancient_sapling'
        },
        {
            ingredients: [
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                'naturesaura:gold_leaf',
                'minecraft:ghast_tear',
                [
                    'minecraft:beef',
                    'minecraft:mutton',
                    'minecraft:chicken',
                    'minecraft:porkchop',
                    'minecraft:rabbit',
                    'simplefarming:raw_horse_meat',
                    'environmental:venison',
                    'environmental:duck'
                ],
                'minecraft:glass',
                '#minecraft:fishes'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:token_sorrow',
            count: 2,
            time: 200,
            id: 'naturesaura:tree_ritual/token_sorrow'
        },
        {
            ingredients: [
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                'naturesaura:gold_leaf',
                '#minecraft:small_flowers',
                'minecraft:apple',
                'minecraft:torch',
                '#forge:ingots/iron'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:token_joy',
            count: 2,
            time: 200,
            id: 'naturesaura:tree_ritual/token_joy'
        },
        {
            ingredients: [
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}'),
                'naturesaura:gold_leaf',
                'minecraft:rotten_flesh',
                'minecraft:feather',
                'minecraft:bone',
                'minecraft:soul_sand'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:token_fear',
            count: 2,
            time: 200,
            id: 'naturesaura:tree_ritual/token_fear'
        },
        {
            ingredients: [
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}'),
                'naturesaura:gold_leaf',
                'minecraft:magma_block',
                'minecraft:blaze_powder',
                'minecraft:gunpowder',
                'minecraft:ender_pearl'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:token_anger',
            count: 2,
            time: 200,
            id: 'naturesaura:tree_ritual/token_anger'
        },
        {
            ingredients: [
                'minecraft:stone',
                'minecraft:stone',
                'minecraft:stone',
                'naturesaura:gold_leaf',
                '#forge:ingots/gold',
                'naturesaura:token_joy'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:nature_altar',
            time: 500,
            id: 'naturesaura:tree_ritual/nature_altar'
        },
        {
            ingredients: [
                'naturesaura:infused_stone',
                'naturesaura:infused_stone',
                '#forge:ingots/tainted_gold',
                '#forge:ingots/infused_iron',
                'minecraft:fire_charge',
                'minecraft:flint',
                'minecraft:magma_block',
                'naturesaura:token_fear'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:furnace_heater',
            time: 600,
            id: 'naturesaura:tree_ritual/furnace_heater'
        },
        {
            ingredients: [
                'naturesaura:eye',
                '#forge:ingots/sky',
                '#forge:ingots/sky',
                'naturesaura:end_flower',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:eye_improved',
            time: 500,
            id: 'naturesaura:tree_ritual/eye_improved'
        },
        {
            ingredients: [
                'minecraft:spider_eye',
                '#forge:ingots/gold',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:eye',
            time: 250,
            id: 'naturesaura:tree_ritual/eye'
        }

        /*
            ,
            {
                ingredients: [
                    item, //top
                    item, //bottom
                    item, //left
                    item, //right

                    item, //topleft
                    item, //bottomright
                    item, //topright
                    item //bottomleft
                output: 'naturesaura:oak_generator',
                sapling: 'quark:yellow_blossom_sapling',
                id: 'naturesaura:oak_generator'
            }
            */
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'naturesaura:tree_ritual';
        recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson());
        recipe.sapling = Item.of(recipe.sapling).toJson();
        recipe.output = Item.of(recipe.output).toResultJson();

        event.custom(recipe).id(recipe.id);
    });
});
