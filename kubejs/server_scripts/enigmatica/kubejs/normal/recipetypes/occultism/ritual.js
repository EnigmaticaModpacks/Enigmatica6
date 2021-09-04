onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
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
                    { tag: 'forge:ingots/silver' },
                    { tag: 'forge:ingots/silver' },
                    { tag: 'forge:ingots/gold' }
                ],
                result: {
                    item: 'occultism:infused_lenses'
                },
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
                    { tag: 'forge:rods/wooden' },
                    { tag: 'forge:rods/wooden' },
                    { item: 'occultism:spirit_attuned_pickaxe_head' },
                    { tag: 'forge:ingots/silver' },
                    { tag: 'forge:ingots/silver' }
                ],
                result: {
                    item: 'occultism:infused_pickaxe'
                },
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
                    { tag: 'forge:gems/diamond' },
                    { tag: 'forge:ingots/copper' },
                    { tag: 'forge:ingots/silver' },
                    { tag: 'forge:ingots/gold' },
                    { item: 'minecraft:soul_sand' },
                    { item: 'minecraft:soul_sand' },
                    { item: 'minecraft:soul_sand' },
                    { item: 'minecraft:soul_sand' }
                ],
                result: {
                    item: 'occultism:soul_gem'
                },
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
                    { tag: 'forge:netherrack' },
                    { tag: 'forge:gems/quartz' },
                    { item: 'minecraft:flint_and_steel' },
                    { item: 'minecraft:gunpowder' }
                ],
                result: {
                    item: 'occultism:jei_dummy/none'
                },
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
                    { tag: 'forge:storage_blocks/quartz' },
                    { tag: 'forge:storage_blocks/quartz' },
                    { tag: 'forge:storage_blocks/quartz' },
                    { tag: 'forge:ender_pearls' }
                ],
                result: {
                    item: 'occultism:dimensional_matrix'
                },
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
                    { tag: 'forge:storage_blocks/copper' },
                    { item: 'minecraft:blaze_powder' },
                    { item: 'occultism:spirit_attuned_gem' }
                ],
                result: {
                    item: 'occultism:storage_stabilizer_tier1'
                },
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
                    { item: 'minecraft:ghast_tear' },
                    { item: 'occultism:spirit_attuned_gem' },
                    { item: 'occultism:spirit_attuned_gem' }
                ],
                result: {
                    item: 'occultism:storage_stabilizer_tier2'
                },
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
                    { tag: 'forge:storage_blocks/gold' },
                    { item: 'minecraft:nether_star' },
                    { item: 'occultism:spirit_attuned_crystal' }
                ],
                result: {
                    item: 'occultism:storage_stabilizer_tier3'
                },
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
                    { item: 'minecraft:dragon_head' },
                    { item: 'occultism:spirit_attuned_crystal' },
                    { item: 'occultism:spirit_attuned_crystal' }
                ],
                result: {
                    item: 'occultism:storage_stabilizer_tier4'
                },
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
                    { tag: 'forge:ores/gold' },
                    { tag: 'forge:storage_blocks/iesnium' },
                    { item: 'occultism:spirit_attuned_crystal' }
                ],
                result: {
                    item: 'occultism:miner_djinni_ores'
                },
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
                    { tag: 'forge:ores/iron' },
                    { item: 'minecraft:gravel' }
                ],
                result: {
                    item: 'occultism:miner_foliot_unspecialized'
                },
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
                    { tag: 'forge:ingots/gold' },
                    { tag: 'forge:storage_blocks/iesnium' },
                    { item: 'occultism:spirit_attuned_crystal' }
                ],
                result: {
                    item: 'occultism:dimensional_mineshaft'
                },
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
                    { tag: 'forge:ingots/gold' },
                    { tag: 'forge:ingots/gold' },
                    { tag: 'forge:ingots/silver' },
                    { tag: 'forge:ingots/silver' }
                ],
                result: {
                    item: 'occultism:familiar_ring'
                },
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
                    { tag: 'forge:ingots/gold' },
                    { tag: 'forge:ingots/gold' },
                    { tag: 'forge:ingots/gold' }
                ],
                result: {
                    item: 'occultism:storage_controller_base'
                },
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
                    { tag: 'forge:ender_pearls' },
                    { tag: 'forge:gems/quartz' },
                    { tag: 'forge:gems/quartz' }
                ],
                result: {
                    item: 'occultism:stable_wormhole'
                },
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
                    { tag: 'forge:ender_pearls' },
                    { tag: 'forge:ender_pearls' },
                    { tag: 'forge:gems/quartz' }
                ],
                result: {
                    item: 'occultism:storage_remote'
                },
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
                    { tag: 'forge:chests/wooden' },
                    { tag: 'forge:leather' },
                    { tag: 'forge:leather' },
                    { tag: 'forge:string' },
                    { tag: 'forge:ingots/silver' }
                ],
                result: {
                    item: 'occultism:satchel'
                },
                id: 'occultism:ritual/craft_satchel'
            },
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
                    { tag: 'forge:ores/iron' },
                    { tag: 'forge:ores/gold' },
                    { tag: 'forge:ores/copper' },
                    { tag: 'forge:ores/silver' }
                ],
                result: {
                    item: 'occultism:jei_dummy/none'
                },
                id: 'occultism:ritual/summon_foliot_crusher'
            },
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
                    { tag: 'forge:dusts/iron' },
                    { tag: 'forge:dusts/gold' },
                    { tag: 'forge:dusts/copper' },
                    { tag: 'forge:dusts/silver' }
                ],
                result: {
                    item: 'occultism:jei_dummy/none'
                },
                id: 'occultism:ritual/summon_djinni_crusher'
            },
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
                    { tag: 'forge:gems/diamond' },
                    { tag: 'forge:dusts/iesnium' },
                    { tag: 'forge:dusts/iesnium' },
                    { tag: 'forge:gems/emerald' }
                ],
                result: {
                    item: 'occultism:jei_dummy/none'
                },
                id: 'occultism:ritual/summon_afrit_crusher'
            },
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
                    { tag: 'forge:storage_blocks/diamond' },
                    { item: 'minecraft:ghast_tear' },
                    { tag: 'forge:storage_blocks/iesnium' },
                    { tag: 'forge:storage_blocks/emerald' }
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
