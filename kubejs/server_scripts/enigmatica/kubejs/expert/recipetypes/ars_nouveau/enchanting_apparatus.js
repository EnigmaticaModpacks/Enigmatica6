onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    var data = {
        recipes: [
            {
                inputs: ['#forge:dusts/silver', '#forge:dusts/silver', '#forge:dusts/silver', '#forge:dusts/silver'],
                reagent: '#forge:dusts/sulfur',
                output: 'architects_palette:sunmetal_blend',
                count: 4,
                id: 'architects_palette:sunmetal_blend'
            },
            {
                inputs: [
                    'aquaculture:worm',
                    'atum:osiris_godshard',
                    'minecraft:string',
                    'thermal:phytogro',
                    'thermal:phytogro',
                    'minecraft:string',
                    'atum:osiris_godshard',
                    'aquaculture:worm'
                ],
                reagent: '#forge:beehives/tier_0',
                output: 'betterendforge:silk_moth_nest',
                count: 1
            },
            {
                inputs: [
                    'architects_palette:sunmetal_blend',
                    'architects_palette:sunmetal_blend',
                    'architects_palette:sunmetal_blend',
                    'architects_palette:sunmetal_blend'
                ],
                reagent: 'betterendforge:silk_fiber',
                output: 'naturesaura:gold_fiber',
                count: 4,
                id: 'naturesaura:gold_fiber'
            },
            {
                inputs: [
                    'eidolon:pewter_inlay',
                    'betterendforge:andesite_pedestal',
                    'eidolon:pewter_inlay',
                    'thermal:phytogro'
                ],
                reagent: 'eidolon:crucible',
                output: 'botania:apothecary_default',
                count: 1,
                id: 'botania:apothecary_default'
            },
            {
                inputs: [
                    'occultism:otherstone',
                    '#forge:dusts/mana',
                    'occultism:otherstone',
                    'eidolon:pewter_inlay',
                    'eidolon:pewter_inlay',
                    'occultism:otherstone',
                    'occultism:otherstone',
                    'occultism:otherstone'
                ],
                reagent: 'minecraft:bowl',
                output: 'occultism:sacrificial_bowl',
                count: 1,
                id: 'occultism:crafting/sacrificial_bowl'
            },
            {
                inputs: [
                    'eidolon:gold_inlay',
                    '#forge:dusts/mana',
                    'eidolon:gold_inlay',
                    'eidolon:gold_inlay',
                    'eidolon:gold_inlay'
                ],
                reagent: 'occultism:sacrificial_bowl',
                output: 'occultism:golden_sacrificial_bowl',
                count: 1,
                id: 'occultism:crafting/golden_sacrificial_bowl'
            },
            {
                inputs: [
                    'eidolon:pewter_inlay',
                    'occultism:stable_wormhole',
                    'eidolon:pewter_inlay',
                    'occultism:otherstone',
                    'occultism:otherstone',
                    'eidolon:pewter_inlay',
                    'occultism:otherstone_pedestal',
                    'eidolon:pewter_inlay'
                ],
                reagent: 'eidolon:crucible',
                output: 'bloodmagic:soulforge',
                count: 1,
                id: 'bloodmagic:soul_forge'
            },
            {
                inputs: [
                    'eidolon:gold_inlay',
                    '#forge:ingots/silver',
                    'eidolon:gold_inlay',
                    '#forge:ingots/silver',
                    '#forge:ingots/silver',
                    'eidolon:gold_inlay',
                    '#forge:ingots/silver',
                    'eidolon:gold_inlay'
                ],
                reagent: 'astralsorcery:aquamarine',
                output: 'undergarden:catalyst',
                count: 1,
                id: 'undergarden:catalyst'
            },
            {
                inputs: [
                    'quark:white_candle',
                    'quark:white_candle',
                    'quark:white_candle',
                    'quark:white_candle',
                    'quark:white_candle',
                    'quark:white_candle',
                    'quark:white_candle',
                    'quark:white_candle'
                ],
                reagent: 'bloodmagic:holy_water_anointment',
                output: 'eidolon:candle',
                count: 8,
                id: 'eidolon:candle'
            },
            {
                inputs: [
                    '#forge:nuggets/gold_brass',
                    'bloodmagic:lavacrystal',
                    '#forge:nuggets/gold_brass',
                    '#forge:ingots/gold_brass',
                    '#forge:ingots/gold_brass',
                    'eidolon:gold_inlay',
                    'eidolon:gold_inlay',
                    'eidolon:gold_inlay'
                ],
                reagent: 'ars_nouveau:mana_jar',
                output: 'ars_nouveau:volcanic_accumulator',
                count: 1
            },
            {
                inputs: [
                    '#forge:ingots/gold_brass',
                    'ars_nouveau:warding_stone',
                    '#forge:ingots/gold_brass',
                    '#forge:nuggets/gold_brass',
                    '#forge:nuggets/gold_brass',
                    '#forge:ingots/gold_brass',
                    'ars_nouveau:warding_stone',
                    '#forge:ingots/gold_brass'
                ],
                reagent: '#forge:gems/mana',
                output: 'ars_nouveau:crystallizer',
                count: 1
            },
            {
                inputs: [
                    '#forge:ingots/gold_brass',
                    'ars_nouveau:warding_stone',
                    '#forge:ingots/gold_brass',
                    'ars_nouveau:glyph_extract',
                    'ars_nouveau:glyph_extract',
                    'astralsorcery:illumination_powder',
                    'astralsorcery:illumination_powder',
                    'astralsorcery:illumination_powder'
                ],
                reagent: 'ars_nouveau:potion_jar',
                output: 'ars_nouveau:potion_melder',
                count: 1,
                id: 'ars_nouveau:potion_melder'
            },
            {
                inputs: [
                    '#forge:ingots/gold_brass',
                    'ars_nouveau:glyph_projectile',
                    'minecraft:conduit',
                    '#forge:gems/mana',
                    'ars_nouveau:glyph_accelerate',
                    'ars_nouveau:spell_parchment',
                    '#forge:gems/mana',
                    '#forge:ingots/gold_brass'
                ],
                reagent: 'botania:livingwood',
                output: 'ars_nouveau:wand',
                count: 1,
                id: 'ars_nouveau:wand'
            },
            {
                inputs: [
                    '#resourcefulbees:resourceful_honeycomb_block',
                    'ars_nouveau:summoning_crystal',
                    '#resourcefulbees:resourceful_honeycomb_block',
                    'naturesaura:token_joy',
                    'naturesaura:token_anger',
                    '#resourcefulbees:resourceful_honeycomb_block',
                    'ars_nouveau:summoning_crystal',
                    '#resourcefulbees:resourceful_honeycomb_block'
                ],
                reagent: 'minecraft:spawner',
                output: 'naturesaura:animal_spawner',
                count: 1,
                id: 'naturesaura:animal_spawner'
            },
            {
                inputs: [
                    'ars_nouveau:glyph_amplify',
                    '#forge:storage_blocks/regalium',
                    '#forge:storage_blocks/regalium',
                    '#forge:storage_blocks/mana',
                    '#forge:storage_blocks/mana'
                ],
                reagent: 'undergarden:utheric_sword',
                output: 'ars_nouveau:enchanters_sword',
                count: 1,
                id: 'ars_nouveau:enchanters_sword'
            },
            {
                inputs: [
                    '#forge:ingots/terminite',
                    'ars_nouveau:greater_experience_gem',
                    '#forge:ingots/terminite',
                    '#forge:gems/mana',
                    '#forge:gems/mana',
                    '#forge:ingots/terminite',
                    'ars_nouveau:greater_experience_gem',
                    '#forge:ingots/terminite'
                ],
                reagent: '#atum:relic_non_dirty/ring',
                output: 'ars_nouveau:ring_of_lesser_discount',
                count: 1,
                id: 'ars_nouveau:ring_of_lesser_discount'
            },
            {
                inputs: [
                    '#forge:ingots/thallasium',
                    '#forge:ingots/regalium',
                    '#forge:ingots/thallasium',
                    '#forge:gems/mana',
                    '#forge:gems/mana',
                    '#forge:ingots/thallasium',
                    '#forge:ingots/regalium',
                    '#forge:ingots/thallasium'
                ],
                reagent: 'ars_nouveau:ring_of_lesser_discount',
                output: 'ars_nouveau:ring_of_greater_discount',
                count: 1,
                id: 'ars_nouveau:ring_of_greater_discount'
            },
            {
                inputs: [
                    '#forge:gems/aquamarine',
                    'naturesaura:birth_spirit',
                    '#forge:gems/aquamarine',
                    '#forge:ingots/regalium',
                    '#forge:ingots/regalium',
                    '#forge:gems/mana',
                    '#forge:gems/mana',
                    '#forge:gems/mana'
                ],
                reagent: '#atum:relic_non_dirty/necklace',
                output: 'ars_nouveau:amulet_of_mana_regen',
                count: 1,
                id: 'ars_nouveau:amulet_of_mana_regen'
            },
            {
                inputs: [
                    '#forge:gems/aquamarine',
                    'minecraft:conduit',
                    '#forge:gems/aquamarine',
                    '#forge:ingots/regalium',
                    '#forge:ingots/regalium',
                    '#forge:gems/mana',
                    '#forge:gems/mana',
                    '#forge:gems/mana'
                ],
                reagent: '#atum:relic_non_dirty/necklace',
                output: 'ars_nouveau:amulet_of_mana_boost',
                count: 1,
                id: 'ars_nouveau:amulet_of_mana_boost'
            },
            {
                inputs: [
                    'ars_nouveau:glyph_launch',
                    '#atum:relic_non_dirty/brooch',
                    'atum:horus_godshard',
                    '#atum:relic_non_dirty/brooch',
                    '#atum:relic_non_dirty/brooch',
                    'quark:bottled_cloud',
                    'quark:bottled_cloud',
                    'quark:bottled_cloud'
                ],
                reagent: 'eidolon:basic_belt',
                output: 'ars_nouveau:belt_of_levitation',
                count: 1,
                id: 'ars_nouveau:belt_of_levitation'
            },
            {
                inputs: [
                    'minecraft:sugar',
                    '#forge:crops/nether_wart',
                    '#forge:rods/blaze',
                    '#forge:dusts/glowstone',
                    'minecraft:fermented_spider_eye',
                    '#forge:dusts/redstone',
                    'atum:atem_godshard',
                    '#forge:feathers'
                ],
                reagent: 'eidolon:basic_belt',
                output: 'ars_nouveau:belt_of_unstable_gifts',
                count: 1,
                id: 'ars_nouveau:belt_of_unstable_gifts'
            },
            {
                inputs: [
                    'botania:livingrock',
                    'botania:livingrock',
                    'botania:livingrock',
                    'botania:livingrock',
                    'botania:livingrock',
                    'botania:livingrock',
                    'botania:livingrock',
                    'botania:livingrock'
                ],
                reagent: '#botania:runes/mana',
                output: 'botania:mana_tablet',
                count: 1,
                id: 'botania:mana_tablet'
            },

            {
                inputs: [
                    '#resourcefulbees:resourceful_honeycomb_block',
                    'minecraft:sunflower',
                    'resourcefulbees:honey_fluid_bucket',
                    '#botania:runes/earth',
                    '#botania:runes/air',
                    'resourcefulbees:honey_fluid_bucket',
                    'naturesaura:aura_bloom',
                    '#resourcefulbees:resourceful_honeycomb_block'
                ],
                reagent: 'resourcefulbees:t1_apiary',
                output: 'resourcefulbees:t2_apiary',
                count: 1,
                id: 'resourcefulbees:t2_apiary'
            },

            /// Patchouli Removals
            {
                inputs: ['kubejs:altered_recipe_indicator'],
                reagent: 'kubejs:altered_recipe_indicator',
                output: 'ars_nouveau:void_jar',
                count: 1,
                id: 'ars_nouveau:jar_of_light'
            },
            {
                inputs: ['kubejs:altered_recipe_indicator'],
                reagent: 'kubejs:altered_recipe_indicator',
                output: 'ars_nouveau:void_jar',
                count: 1,
                id: 'ars_nouveau:void_jar'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'ars_nouveau:enchanting_apparatus',
            reagent: [Ingredient.of(recipe.reagent).toJson()],
            output: { item: recipe.output, count: recipe.count }
        };

        recipe.inputs.forEach((input, index) => {
            let i = index + 1;
            constructed_recipe[`item_${i}`] = [Ingredient.of(input).toJson()];
        });

        if (recipe.mana) {
            constructed_recipe['mana'] = recipe.mana;
        }

        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
