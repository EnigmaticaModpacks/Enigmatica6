onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const time_multiplier = 10,
        id_prefix = 'enigmatica:expert/naturesaura/tree_ritual/';

    const recipes = [
        {
            ingredients: [
                'ars_nouveau:warding_stone',
                'ars_nouveau:warding_stone',
                'naturesaura:token_joy',
                'naturesaura:gold_leaf',
                'thermal:ice_charge',
                'thermal:lightning_charge',
                'thermal:earth_charge',
                'minecraft:fire_charge'
            ],
            output: 'naturesaura:nature_altar',
            time: 5 * time_multiplier,
            sapling: 'quark:yellow_blossom_sapling',
            id: 'naturesaura:tree_ritual/nature_altar'
        },
        {
            ingredients: [
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                'botania:pink_shiny_flower',
                'naturesaura:gold_leaf',
                'minecraft:golden_apple',
                'architects_palette:sunmetal_blend',
                'botania:pink_shiny_flower',
                'architects_palette:sunmetal_blend',
                'botania:pink_shiny_flower'
            ],
            output: '2x naturesaura:token_joy',
            time: 2 * time_multiplier,
            sapling: 'quark:yellow_blossom_sapling',
            id: 'naturesaura:tree_ritual/token_joy'
        },
        {
            ingredients: [
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
                'upgrade_aquatic:thrasher_tooth',
                'naturesaura:gold_leaf',
                'eidolon:ender_calx',
                'astralsorcery:nocturnal_powder',
                'upgrade_aquatic:thrasher_tooth',
                'astralsorcery:nocturnal_powder',
                'upgrade_aquatic:thrasher_tooth'
            ],
            output: '2x naturesaura:token_fear',
            time: 2 * time_multiplier,
            sapling: 'quark:lavender_blossom_sapling',
            id: 'naturesaura:tree_ritual/token_fear'
        },
        {
            ingredients: [
                'quark:bottled_cloud',
                'powah:charged_snowball',
                'naturesaura:gold_leaf',
                Item.of('minecraft:diamond_axe', '{Damage:0}').weakNBT(),
                'alexsmobs:komodo_spit',
                'powah:charged_snowball',
                'alexsmobs:komodo_spit',
                'powah:charged_snowball'
            ],
            output: '2x naturesaura:token_anger',
            time: 2 * time_multiplier,
            sapling: 'quark:red_blossom_sapling',
            id: 'naturesaura:tree_ritual/token_anger'
        },
        {
            ingredients: [
                Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:end"}'),
                'botania:black_shiny_flower',
                'naturesaura:gold_leaf',
                'quark:soul_bead',
                'minecraft:ghast_tear',
                'botania:black_shiny_flower',
                'minecraft:ghast_tear',
                'botania:black_shiny_flower'
            ],
            output: '2x naturesaura:token_sorrow',
            time: 2 * time_multiplier,
            sapling: 'quark:lavender_blossom_sapling',
            id: 'naturesaura:tree_ritual/token_sorrow'
        },
        {
            ingredients: [
                'naturesaura:infused_iron',
                'architects_palette:sunstone',
                'ars_nouveau:sylph_shards',
                'naturesaura:token_joy',
                'thermal:phytogro',
                'botania:livingwood',
                'thermal:phytogro',
                'botania:livingwood'
            ],
            output: 'naturesaura:oak_generator',
            time: 6 * time_multiplier,
            sapling: 'quark:yellow_blossom_sapling',
            id: 'naturesaura:oak_generator'
        },
        {
            ingredients: [
                'naturesaura:tainted_gold',
                'architects_palette:moonstone',
                Item.of('eidolon:reaper_scythe', '{Damage:0}').weakNBT(),
                'naturesaura:token_sorrow',
                '#forge:ingots/nether_brick',
                'minecraft:soul_sand',
                '#forge:ingots/nether_brick',
                'minecraft:soul_sand'
            ],
            output: 'naturesaura:animal_generator',
            time: 6 * time_multiplier,
            sapling: 'quark:blue_blossom_sapling',
            id: 'naturesaura:animal_generator'
        },
        {
            ingredients: [
                'naturesaura:sky_ingot',
                'kubejs:firmament',
                'ars_nouveau:glyph_launch',
                'minecraft:fire_charge',
                'minecraft:firework_rocket',
                'naturesaura:token_joy',
                'minecraft:firework_rocket',
                'naturesaura:token_rage'
            ],
            output: 'naturesaura:firework_generator',
            time: 6 * time_multiplier,
            sapling: 'quark:blue_blossom_sapling',
            id: 'naturesaura:firework_generator'
        },
        {
            ingredients: [
                'naturesaura:infused_iron',
                'architects_palette:sunstone',
                'ars_nouveau:glyph_harvest',
                'naturesaura:token_joy',
                'botania:livingwood',
                'botania:livingwood',
                'botania:livingwood',
                'botania:livingwood'
            ],
            output: 'naturesaura:flower_generator',
            time: 6 * time_multiplier,
            sapling: 'quark:yellow_blossom_sapling',
            id: 'naturesaura:flower_generator'
        },
        {
            ingredients: [
                'naturesaura:tainted_gold',
                'architects_palette:moonstone',
                'ars_nouveau:glyph_split',
                'supplementaries:bamboo_spikes',
                '#forge:ingots/nether_brick',
                'naturesaura:token_sorrow',
                '#forge:ingots/nether_brick',
                'naturesaura:token_joy'
            ],
            output: 'naturesaura:slime_split_generator',
            time: 6 * time_multiplier,
            sapling: 'quark:lavender_blossom_sapling',
            id: 'naturesaura:slime_split_generator'
        },
        {
            ingredients: [
                'eidolon:ender_calx',
                'quark:ender_watcher',
                'ars_nouveau:glyph_blink',
                'minecraft:chorus_flower',
                'integratedterminals:chorus_glass',
                'naturesaura:token_joy',
                'integratedterminals:chorus_glass',
                'naturesaura:token_rage'
            ],
            output: 'naturesaura:chorus_generator',
            time: 6 * time_multiplier,
            sapling: 'quark:blue_blossom_sapling',
            id: 'naturesaura:chorus_generator'
        },
        {
            ingredients: [
                'naturesaura:tainted_gold',
                'architects_palette:moonstone',
                'ars_nouveau:glyph_aoe',
                'naturesaura:token_fear',
                'eidolon:fungus_sprouts',
                '#forge:ingots/nether_brick',
                'eidolon:fungus_sprouts',
                '#forge:ingots/nether_brick'
            ],
            output: 'naturesaura:potion_generator',
            time: 6 * time_multiplier,
            sapling: 'quark:lavender_blossom_sapling',
            id: 'naturesaura:potion_generator'
        },
        {
            ingredients: [
                'naturesaura:infused_iron',
                'ars_nouveau:glyph_wither',
                'naturesaura:token_terror',
                'naturesaura:token_grief',
                'architects_palette:moonstone',
                'architects_palette:sunstone',
                'botania:mossy_livingwood_planks',
                'botania:mossy_livingwood_planks'
            ],
            output: 'naturesaura:moss_generator',
            time: 6 * time_multiplier,
            sapling: 'quark:lavender_blossom_sapling',
            id: 'naturesaura:moss_generator'
        },
        {
            ingredients: [
                'naturesaura:infused_iron',
                'architects_palette:sunstone',
                'ars_nouveau:glyph_amplify',
                'ars_nouveau:glyph_projectile',
                'rsgauges:arrow_target',
                'naturesaura:token_anger',
                'rsgauges:arrow_target',
                'naturesaura:token_anger'
            ],
            output: 'naturesaura:projectile_generator',
            time: 6 * time_multiplier,
            sapling: 'quark:yellow_blossom_sapling',
            id: 'naturesaura:projectile_generator'
        },
        {
            ingredients: [
                'naturesaura:infused_iron',
                'architects_palette:moonstone',
                'ars_nouveau:glyph_grow',
                'naturesaura:token_joy',
                'astralsorcery:rock_crystal',
                '#forge:ingots/starmetal',
                'astralsorcery:rock_crystal',
                '#forge:ingots/starmetal'
            ],
            output: 'naturesstarlight:crystal_generator',
            time: 6 * time_multiplier,
            sapling: 'quark:lavender_blossom_sapling',
            id: 'naturesstarlight:crystal_generator'
        },
        {
            ingredients: [
                'naturesaura:token_joy',
                'resourcefulbees:t2_apiary',
                '#botania:runes/summer',
                '#botania:runes/spring',
                '#resourcefulbees:resourceful_honeycomb_block',
                '#resourcefulbees:resourceful_honeycomb_block',
                '#resourcefulbees:resourceful_honey_block',
                '#resourcefulbees:resourceful_honey_block'
            ],
            output: 'resourcefulbees:t3_apiary',
            time: 3 * time_multiplier,
            sapling: 'quark:yellow_blossom_sapling',
            id: 'resourcefulbees:t3_apiary'
        },
        {
            ingredients: [
                'meetyourfight:spectres_eye',
                '#forge:ingots/silver',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'farmersdelight:tree_bark',
                'farmersdelight:tree_bark',
                'farmersdelight:tree_bark',
                'farmersdelight:tree_bark'
            ],
            output: 'naturesaura:eye',
            time: 2 * time_multiplier,
            sapling: 'quark:pink_blossom_sapling',
            id: 'naturesaura:tree_ritual/eye'
        },
        {
            ingredients: [
                'naturesaura:eye',
                '#forge:ingots/sky',
                '#forge:ingots/sky',
                'naturesaura:end_flower',
                'naturesaura:gold_leaf',
                'naturesaura:gold_leaf',
                'botania:lens_normal',
                'upgrade_aquatic:elder_eye'
            ],
            output: 'naturesaura:eye_improved',
            time: 5 * time_multiplier,
            sapling: 'quark:pink_blossom_sapling',
            id: 'naturesaura:tree_ritual/eye_improved'
        },
        {
            ingredients: [
                'naturesaura:gold_brick',
                'naturesaura:infused_stone',
                'botania:brewery',
                '#forge:ingots/sky',
                'naturesaura:gold_leaf',
                'eidolon:gold_inlay'
            ],
            output: 'naturesaura:conversion_catalyst',
            time: 6 * time_multiplier,
            sapling: 'quark:orange_blossom_sapling',
            id: 'naturesaura:tree_ritual/conversion_catalyst'
        },
        {
            ingredients: [
                'naturesaura:gold_brick',
                'naturesaura:infused_stone',
                '#forge:ingots/andesite_alloy',
                '#forge:ingots/andesite_alloy',
                'naturesaura:token_anger'
            ],
            output: 'naturesaura:crushing_catalyst',
            time: 6 * time_multiplier,
            sapling: 'quark:red_blossom_sapling',
            id: 'naturesaura:tree_ritual/crushing_catalyst'
        },
        {
            ingredients: [
                'naturesaura:infused_stone',
                'naturesaura:infused_stone',
                '#forge:ingots/tainted_gold',
                '#forge:ingots/infused_iron',
                'minecraft:fire_charge',
                Item.of('minecraft:flint_and_steel', '{Damage:0}').weakNBT(),
                'tconstruct:magma_cake',
                'naturesaura:token_anger'
            ],
            sapling: 'quark:red_blossom_sapling',
            output: 'naturesaura:furnace_heater',
            time: 6 * time_multiplier,
            id: 'naturesaura:tree_ritual/furnace_heater'
        },
        {
            ingredients: [
                '#forge:gems/mana_diamond',
                '#forge:ingots/tainted_gold',
                '#forge:ingots/sky',
                'naturesaura:token_fear'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: 'naturesaura:break_prevention',
            time: 2 * time_multiplier,
            id: 'naturesaura:tree_ritual/break_prevention'
        },
        {
            ingredients: [
                'atum:palm_sapling',
                'atum:date',
                'undergarden:veil_mushroom',
                'atum:emmer_seeds',
                'undergarden:glowing_kelp',
                'naturesaura:gold_leaf'
            ],
            sapling: 'quark:lavender_blossom_sapling',
            output: '2x naturesaura:ancient_sapling',
            time: 2 * time_multiplier,
            id: 'naturesaura:tree_ritual/ancient_sapling'
        },
        {
            ingredients: [
                'naturesaura:gold_powder',
                'naturesaura:gold_powder',
                '#forge:ores/emerald',
                '#forge:ores/cobalt',
                '#botania:runes/spring'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: Item.of('naturesaura:effect_powder', 4, '{effect:"naturesaura:ore_spawn"}'),
            time: 4 * time_multiplier,
            id: 'naturesaura:tree_ritual/ore_spawn_powder'
        },
        {
            ingredients: [
                'naturesaura:gold_powder',
                'naturesaura:gold_powder',
                'botania:ender_eye_block',
                'naturesaura:aura_cache',
                '#forge:ingots/tainted_gold',
                '#forge:ingots/tainted_gold'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: Item.of('naturesaura:effect_powder', 32, '{effect:"naturesaura:cache_recharge"}'),
            time: 4 * time_multiplier,
            id: 'naturesaura:tree_ritual/cache_powder'
        },
        {
            ingredients: [
                'naturesaura:gold_powder',
                'naturesaura:gold_powder',
                '#forge:ingots/infused_iron',
                'ars_nouveau:ritual_fertility',
                'minecraft:golden_carrot',
                'minecraft:golden_carrot',
                'minecraft:golden_carrot',
                'minecraft:golden_carrot'
            ],
            sapling: 'quark:lavender_blossom_sapling',
            output: Item.of('naturesaura:effect_powder', 8, '{effect:"naturesaura:animal"}'),
            time: 4 * time_multiplier,
            id: 'naturesaura:tree_ritual/animal_powder'
        },
        {
            ingredients: [
                'naturesaura:gold_powder',
                'naturesaura:gold_powder',
                '#forge:ingots/tainted_gold',
                'atum:emmer',
                'atum:anputs_fingers_spores',
                'atum:anputs_fingers_spores',
                'atum:anputs_fingers_spores',
                'atum:anputs_fingers_spores'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: Item.of('naturesaura:effect_powder', 24, '{effect:"naturesaura:plant_boost"}'),
            time: 4 * time_multiplier,
            id: 'naturesaura:tree_ritual/plant_powder'
        },
        {
            ingredients: [
                'naturesaura:gold_powder',
                'naturesaura:gold_powder',
                '#forge:ingots/tainted_gold',
                'minecraft:crimson_nylium',
                'minecraft:crimson_fungus',
                'minecraft:crimson_fungus',
                'minecraft:crimson_fungus',
                'minecraft:crimson_fungus'
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: Item.of('naturesaura:effect_powder', 24, '{effect:"naturesaura:nether_grass"}'),
            time: 4 * time_multiplier,
            id: 'naturesaura:tree_ritual/nether_grass_powder'
        },
        {
            ingredients: [
                'naturesaura:gold_powder',
                'naturesaura:gold_powder',
                'astralsorcery:nocturnal_powder',
                'astralsorcery:resonating_gem',
                'astralsorcery:nocturnal_powder',
                'astralsorcery:resonating_gem',
                'astralsorcery:resonating_gem',
                'astralsorcery:nocturnal_powder'
            ],
            sapling: 'quark:lavender_blossom_sapling',
            output: Item.of('naturesaura:effect_powder', 8, '{effect:"naturesstarlight:starlight_increase"}'),
            time: 4 * time_multiplier,
            id: 'naturesstarlight:tree_ritual/starlight_increase_powder'
        },
        {
            ingredients: [
                'eidolon:basic_amulet',
                '#forge:ingots/tainted_gold',
                'tconstruct:efln_ball',
                'kubejs:firmament',
                'naturesaura:token_anger'
            ],
            sapling: 'quark:red_blossom_sapling',
            output: 'naturesaura:shockwave_creator',
            time: 4 * time_multiplier,
            id: `${id_prefix}shockwave_creator`
        },
        {
            ingredients: [
                'minecraft:conduit',
                'astralsorcery:resonating_gem',
                'botania:livingrock_slab',
                'botania:livingrock_slab',
                'botania:livingrock_slab',
                'botania:livingrock_slab',
                'botania:livingrock_slab',
                'botania:livingrock_slab'
            ],
            sapling: 'quark:lavender_blossom_sapling',
            output: 'botania:brewery',
            time: 4 * time_multiplier,
            id: `${id_prefix}brewery`
        },
        {
            ingredients: [
                'ars_nouveau:summoning_crystal',
                Item.of('naturesaura:aura_cache', '{aura:400000}'),
                'naturesaura:token_anger',
                'naturesaura:token_joy',
                'botania:overgrowth_seed',
                '#forge:storage_blocks/infused_iron',
                'botania:overgrowth_seed',
                '#forge:storage_blocks/infused_iron'
            ],
            sapling: 'quark:blue_blossom_sapling',
            output: 'naturesaura:animal_spawner',
            time: 20 * time_multiplier,
            id: `${id_prefix}animal_spawner`
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
