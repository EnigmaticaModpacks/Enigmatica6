events.listen('recipes', function (event) {
    var data = {
        recipes: [
            {
                reagent: [{ item: 'minecraft:wheat_seeds' }],
                output: 'ars_nouveau:mana_bloom_crop',
                item_1: [{ tag: 'forge:gems/mana' }],
                item_2: [{ tag: 'forge:gems/mana' }],
                item_3: [{ tag: 'forge:gems/mana' }],
                item_4: [{ tag: 'forge:gems/mana' }]
            },
            {
                reagent: [{ item: 'minecraft:wheat_seeds' }],
                output: 'ars_nouveau:mana_bloom_crop',
                item_1: [{ tag: 'forge:gems/mana' }],
                item_2: [{ tag: 'forge:gems/mana' }],
                item_3: [{ tag: 'forge:gems/mana' }],
                item_4: [{ tag: 'forge:gems/mana' }]
            },
            {
                reagent: [{ item: 'ars_nouveau:ring_of_potential' }],
                output: 'ars_nouveau:ring_of_lesser_discount',
                item_1: [{ tag: 'forge:gems/diamond' }],
                item_2: [{ tag: 'forge:gems/ender' }],
                item_3: [{ tag: 'forge:gems/diamond' }],
                item_4: [{ tag: 'forge:gems/mana' }],
                item_5: [{ tag: 'forge:gems/mana' }],
                item_6: [{ tag: 'forge:gems/diamond' }],
                item_7: [{ tag: 'forge:gems/ender' }],
                item_8: [{ tag: 'forge:gems/diamond' }]
            },
            {
                reagent: [{ item: 'ars_nouveau:ring_of_lesser_discount' }],
                output: 'ars_nouveau:ring_of_greater_discount',
                item_1: [{ tag: 'forge:gems/diamond' }],
                item_2: [{ tag: 'forge:rods/blaze' }],
                item_3: [{ tag: 'forge:gems/diamond' }],
                item_4: [{ tag: 'forge:gems/mana' }],
                item_5: [{ tag: 'forge:gems/mana' }],
                item_6: [{ tag: 'forge:gems/diamond' }],
                item_7: [{ tag: 'forge:rods/blaze' }],
                item_8: [{ tag: 'forge:gems/diamond' }]
            },
            {
                reagent: [{ tag: 'forge:gems/mana' }],
                output: 'ars_nouveau:summoning_crystal',
                item_1: [{ tag: 'forge:ingots/gold_copper' }],
                item_2: [{ tag: 'forge:gems/diamond' }],
                item_3: [{ tag: 'forge:gems/diamond' }],
                item_4: [{ tag: 'forge:ingots/gold_copper' }],
                item_5: [{ item: 'ars_nouveau:arcane_stone' }],
                item_6: [{ item: 'ars_nouveau:arcane_stone' }],
                item_7: [{ item: 'ars_nouveau:arcane_stone' }],
                item_8: [{ item: 'ars_nouveau:arcane_stone' }]
            },
            {
                reagent: [{ item: 'ars_nouveau:mana_jar' }],
                output: 'ars_nouveau:arcane_relay',
                item_1: [{ tag: 'forge:gems/mana' }],
                item_2: [{ tag: 'forge:gems/mana' }],
                item_3: [{ tag: 'forge:ingots/gold_copper' }],
                item_4: [{ tag: 'forge:ingots/gold_copper' }],
                item_5: [{ tag: 'forge:ingots/gold_copper' }],
                item_6: [{ tag: 'forge:ingots/gold_copper' }],
                item_7: [{ tag: 'forge:ingots/gold_copper' }],
                item_8: [{ tag: 'forge:ingots/gold_copper' }]
            },
            {
                reagent: [{ item: 'ars_nouveau:dull_trinket' }],
                output: 'ars_nouveau:amulet_of_mana_regen',
                item_1: [{ tag: 'forge:gems/diamond' }],
                item_2: [{ tag: 'forge:gems/diamond' }],
                item_3: [{ tag: 'forge:ingots/gold_copper' }],
                item_4: [{ tag: 'forge:ingots/gold_copper' }],
                item_5: [{ tag: 'forge:gems/mana' }],
                item_6: [{ tag: 'forge:gems/mana' }],
                item_7: [{ tag: 'forge:gems/mana' }],
                item_8: [{ tag: 'forge:gems/mana' }]
            },
            {
                reagent: [{ item: 'ars_nouveau:dull_trinket' }],
                output: 'ars_nouveau:amulet_of_mana_boost',
                item_1: [{ tag: 'forge:gems/diamond' }],
                item_2: [{ tag: 'forge:gems/diamond' }],
                item_3: [{ tag: 'forge:gems/diamond' }],
                item_4: [{ tag: 'forge:gems/mana' }],
                item_5: [{ tag: 'forge:gems/mana' }],
                item_6: [{ tag: 'forge:gems/mana' }],
                item_7: [{ tag: 'forge:gems/mana' }],
                item_8: [{ tag: 'forge:gems/mana' }]
            },
            {
                reagent: [{ item: 'ars_nouveau:carbuncle_shards' }],
                output: 'ars_nouveau:carbuncle_charm',
                item_1: [{ tag: 'forge:gems/mana' }],
                item_2: [{ tag: 'forge:gems/mana' }],
                item_3: [{ tag: 'forge:gems/diamond' }],
                item_4: [{ tag: 'forge:nuggets/gold_copper' }],
                item_5: [{ tag: 'forge:nuggets/gold_copper' }],
                item_6: [{ tag: 'forge:nuggets/gold_copper' }],
                item_7: [{ tag: 'forge:nuggets/gold_copper' }],
                item_8: [{ tag: 'forge:nuggets/gold_copper' }]
            },
            {
                reagent: [{ item: 'ars_nouveau:sylph_shards' }],
                output: 'ars_nouveau:sylph_charm',
                item_1: [{ tag: 'forge:gems/mana' }],
                item_2: [{ item: 'ars_nouveau:mana_bloom_crop' }],
                item_3: [{ item: 'ars_nouveau:mana_bloom' }],
                item_4: [{ tag: 'forge:gems/diamond' }],
                item_5: [{ item: 'minecraft:oak_sapling' }],
                item_6: [{ item: 'minecraft:spruce_sapling' }],
                item_7: [{ item: 'minecraft:birch_sapling' }],
                item_8: [{ item: 'minecraft:wheat_seeds' }]
            },
            {
                reagent: [{ item: 'minecraft:egg' }],
                output: 'ars_nouveau:whelp_charm',
                item_1: [{ tag: 'forge:gems/mana' }],
                item_2: [{ tag: 'forge:gems/mana' }],
                item_3: [{ tag: 'forge:gems/diamond' }],
                item_4: [{ tag: 'forge:ingots/gold_copper' }],
                item_5: [{ tag: 'forge:ingots/gold_copper' }],
                item_6: [{ tag: 'forge:ingots/gold_copper' }],
                item_7: [{ tag: 'forge:ingots/gold_copper' }],
                item_8: [{ item: 'ars_nouveau:novice_spell_book' }]
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.remove({ output: recipe.output, type: 'ars_nouveau:enchanting_apparatus' });
        event.recipes.ars_nouveau.enchanting_apparatus(recipe);
    });
});
