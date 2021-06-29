onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const data = {
        recipes: [
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
                output: 'naturesaura:nature_altar',
                count: 1,
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
                output: 'naturesaura:token_joy',
                count: 2,
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
                output: 'naturesaura:token_fear',
                count: 2,
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
                output: 'naturesaura:token_anger',
                count: 2,
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
                output: 'naturesaura:token_sorrow',
                count: 2,
                sapling: 'byg:joshua_sapling',
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
                output: 'naturesaura:oak_generator',
                count: 1,
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
                output: 'naturesaura:animal_generator',
                count: 1,
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
                output: 'naturesaura:firework_generator',
                count: 1,
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
                output: 'naturesaura:flower_generator',
                count: 1,
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
                output: 'naturesaura:slime_split_generator',
                count: 1,
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
                output: 'naturesaura:chorus_generator',
                count: 1,
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
                output: 'naturesaura:potion_generator',
                count: 1,
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
                output: 'naturesaura:moss_generator',
                count: 1,
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
                output: 'naturesaura:projectile_generator',
                count: 1,
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
                output: 'naturesstarlight:crystal_generator',
                count: 1,
                sapling: 'quark:lavender_blossom_sapling',
                id: 'naturesstarlight:crystal_generator'
            },
            {
                inputs: [
                    { item: 'botania:livingrock' }, //top
                    { item: 'botania:livingrock' }, //bottom
                    { item: 'botania:livingrock' }, //left
                    { item: 'botania:livingrock' }, //right
                    { item: 'minecraft:conduit' }, //topleft
                    { item: 'botania:livingrock' } //bottomright
                ],
                output: 'botania:runic_altar',
                count: 1,
                sapling: 'quark:lavender_blossom_sapling',
                id: 'botania:runic_altar'
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
                output: 'resourcefulbees:t3_apiary',
                count: 1,
                sapling: 'minecraft:oak_sapling',
                id: 'resourcefulbees:t3_apiary'
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
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'naturesaura:tree_ritual',
            ingredients: recipe.inputs,
            sapling: { item: recipe.sapling },
            output: { item: recipe.output, count: recipe.count },
            time: 500
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
