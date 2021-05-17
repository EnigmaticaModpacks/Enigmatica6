events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    /* 
        Customization is very limited and 'new' rituals are not allowed.
        Only the Ingredients section may be freely changed. 
    */
    const data = {
        recipes: [
            {
                type: 'occultism:ritual',
                activation_item: { item: 'occultism:book_of_binding_bound_foliot' },
                pentacle_id: 'occultism:craft_foliot',
                require_item_use: false,
                require_sacrifice: false,
                ritual: { item: 'occultism:ritual_dummy/craft_infused_lenses' },
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
                activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
                pentacle_id: 'occultism:craft_djinni',
                require_item_use: false,
                require_sacrifice: false,
                ritual: { item: 'occultism:ritual_dummy/craft_infused_pickaxe' },
                ingredients: [
                    { item: 'occultism:spirit_attuned_pickaxe_head' },
                    { tag: 'forge:rods/lumium' },
                    { item: 'eidolon:ender_calx' },
                    { tag: 'forge:rods/lumium' }
                ],
                result: { item: 'occultism:infused_pickaxe' },
                id: 'occultism:ritual/craft_infused_pickaxe'
            },
            {
                type: 'occultism:ritual',
                activation_item: { item: 'occultism:book_of_binding_bound_djinni' },
                pentacle_id: 'occultism:craft_djinni',
                require_item_use: false,
                require_sacrifice: false,
                ritual: { item: 'occultism:ritual_dummy/craft_soul_gem' },
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
                activation_item: { item: 'occultism:book_of_binding_bound_afrit' },
                pentacle_id: 'occultism:summon_wild_afrit',
                require_item_use: false,
                require_sacrifice: true,
                ritual: { item: 'occultism:ritual_dummy/summon_wild_afrit' },
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
