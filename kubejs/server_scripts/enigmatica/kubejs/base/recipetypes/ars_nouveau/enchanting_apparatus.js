events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                id: 'ars_nouveau:split_arrow',
                inputs: ['#forge:storage_blocks/mana', '#forge:storage_blocks/mana', 'ars_nouveau:glyph_split'],
                reagent: 'minecraft:arrow',
                output: 'ars_nouveau:split_arrow',
                count: 32
            },
            {
                id: 'ars_nouveau:amplify_arrow',
                inputs: ['#forge:storage_blocks/mana', '#forge:storage_blocks/mana', 'ars_nouveau:glyph_amplify'],
                reagent: 'minecraft:arrow',
                output: 'ars_nouveau:amplify_arrow',
                count: 32
            },
            {
                id: 'ars_nouveau:pierce_arrow',
                inputs: ['#forge:storage_blocks/mana', '#forge:storage_blocks/mana', 'ars_nouveau:glyph_pierce'],
                reagent: 'minecraft:arrow',
                output: 'ars_nouveau:pierce_arrow',
                count: 32
            },
            {
                id: 'ars_nouveau:summoning_crystal',
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
                count: 1
            },
            {
                id: 'ars_nouveau:spell_bow',
                inputs: [
                    '#forge:storage_blocks/mana',
                    '#forge:storage_blocks/gold_brass',
                    'ars_nouveau:glyph_projectile'
                ],
                reagent: 'minecraft:bow',
                output: 'ars_nouveau:spell_bow',
                count: 1
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

        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
