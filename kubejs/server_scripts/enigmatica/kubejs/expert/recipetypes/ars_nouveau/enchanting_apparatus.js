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
                    '#forge:nuggets/nebu',
                    'minecraft:string',
                    'thermal:phytogro',
                    'thermal:phytogro',
                    'minecraft:string',
                    '#forge:nuggets/nebu',
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
            {
                inputs: [
                    '#forge:gems/mana_diamond',
                    'bloodmagic:firescribetool',
                    '#forge:gems/mana_diamond',
                    'bloodmagic:airscribetool',
                    'bloodmagic:earthscribetool',
                    '#forge:gems/mana_diamond',
                    'bloodmagic:waterscribetool',
                    '#forge:gems/mana_diamond'
                ],
                reagent: 'botania:livingwood_twig',
                output: 'bloodmagic:ritualdiviner',
                count: 1,
                id: 'bloodmagic:ritual_diviner_0'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'naturesaura:sky_sword',
                    'botania:pixie_dust',
                    'atum:montu_godshard',
                    '#botania:runes/muspelheim',
                    'botania:pixie_dust',
                    'naturesaura:token_rage',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/attack',
                count: 1,
                id: 'pedestals:upgrades/attack'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'immersiveengineering:sawblade',
                    'botania:pixie_dust',
                    'naturesaura:token_joy',
                    '#botania:runes/earth',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_pickup',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/sawmill',
                count: 1,
                id: 'pedestals:upgrades/sawmill'
            },
            {
                inputs: [
                    'powah:capacitor_spirited',
                    'thermal:rf_coil',
                    'powah:capacitor_spirited',
                    'immersiveengineering:coil_lv',
                    'immersiveengineering:coil_lv',
                    'powah:capacitor_spirited',
                    'thermal:rf_coil',
                    'powah:capacitor_spirited'
                ],
                reagent: 'pedestals:coin/sawmill',
                output: 'pedestals:coin/rfsawmill',
                count: 1,
                id: 'pedestals:upgrades/rfsawmill'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_fell',
                    'botania:pixie_dust',
                    'naturesaura:token_joy',
                    '#botania:runes/air',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_aoe',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/chopper',
                count: 1,
                id: 'pedestals:upgrades/chopper'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_touch',
                    'botania:pixie_dust',
                    'naturesaura:token_joy',
                    '#botania:runes/earth',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_break',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/breaker',
                count: 1,
                id: 'pedestals:upgrades/breaker'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_freeze',
                    'botania:pixie_dust',
                    '#botania:runes/fire',
                    '#botania:runes/water',
                    'botania:pixie_dust',
                    'botania:ender_eye_block',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/cobble',
                count: 1,
                id: 'pedestals:upgrades/cobblegen'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'minecraft:piston',
                    'botania:pixie_dust',
                    'naturesaura:token_joy',
                    '#botania:runes/sloth',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_pickup',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/compactor2',
                count: 1,
                id: 'pedestals:upgrades/compactor2'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_craft',
                    'botania:pixie_dust',
                    'naturesaura:token_joy',
                    '#botania:runes/sloth',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_pickup',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/crafter1',
                count: 1,
                id: 'pedestals:upgrades/crafter1'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_touch',
                    'botania:pixie_dust',
                    'naturesaura:token_joy',
                    '#botania:runes/earth',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_place_block',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/placer',
                count: 1,
                id: 'pedestals:upgrades/placer'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_smelt',
                    'botania:pixie_dust',
                    'naturesaura:token_anger',
                    '#botania:runes/summer',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_pickup',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/smelter',
                count: 1,
                id: 'pedestals:upgrades/smelter'
            },
            {
                inputs: [
                    'powah:capacitor_spirited',
                    'thermal:rf_coil',
                    'powah:capacitor_spirited',
                    'immersiveengineering:coil_lv',
                    'immersiveengineering:coil_lv',
                    'powah:capacitor_spirited',
                    'thermal:rf_coil',
                    'powah:capacitor_spirited'
                ],
                reagent: 'pedestals:coin/smelter',
                output: 'pedestals:coin/rfsmelter',
                count: 1,
                id: 'pedestals:upgrades/rfsmelter'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'botania:corporea_spark',
                    'botania:pixie_dust',
                    'naturesaura:token_joy',
                    '#botania:runes/greed',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_pickup',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/import',
                count: 1,
                id: 'pedestals:upgrades/import'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'botania:corporea_spark',
                    'botania:pixie_dust',
                    'naturesaura:token_joy',
                    '#botania:runes/greed',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_ender_inventory',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                // Not a typo, items are misnamed.
                output: 'pedestals:coin/enderexport',
                count: 1,
                id: 'pedestals:upgrades/enderimport'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_harvest',
                    'botania:pixie_dust',
                    'naturesaura:token_joy',
                    '#botania:runes/asgard',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_aoe',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/harvester',
                count: 1,
                id: 'pedestals:upgrades/harvester'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'atum:nebu_hammer',
                    'botania:pixie_dust',
                    'naturesaura:token_terror',
                    '#botania:runes/nidavellir',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_aoe',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/breaker',
                output: 'pedestals:coin/quarry',
                count: 1,
                id: 'pedestals:upgrades/quarry'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_grow',
                    'botania:pixie_dust',
                    'naturesaura:token_euphoria',
                    '#botania:runes/alfheim',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_aoe',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/grower',
                count: 1,
                id: 'pedestals:upgrades/grower'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'ars_nouveau:sylph_charm',
                    'botania:pixie_dust',
                    'naturesaura:token_euphoria',
                    '#botania:runes/midgard',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_aoe',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/planter',
                count: 1,
                id: 'pedestals:upgrades/planter'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'resourcefulbees:scraper',
                    'botania:pixie_dust',
                    'naturesaura:token_anger',
                    '#botania:runes/autumn',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_aoe',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/harvesterhives',
                count: 1,
                id: 'pedestals:upgrades/harvesterhives'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    '#botania:runes/earth',
                    'botania:pixie_dust',
                    'create:crushing_wheel',
                    'create:crushing_wheel',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_pickup',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/crusher',
                count: 1,
                id: 'pedestals:upgrades/crusher'
            },
            {
                inputs: [
                    'powah:capacitor_spirited',
                    'thermal:rf_coil',
                    'powah:capacitor_spirited',
                    'immersiveengineering:coil_lv',
                    'immersiveengineering:coil_lv',
                    'powah:capacitor_spirited',
                    'thermal:rf_coil',
                    'powah:capacitor_spirited'
                ],
                reagent: 'pedestals:coin/crusher',
                output: 'pedestals:coin/rfcrusher',
                count: 1,
                id: 'pedestals:upgrades/rfcrusher'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_gravity',
                    'botania:pixie_dust',
                    'naturesaura:token_sorrow',
                    '#botania:runes/air',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_pickup',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/dropper',
                count: 1,
                id: 'pedestals:upgrades/dropper'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_gust',
                    'botania:pixie_dust',
                    'naturesaura:token_anger',
                    '#botania:runes/air',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_aoe',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/fan',
                count: 1,
                id: 'pedestals:upgrades/fan'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'ars_nouveau:potion_flask',
                    'botania:pixie_dust',
                    'naturesaura:token_anger',
                    '#botania:runes/water',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_aoe',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/effect',
                count: 1,
                id: 'pedestals:upgrades/effect'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'mekanism:ultimate_bin',
                    'botania:pixie_dust',
                    'naturesaura:token_sorrow',
                    '#botania:runes/greed',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_amplify',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/itemtank',
                count: 1,
                id: 'pedestals:upgrades/itemtank'
            },
            {
                inputs: [
                    'astralsorcery:resonating_gem',
                    'create:brass_hand',
                    'astralsorcery:resonating_gem',
                    'naturesaura:token_joy',
                    '#botania:runes/water',
                    'astralsorcery:resonating_gem',
                    'ars_nouveau:glyph_aoe',
                    'astralsorcery:resonating_gem'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/milker',
                count: 1,
                id: 'pedestals:upgrades/milker'
            },
            {
                inputs: [
                    'astralsorcery:resonating_gem',
                    'thermal:fluid_cell',
                    'astralsorcery:resonating_gem',
                    'naturesaura:token_sorrow',
                    '#botania:runes/greed',
                    'astralsorcery:resonating_gem',
                    'ars_nouveau:glyph_amplify',
                    'astralsorcery:resonating_gem'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/fluidtank',
                count: 1,
                id: 'pedestals:upgrades/fluidtank'
            },
            {
                inputs: [
                    'astralsorcery:resonating_gem',
                    'botania:corporea_spark',
                    'astralsorcery:resonating_gem',
                    '#botania:runes/air',
                    '#botania:runes/water',
                    'astralsorcery:resonating_gem',
                    'botania:corporea_spark',
                    'astralsorcery:resonating_gem'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/fluidrelay',
                count: 1,
                id: 'pedestals:upgrades/fluidrelay'
            },
            {
                inputs: [
                    'powah:capacitor_spirited',
                    'powah:ender_core',
                    'powah:capacitor_spirited',
                    '#botania:runes/air',
                    '#botania:runes/fire',
                    'powah:capacitor_spirited',
                    'powah:ender_core',
                    'powah:capacitor_spirited'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/rfrelay',
                count: 1,
                id: 'pedestals:upgrades/rfrelay'
            },
            {
                inputs: [
                    'ars_nouveau:greater_experience_gem',
                    'botania:corporea_spark',
                    'ars_nouveau:greater_experience_gem',
                    '#botania:runes/air',
                    '#botania:runes/mana',
                    'ars_nouveau:greater_experience_gem',
                    'botania:corporea_spark',
                    'ars_nouveau:greater_experience_gem'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/xprelay',
                count: 1,
                id: 'pedestals:upgrades/xprelay'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'ars_nouveau:ritual_warping',
                    'botania:pixie_dust',
                    'naturesaura:token_fear',
                    '#botania:runes/air',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_exchange',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/teleporter',
                count: 1,
                id: 'pedestals:upgrades/teleporter'
            },
            {
                inputs: [
                    'quark:basalt',
                    'quark:basalt',
                    'quark:basalt',
                    'naturesaura:token_sorrow',
                    'naturesaura:token_sorrow',
                    'quark:basalt',
                    'quark:basalt',
                    'quark:basalt'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/void',
                count: 1,
                id: 'pedestals:upgrades/void'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_pull',
                    'botania:pixie_dust',
                    'naturesaura:token_joy',
                    '#botania:runes/air',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_aoe',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/magnet',
                count: 1,
                id: 'pedestals:upgrades/magnet'
            },
            {
                inputs: [
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_cut',
                    'botania:pixie_dust',
                    'naturesaura:token_joy',
                    '#botania:runes/spring',
                    'botania:pixie_dust',
                    'ars_nouveau:glyph_aoe',
                    'botania:pixie_dust'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/shearer',
                count: 1,
                id: 'pedestals:upgrades/shearer'
            },
            {
                inputs: [
                    'powah:capacitor_spirited',
                    'powah:ender_core',
                    'powah:capacitor_spirited',
                    '#botania:runes/air',
                    '#botania:runes/fire',
                    'powah:capacitor_spirited',
                    'immersiveengineering:coil_hv',
                    'powah:capacitor_spirited'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/rfimport',
                count: 1,
                id: 'pedestals:upgrades/rfimport'
            },
            {
                inputs: [
                    'powah:capacitor_spirited',
                    'powah:ender_core',
                    'powah:capacitor_spirited',
                    'powah:battery_spirited',
                    'powah:battery_spirited',
                    'powah:capacitor_spirited',
                    'ars_nouveau:glyph_amplify',
                    'powah:capacitor_spirited'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/rftank',
                count: 1,
                id: 'pedestals:upgrades/rftank'
            },
            {
                inputs: [
                    'astralsorcery:resonating_gem',
                    'ars_nouveau:glyph_craft',
                    'astralsorcery:resonating_gem',
                    'naturesaura:token_joy',
                    '#botania:runes/sloth',
                    'astralsorcery:resonating_gem',
                    'ars_nouveau:glyph_pickup',
                    'astralsorcery:resonating_gem'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/fluidcrafter1',
                count: 1,
                id: 'pedestals:upgrades/fluidcrafter1'
            },
            {
                inputs: [
                    'ars_nouveau:greater_experience_gem',
                    'botania:rosa_arcana',
                    'ars_nouveau:greater_experience_gem',
                    '#botania:runes/mana',
                    '#botania:runes/vanaheim',
                    'ars_nouveau:greater_experience_gem',
                    'ars_nouveau:glyph_pickup',
                    'ars_nouveau:greater_experience_gem'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/xpgrindstone',
                count: 1,
                id: 'pedestals:upgrades/xpgrindstone'
            },
            {
                inputs: [
                    'ars_nouveau:greater_experience_gem',
                    'create:spout',
                    'ars_nouveau:greater_experience_gem',
                    '#botania:runes/mana',
                    '#botania:runes/vanaheim',
                    'ars_nouveau:greater_experience_gem',
                    'ars_nouveau:glyph_pickup',
                    'ars_nouveau:greater_experience_gem'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/xpbottler',
                count: 1,
                id: 'pedestals:upgrades/xpbottler'
            },
            {
                inputs: [
                    'ars_nouveau:greater_experience_gem',
                    'ars_nouveau:glyph_pull',
                    'ars_nouveau:greater_experience_gem',
                    '#botania:runes/mana',
                    '#botania:runes/vanaheim',
                    'ars_nouveau:greater_experience_gem',
                    'ars_nouveau:glyph_aoe',
                    'ars_nouveau:greater_experience_gem'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/xpmagnet',
                count: 1,
                id: 'pedestals:upgrades/xpmagnet'
            },
            {
                inputs: [
                    'ars_nouveau:greater_experience_gem',
                    'pneumaticcraft:memory_stick',
                    'ars_nouveau:greater_experience_gem',
                    '#botania:runes/mana',
                    '#botania:runes/vanaheim',
                    'ars_nouveau:greater_experience_gem',
                    'ars_nouveau:glyph_pickup',
                    'ars_nouveau:greater_experience_gem'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/fluidxpconverter',
                count: 1,
                id: 'pedestals:upgrades/fluidxpconverter'
            },
            {
                inputs: [
                    'ars_nouveau:greater_experience_gem',
                    'pneumaticcraft:memory_stick',
                    'ars_nouveau:greater_experience_gem',
                    '#botania:runes/mana',
                    '#botania:runes/vanaheim',
                    'ars_nouveau:greater_experience_gem',
                    'ars_nouveau:glyph_amplify',
                    'ars_nouveau:greater_experience_gem'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/xptank',
                count: 1,
                id: 'pedestals:upgrades/xptank'
            },
            {
                inputs: [
                    'ars_nouveau:greater_experience_gem',
                    'ars_nouveau:glyph_gravity',
                    'ars_nouveau:greater_experience_gem',
                    '#botania:runes/mana',
                    '#botania:runes/vanaheim',
                    'ars_nouveau:greater_experience_gem',
                    'botania:corporea_spark',
                    'ars_nouveau:greater_experience_gem'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/xpdropper',
                count: 1,
                id: 'pedestals:upgrades/xpdropper'
            },
            {
                inputs: [
                    'astralsorcery:resonating_gem',
                    'botania:corporea_spark',
                    'astralsorcery:resonating_gem',
                    '#botania:runes/air',
                    '#botania:runes/water',
                    'astralsorcery:resonating_gem',
                    'ars_nouveau:glyph_pickup',
                    'astralsorcery:resonating_gem'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/fluidimport',
                count: 1,
                id: 'pedestals:upgrades/fluidimport'
            },
            {
                inputs: [
                    'astralsorcery:resonating_gem',
                    'botania:corporea_spark',
                    'astralsorcery:resonating_gem',
                    'naturesaura:token_sorrow',
                    '#botania:runes/greed',
                    'astralsorcery:resonating_gem',
                    'ars_nouveau:glyph_aoe',
                    'astralsorcery:resonating_gem'
                ],
                reagent: 'pedestals:coin/default',
                output: 'pedestals:coin/fluidpump',
                count: 1,
                id: 'pedestals:upgrades/fluidpump'
            },
            {
                inputs: [
                    '#forge:storage_blocks/mana',
                    '#forge:storage_blocks/gold_brass',
                    'ars_nouveau:glyph_projectile',
                    '#botania:runes/air',
                    '#botania:runes/air'
                ],
                reagent: 'botania:livingwood_bow',
                output: 'ars_nouveau:spell_bow',
                count: 1,
                id: 'ars_nouveau:spell_bow'
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
