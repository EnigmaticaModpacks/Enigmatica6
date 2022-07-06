onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/occultism/ritual/';
    const recipes = [
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_afrit',
            pentacle_id: 'occultism:summon_afrit',
            duration: 60,
            spirit_max_age: 40,
            spirit_job_type: 'occultism:rain_weather',
            entity_to_sacrifice: { tag: 'forge:cows', display_name: 'ritual.occultism.sacrifice.cows' },
            entity_to_summon: 'occultism:afrit',
            ritual_dummy: 'occultism:ritual_dummy/summon_afrit_rain_weather',
            ingredients: ['#forge:sand', '#forge:gems/diamond', 'minecraft:cactus', 'minecraft:dead_bush'],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_afrit_rain_weather'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_afrit',
            pentacle_id: 'occultism:summon_afrit',
            duration: 60,
            spirit_max_age: 40,
            spirit_job_type: 'occultism:thunder_weather',
            entity_to_sacrifice: { tag: 'forge:cows', display_name: 'ritual.occultism.sacrifice.cows' },
            entity_to_summon: 'occultism:afrit',
            ritual_dummy: 'occultism:ritual_dummy/summon_afrit_thunder_weather',
            ingredients: ['#forge:bones', '#forge:gunpowder', '#forge:gunpowder', 'minecraft:ghast_tear'],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_afrit_thunder_weather'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:summon_djinni',
            duration: 60,
            spirit_max_age: 40,
            spirit_job_type: 'occultism:clear_weather',
            entity_to_summon: 'occultism:djinni',
            ritual_dummy: 'occultism:ritual_dummy/summon_djinni_clear_weather',
            ingredients: ['#forge:crops/beetroot', '#forge:crops/carrot', '#forge:crops/potato', '#forge:crops/wheat'],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_djinni_clear_weather'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:summon_djinni',
            duration: 60,
            spirit_max_age: 40,
            spirit_job_type: 'occultism:day_time',
            entity_to_summon: 'occultism:djinni',
            ritual_dummy: 'occultism:ritual_dummy/summon_djinni_day_time',
            ingredients: ['minecraft:torch', '#minecraft:saplings', 'minecraft:wheat', '#forge:dyes/yellow'],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_djinni_day_time'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:summon_djinni',
            duration: 60,
            spirit_max_age: 40,
            spirit_job_type: 'occultism:night_time',
            entity_to_summon: 'occultism:djinni',
            ritual_dummy: 'occultism:ritual_dummy/summon_djinni_night_time',
            ingredients: ['#minecraft:beds', 'minecraft:rotten_flesh', '#forge:bones', '#forge:dyes/black'],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_djinni_night_time'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:summon_foliot',
            duration: 30,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:trade_otherstone_t1',
            entity_to_summon: 'occultism:foliot',
            ritual_dummy: 'occultism:ritual_dummy/summon_foliot_otherstone_trader',
            ingredients: ['minecraft:stone', 'minecraft:granite', 'minecraft:diorite', 'minecraft:andesite'],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_foliot_otherstone_trader'
        },
        {
            ritual_type: 'occultism:summon_spirit_with_job',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:summon_foliot',
            duration: 30,
            spirit_max_age: -1,
            spirit_job_type: 'occultism:trade_otherworld_saplings_t1',
            entity_to_summon: 'occultism:foliot',
            ritual_dummy: 'occultism:ritual_dummy/summon_foliot_sapling_trader',
            ingredients: [
                'minecraft:oak_sapling',
                'minecraft:birch_sapling',
                'minecraft:spruce_sapling',
                'minecraft:jungle_sapling'
            ],
            result: 'occultism:jei_dummy/none',
            id: 'occultism:ritual/summon_foliot_sapling_trader'
        },

        /// Custom Rituals
        {
            ritual_type: 'occultism:summon',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            duration: 120,
            entity_to_sacrifice: {
                tag: 'enigmatica:bees/rocky',
                display_name: 'ritual.occultism.sacrifice.rocky_bees'
            },
            pentacle_id: 'occultism:possess_foliot',
            item_to_use: 'occultism:datura',
            entity_to_summon: 'resourcefulbees:otherworldly_bee',
            ritual_dummy: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:otherworldly_bee' }).weakNBT(),
            ingredients: [
                'resourcefulbees:silver_honeycomb',
                'resourcefulbees:silver_honeycomb',
                'resourcefulbees:silver_honeycomb',
                'resourcefulbees:silver_honeycomb',
                'occultism:burnt_otherstone',
                'occultism:burnt_otherstone',
                'occultism:burnt_otherstone',
                'occultism:burnt_otherstone',
                '#forge:dusts/silver',
                '#forge:dusts/silver',
                '#forge:dusts/silver',
                '#forge:dusts/silver'
            ],
            result: 'occultism:jei_dummy/none',
            id: `${id_prefix}summon_otherwordly_bee`
        },
        {
            ritual_type: 'occultism:craft',
            activation_item: 'resourcefulbees:illuminating_honey_bottle',
            pentacle_id: 'occultism:craft_foliot',
            duration: 30,
            ritual_dummy: 'kubejs:craft_otherworldly_honey_bottle',
            ingredients: [
                'resourcefulbees:otherworldly_honeycomb',
                'resourcefulbees:otherworldly_honeycomb',
                'resourcefulbees:otherworldly_honeycomb',
                'resourcefulbees:otherworldly_honeycomb',
                'resourcefulbees:otherworldly_honeycomb',
                'resourcefulbees:otherworldly_honeycomb',
                'resourcefulbees:otherworldly_honeycomb',
                'resourcefulbees:otherworldly_honeycomb',
                'resourcefulbees:blaze_honeycomb',
                'resourcefulbees:blaze_honeycomb',
                'resourcefulbees:blaze_honeycomb',
                'resourcefulbees:blaze_honeycomb'
            ],
            result: 'resourcefulbees:otherworldly_honey_bottle',
            id: `${id_prefix}craft_otherworldly_honey_bottle`
        }
    ];

    /*
        Ingredient Display in JEI
            ingredients: [
                 '12 o'clock' ,
                 '3 o'clock' ,
                 '6 o'clock' ,
                 '9 o'clock' ,

                 '1 o'clock',
                 '2 o'clock' ,
                 '7 o'clock' ,
                 '8 o'clock' ,

                 '11 o'clock' ,
                 '4 o'clock' ,
                 '5 o'clock' ,
                 '10 o'clock',
            ],
    */

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';

        recipe.activation_item = Ingredient.of(recipe.activation_item).toJson();
        if (recipe.item_to_use) {
            recipe.item_to_use = Ingredient.of(recipe.item_to_use).toJson();
        }
        recipe.ritual_dummy = Ingredient.of(recipe.ritual_dummy).toJson();
        recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.result).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
