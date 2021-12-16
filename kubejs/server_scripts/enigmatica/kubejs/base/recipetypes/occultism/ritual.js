onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/occultism/ritual/';
    const recipes = [
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

        // Item.of('resourcefulbees:bee_jar', '{Entity:"resourcefulbees:otherworldly_bee",display:{Name:\'{"italic":false,"extra":[{"text":" - "},{"translate":"entity.resourcefulbees.otherworldly_bee"}],"translate":"item.resourcefulbees.bee_jar_filled"}\'},Color:"#80251f"}')

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
