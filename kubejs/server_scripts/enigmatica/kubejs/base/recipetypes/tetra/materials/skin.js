events.listen('server.datapack.low_priority', (event) => {
    var data = [
        {
            type: 'base',
            recipes: [
                {
                    key: 'hide',
                    category: 'skin',
                    primary: '5',
                    secondary: '1.5',
                    tertiary: '1',
                    durability: '200',
                    integrityCost: '1',
                    integrityGain: '5',
                    magicCapacity: '90',
                    toolLevel: '0',
                    toolEfficiency: '0',
                    tints: { glyph: 'hide_glyph', texture: 'hide' },
                    textures: ['crude', 'default'],
                    material: { item: 'minecraft:rabbit_hide', count: 2 },
                    requiredTools: { cut: 2 }
                },
                {
                    key: 'leather',
                    category: 'skin',
                    primary: '5',
                    secondary: '2',
                    tertiary: '1',
                    durability: '200',
                    integrityCost: '1',
                    integrityGain: '4',
                    magicCapacity: '90',
                    toolLevel: '0',
                    toolEfficiency: '0',
                    tints: { glyph: 'leather_glyph', texture: 'leather' },
                    textures: ['crude', 'default'],
                    material: { item: 'minecraft:leather' },
                    requiredTools: { cut: 2 }
                }
            ],
            type: 'compat',
            recipes: [
                // todo: Kangaroo Hide
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
