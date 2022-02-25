onEvent('recipes', (event) => {
    const recipes = [
        {
            tool: [
                { item: 'tconstruct:plate_boots' },
                { item: 'tconstruct:plate_leggings' },
                { item: 'tconstruct:plate_chestplate' },
                { item: 'tconstruct:plate_helmet' }
            ],
            repair_material: 'tconstruct:cobalt',
            id: 'tconstruct:armor/repair/plate_repair_kit'
        },
        {
            tool: [
                { item: 'tconstruct:plate_boots' },
                { item: 'tconstruct:plate_leggings' },
                { item: 'tconstruct:plate_chestplate' },
                { item: 'tconstruct:plate_helmet' }
            ],
            repair_material: 'tconstruct:cobalt',
            id: 'tconstruct:armor/repair/plate_station'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:specialized_station_repair';
        event.custom(recipe).id(recipe.id);
    });
});
