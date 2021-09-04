onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const data = {
        recipes: [
            {
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                activation_item: {
                    item: 'occultism:book_of_binding_bound_foliot'
                },
                pentacle_id: 'occultism:craft_foliot',
                duration: 6,
                ritual_dummy: {
                    item: 'occultism:ritual_dummy/craft_infused_lenses'
                },
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
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft_with_spirit_name',
                activation_item: {
                    item: 'occultism:book_of_binding_bound_djinni'
                },
                pentacle_id: 'occultism:craft_djinni',
                duration: 6,
                ritual_dummy: {
                    item: 'occultism:ritual_dummy/craft_infused_pickaxe'
                },
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
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                activation_item: {
                    item: 'occultism:book_of_binding_bound_djinni'
                },
                pentacle_id: 'occultism:craft_djinni',
                duration: 6,
                ritual_dummy: {
                    item: 'occultism:ritual_dummy/craft_soul_gem'
                },
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
                type: 'occultism:ritual',
                ritual_type: 'occultism:summon',
                activation_item: {
                    item: 'occultism:book_of_binding_bound_afrit'
                },
                pentacle_id: 'occultism:summon_wild_afrit',
                duration: 6,
                entity_to_sacrifice: {
                    tag: 'forge:cows',
                    display_name: 'ritual.occultism.sacrifice.cows'
                },
                entity_to_summon: 'occultism:afrit_wild',
                ritual_dummy: {
                    item: 'occultism:ritual_dummy/summon_wild_afrit'
                },
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
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft_with_spirit_name',
                activation_item: {
                    item: 'occultism:book_of_binding_bound_djinni'
                },
                pentacle_id: 'occultism:craft_djinni',
                duration: 24,
                ritual_dummy: {
                    item: 'occultism:ritual_dummy/craft_dimensional_matrix'
                },
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
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                activation_item: {
                    item: 'occultism:book_of_binding_bound_foliot'
                },
                pentacle_id: 'occultism:craft_foliot',
                duration: 12,
                ritual_dummy: {
                    item: 'occultism:ritual_dummy/craft_stabilizer_tier1'
                },
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
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                activation_item: {
                    item: 'occultism:book_of_binding_bound_djinni'
                },
                pentacle_id: 'occultism:craft_djinni',
                duration: 24,
                ritual_dummy: {
                    item: 'occultism:ritual_dummy/craft_stabilizer_tier2'
                },
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
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                activation_item: {
                    item: 'occultism:book_of_binding_bound_afrit'
                },
                pentacle_id: 'occultism:craft_afrit',
                duration: 24,
                ritual_dummy: {
                    item: 'occultism:ritual_dummy/craft_stabilizer_tier3'
                },
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
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                activation_item: {
                    item: 'occultism:book_of_binding_bound_marid'
                },
                pentacle_id: 'occultism:craft_marid',
                duration: 24,
                ritual_dummy: {
                    item: 'occultism:ritual_dummy/craft_stabilizer_tier4'
                },
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
                type: 'occultism:ritual',
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
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft_miner_spirit',
                activation_item: {
                    item: 'occultism:book_of_binding_bound_foliot'
                },
                pentacle_id: 'occultism:craft_foliot',
                duration: 6,
                ritual_dummy: {
                    item: 'occultism:ritual_dummy/craft_miner_foliot_unspecialized'
                },
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
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                activation_item: {
                    item: 'occultism:book_of_binding_bound_djinni'
                },
                pentacle_id: 'occultism:craft_djinni',
                duration: 24,
                ritual_dummy: {
                    item: 'occultism:ritual_dummy/craft_dimensional_mineshaft'
                },
                ingredients: [
                    { item: 'occultism:otherstone' },
                    { item: 'occultism:otherstone' },
                    { item: 'occultism:otherstone' },
                    { item: 'occultism:otherstone' },
                    { item: 'atum:scarab' },
                    { tag: 'forge:storage_blocks/iesnium' },
                    { item: 'occultism:spirit_attuned_crystal' },
                    { item: 'atum:scarab' }
                ],
                result: { item: 'occultism:dimensional_mineshaft' },
                id: 'occultism:ritual/craft_dimensional_mineshaft'
            },
            {
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                activation_item: {
                    item: 'occultism:book_of_binding_bound_djinni'
                },
                pentacle_id: 'occultism:craft_djinni',
                duration: 9,
                ritual_dummy: {
                    item: 'occultism:ritual_dummy/craft_familiar_ring'
                },
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
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                activation_item: {
                    item: 'occultism:book_of_binding_bound_foliot'
                },
                pentacle_id: 'occultism:craft_foliot',
                duration: 6,
                ritual_dummy: {
                    item: 'occultism:ritual_dummy/craft_storage_controller_base'
                },
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
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                activation_item: {
                    item: 'occultism:book_of_binding_bound_foliot'
                },
                pentacle_id: 'occultism:craft_foliot',
                duration: 12,
                ritual_dummy: {
                    item: 'occultism:ritual_dummy/craft_stable_wormhole'
                },
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
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft',
                activation_item: {
                    item: 'occultism:book_of_binding_bound_djinni'
                },
                pentacle_id: 'occultism:craft_djinni',
                duration: 12,
                ritual_dummy: {
                    item: 'occultism:ritual_dummy/craft_storage_remote'
                },
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
                type: 'occultism:ritual',
                ritual_type: 'occultism:craft_with_spirit_name',
                activation_item: {
                    item: 'occultism:book_of_binding_bound_foliot'
                },
                pentacle_id: 'occultism:craft_foliot',
                duration: 24,
                ritual_dummy: {
                    item: 'occultism:ritual_dummy/craft_satchel'
                },
                ingredients: [
                    { item: 'ironchest:silver_chest' },
                    { item: 'ars_nouveau:end_fiber' },
                    { item: 'alexsmobs:kangaroo_hide' },
                    { item: 'ars_nouveau:end_fiber' },
                    { tag: 'forge:ingots/infused_iron' }
                ],
                result: {
                    item: 'occultism:satchel'
                },
                id: 'occultism:ritual/craft_satchel'
            },

            // 2x Ore Processing
            {
                type: 'occultism:ritual',
                ritual_type: 'occultism:summon_spirit_with_job',
                activation_item: {
                    item: 'occultism:book_of_binding_bound_foliot'
                },
                pentacle_id: 'occultism:summon_foliot',
                duration: 6,
                spirit_max_age: -1,
                spirit_job_type: 'occultism:crush_tier1',
                entity_to_summon: 'occultism:foliot',
                ritual_dummy: {
                    item: 'occultism:ritual_dummy/summon_foliot_crusher'
                },
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

            // 3x Ore Processing
            {
                type: 'occultism:ritual',
                ritual_type: 'occultism:summon_spirit_with_job',
                activation_item: {
                    item: 'occultism:book_of_binding_bound_djinni'
                },
                pentacle_id: 'occultism:summon_djinni',
                duration: 9,
                spirit_max_age: -1,
                spirit_job_type: 'occultism:crush_tier2',
                entity_to_summon: 'occultism:djinni',
                ritual_dummy: {
                    item: 'occultism:ritual_dummy/summon_djinni_crusher'
                },
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
                result: {
                    item: 'occultism:jei_dummy/none'
                },
                id: 'occultism:ritual/summon_djinni_crusher'
            },
            // 4x Ore Processing
            {
                type: 'occultism:ritual',
                ritual_type: 'occultism:summon_spirit_with_job',
                activation_item: {
                    item: 'occultism:book_of_binding_bound_afrit'
                },
                pentacle_id: 'occultism:summon_afrit',
                duration: 12,
                spirit_max_age: -1,
                spirit_job_type: 'occultism:crush_tier3',
                entity_to_summon: 'occultism:afrit',
                ritual_dummy: {
                    item: 'occultism:ritual_dummy/summon_afrit_crusher'
                },
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

            // 6x Ore Processing
            {
                type: 'occultism:ritual',
                ritual_type: 'occultism:summon_spirit_with_job',
                activation_item: {
                    item: 'occultism:book_of_binding_bound_marid'
                },
                pentacle_id: 'occultism:summon_marid',
                duration: 3,
                spirit_max_age: -1,
                spirit_job_type: 'occultism:crush_tier4',
                entity_to_summon: 'occultism:marid',
                ritual_dummy: {
                    item: 'occultism:ritual_dummy/summon_marid_crusher'
                },
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
                result: {
                    item: 'occultism:jei_dummy/none'
                },
                id: 'occultism:ritual/summon_marid_crusher'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.custom(recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
