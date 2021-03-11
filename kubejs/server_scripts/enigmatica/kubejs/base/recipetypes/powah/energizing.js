events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                ingredients: [
                    { item: 'mekanism:energy_tablet' },
                    { item: 'powah:capacitor_blazing' },
                    { item: 'powah:capacitor_blazing' }
                ],
                energy: 250000,
                result: {
                    item: 'tetra:magmatic_cell',
                    count: 1
                }
            },
            {
                ingredients: [{ tag: 'forge:storage_blocks/iron' }, { tag: 'forge:storage_blocks/gold' }],
                energy: 100000,
                result: {
                    item: 'powah:energized_steel_block',
                    count: 2
                }
            },
            {
                ingredients: [{ item: 'botania:blaze_block' }],
                energy: 900000,
                result: {
                    item: 'powah:blazing_crystal_block',
                    count: 1
                }
            },
            {
                ingredients: [{ tag: 'forge:storage_blocks/diamond' }],
                energy: 3000000,
                result: {
                    item: 'powah:niotic_crystal_block',
                    count: 1
                }
            },
            {
                ingredients: [{ tag: 'forge:storage_blocks/emerald' }],
                energy: 10000000,
                result: {
                    item: 'powah:spirited_crystal_block',
                    count: 1
                }
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'powah:energizing',
            ingredients: recipe.ingredients,
            energy: recipe.energy,
            result: recipe.result
        });
    });

    var ingots = [{ tag: 'forge:ingots/uranium' }];
    var blocks = [{ tag: 'forge:storage_blocks/uranium' }];
    var ingotvalues = [5000, 10000, 15000, 20000, 25000, 30000];
    var blockvalues = [45000, 90000, 135000, 180000, 225000, 270000];

    for (i = 1; i <= 6; i++) {
        event.custom({
            type: 'powah:energizing',
            ingredients: ingots,
            energy: ingotvalues[i - 1],
            result: {
                item: 'powah:uraninite',
                count: i
            }
        });
        ingots.push({ tag: 'forge:ingots/uranium' });

        event.custom({
            type: 'powah:energizing',
            ingredients: blocks,
            energy: blockvalues[i - 1],
            result: {
                item: 'powah:uraninite_block',
                count: i
            }
        });
        blocks.push({ tag: 'forge:storage_blocks/uranium' });
    }
});
