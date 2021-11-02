onEvent('recipes', (event) => {
    const recipes = [
        {
            ritual_type: 'occultism:summon_with_chance_of_chicken_tamed',
            activation_item: { item: 'occultism:book_of_binding_bound_foliot' },
            pentacle_id: 'occultism:possess_foliot',
            duration: 3,
            entity_to_sacrifice: {
                tag: 'forge:chicken',
                display_name: 'ritual.occultism.sacrifice.chicken'
            },
            entity_to_summon: 'minecraft:parrot',
            ritual_dummy: { item: 'occultism:ritual_dummy/familiar_parrot' },
            ingredients: [
                { tag: 'forge:feathers' },
                { tag: 'forge:dyes/green' },
                { tag: 'forge:dyes/yellow' },
                { tag: 'forge:dyes/red' },
                { tag: 'forge:dyes/blue' },
                { tag: 'forge:string' }
            ],
            result: {
                item: 'occultism:jei_dummy/none'
            },
            id: 'occultism:ritual/familiar_parrot'
        },
        {
            ritual_type: 'occultism:summon',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:possess_djinni',
            duration: 6,
            entity_to_sacrifice: {
                tag: 'forge:pigs',
                display_name: 'ritual.occultism.sacrifice.pigs'
            },
            entity_to_summon: 'occultism:possessed_enderman',
            ritual_dummy: { item: 'occultism:ritual_dummy/possess_enderman' },
            ingredients: [
                { tag: 'forge:bones' },
                { tag: 'forge:string' },
                { tag: 'forge:end_stones' },
                { item: 'minecraft:rotten_flesh' }
            ],
            result: { item: 'occultism:jei_dummy/none' },
            id: 'occultism:ritual/possess_enderman'
        },
        {
            ritual_type: 'occultism:summon',
            activation_item: { item: 'occultism:book_of_binding_bound_foliot' },
            duration: 3,
            pentacle_id: 'occultism:possess_foliot',
            item_to_use: { item: 'minecraft:egg' },
            entity_to_summon: 'occultism:possessed_endermite',
            ritual_dummy: { item: 'occultism:ritual_dummy/possess_endermite' },
            ingredients: [
                { item: 'minecraft:dirt' },
                { item: 'minecraft:stone' },
                { item: 'minecraft:dirt' },
                { item: 'minecraft:stone' }
            ],
            result: { item: 'occultism:jei_dummy/none' },
            id: 'occultism:ritual/possess_endermite'
        },
        {
            ritual_type: 'occultism:summon',
            activation_item: { item: 'occultism:book_of_binding_bound_foliot' },
            pentacle_id: 'occultism:possess_foliot',
            duration: 3,
            entity_to_sacrifice: {
                tag: 'forge:chicken',
                display_name: 'ritual.occultism.sacrifice.chicken'
            },
            entity_to_summon: 'occultism:possessed_skeleton',
            ritual_dummy: { item: 'occultism:ritual_dummy/possess_skeleton' },
            ingredients: [
                { tag: 'forge:bones' },
                { tag: 'forge:bones' },
                { tag: 'forge:bones' },
                { tag: 'forge:bones' }
            ],
            result: { item: 'occultism:jei_dummy/none' },
            id: 'occultism:ritual/possess_skeleton'
        },
        {
            ritual_type: 'occultism:summon',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:possess_djinni',
            duration: 6,
            entity_to_sacrifice: {
                tag: 'forge:cows',
                display_name: 'ritual.occultism.sacrifice.cows'
            },
            entity_to_summon: 'occultism:possessed_ghast',
            ritual_dummy: { item: 'occultism:ritual_dummy/possess_ghast' },
            ingredients: [
                { tag: 'forge:netherrack' },
                { tag: 'forge:netherrack' },
                { tag: 'forge:netherrack' },
                { tag: 'forge:magma' },
                { tag: 'forge:magma' },
                { tag: 'forge:magma' },
                { item: 'minecraft:lava_bucket' },
                { item: 'minecraft:lava_bucket' },
                { item: 'minecraft:lava_bucket' },
                { tag: 'forge:gems/diamond' }
            ],
            result: { item: 'occultism:jei_dummy/none' },
            id: 'occultism:ritual/possess_ghast'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: { item: 'occultism:book_of_binding_bound_afrit' },
            pentacle_id: 'occultism:summon_afrit',
            duration: 6,
            spirit_max_age: 120,
            spirit_job_type: 'occultism:rain_weather',
            entity_to_sacrifice: {
                tag: 'forge:cows',
                display_name: 'ritual.occultism.sacrifice.cows'
            },
            entity_to_summon: 'occultism:afrit',
            ritual_dummy: { item: 'occultism:ritual_dummy/summon_afrit_rain_weather' },
            ingredients: [
                { tag: 'forge:sand' },
                { tag: 'forge:gems/diamond' },
                { item: 'minecraft:cactus' },
                { item: 'minecraft:dead_bush' }
            ],
            result: { item: 'occultism:jei_dummy/none' },
            id: 'occultism:ritual/summon_afrit_rain_weather'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: { item: 'occultism:book_of_binding_bound_afrit' },
            pentacle_id: 'occultism:summon_afrit',
            duration: 6,
            spirit_max_age: 240,
            spirit_job_type: 'occultism:thunder_weather',
            entity_to_sacrifice: {
                tag: 'forge:cows',
                display_name: 'ritual.occultism.sacrifice.cows'
            },
            entity_to_summon: 'occultism:afrit',
            ritual_dummy: { item: 'occultism:ritual_dummy/summon_afrit_thunder_weather' },
            ingredients: [
                { tag: 'forge:bones' },
                { tag: 'forge:gunpowder' },
                { tag: 'forge:gunpowder' },
                { item: 'minecraft:ghast_tear' }
            ],
            result: { item: 'occultism:jei_dummy/none' },
            id: 'occultism:ritual/summon_afrit_thunder_weather'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:summon_djinni',
            duration: 6,
            spirit_max_age: 60,
            spirit_job_type: 'occultism:clear_weather',
            entity_to_summon: 'occultism:djinni',
            ritual_dummy: { item: 'occultism:ritual_dummy/summon_djinni_clear_weather' },
            ingredients: [
                { tag: 'forge:crops/beetroot' },
                { tag: 'forge:crops/carrot' },
                { tag: 'forge:crops/potato' },
                { tag: 'forge:crops/wheat' }
            ],
            result: { item: 'occultism:jei_dummy/none' },
            id: 'occultism:ritual/summon_djinni_clear_weather'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:summon_djinni',
            duration: 6,
            spirit_max_age: 60,
            spirit_job_type: 'occultism:day_time',
            entity_to_summon: 'occultism:djinni',
            ritual_dummy: { item: 'occultism:ritual_dummy/summon_djinni_day_time' },
            ingredients: [
                { item: 'minecraft:torch' },
                { tag: 'minecraft:saplings' },
                { item: 'minecraft:wheat' },
                { tag: 'forge:dyes/yellow' }
            ],
            result: { item: 'occultism:jei_dummy/none' },
            id: 'occultism:ritual/summon_djinni_day_time'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:summon_djinni',
            duration: 6,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:manage_machine',
            entity_to_summon: 'occultism:djinni',
            ritual_dummy: { item: 'occultism:ritual_dummy/summon_djinni_manage_machine' },
            ingredients: [
                { tag: 'forge:storage_blocks/coal' },
                { tag: 'forge:ingots/gold' },
                { tag: 'forge:ingots/iron' },
                { item: 'minecraft:furnace' }
            ],
            result: { item: 'occultism:book_of_calling_djinni_manage_machine' },
            id: 'occultism:ritual/summon_djinni_manage_machine'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:summon_djinni',
            duration: 6,
            spirit_max_age: 60,
            spirit_job_type: 'occultism:night_time',
            entity_to_summon: 'occultism:djinni',
            ritual_dummy: { item: 'occultism:ritual_dummy/summon_djinni_night_time' },
            ingredients: [
                { tag: 'minecraft:beds' },
                { item: 'minecraft:rotten_flesh' },
                { tag: 'forge:bones' },
                { tag: 'forge:dyes/black' }
            ],
            result: { item: 'occultism:jei_dummy/none' },
            id: 'occultism:ritual/summon_djinni_night_time'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: { item: 'occultism:book_of_binding_bound_foliot' },
            pentacle_id: 'occultism:summon_foliot',
            duration: 6,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:cleaner',
            entity_to_summon: 'occultism:foliot',
            ritual_dummy: { item: 'occultism:ritual_dummy/summon_foliot_cleaner' },
            ingredients: [
                { item: 'occultism:brush' },
                { tag: 'forge:chests' },
                { item: 'minecraft:dispenser' },
                { item: 'minecraft:hopper' }
            ],
            result: { item: 'occultism:book_of_calling_foliot_cleaner' },
            id: 'occultism:ritual/summon_foliot_cleaner'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: { item: 'occultism:book_of_binding_bound_foliot' },
            pentacle_id: 'occultism:summon_foliot',
            duration: 6,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:lumberjack',
            entity_to_summon: 'occultism:foliot',
            ritual_dummy: { item: 'occultism:ritual_dummy/summon_foliot_lumberjack' },
            ingredients: [
                { tag: 'occultism:saplings/otherworld' },
                { item: 'minecraft:oak_sapling' },
                { item: 'minecraft:birch_sapling' },
                { item: 'minecraft:spruce_sapling' },
                { tag: 'forge:tools/metal/axes' }
            ],
            result: { item: 'occultism:book_of_calling_foliot_lumberjack' },
            id: 'occultism:ritual/summon_foliot_lumberjack'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: { item: 'occultism:book_of_binding_bound_foliot' },
            pentacle_id: 'occultism:summon_foliot',
            duration: 3,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:trade_otherstone_t1',
            entity_to_summon: 'occultism:foliot',
            ritual_dummy: { item: 'occultism:ritual_dummy/summon_foliot_otherstone_trader' },
            ingredients: [
                { item: 'minecraft:stone' },
                { item: 'minecraft:granite' },
                { item: 'minecraft:diorite' },
                { item: 'minecraft:andesite' }
            ],
            result: { item: 'occultism:jei_dummy/none' },
            id: 'occultism:ritual/summon_foliot_otherstone_trader'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: { item: 'occultism:book_of_binding_bound_foliot' },
            pentacle_id: 'occultism:summon_foliot',
            duration: 3,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:trade_otherworld_saplings_t1',
            entity_to_summon: 'occultism:foliot',
            ritual_dummy: { item: 'occultism:ritual_dummy/summon_foliot_sapling_trader' },
            ingredients: [
                { item: 'minecraft:oak_sapling' },
                { item: 'minecraft:birch_sapling' },
                { item: 'minecraft:spruce_sapling' },
                { item: 'minecraft:jungle_sapling' }
            ],
            result: { item: 'occultism:jei_dummy/none' },
            id: 'occultism:ritual/summon_foliot_sapling_trader'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: { item: 'occultism:book_of_binding_bound_foliot' },
            pentacle_id: 'occultism:summon_foliot',
            duration: 6,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:transport_items',
            entity_to_summon: 'occultism:foliot',
            ritual_dummy: { item: 'occultism:ritual_dummy/summon_foliot_transport_items' },
            ingredients: [
                { item: 'minecraft:minecart' },
                { tag: 'forge:chests' },
                { item: 'minecraft:dispenser' },
                { item: 'minecraft:hopper' }
            ],
            result: { item: 'occultism:book_of_calling_foliot_transport_items' },
            id: 'occultism:ritual/summon_foliot_transport_items'
        },
        {
            ritual_type: 'occultism:summon_wild_hunt',
            activation_item: {
                item: 'minecraft:skeleton_skull'
            },
            pentacle_id: 'occultism:summon_wild_greater_spirit',
            duration: 3,
            entity_to_sacrifice: {
                tag: 'occultism:humans',
                display_name: 'ritual.occultism.sacrifice.humans'
            },
            entity_to_summon: 'occultism:wild_hunt_wither_skeleton',
            ritual_dummy: {
                item: 'occultism:ritual_dummy/summon_wild_hunt'
            },
            ingredients: [
                { tag: 'forge:storage_blocks/copper' },
                { tag: 'forge:storage_blocks/silver' },
                { tag: 'forge:storage_blocks/gold' },
                { tag: 'forge:gems/diamond' },
                { tag: 'forge:netherrack' },
                { item: 'minecraft:soul_sand' }
            ],
            result: { item: 'occultism:jei_dummy/none' },
            id: 'occultism:ritual/summon_wild_hunt'
        },
        {
            ritual_type: 'occultism:summon',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:possess_djinni',
            duration: 30,
            entity_to_sacrifice: {
                tag: 'forge:parrots',
                display_name: 'ritual.occultism.sacrifice.parrots'
            },
            entity_to_summon: 'occultism:otherworld_bird',
            ritual_dummy: { item: 'occultism:ritual_dummy/summon_wild_otherworld_bird' },
            ingredients: [
                { tag: 'forge:feathers' },
                { tag: 'forge:feathers' },
                { item: 'minecraft:cobweb' },
                { tag: 'minecraft:leaves' },
                { tag: 'forge:eggs' }
            ],
            result: { item: 'occultism:jei_dummy/none' },
            id: 'occultism:ritual/summon_wild_otherworld_bird'
        },
        {
            ritual_type: 'occultism:summon',
            activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
            pentacle_id: 'occultism:possess_foliot',
            duration: 3,
            entity_to_sacrifice: {
                tag: 'forge:chicken',
                display_name: 'ritual.occultism.sacrifice.chicken'
            },
            entity_to_summon: 'minecraft:parrot',
            ritual_dummy: { item: 'occultism:ritual_dummy/summon_wild_parrot' },
            ingredients: [
                { tag: 'forge:feathers' },
                { tag: 'forge:dyes/green' },
                { tag: 'forge:dyes/yellow' },
                { tag: 'forge:dyes/red' },
                { tag: 'forge:dyes/blue' },
                { tag: 'forge:eggs' }
            ],
            result: { item: 'occultism:jei_dummy/none' },
            id: 'occultism:ritual/summon_wild_parrot'
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';
        event.custom(recipe).id(recipe.id);
    });
});
