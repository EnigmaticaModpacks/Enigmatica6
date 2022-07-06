onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/pneumaticcraft/thermo_plant/';
    const recipes = [
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
            },
            id: `${id_prefix}magmatic_cell`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe).id(recipe.id);
    });
});
