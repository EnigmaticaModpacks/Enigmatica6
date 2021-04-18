events.listen('server.datapack.low_priority', (event) => {
    var data = [
        {
            type: 'compat',
            recipes: [
                {
                    key: 'stones',
                    category: 'stones',
                    primary: '4',
                    secondary: '3',
                    tertiary: '0',
                    durability: '131',
                    integrityCost: '1',
                    integrityGain: '4',
                    magicCapacity: '90',
                    toolLevel: '2',
                    toolEfficiency: '4',
                    tints: { glyph: 'stone_glyph', texture: 'stone' },
                    textures: ['crude', 'default'],
                    material: { tag: 'quark:stone_tool_materials' },
                    requiredTools: { hammer: 1 }
                }
            ]
        }
    ];

    data.forEach((recipeType) => {
        let type = '/';
        if (recipeType.type == 'compat') {
            type = '/compat/';
        }

        recipeType.recipes.forEach((recipe) => {
            recipe.durability = recipe.durability * 1.2;
            recipe.magicCapacity = recipe.magicCapacity * 1.2;

            event.addJson(`tetra:materials/${recipe.category}${type}${recipe.key}.json`, recipe);
        });
    });
});
