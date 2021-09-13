onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/pneumaticcraft/thermo_plant/';
    const recipes = [
        {
            ingredients: [
                { item: 'mekanism:energy_tablet' },
                { item: 'powah:capacitor_blazing' },
                { item: 'powah:capacitor_blazing' }
            ],
            energy: '250000',
            result: {
                item: 'tetra:magmatic_cell',
                count: 1
            },
            id: `${id_prefix}magmatic_cell`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe).id(recipe.id);
    });

    var ingots = [{ tag: 'forge:ingots/uranium' }];
    var blocks = [{ tag: 'forge:storage_blocks/uranium' }];
    var ingotvalues = ['5000', '10000', '15000', '20000', '25000', '30000'];
    var blockvalues = ['45000', '90000', '135000', '180000', '225000', '270000'];

    for (i = 1; i <= 6; i++) {
        event.custom({
            type: 'powah:energizing',
            ingredients: ingots,
            energy: ingotvalues[i - 1],
            result: {
                item: 'powah:uraninite',
                count: i
            },
            id: `${id_prefix}uraninite_${i}`
        });
        ingots.push({ tag: 'forge:ingots/uranium' });

        event.custom({
            type: 'powah:energizing',
            ingredients: blocks,
            energy: blockvalues[i - 1],
            result: {
                item: 'powah:uraninite_block',
                count: i
            },
            id: `${id_prefix}uraninite_block_${i}`
        });
        blocks.push({ tag: 'forge:storage_blocks/uranium' });
    }
});
