onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/naturesaura/tree_ritual/';
    const recipes = [
        {
            inputs: [
                { item: 'ars_nouveau:warding_stone' },
                { item: 'ars_nouveau:warding_stone' },
                { item: 'naturesaura:token_joy' },
                { item: 'naturesaura:gold_leaf' },
                { item: 'thermal:ice_charge' },
                { item: 'thermal:lightning_charge' },
                { item: 'thermal:earth_charge' },
                { item: 'minecraft:fire_charge' }
            ],
            output: { item: 'naturesaura:nature_altar' },
            time: 500,
            sapling: 'quark:yellow_blossom_sapling',
            id: 'naturesaura:tree_ritual/nature_altar'
        },
        {
            inputs: [
                {
                    type: 'forge:nbt',
                    item: 'naturesaura:aura_bottle',
                    count: 1,
                    nbt: '{stored_type:"naturesaura:overworld"}'
                },
                { item: 'botania:pink_shiny_flower' },
                { item: 'naturesaura:gold_leaf' },
                { item: 'minecraft:golden_apple' },
                { item: 'architects_palette:sunmetal_blend' },
                { item: 'botania:pink_shiny_flower' },
                { item: 'architects_palette:sunmetal_blend' },
                { item: 'botania:pink_shiny_flower' }
            ],
            output: { item: 'naturesaura:token_joy', count: 2 },
            time: 200,
            sapling: 'quark:yellow_blossom_sapling',
            id: 'naturesaura:tree_ritual/token_joy'
        },
        {
            inputs: [
                {
                    type: 'forge:nbt',
                    item: 'naturesaura:aura_bottle',
                    count: 1,
                    nbt: '{stored_type:"naturesaura:end"}'
                },
                { item: 'upgrade_aquatic:thrasher_tooth' },
                { item: 'naturesaura:gold_leaf' },
                { item: 'eidolon:ender_calx' },
                { item: 'astralsorcery:nocturnal_powder' },
                { item: 'upgrade_aquatic:thrasher_tooth' },
                { item: 'astralsorcery:nocturnal_powder' },
                { item: 'upgrade_aquatic:thrasher_tooth' }
            ],
            output: { item: 'naturesaura:token_fear', count: 2 },
            time: 200,
            sapling: 'architects_palette:twisted_sapling',
            id: 'naturesaura:tree_ritual/token_fear'
        },
        {
            inputs: [
                { item: 'quark:bottled_cloud' },
                { item: 'powah:charged_snowball' },
                { item: 'naturesaura:gold_leaf' },
                { item: 'minecraft:diamond_axe' },
                { item: 'alexsmobs:komodo_spit' },
                { item: 'powah:charged_snowball' },
                { item: 'alexsmobs:komodo_spit' },
                { item: 'powah:charged_snowball' }
            ],
            output: { item: 'naturesaura:token_anger', count: 2 },
            time: 200,
            sapling: 'quark:red_blossom_sapling',
            id: 'naturesaura:tree_ritual/token_anger'
        },
        {
            inputs: [
                {
                    type: 'forge:nbt',
                    item: 'naturesaura:aura_bottle',
                    count: 1,
                    nbt: '{stored_type:"naturesaura:nether"}'
                },
                { item: 'botania:black_shiny_flower' },
                { item: 'naturesaura:gold_leaf' },
                { item: 'quark:soul_bead' },
                { item: 'minecraft:ghast_tear' },
                { item: 'botania:black_shiny_flower' },
                { item: 'minecraft:ghast_tear' },
                { item: 'botania:black_shiny_flower' }
            ],
            output: { item: 'naturesaura:token_sorrow', count: 2 },
            time: 200,
            sapling: 'architects_palette:twisted_sapling',
            id: 'naturesaura:tree_ritual/token_sorrow'
        },
        {
            inputs: [
                { item: 'naturesaura:infused_iron' }, //top
                { item: 'architects_palette:sunstone' }, //bottom
                { item: 'ars_nouveau:glyph_grow' }, //left
                { item: 'naturesaura:token_joy' }, //right
                { item: 'thermal:phytogro' }, //topleft
                { item: 'botania:livingwood' }, //bottomright
                { item: 'thermal:phytogro' }, //topright
                { item: 'botania:livingwood' } //bottomleft
            ],
            output: { item: 'naturesaura:oak_generator' },
            time: 600,
            sapling: 'quark:yellow_blossom_sapling',
            id: 'naturesaura:oak_generator'
        },
        {
            inputs: [
                { item: 'naturesaura:tainted_gold' }, //top
                { item: 'architects_palette:moonstone' }, //bottom
                { item: 'eidolon:reaper_scythe' }, //left
                { item: 'naturesaura:token_sorrow' }, //right
                { tag: 'forge:ingots/nether_brick' }, //topleft
                { item: 'minecraft:soul_sand' }, //bottomright
                { tag: 'forge:ingots/nether_brick' }, //topright
                { item: 'minecraft:soul_sand' } //bottomleft
            ],
            output: { item: 'naturesaura:animal_generator' },
            time: 600,
            sapling: 'quark:blue_blossom_sapling',
            id: 'naturesaura:animal_generator'
        },
        {
            inputs: [
                { item: 'naturesaura:sky_ingot' }, //top
                { item: 'kubejs:firmament' }, //bottom
                { item: 'ars_nouveau:glyph_launch' }, //left
                { item: 'minecraft:fire_charge' }, //right
                { item: 'minecraft:firework_rocket' }, //topleft
                { item: 'naturesaura:token_joy' }, //bottomright
                { item: 'minecraft:firework_rocket' }, //topright
                { item: 'naturesaura:token_rage' } //bottomleft
            ],
            output: { item: 'naturesaura:firework_generator' },
            time: 600,
            sapling: 'quark:blue_blossom_sapling',
            id: 'naturesaura:firework_generator'
        },
        {
            inputs: [
                { item: 'naturesaura:infused_iron' }, //top
                { item: 'architects_palette:sunstone' }, //bottom
                { item: 'ars_nouveau:glyph_harvest' }, //left
                { item: 'naturesaura:token_joy' }, //right
                { item: 'botania:livingwood' }, //topleft
                { item: 'botania:livingwood' }, //bottomright
                { item: 'botania:livingwood' }, //topright
                { item: 'botania:livingwood' } //bottomleft
            ],
            output: { item: 'naturesaura:flower_generator' },
            time: 600,
            sapling: 'quark:yellow_blossom_sapling',
            id: 'naturesaura:flower_generator'
        },
        {
            inputs: [
                { item: 'naturesaura:tainted_gold' }, //top
                { item: 'architects_palette:moonstone' }, //bottom
                { item: 'ars_nouveau:glyph_split' }, //left
                { item: 'supplementaries:bamboo_spikes' }, //right
                { tag: 'forge:ingots/nether_brick' }, //topleft
                { item: 'naturesaura:token_sorrow' }, //bottomright
                { tag: 'forge:ingots/nether_brick' }, //topright
                { item: 'naturesaura:token_joy' } //bottomleft
            ],
            output: { item: 'naturesaura:slime_split_generator' },
            time: 600,
            sapling: 'quark:lavender_blossom_sapling',
            id: 'naturesaura:slime_split_generator'
        },
        {
            inputs: [
                { item: 'eidolon:ender_calx' }, //top
                { item: 'quark:ender_watcher' }, //bottom
                { item: 'ars_nouveau:glyph_blink' }, //left
                { item: 'minecraft:chorus_flower' }, //right
                { item: 'integratedterminals:chorus_glass' }, //topleft
                { item: 'naturesaura:token_joy' }, //bottomright
                { item: 'integratedterminals:chorus_glass' }, //topright
                { item: 'naturesaura:token_rage' } //bottomleft
            ],
            output: { item: 'naturesaura:chorus_generator' },
            time: 600,
            sapling: 'architects_palette:twisted_sapling',
            id: 'naturesaura:chorus_generator'
        },
        {
            inputs: [
                { item: 'naturesaura:tainted_gold' }, //top
                { item: 'architects_palette:moonstone' }, //bottom
                { item: 'ars_nouveau:glyph_aoe' }, //left
                { item: 'naturesaura:token_fear' }, //right
                { item: 'eidolon:fungus_sprouts' }, //topleft
                { tag: 'forge:ingots/nether_brick' }, //bottomright
                { item: 'eidolon:fungus_sprouts' }, //topright
                { tag: 'forge:ingots/nether_brick' } //bottomleft
            ],
            output: { item: 'naturesaura:potion_generator' },
            time: 600,
            sapling: 'quark:lavender_blossom_sapling',
            id: 'naturesaura:potion_generator'
        },
        {
            inputs: [
                { item: 'naturesaura:infused_iron' }, //top
                { item: 'ars_nouveau:glyph_wither' }, //bottom
                { item: 'naturesaura:token_terror' }, //left
                { item: 'naturesaura:token_grief' }, //right
                { item: 'architects_palette:moonstone' }, //topleft
                { item: 'architects_palette:sunstone' }, //bottomright
                { item: 'botania:mossy_livingwood_planks' }, //topright
                { item: 'botania:mossy_livingwood_planks' } //bottomleft
            ],
            output: { item: 'naturesaura:moss_generator' },
            time: 600,
            sapling: 'architects_palette:twisted_sapling',
            id: 'naturesaura:moss_generator'
        },
        {
            inputs: [
                { item: 'naturesaura:infused_iron' }, //top
                { item: 'architects_palette:sunstone' }, //bottom
                { item: 'ars_nouveau:glyph_amplify' }, //left
                { item: 'ars_nouveau:glyph_projectile' }, //right
                { item: 'rsgauges:arrow_target' }, //topleft
                { item: 'naturesaura:token_anger' }, //bottomright
                { item: 'rsgauges:arrow_target' }, //topright
                { item: 'naturesaura:token_anger' } //bottomleft
            ],
            output: { item: 'naturesaura:projectile_generator' },
            time: 600,
            sapling: 'quark:yellow_blossom_sapling',
            id: 'naturesaura:projectile_generator'
        },
        {
            inputs: [
                { item: 'naturesaura:infused_iron' }, //top
                { item: 'architects_palette:moonstone' }, //bottom
                { item: 'ars_nouveau:glyph_grow' }, //left
                { item: 'naturesaura:token_joy' }, //right
                { item: 'astralsorcery:rock_crystal' }, //topleft
                { tag: 'forge:ingots/starmetal' }, //bottomright
                { item: 'astralsorcery:rock_crystal' }, //topright
                { tag: 'forge:ingots/starmetal' } //bottomleft
            ],
            output: { item: 'naturesstarlight:crystal_generator' },
            time: 600,
            sapling: 'quark:lavender_blossom_sapling',
            id: 'naturesstarlight:crystal_generator'
        },
        {
            inputs: [
                { item: 'naturesaura:token_joy' }, //top
                { item: 'resourcefulbees:t2_apiary' }, //bottom
                { tag: 'botania:runes/summer' }, //left
                { tag: 'botania:runes/spring' }, //right
                { tag: 'resourcefulbees:resourceful_honeycomb_block' }, //topleft
                { tag: 'resourcefulbees:resourceful_honeycomb_block' }, //bottomright
                { item: 'resourcefulbees:honey_fluid_bucket' }, //topright
                { item: 'resourcefulbees:honey_fluid_bucket' } //bottomleft
            ],
            output: { item: 'resourcefulbees:t3_apiary' },
            time: 300,
            sapling: 'quark:yellow_blossom_sapling',
            id: 'resourcefulbees:t3_apiary'
        },
        {
            inputs: [
                { item: 'meetyourfight:spectres_eye' }, //top
                { tag: 'forge:ingots/silver' }, //bottom
                { item: 'naturesaura:gold_leaf' }, //left
                { item: 'naturesaura:gold_leaf' }, //right
                { item: 'farmersdelight:tree_bark' }, //topleft
                { item: 'farmersdelight:tree_bark' }, //bottomright
                { item: 'farmersdelight:tree_bark' }, //topright
                { item: 'farmersdelight:tree_bark' } //bottomleft
            ],
            output: { item: 'naturesaura:eye' },
            time: 250,
            sapling: 'architects_palette:twisted_sapling',
            id: 'naturesaura:tree_ritual/eye'
        },
        {
            inputs: [
                { item: 'naturesaura:eye' }, //top
                { tag: 'forge:ingots/sky' }, //bottom
                { tag: 'forge:ingots/sky' }, //left
                { item: 'naturesaura:end_flower' }, //right
                { item: 'naturesaura:gold_leaf' }, //topleft
                { item: 'naturesaura:gold_leaf' }, //bottomright
                { item: 'botania:lens_normal' }, //topright
                { item: 'upgrade_aquatic:elder_eye' } //bottomleft
            ],
            output: { item: 'naturesaura:eye_improved' },
            time: 500,
            sapling: 'architects_palette:twisted_sapling',
            id: 'naturesaura:tree_ritual/eye_improved'
        },
        {
            inputs: [
                { item: 'naturesaura:gold_brick' }, //top
                { item: 'naturesaura:infused_stone' }, //bottom
                { item: 'botania:brewery' }, //left
                { tag: 'forge:ingots/sky' }, //right
                { item: 'naturesaura:gold_leaf' }, //topleft
                { item: 'eidolon:gold_inlay' } //bottomright
            ],
            output: { item: 'naturesaura:conversion_catalyst' },
            time: 600,
            sapling: 'architects_palette:twisted_sapling',
            id: 'naturesaura:tree_ritual/conversion_catalyst'
        },
        {
            inputs: [
                { item: 'naturesaura:gold_brick' }, //top
                { item: 'naturesaura:infused_stone' }, //bottom
                { tag: 'forge:ingots/andesite_alloy' }, //left
                { tag: 'forge:ingots/andesite_alloy' }, //right
                { item: 'naturesaura:token_anger' } //topleft
            ],
            output: { item: 'naturesaura:crushing_catalyst' },
            time: 600,
            sapling: 'undergarden:wigglewood_sapling',
            id: 'naturesaura:tree_ritual/crushing_catalyst'
        },
        {
            inputs: [
                { item: 'naturesaura:infused_stone' },
                { item: 'naturesaura:infused_stone' },
                { tag: 'forge:ingots/tainted_gold' },
                { tag: 'forge:ingots/infused_iron' },
                { item: 'minecraft:fire_charge' },
                { item: 'minecraft:flint_and_steel' },
                { item: 'tconstruct:magma_cake' },
                { item: 'naturesaura:token_anger' }
            ],
            sapling: 'quark:red_blossom_sapling',
            output: { item: 'naturesaura:furnace_heater' },
            time: 600,
            id: 'naturesaura:tree_ritual/furnace_heater'
        },
        {
            inputs: [
                { tag: 'forge:gems/mana_diamond' },
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
                { item: 'atum:palm_sapling' },
                { item: 'atum:date' },
                { item: 'undergarden:veil_mushroom' },
                { item: 'atum:emmer_seeds' },
                { item: 'undergarden:glowing_kelp' },
                { item: 'naturesaura:gold_leaf' }
            ],
            sapling: 'quark:lavender_blossom_sapling',
            output: { item: 'naturesaura:ancient_sapling', count: 2 },
            time: 200,
            id: 'naturesaura:tree_ritual/ancient_sapling'
        },
        {
            inputs: [
                { item: 'naturesaura:gold_powder' },
                { item: 'naturesaura:gold_powder' },
                { tag: 'forge:ores/emerald' },
                { tag: 'forge:ores/cobalt' },
                { tag: 'botania:runes/spring' }
            ],
            sapling: 'quark:yellow_blossom_sapling',
            output: { nbt: { effect: 'naturesaura:ore_spawn' }, item: 'naturesaura:effect_powder', count: 4 },
            time: 400,
            id: 'naturesaura:tree_ritual/ore_spawn_powder'
        },

        // Recipes below this point have not yet been expertified. To Do.

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
        }
        /*
            ,
            {
                inputs: [
                    { item: item }, //top
                    { item: item }, //bottom
                    { item: item }, //left
                    { item: item }, //right
                    { item: item }, //topleft
                    { item: item }, //bottomright
                    { item: item }, //topright
                    { item: item } //bottomleft
                ],
                output: 'naturesaura:oak_generator',
                count: 1,
                sapling: 'quark:yellow_blossom_sapling',
                id: 'naturesaura:oak_generator'
            }
            */
    ];
    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'naturesaura:tree_ritual',
                ingredients: recipe.inputs,
                sapling: { item: recipe.sapling },
                output: recipe.output,
                time: recipe.time
            })
            .id(recipe.id);
    });
});
