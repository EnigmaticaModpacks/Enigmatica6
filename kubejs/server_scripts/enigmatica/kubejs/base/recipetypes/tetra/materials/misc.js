events.listen('server.datapack.low_priority', (event) => {
    var data = [
        {
            type: 'base',
            recipes: [
                {
                    key: 'blaze_rod',
                    primary: '5',
                    secondary: '0.4',
                    tertiary: '1',
                    durability: '111',
                    integrityCost: '2',
                    integrityGain: '7',
                    magicCapacity: '108',
                    toolLevel: '0',
                    toolEfficiency: '0',
                    effects: { fierySelf: [3, 0.1] },
                    tints: { glyph: 'blaze_rod_glyph', texture: 'blaze_rod' },
                    textures: ['metal', 'default'],
                    material: { item: 'minecraft:blaze_rod' },
                    requiredTools: { hammer: 1 }
                },
                {
                    key: 'vent_plate',
                    category: 'misc',
                    primary: '5',
                    secondary: '4.2',
                    tertiary: '5',
                    durability: '600',
                    integrityCost: '2',
                    integrityGain: '5',
                    magicCapacity: '84',
                    toolLevel: '0',
                    toolEfficiency: '0',
                    tints: { glyph: 'vent_glyph', texture: 'vent' },
                    textures: ['vent', 'metal'],
                    material: { item: 'tetra:vent_plate' },
                    requiredTools: { hammer: 5 }
                },
                {
                    key: 'stick',
                    category: 'misc',
                    primary: '1.5',
                    secondary: '0.5',
                    tertiary: '4',
                    durability: '40',
                    integrityCost: '1',
                    integrityGain: '3',
                    magicCapacity: '90',
                    toolLevel: '0',
                    toolEfficiency: '0',
                    tints: { glyph: 'stick_glyph', texture: 'stick' },
                    textures: ['crude', 'default'],
                    material: { item: 'minecraft:stick' }
                },
                {
                    key: 'forged_beam',
                    category: 'misc',
                    primary: '1',
                    secondary: '4.2',
                    tertiary: '1',
                    durability: '950',
                    integrityCost: '2',
                    integrityGain: '8',
                    magicCapacity: '84',
                    toolLevel: '0',
                    toolEfficiency: '0',
                    tints: { glyph: 'forged_beam_glyph', texture: 'forged_beam' },
                    textures: ['metal', 'default'],
                    material: { item: 'tetra:forged_beam' },
                    requiredTools: { hammer: 1 }
                },
                {
                    key: 'end_rod',
                    primary: '5',
                    secondary: '0.4',
                    tertiary: '1',
                    durability: '142',
                    integrityCost: '2',
                    integrityGain: '9',
                    magicCapacity: '102',
                    toolLevel: '0',
                    toolEfficiency: '0',
                    effects: { enderReverb: [4, 0.3] },
                    tints: { glyph: 'end_rod_glyph', texture: 'end_rod' },
                    textures: ['metal', 'default'],
                    material: { item: 'minecraft:end_rod' },
                    requiredTools: { hammer: 1 }
                }
            ],
            type: 'compat',
            recipes: []
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
