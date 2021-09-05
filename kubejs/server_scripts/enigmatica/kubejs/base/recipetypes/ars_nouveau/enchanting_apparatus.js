onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/ars_nouveau/enchanting_apparatus/';
    var data = {
        recipes: [
            {
                inputs: ['#forge:storage_blocks/mana', '#forge:storage_blocks/mana', 'ars_nouveau:glyph_split'],
                reagent: 'minecraft:arrow',
                output: 'ars_nouveau:split_arrow',
                count: 32,
                id: 'ars_nouveau:split_arrow'
            },
            {
                inputs: ['#forge:storage_blocks/mana', '#forge:storage_blocks/mana', 'ars_nouveau:glyph_amplify'],
                reagent: 'minecraft:arrow',
                output: 'ars_nouveau:amplify_arrow',
                count: 32,
                id: 'ars_nouveau:amplify_arrow'
            },
            {
                inputs: ['#forge:storage_blocks/mana', '#forge:storage_blocks/mana', 'ars_nouveau:glyph_pierce'],
                reagent: 'minecraft:arrow',
                output: 'ars_nouveau:pierce_arrow',
                count: 32,
                id: 'ars_nouveau:pierce_arrow'
            },
            {
                inputs: [
                    '#forge:ingots/gold_brass',
                    '#forge:gems/diamond',
                    '#forge:gems/diamond',
                    '#forge:ingots/gold_brass',
                    'ars_nouveau:arcane_stone',
                    'ars_nouveau:arcane_stone',
                    'ars_nouveau:arcane_stone',
                    'ars_nouveau:arcane_stone'
                ],
                reagent: '#forge:storage_blocks/mana',
                output: 'ars_nouveau:summoning_crystal',
                count: 1,
                id: 'ars_nouveau:summoning_crystal'
            },
            {
                inputs: [
                    '#forge:storage_blocks/mana',
                    '#forge:storage_blocks/gold_brass',
                    'ars_nouveau:glyph_projectile'
                ],
                reagent: 'minecraft:bow',
                output: 'ars_nouveau:spell_bow',
                count: 1,
                id: 'ars_nouveau:spell_bow'
            },
            {
                inputs: [
                    '#forge:gems/mana',
                    '#forge:gems/mana',
                    '#forge:gems/mana',
                    '#forge:nuggets/gold_brass',
                    '#forge:nuggets/gold_brass',
                    '#forge:nuggets/gold_brass',
                    '#forge:nuggets/gold_brass',
                    '#forge:nuggets/gold_brass'
                ],
                reagent: 'ars_nouveau:carbuncle_shards',
                output: 'ars_nouveau:carbuncle_charm',
                count: 1,
                id: 'ars_nouveau:carbuncle_charm'
            },
            {
                inputs: ['#forge:gems/mana', '#forge:gems/mana', '#forge:gems/mana', '#forge:ingots/gold_brass'],
                reagent: '#forge:rods/wooden',
                output: 'ars_nouveau:dominion_wand',
                count: 1,
                id: 'ars_nouveau:dominion_wand'
            },
            {
                inputs: [
                    '#forge:ingots/gold_brass',
                    '#forge:ingots/gold_brass',
                    '#forge:ingots/gold_brass',
                    '#forge:ingots/gold_brass',
                    '#forge:feathers',
                    '#forge:feathers',
                    '#forge:feathers',
                    'ars_nouveau:glyph_launch'
                ],
                reagent: 'ars_nouveau:mundane_belt',
                output: 'ars_nouveau:belt_of_levitation',
                count: 1,
                id: 'ars_nouveau:belt_of_levitation'
            },
            {
                inputs: [
                    '#forge:gems/quartz',
                    '#forge:gems/quartz',
                    '#forge:gems/quartz',
                    '#forge:ingots/gold_brass',
                    '#forge:ingots/gold_brass',
                    '#forge:ingots/gold_brass',
                    '#forge:ingots/gold_brass',
                    '#forge:gems/quartz'
                ],
                reagent: 'ars_nouveau:arcane_relay',
                output: 'ars_nouveau:arcane_relay_splitter',
                count: 1,
                id: 'ars_nouveau:arcane_relay_splitter'
            },
            {
                inputs: [
                    '#forge:gems/mana',
                    '#forge:gems/mana',
                    '#forge:ingots/gold_brass',
                    '#forge:ingots/gold_brass',
                    '#forge:ingots/gold_brass',
                    '#forge:ingots/gold_brass',
                    '#forge:ingots/gold_brass',
                    '#forge:ingots/gold_brass'
                ],
                reagent: 'ars_nouveau:mana_jar',
                output: 'ars_nouveau:arcane_relay',
                count: 1,
                id: 'ars_nouveau:arcane_relay'
            },
            {
                inputs: [
                    '#forge:gems/mana',
                    '#forge:gems/mana',
                    '#forge:gems/diamond',
                    '#forge:ingots/gold_brass',
                    '#forge:ingots/gold_brass',
                    '#forge:ingots/gold_brass',
                    '#forge:ingots/gold_brass',
                    'ars_nouveau:novice_spell_book'
                ],
                reagent: '#forge:eggs',
                output: 'ars_nouveau:whelp_charm',
                count: 1,
                id: 'ars_nouveau:whelp_charm'
            },
            {
                inputs: [
                    '#forge:gems/mana',
                    'ars_nouveau:mana_bloom_crop',
                    'ars_nouveau:mana_bloom',
                    '#forge:gems/diamond',
                    'minecraft:oak_sapling',
                    'minecraft:spruce_sapling',
                    'minecraft:birch_sapling',
                    '#forge:seeds'
                ],
                reagent: 'ars_nouveau:sylph_shards',
                output: 'ars_nouveau:sylph_charm',
                count: 1,
                id: 'ars_nouveau:sylph_charm'
            },
            {
                inputs: [
                    '#forge:rods/blaze',
                    '#forge:ingots/gold_brass',
                    '#forge:ingots/gold_brass',
                    '#forge:ingots/gold_brass',
                    'ars_nouveau:glyph_redstone_signal',
                    '#forge:storage_blocks/quartz',
                    '#forge:storage_blocks/redstone',
                    'ars_nouveau:spell_parchment'
                ],
                reagent: 'minecraft:dispenser',
                output: 'ars_nouveau:spell_turret',
                count: 1,
                id: 'ars_nouveau:spell_turret'
            },
            {
                inputs: [
                    '#forge:gems/diamond',
                    '#forge:gems/ender',
                    '#forge:gems/diamond',
                    '#forge:gems/mana',
                    '#forge:gems/mana',
                    '#forge:gems/diamond',
                    '#forge:gems/ender',
                    '#forge:gems/diamond'
                ],
                reagent: 'ars_nouveau:ring_of_potential',
                output: 'ars_nouveau:ring_of_lesser_discount',
                count: 1,
                id: 'ars_nouveau:ring_of_lesser_discount'
            },
            {
                inputs: [
                    '#forge:gems/diamond',
                    '#forge:rods/blaze',
                    '#forge:gems/diamond',
                    '#forge:gems/mana',
                    '#forge:gems/mana',
                    '#forge:gems/diamond',
                    '#forge:rods/blaze',
                    '#forge:gems/diamond'
                ],
                reagent: 'ars_nouveau:ring_of_lesser_discount',
                output: 'ars_nouveau:ring_of_greater_discount',
                count: 1,
                id: 'ars_nouveau:ring_of_greater_discount'
            },
            {
                inputs: ['#forge:gems/mana', '#forge:gems/mana', '#forge:gems/mana', '#forge:gems/mana'],
                reagent: '#forge:seeds',
                output: 'ars_nouveau:mana_bloom_crop',
                count: 1,
                id: 'ars_nouveau:mana_bloom_crop'
            },
            {
                inputs: [
                    'ars_nouveau:glyph_amplify',
                    '#forge:storage_blocks/gold_brass',
                    '#forge:storage_blocks/gold_brass',
                    '#forge:storage_blocks/mana',
                    '#forge:storage_blocks/mana'
                ],
                reagent: 'minecraft:diamond_sword',
                output: 'ars_nouveau:enchanters_sword',
                count: 1,
                id: 'ars_nouveau:enchanters_sword'
            },
            {
                inputs: [
                    '#forge:storage_blocks/gold_brass',
                    '#forge:storage_blocks/gold_brass',
                    '#forge:storage_blocks/mana',
                    '#forge:storage_blocks/mana'
                ],
                reagent: 'minecraft:shield',
                output: 'ars_nouveau:enchanters_shield',
                count: 1,
                id: 'ars_nouveau:enchanters_shield'
            },
            {
                inputs: [
                    'ars_nouveau:blaze_fiber',
                    'ars_nouveau:blaze_fiber',
                    '#forge:storage_blocks/mana',
                    '#forge:storage_blocks/gold_brass'
                ],
                reagent: 'minecraft:glass_bottle',
                output: 'ars_nouveau:potion_flask',
                count: 1,
                id: 'ars_nouveau:potion_flask'
            },
            {
                inputs: [
                    'ars_nouveau:glyph_extract',
                    'ars_nouveau:glyph_extract',
                    '#forge:storage_blocks/gold_brass',
                    '#forge:storage_blocks/gold_brass',
                    '#forge:rods/blaze',
                    '#forge:rods/blaze',
                    '#forge:rods/blaze',
                    '#forge:rods/blaze'
                ],
                reagent: 'ars_nouveau:potion_jar',
                output: 'ars_nouveau:potion_melder',
                count: 1,
                id: 'ars_nouveau:potion_melder'
            },
            {
                inputs: [
                    'ars_nouveau:wilden_horn',
                    'ars_nouveau:wilden_spike',
                    'ars_nouveau:wilden_wing',
                    'ars_nouveau:wilden_tribute',
                    '#forge:ingots/gold_brass'
                ],
                reagent: '#forge:storage_blocks/mana',
                output: 'ars_nouveau:summon_focus',
                count: 1,
                id: 'ars_nouveau:summon_focus'
            },
            {
                inputs: [
                    '#forge:glass',
                    '#forge:glass',
                    'ars_nouveau:glyph_self',
                    'ars_nouveau:glyph_self',
                    '#forge:logs/archwood',
                    '#forge:logs/archwood',
                    '#forge:ingots/gold_brass',
                    '#forge:ingots/gold_brass'
                ],
                reagent: '#forge:storage_blocks/mana',
                output: 'ars_nouveau:enchanters_mirror',
                count: 1,
                id: 'ars_nouveau:enchanters_mirror'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'ars_nouveau:enchanting_apparatus',
            reagent: recipe.reagent.charAt(0) == '#' ? [{ tag: recipe.reagent.slice(1) }] : [{ item: recipe.reagent }],
            output: { item: recipe.output, count: recipe.count }
        };

        recipe.inputs.forEach((input, index) => {
            let i = index + 1;
            constructed_recipe[`item_${i}`] = input.charAt(0) == '#' ? [{ tag: input.slice(1) }] : [{ item: input }];
        });

        event.custom(constructed_recipe).id(recipe.id);
    });
});
