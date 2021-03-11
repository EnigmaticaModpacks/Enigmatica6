events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                id: 'ars_nouveau:split_arrow',
                item_1: [{ tag: 'forge:storage_blocks/mana' }],
                item_2: [{ tag: 'forge:storage_blocks/mana' }],
                item_3: [{ item: 'ars_nouveau:glyph_split' }],
                item_4: null,
                item_5: null,
                item_6: null,
                item_7: null,
                item_8: null,
                reagent: [{ item: 'minecraft:arrow' }],
                output: { item: 'ars_nouveau:split_arrow', count: 32 }
            },
            {
                id: 'ars_nouveau:amplify_arrow',
                item_1: [{ tag: 'forge:storage_blocks/mana' }],
                item_2: [{ tag: 'forge:storage_blocks/mana' }],
                item_3: [{ item: 'ars_nouveau:glyph_amplify' }],
                item_4: null,
                item_5: null,
                item_6: null,
                item_7: null,
                item_8: null,
                reagent: [{ item: 'minecraft:arrow' }],
                output: { item: 'ars_nouveau:amplify_arrow', count: 32 }
            },
            {
                id: 'ars_nouveau:pierce_arrow',
                item_1: [{ tag: 'forge:storage_blocks/mana' }],
                item_2: [{ tag: 'forge:storage_blocks/mana' }],
                item_3: [{ item: 'ars_nouveau:glyph_pierce' }],
                item_4: null,
                item_5: null,
                item_6: null,
                item_7: null,
                item_8: null,
                reagent: [{ item: 'minecraft:arrow' }],
                output: { item: 'ars_nouveau:pierce_arrow', count: 32 }
            },
            {
                id: 'ars_nouveau:summoning_crystal',
                item_1: [{ tag: 'forge:ingots/gold_brass' }],
                item_2: [{ tag: 'forge:gems/diamond' }],
                item_3: [{ tag: 'forge:gems/diamond' }],
                item_4: [{ tag: 'forge:ingots/gold_brass' }],
                item_5: [{ item: 'ars_nouveau:arcane_stone' }],
                item_6: [{ item: 'ars_nouveau:arcane_stone' }],
                item_7: [{ item: 'ars_nouveau:arcane_stone' }],
                item_8: [{ item: 'ars_nouveau:arcane_stone' }],
                reagent: [{ tag: 'forge:storage_blocks/mana' }],
                output: { item: 'ars_nouveau:summoning_crystal', count: 1 }
            },
            {
                id: 'ars_nouveau:spell_bow',
                item_1: [{ tag: 'forge:storage_blocks/mana' }],
                item_2: [{ tag: 'forge:storage_blocks/gold_brass' }],
                item_3: [{ item: 'ars_nouveau:glyph_projectile' }],
                item_4: null,
                item_5: null,
                item_6: null,
                item_7: null,
                item_8: null,
                reagent: [{ item: 'minecraft:bow' }],
                output: { item: 'ars_nouveau:spell_bow', count: 1 }
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event
            .custom({
                type: 'ars_nouveau:enchanting_apparatus',
                item_1: recipe.item_1,
                item_2: recipe.item_2,
                item_3: recipe.item_3,
                item_4: recipe.item_4,
                item_5: recipe.item_5,
                item_6: recipe.item_6,
                item_7: recipe.item_7,
                item_8: recipe.item_8,
                reagent: recipe.reagent,
                output: recipe.output
            })
            .id(recipe.id);
    });
});
