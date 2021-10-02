onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/occultism/ritual/';
    recipes = [
        {
            ritual_type: 'occultism:craft',
            activation_item: { item: 'occultism:book_of_binding_bound_foliot' },
            pentacle_id: 'occultism:craft_foliot',
            duration: 6,
            ritual_dummy: { item: 'occultism:ritual_dummy/craft_infused_lenses' },
            ingredients: [
                { item: 'occultism:lenses' },
                { tag: 'forge:ingots/lumium' },
                { tag: 'forge:ingots/lumium' },
                { tag: 'forge:ingots/arcane_gold' },
                { item: 'bloodmagic:reagentsight' }
            ],
            result: { item: 'occultism:infused_lenses' },
            id: 'occultism:ritual/craft_infused_lenses'
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:craft_djinni',
            duration: 6,
            ritual_dummy: { item: 'occultism:ritual_dummy/craft_infused_pickaxe' },
            ingredients: [
                { item: 'occultism:spirit_attuned_pickaxe_head' },
                { item: 'betterendforge:leather_wrapped_stick' },
                { item: 'eidolon:ender_calx' },
                { item: 'betterendforge:leather_wrapped_stick' },
                { tag: 'forge:nuggets/nebu' },
                { tag: 'forge:nuggets/nebu' }
            ],
            result: { item: 'occultism:infused_pickaxe' },
            id: 'occultism:ritual/craft_infused_pickaxe'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:craft_djinni',
            duration: 6,
            ritual_dummy: { item: 'occultism:ritual_dummy/craft_soul_gem' },
            ingredients: [
                { item: 'eidolon:lesser_soul_gem' },
                { item: 'eidolon:gold_inlay' },
                { item: 'bloodmagic:reagentholding' },
                { item: 'eidolon:gold_inlay' },
                { item: 'glassential:glass_ghostly' },
                { item: 'glassential:glass_ghostly' },
                { item: 'glassential:glass_ghostly' },
                { item: 'glassential:glass_ghostly' }
            ],
            result: { item: 'occultism:soul_gem' },
            id: 'occultism:ritual/craft_soul_gem'
        },
        {
            ritual_type: 'occultism:summon',
            activation_item: { item: 'occultism:book_of_binding_bound_afrit' },
            pentacle_id: 'occultism:summon_wild_afrit',
            duration: 6,
            entity_to_sacrifice: {
                tag: 'forge:cows',
                display_name: 'ritual.occultism.sacrifice.cows'
            },
            entity_to_summon: 'occultism:afrit_wild',
            ritual_dummy: { item: 'occultism:ritual_dummy/summon_wild_afrit' },
            ingredients: [
                { item: 'eidolon:gold_inlay' },
                { tag: 'botania:runes/fire' },
                { item: 'eidolon:crimson_essence' },
                { tag: 'botania:runes/wrath' },
                { item: 'ars_nouveau:red_archwood_wood' },
                { item: 'ars_nouveau:red_archwood_wood' },
                { item: 'ars_nouveau:red_archwood_wood' },
                { item: 'ars_nouveau:red_archwood_wood' }
            ],
            result: { item: 'occultism:jei_dummy/none' },
            id: 'occultism:ritual/summon_wild_afrit'
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:craft_djinni',
            duration: 24,
            ritual_dummy: { item: 'occultism:ritual_dummy/craft_dimensional_matrix' },
            ingredients: [
                { tag: 'quark:crystal_clusters' },
                { tag: 'quark:crystal_clusters' },
                { tag: 'quark:crystal_clusters' },
                { tag: 'quark:crystal_clusters' },
                { item: 'eidolon:ender_calx' },
                { item: 'eidolon:ender_calx' },
                { item: 'eidolon:ender_calx' },
                { item: 'eidolon:ender_calx' },
                { item: 'atum:crystal_glass' },
                { item: 'atum:crystal_glass' },
                { item: 'atum:crystal_glass' },
                { item: 'atum:crystal_glass' }
            ],
            result: { item: 'occultism:dimensional_matrix' },
            id: 'occultism:ritual/craft_dimensional_matrix'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: { item: 'occultism:book_of_binding_bound_foliot' },
            pentacle_id: 'occultism:craft_foliot',
            duration: 12,
            ritual_dummy: { item: 'occultism:ritual_dummy/craft_stabilizer_tier1' },
            ingredients: [
                { item: 'occultism:otherstone_pedestal' },
                { tag: 'forge:storage_blocks/bronze' },
                { tag: 'botania:runes/greed' },
                { tag: 'forge:storage_blocks/bronze' },
                { item: 'occultism:spirit_attuned_crystal' },
                { item: 'occultism:spirit_attuned_crystal' },
                { tag: 'quark:runes' },
                { tag: 'quark:runes' },
                { item: 'atum:crystal_glass' },
                { item: 'atum:crystal_glass' },
                { item: 'atum:crystal_glass' },
                { item: 'atum:crystal_glass' }
            ],
            result: { item: 'occultism:storage_stabilizer_tier1' },
            id: 'occultism:ritual/craft_stabilizer_tier1'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:craft_djinni',
            duration: 24,
            ritual_dummy: { item: 'occultism:ritual_dummy/craft_stabilizer_tier2' },
            ingredients: [
                { item: 'occultism:storage_stabilizer_tier1' },
                { tag: 'forge:storage_blocks/silver' },
                { tag: 'botania:runes/pride' },
                { tag: 'forge:storage_blocks/silver' },
                { item: 'occultism:spirit_attuned_crystal' },
                { item: 'occultism:spirit_attuned_crystal' },
                { tag: 'forge:gems/dimensional' },
                { tag: 'forge:gems/dimensional' },
                { item: 'bloodmagic:defaultcrystal' },
                { item: 'bloodmagic:defaultcrystal' },
                { item: 'bloodmagic:defaultcrystal' },
                { item: 'bloodmagic:defaultcrystal' }
            ],
            result: { item: 'occultism:storage_stabilizer_tier2' },
            id: 'occultism:ritual/craft_stabilizer_tier2'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: { item: 'occultism:book_of_binding_bound_afrit' },
            pentacle_id: 'occultism:craft_afrit',
            duration: 24,
            ritual_dummy: { item: 'occultism:ritual_dummy/craft_stabilizer_tier3' },
            ingredients: [
                { item: 'occultism:storage_stabilizer_tier2' },
                { tag: 'forge:storage_blocks/electrum' },
                { tag: 'botania:runes/sloth' },
                { tag: 'forge:storage_blocks/electrum' },
                { item: 'occultism:spirit_attuned_crystal' },
                { item: 'occultism:spirit_attuned_crystal' },
                { item: 'astralsorcery:celestial_crystal' },
                { item: 'astralsorcery:celestial_crystal' },
                { item: 'bloodmagic:steadfastcrystal' },
                { item: 'bloodmagic:steadfastcrystal' },
                { item: 'bloodmagic:steadfastcrystal' },
                { item: 'bloodmagic:steadfastcrystal' }
            ],
            result: { item: 'occultism:storage_stabilizer_tier3' },
            id: 'occultism:ritual/craft_stabilizer_tier3'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: { item: 'occultism:book_of_binding_bound_marid' },
            pentacle_id: 'occultism:craft_marid',
            duration: 24,
            ritual_dummy: { item: 'occultism:ritual_dummy/craft_stabilizer_tier4' },
            ingredients: [
                { item: 'occultism:storage_stabilizer_tier3' },
                { tag: 'forge:storage_blocks/iesnium' },
                { tag: 'botania:runes/envy' },
                { tag: 'forge:storage_blocks/iesnium' },
                { item: 'occultism:spirit_attuned_crystal' },
                { item: 'occultism:spirit_attuned_crystal' },
                { item: 'betterendforge:eternal_crystal' },
                { item: 'betterendforge:eternal_crystal' },
                { tag: 'atum:godshards' },
                { tag: 'atum:godshards' },
                { tag: 'atum:godshards' },
                { tag: 'atum:godshards' }
            ],
            result: { item: 'occultism:storage_stabilizer_tier4' },
            id: 'occultism:ritual/craft_stabilizer_tier4'
        },
        {
            ritual_type: 'occultism:craft_miner_spirit',
            activation_item: {
                item: 'occultism:book_of_binding_bound_djinni'
            },
            pentacle_id: 'occultism:craft_djinni',
            duration: 6,
            ritual_dummy: {
                item: 'occultism:ritual_dummy/craft_miner_djinni_ores'
            },
            ingredients: [
                { item: 'occultism:magic_lamp_empty' },
                { item: 'occultism:iesnium_pickaxe' },
                { item: 'atum:ptah_godforged_block' },
                { tag: 'forge:storage_blocks/iesnium' },
                { item: 'occultism:spirit_attuned_crystal' }
            ],
            result: { item: 'occultism:miner_djinni_ores' },
            id: 'occultism:ritual/craft_miner_djinni_ores'
        },
        {
            ritual_type: 'occultism:craft_miner_spirit',
            activation_item: { item: 'occultism:book_of_binding_bound_foliot' },
            pentacle_id: 'occultism:craft_foliot',
            duration: 6,
            ritual_dummy: { item: 'occultism:ritual_dummy/craft_miner_foliot_unspecialized' },
            ingredients: [
                { item: 'occultism:magic_lamp_empty' },
                { item: 'occultism:iesnium_pickaxe' },
                { tag: 'atum:relic_non_dirty/brooch' },
                { item: 'atum:limestone_gravel' }
            ],
            result: { item: 'occultism:miner_foliot_unspecialized' },
            id: 'occultism:ritual/craft_miner_foliot_unspecialized'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:craft_djinni',
            duration: 24,
            ritual_dummy: { item: 'occultism:ritual_dummy/craft_dimensional_mineshaft' },
            ingredients: [
                { item: 'bloodmagic:infusedslate' },
                { item: 'bloodmagic:infusedslate' },
                { item: 'bloodmagic:infusedslate' },
                { item: 'bloodmagic:infusedslate' },
                { item: 'atum:scarab' },
                { tag: 'forge:storage_blocks/iesnium' },
                { item: 'occultism:spirit_attuned_crystal' },
                { item: 'atum:scarab' }
            ],
            result: { item: 'occultism:dimensional_mineshaft' },
            id: 'occultism:ritual/craft_dimensional_mineshaft'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:craft_djinni',
            duration: 9,
            ritual_dummy: { item: 'occultism:ritual_dummy/craft_familiar_ring' },
            ingredients: [
                { item: 'occultism:soul_gem' },
                { item: 'eidolon:gold_inlay' },
                { tag: 'atum:relic_non_dirty/ring' },
                { item: 'eidolon:gold_inlay' }
            ],
            result: { item: 'occultism:familiar_ring' },
            id: 'occultism:ritual/craft_familiar_ring'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: { item: 'occultism:book_of_binding_bound_foliot' },
            pentacle_id: 'occultism:craft_foliot',
            duration: 6,
            ritual_dummy: { item: 'occultism:ritual_dummy/craft_storage_controller_base' },
            ingredients: [
                { item: 'occultism:otherstone_pedestal' },
                { item: 'eidolon:gold_inlay' },
                { tag: 'forge:ingots/nebu' },
                { item: 'eidolon:gold_inlay' },
                { item: 'botania:corporea_spark_master' }
            ],
            result: { item: 'occultism:storage_controller_base' },
            id: 'occultism:ritual/craft_storage_controller_base'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: { item: 'occultism:book_of_binding_bound_foliot' },
            pentacle_id: 'occultism:craft_foliot',
            duration: 12,
            ritual_dummy: { item: 'occultism:ritual_dummy/craft_stable_wormhole' },
            ingredients: [
                { item: 'occultism:wormhole_frame' },
                { item: 'botania:corporea_spark' },
                { item: 'botania:corporea_funnel' },
                { item: 'botania:corporea_spark' }
            ],
            result: { item: 'occultism:stable_wormhole' },
            id: 'occultism:ritual/craft_stable_wormhole'
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:craft_djinni',
            duration: 12,
            ritual_dummy: { item: 'occultism:ritual_dummy/craft_storage_remote' },
            ingredients: [
                { item: 'occultism:storage_remote_inert' },
                { item: 'botania:corporea_spark' },
                { item: 'atum:scarab' },
                { item: 'botania:corporea_spark' }
            ],
            result: { item: 'occultism:storage_remote' },
            id: 'occultism:ritual/craft_storage_remote'
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: {
                item: 'occultism:book_of_binding_bound_foliot'
            },
            pentacle_id: 'occultism:craft_foliot',
            duration: 24,
            ritual_dummy: { item: 'occultism:ritual_dummy/craft_satchel' },
            ingredients: [
                { item: 'ironchest:silver_chest' },
                { item: 'ars_nouveau:end_fiber' },
                { item: 'alexsmobs:kangaroo_hide' },
                { item: 'ars_nouveau:end_fiber' },
                { tag: 'forge:ingots/infused_iron' }
            ],
            result: { item: 'occultism:satchel' },
            id: 'occultism:ritual/craft_satchel'
        },

        // 1x Ore Processing
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: { item: 'occultism:book_of_binding_bound_foliot' },
            pentacle_id: 'occultism:summon_foliot',
            duration: 6,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:crush_tier1',
            entity_to_summon: 'occultism:foliot',
            ritual_dummy: { item: 'occultism:ritual_dummy/summon_foliot_crusher' },
            ingredients: [
                { item: 'naturesaura:crushing_catalyst' },
                { tag: 'forge:ingots/nebu' },
                { item: 'atum:nebu_hammer' },
                { tag: 'forge:ingots/nebu' },
                { tag: 'botania:runes/earth' },
                { tag: 'botania:runes/earth' },
                { tag: 'botania:runes/water' },
                { tag: 'botania:runes/water' }
            ],
            result: {
                item: 'occultism:jei_dummy/none'
            },
            id: 'occultism:ritual/summon_foliot_crusher'
        },

        // 2x Ore Processing
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:summon_djinni',
            duration: 9,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:crush_tier2',
            entity_to_summon: 'occultism:djinni',
            ritual_dummy: { item: 'occultism:ritual_dummy/summon_djinni_crusher' },
            ingredients: [
                { item: 'naturesaura:crushing_catalyst' },
                { tag: 'forge:ingots/sky' },
                { item: 'naturesaura:sky_pickaxe' },
                { tag: 'forge:ingots/sky' },
                { tag: 'botania:runes/earth' },
                { tag: 'botania:runes/earth' },
                { tag: 'botania:runes/water' },
                { tag: 'botania:runes/water' }
            ],
            result: { item: 'occultism:jei_dummy/none' },
            id: 'occultism:ritual/summon_djinni_crusher'
        },
        // 3x Ore Processing
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: { item: 'occultism:book_of_binding_bound_afrit' },
            pentacle_id: 'occultism:summon_afrit',
            duration: 12,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:crush_tier3',
            entity_to_summon: 'occultism:afrit',
            ritual_dummy: { item: 'occultism:ritual_dummy/summon_afrit_crusher' },
            ingredients: [
                { item: 'naturesaura:crushing_catalyst' },
                { tag: 'botania:runes/joetunheim' },
                { item: 'botania:terra_pick' },
                { tag: 'botania:runes/joetunheim' },
                { tag: 'botania:runes/earth' },
                { tag: 'botania:runes/earth' },
                { tag: 'botania:runes/water' },
                { tag: 'botania:runes/water' }
            ],
            result: {
                item: 'occultism:jei_dummy/none'
            },
            id: 'occultism:ritual/summon_afrit_crusher'
        },

        // 4x Ore Processing
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: { item: 'occultism:book_of_binding_bound_marid' },
            pentacle_id: 'occultism:summon_marid',
            duration: 3,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:crush_tier4',
            entity_to_summon: 'occultism:marid',
            ritual_dummy: { item: 'occultism:ritual_dummy/summon_marid_crusher' },
            ingredients: [
                { item: 'naturesaura:crushing_catalyst' },
                { tag: 'botania:runes/vanaheim' },
                { item: 'mythicbotany:alfsteel_pick' },
                { tag: 'botania:runes/vanaheim' },
                { tag: 'botania:runes/earth' },
                { tag: 'botania:runes/earth' },
                { tag: 'botania:runes/water' },
                { tag: 'botania:runes/water' }
            ],
            result: { item: 'occultism:jei_dummy/none' },
            id: 'occultism:ritual/summon_marid_crusher'
        },
        {
            ritual_type: 'occultism:familiar',
            activation_item: { item: 'occultism:book_of_binding_bound_foliot' },
            pentacle_id: 'occultism:possess_foliot',
            duration: 3,
            entity_to_sacrifice: {
                tag: 'occultism:wild_hunt_sacrifices',
                display_name: 'ritual.occultism.sacrifice.villagers_or_players'
            },
            entity_to_summon: 'occultism:greedy_familiar',
            ritual_dummy: { item: 'occultism:ritual_dummy/familiar_greedy' },
            ingredients: [
                { item: 'quark:gold_bars' },
                { item: 'quark:gold_bars' },
                { item: 'quark:gold_bars' },
                { item: 'quark:gold_bars' },
                { item: 'ironchest:silver_chest' },
                { tag: 'forge:storage_blocks/silver' },
                { item: 'minecraft:lodestone' },
                { item: 'meetyourfight:spectres_grasp' }
            ],
            result: {
                item: 'occultism:jei_dummy/none'
            },
            id: 'occultism:ritual/familiar_greedy'
        },
        {
            ritual_type: 'occultism:summon_tamed',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:possess_djinni',
            duration: 3,
            entity_to_sacrifice: {
                tag: 'forge:parrots',
                display_name: 'ritual.occultism.sacrifice.parrots'
            },
            entity_to_summon: 'occultism:otherworld_bird',
            ritual_dummy: { item: 'occultism:ritual_dummy/familiar_otherworld_bird' },
            ingredients: [
                { item: 'quark:gold_bars' },
                { item: 'quark:gold_bars' },
                { item: 'quark:gold_bars' },
                { item: 'quark:gold_bars' },
                { item: 'tconstruct:sky_cake' },
                { item: 'create:white_sail' },
                { item: 'naturesaura:token_anger' },
                { item: 'create:white_sail' }
            ],
            result: {
                item: 'occultism:jei_dummy/none'
            },
            id: 'occultism:ritual/familiar_otherworld_bird'
        },
        {
            ritual_type: 'occultism:familiar',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:possess_djinni',
            duration: 3,
            entity_to_sacrifice: {
                tag: 'forge:bats',
                display_name: 'ritual.occultism.sacrifice.bats'
            },
            entity_to_summon: 'occultism:bat_familiar',
            ritual_dummy: { item: 'occultism:ritual_dummy/familiar_bat' },
            ingredients: [
                { item: 'quark:gold_bars' },
                { item: 'quark:gold_bars' },
                { item: 'quark:gold_bars' },
                { item: 'quark:gold_bars' },
                { item: 'atum:golden_date' },
                { item: 'ars_nouveau:wilden_wing' },
                { tag: 'forge:fruits/banana' },
                { item: 'ars_nouveau:wilden_wing' }
            ],
            result: {
                item: 'occultism:jei_dummy/none'
            },
            id: 'occultism:ritual/familiar_bat'
        },
        {
            ritual_type: 'occultism:familiar',
            activation_item: { item: 'occultism:book_of_binding_bound_foliot' },
            pentacle_id: 'occultism:possess_foliot',
            duration: 3,
            entity_to_sacrifice: {
                tag: 'enigmatica:deer',
                display_name: 'ritual.occultism.sacrifice.deer'
            },
            entity_to_summon: 'occultism:deer_familiar',
            ritual_dummy: { item: 'occultism:ritual_dummy/familiar_deer' },
            ingredients: [
                { item: 'quark:gold_bars' },
                { item: 'quark:gold_bars' },
                { item: 'quark:gold_bars' },
                { item: 'quark:gold_bars' },
                { item: 'minecraft:golden_carrot' },
                { item: 'minecraft:golden_carrot' },
                { item: 'minecraft:golden_apple' },
                { item: 'minecraft:golden_apple' }
            ],
            result: {
                item: 'occultism:jei_dummy/none'
            },
            id: 'occultism:ritual/familiar_deer'
        },
        {
            ritual_type: 'occultism:familiar',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:possess_djinni',
            duration: 3,
            entity_to_sacrifice: {
                tag: 'enigmatica:thrashers',
                display_name: 'ritual.occultism.sacrifice.thrashers'
            },
            entity_to_summon: 'occultism:cthulhu_familiar',
            ritual_dummy: { item: 'occultism:ritual_dummy/familiar_cthulhu' },
            ingredients: [
                { item: 'quark:gold_bars' },
                { item: 'quark:gold_bars' },
                { item: 'quark:gold_bars' },
                { item: 'quark:gold_bars' },
                { item: 'aquaculture:neptunium_helmet' },
                { tag: 'forge:heads' },
                { item: 'sushigocrafting:shrimp_nigiri' },
                { item: 'sushigocrafting:shrimp_nigiri' }
            ],
            result: {
                item: 'occultism:jei_dummy/none'
            },
            id: 'occultism:ritual/familiar_cthulhu'
        },
        {
            ritual_type: 'occultism:familiar',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:possess_djinni',
            duration: 3,
            entity_to_sacrifice: {
                tag: 'enigmatica:dropbears',
                display_name: 'ritual.occultism.sacrifice.dropbears'
            },
            entity_to_summon: 'occultism:devil_familiar',
            ritual_dummy: { item: 'occultism:ritual_dummy/familiar_devil' },
            ingredients: [
                { item: 'quark:gold_bars' },
                { item: 'quark:gold_bars' },
                { item: 'quark:gold_bars' },
                { item: 'quark:gold_bars' },
                { item: 'botania:cosmetic_devil_horns' },
                { item: 'botania:cosmetic_devil_tail' },
                { item: 'quark:soul_bead' },
                { item: 'quark:soul_bead' },
                { item: 'byg:hanging_bones' },
                { item: 'atum:anputs_fingers_spores' },
                { item: 'atum:anputs_fingers_spores' },
                { item: 'byg:hanging_bones' }
            ],
            result: {
                item: 'occultism:jei_dummy/none'
            },
            id: 'occultism:ritual/familiar_devil'
        },
        {
            ritual_type: 'occultism:familiar',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:possess_djinni',
            duration: 3,
            entity_to_sacrifice: {
                tag: 'enigmatica:rattlesnakes',
                display_name: 'ritual.occultism.sacrifice.rattlesnakes'
            },
            entity_to_summon: 'occultism:dragon_familiar',
            ritual_dummy: { item: 'occultism:ritual_dummy/familiar_dragon' },
            ingredients: [
                { item: 'quark:gold_bars' },
                { item: 'quark:gold_bars' },
                { item: 'quark:gold_bars' },
                { item: 'quark:gold_bars' },
                { item: 'ars_nouveau:wilden_wing' },
                { item: 'ars_nouveau:wilden_wing' },
                { tag: 'forge:clusters/emerald' },
                { tag: 'forge:clusters/emerald' },
                { item: 'alexsmobs:lava_bottle' },
                { tag: 'forge:clusters/arcane' },
                { tag: 'forge:clusters/arcane' },
                { item: 'alexsmobs:lava_bottle' }
            ],
            result: {
                item: 'occultism:jei_dummy/none'
            },
            id: 'occultism:ritual/familiar_dragon'
        },

        /// Custom Rituals
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:craft_djinni',
            duration: 6,
            ritual_dummy: { item: 'kubejs:craft_magicfeather' },
            ingredients: [
                { item: 'alexsmobs:roadrunner_feather' },
                { tag: 'forge:ingots/sky' },
                { item: 'ars_nouveau:belt_of_levitation' },
                { tag: 'forge:ingots/sky' },
                { item: 'bloodmagic:reagentair' },
                { item: 'bloodmagic:reagentair' },
                { tag: 'botania:runes/air' },
                { tag: 'botania:runes/air' }
            ],
            result: { item: 'magicfeather:magicfeather' },
            id: `${id_prefix}magicfeather`
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: { item: 'materialis:fairy_block' },
            pentacle_id: 'occultism:craft_marid',
            duration: 6,
            entity_to_sacrifice: {
                tag: 'enigmatica:dragons',
                display_name: 'ritual.occultism.sacrifice.dragons'
            },
            ritual_dummy: { item: 'kubejs:craft_magical_feathers' },
            ingredients: [
                { item: 'botania:flight_tiara' },
                { item: 'astralsorcery:shifting_star_vicio' },
                { item: 'ars_nouveau:wilden_tribute' },
                { item: 'astralsorcery:shifting_star_vicio' },
                { item: 'magicfeather:magicfeather' },
                { item: 'magicfeather:magicfeather' },
                { item: 'magicfeather:magicfeather' },
                { item: 'magicfeather:magicfeather' },
                { tag: 'forge:ingots/gaia' },
                { item: 'bloodmagic:steadfastcrystal' },
                { tag: 'forge:ingots/gaia' },
                { item: 'bloodmagic:steadfastcrystal' }
            ],
            result: { item: 'losttrinkets:magical_feathers' },
            id: `${id_prefix}magical_feathers`
        },
        {
            ritual_type: 'occultism:summon',
            activation_item: { item: 'occultism:book_of_binding_bound_afrit' },
            pentacle_id: 'occultism:summon_wild_afrit',
            duration: 6,
            entity_to_sacrifice: {
                tag: 'occultism:wild_hunt_sacrifices',
                display_name: 'ritual.occultism.sacrifice.villagers_or_players'
            },
            entity_to_summon: 'atum:pharaoh',
            ritual_dummy: { item: 'kubejs:summon_pharaoh' },
            ingredients: [
                { tag: 'atum:godshards' },
                { item: 'atum:golden_date_enchanted' },
                { tag: 'forge:storage_blocks/nebu' },
                { tag: 'forge:heads' },
                { tag: 'atum:godshards' },
                { tag: 'atum:godshards' },
                { item: 'atum:crystal_glass' },
                { item: 'atum:crystal_glass' }
            ],
            result: { item: 'occultism:jei_dummy/none' },
            id: `${id_prefix}pharaoh`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: { item: 'occultism:book_of_binding_bound_foliot' },
            pentacle_id: 'occultism:craft_foliot',
            duration: 10,
            ritual_dummy: { item: 'kubejs:craft_spirit_heat_exchanger' },
            ingredients: [
                { item: 'ars_nouveau:void_jar' },
                { item: 'atum:shu_godshard' },
                { item: 'powah:thermoelectric_plate' },
                { item: 'atum:shu_godshard' },
                { tag: 'botania:runes/fire' },
                { tag: 'botania:runes/fire' },
                { tag: 'botania:runes/water' },
                { tag: 'botania:runes/water' }
            ],
            result: { item: 'kubejs:spirit_heat_exchanger' },
            id: `${id_prefix}spirit_heat_exchanger`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:craft_djinni',
            duration: 10,
            ritual_dummy: { item: 'kubejs:craft_soulsword' },
            ingredients: [
                { item: 'undergarden:forgotten_sword' },
                { item: 'bloodmagic:soulgempetty' },
                { tag: 'botania:runes/helheim' },
                { tag: 'forge:ingots/iesnium' }
            ],
            result: { item: 'bloodmagic:soulsword' },
            id: `${id_prefix}soulsword`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:craft_djinni',
            duration: 10,
            ritual_dummy: { item: 'kubejs:craft_soulaxe' },
            ingredients: [
                { item: 'undergarden:forgotten_axe' },
                { item: 'bloodmagic:soulgempetty' },
                { tag: 'botania:runes/helheim' },
                { tag: 'forge:ingots/iesnium' }
            ],
            result: { item: 'bloodmagic:soulaxe' },
            id: `${id_prefix}soulaxe`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:craft_djinni',
            duration: 10,
            ritual_dummy: { item: 'kubejs:craft_soulpickaxe' },
            ingredients: [
                { item: 'undergarden:forgotten_pickaxe' },
                { item: 'bloodmagic:soulgempetty' },
                { tag: 'botania:runes/helheim' },
                { tag: 'forge:ingots/iesnium' }
            ],
            result: {
                item: 'bloodmagic:soulpickaxe',
                nbt: { 'occultism:otherworldToolTier': 2 }
            },
            id: `${id_prefix}soulpickaxe`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:craft_djinni',
            duration: 10,
            ritual_dummy: { item: 'kubejs:craft_soulshovel' },
            ingredients: [
                { item: 'undergarden:forgotten_shovel' },
                { item: 'bloodmagic:soulgempetty' },
                { tag: 'botania:runes/helheim' },
                { tag: 'forge:ingots/iesnium' }
            ],
            result: { item: 'bloodmagic:soulshovel' },
            id: `${id_prefix}soulshovel`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:craft_djinni',
            duration: 10,
            ritual_dummy: { item: 'kubejs:craft_soulscythe' },
            ingredients: [
                { item: 'undergarden:forgotten_hoe' },
                { item: 'bloodmagic:soulgempetty' },
                { tag: 'botania:runes/helheim' },
                { tag: 'forge:ingots/iesnium' }
            ],
            result: { item: 'bloodmagic:soulscythe' },
            id: `${id_prefix}soulscythe`
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: { item: 'botania:runic_altar' },
            pentacle_id: 'occultism:craft_marid',
            duration: 24,
            entity_to_sacrifice: {
                tag: 'enigmatica:gaia_guardian',
                display_name: 'ritual.occultism.sacrifice.gaia_guardian'
            },
            ritual_dummy: { item: 'kubejs:craft_attunement_altar' },
            ingredients: [
                { tag: 'botania:runes/asgard' },
                { tag: 'botania:runes/mana' },
                { tag: 'botania:runes/midgard' },
                { tag: 'botania:runes/mana' },
                { tag: 'forge:ingots/gaia_spirit' },
                { item: 'bloodmagic:corrosivecrystal' },
                { tag: 'forge:ingots/gaia_spirit' },
                { item: 'bloodmagic:steadfastcrystal' },
                { item: 'bloodmagic:destructivecrystal' },
                { tag: 'forge:ingots/gaia_spirit' },
                { item: 'bloodmagic:vengefulcrystal' },
                { tag: 'forge:ingots/gaia_spirit' }
            ],
            result: { item: 'astralsorcery:attunement_altar' },
            id: `${id_prefix}attunement_altar`
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: { tag: 'botania:runes/midgard' },
            pentacle_id: 'occultism:craft_djinni',
            duration: 24,
            entity_to_sacrifice: {
                tag: 'enigmatica:pharaohs',
                display_name: 'ritual.occultism.sacrifice.pharaohs'
            },
            ritual_dummy: { item: 'kubejs:craft_mana_collector' },
            ingredients: [
                { tag: 'botania:runes/asgard' },
                { tag: 'forge:ingots/gaia_spirit' },
                { tag: 'botania:runes/niflheim' },
                { item: 'botania:gaia_spreader' },

                { tag: 'botania:runes/muspelheim' },
                { tag: 'botania:runes/nidavellir' },
                { tag: 'forge:storage_blocks/iesnium' },
                { tag: 'botania:runes/joetunheim' },

                { tag: 'botania:runes/alfheim' },
                { tag: 'botania:runes/helheim' },
                { tag: 'forge:storage_blocks/iesnium' },
                { tag: 'botania:runes/vanaheim' }
            ],
            result: { item: 'mythicbotany:mana_collector' },
            id: `${id_prefix}mana_collector`
        }
    ];

    /*
        Ingredient Display in JEI
            ingredients: [
                { item: '12 o'clock' },
                { item: '3 o'clock' },
                { item: '6 o'clock' },
                { item: '9 o'clock' },

                { item: '1 o'clock'},
                { item: '2 o'clock' },
                { item: '7 o'clock' },
                { item: '8 o'clock' },

                { item: '11 o'clock' },
                { item: '4 o'clock' },
                { item: '5 o'clock' },
                { item: '10 o'clock' }
            ],
    */

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';
        event.custom(recipe).id(recipe.id);
    });
});
