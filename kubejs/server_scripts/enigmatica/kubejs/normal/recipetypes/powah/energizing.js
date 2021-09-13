onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/pneumaticcraft/thermo_plant/';
    const recipes = [
        {
            ingredients: [{ tag: 'forge:storage_blocks/iron_copper' }, { tag: 'forge:storage_blocks/gold' }],
            energy: '100000',
            result: {
                item: 'powah:energized_steel_block',
                count: 2
            },
            id: `${id_prefix}energized_steel_block`
        },
        {
            ingredients: [{ item: 'botania:blaze_block' }],
            energy: '900000',
            result: {
                item: 'powah:blazing_crystal_block',
                count: 1
            },
            id: `${id_prefix}blazing_crystal_block`
        },
        {
            ingredients: [{ tag: 'forge:storage_blocks/diamond' }],
            energy: '3000000',
            result: {
                item: 'powah:niotic_crystal_block',
                count: 1
            },
            id: `${id_prefix}niotic_crystal_block`
        },
        {
            ingredients: [{ tag: 'forge:storage_blocks/emerald' }],
            energy: '10000000',
            result: {
                item: 'powah:spirited_crystal_block',
                count: 1
            },
            id: `${id_prefix}spirited_crystal_block`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe).id(recipe.id);
    });
});
