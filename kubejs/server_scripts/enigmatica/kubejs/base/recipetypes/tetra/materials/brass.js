onEvent('server.datapack.low_priority', (event) => {
    const recipes = [
        {
            key: 'brass',
            category: 'metal',
            primary: '5.5',
            secondary: '4',
            tertiary: '3.2',
            durability: '462',
            integrityCost: '2',
            integrityGain: '6',
            magicCapacity: '87',
            toolLevel: '3',
            toolEfficiency: '6.5',
            tints: {
                glyph: 'ffc940',
                texture: 'ffc940',
            },
            textures: ['metal', 'default'],
            material: {
                tag: 'forge:ingots/brass',
            },

            requiredTools: {
                hammer: 2,
            },
        },
    ];

    recipes.forEach((recipe) => {
        recipe.durability = recipe.durability * 1.2;
        recipe.magicCapacity = recipe.magicCapacity * 1.2;

        event.addJson(`tetra:materials/${recipe.category}/${recipe.key}.json`, recipe);
    });
});
