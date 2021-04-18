events.listen('server.datapack.low_priority', (event) => {
    var data = [
        {
            type: 'base',
            recipes: [
                {
                    key: 'shulker_shell',
                    category: 'scale',
                    primary: '5',
                    secondary: '0.4',
                    tertiary: '1',
                    durability: '200',
                    integrityCost: '1',
                    integrityGain: '4',
                    magicCapacity: '90',
                    toolLevel: '0',
                    toolEfficiency: '0',
                    tints: { glyph: 'shulker_glyph', texture: 'shulker' },
                    textures: ['crude', 'default'],
                    material: { item: 'minecraft:shulker_shell' },
                    requiredTools: { cut: 3 }
                },
                {
                    key: 'turtle_scute',
                    category: 'scale',
                    primary: '5',
                    secondary: '0.4',
                    tertiary: '1',
                    durability: '200',
                    integrityCost: '1',
                    integrityGain: '4',
                    magicCapacity: '90',
                    toolLevel: '0',
                    toolEfficiency: '0',
                    tints: { glyph: 'turtle_glyph', texture: 'turtle' },
                    textures: ['crude', 'default'],
                    material: { item: 'minecraft:scute' },
                    requiredTools: { cut: 2 }
                }
            ],
            type: 'compat',
            recipes: [
                // todo: crocodile scute, spiked scute, snail shell piece, crab shell, nautilus shell, shulker shell, masticator scales, quark dragon scale, baubles ender dragon scale
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
