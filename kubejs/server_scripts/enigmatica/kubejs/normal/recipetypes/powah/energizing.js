onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/powah/energizing/';
    const recipes = [
        {
            ingredients: [{ tag: 'forge:storage_blocks/iron_copper' }, { tag: 'forge:storage_blocks/gold' }],
            energy: 100000,
            result: {
                item: 'powah:energized_steel_block',
                count: 2
            },
            id: `${id_prefix}energized_steel_block`
        },
        {
            ingredients: [{ item: 'botania:blaze_block' }],
            energy: 900000,
            result: {
                item: 'powah:blazing_crystal_block',
                count: 1
            },
            id: `${id_prefix}blazing_crystal_block`
        },
        {
            ingredients: [{ tag: 'forge:storage_blocks/diamond' }],
            energy: 3000000,
            result: {
                item: 'powah:niotic_crystal_block',
                count: 1
            },
            id: `${id_prefix}niotic_crystal_block`
        },
        {
            ingredients: [{ tag: 'forge:storage_blocks/emerald' }],
            energy: 10000000,
            result: {
                item: 'powah:spirited_crystal_block',
                count: 1
            },
            id: `${id_prefix}spirited_crystal_block`
        }
    ];

    const powerValues = ['5000', '10000', '15000', '20000', '25000', '30000'];

    powerValues.forEach((powerValue, index) => {
        let ingredients = { ingots: [], blocks: [] };

        for (let i = 0; i < index + 1; i++) {
            ingredients.ingots.push({ tag: 'forge:ingots/uranium' });
            ingredients.blocks.push({ tag: 'forge:storage_blocks/uranium' });
        }

        recipes.push(
            {
                type: 'powah:energizing',
                ingredients: ingredients.ingots,
                energy: powerValue,
                result: {
                    item: 'powah:uraninite',
                    count: index + 1
                },
                id: `${id_prefix}uraninite_${index}`
            },
            {
                type: 'powah:energizing',
                ingredients: ingredients.blocks,
                energy: powerValue * 9,
                result: {
                    item: 'powah:uraninite_block',
                    count: index + 1
                },
                id: `${id_prefix}uraninite_block_${index}`
            }
        );
    });

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe).id(recipe.id);
    });
});
