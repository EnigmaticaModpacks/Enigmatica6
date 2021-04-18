events.listen('server.datapack.low_priority', (event) => {
    var data = [
        {
            type: 'base',
            recipes: [
                {
                    key: 'dragon_sinew',
                    category: 'fibre',
                    primary: '1',
                    secondary: '1.5',
                    tertiary: '4',
                    durability: '1150',
                    integrityCost: '2',
                    integrityGain: '8',
                    magicCapacity: '84',
                    toolLevel: '0',
                    toolEfficiency: '0',
                    tints: { glyph: 'dragon_glyph', texture: 'dragon' },
                    textures: ['default'],
                    material: { item: 'tetra:dragon_sinew' },
                    requiredTools: { cut: 3 }
                },
                {
                    key: 'weeping_vine',
                    category: 'fibre',
                    primary: '5',
                    secondary: '2.8',
                    tertiary: '3',
                    durability: '320',
                    integrityCost: '1',
                    integrityGain: '4',
                    magicCapacity: '110',
                    toolLevel: '0',
                    toolEfficiency: '0',
                    tints: { glyph: 'weeping_glyph', texture: 'weeping' },
                    textures: ['crude', 'default'],
                    material: { item: 'minecraft:weeping_vines' },
                    requiredTools: { cut: 2 }
                },
                {
                    key: 'vine',
                    category: 'fibre',
                    primary: '5',
                    secondary: '1.6',
                    tertiary: '3',
                    durability: '180',
                    integrityCost: '1',
                    integrityGain: '4',
                    magicCapacity: '86',
                    toolLevel: '0',
                    toolEfficiency: '0',
                    tints: { glyph: 'vine_glyph', texture: 'vine' },
                    textures: ['crude', 'default'],
                    material: { item: 'minecraft:vine' },
                    requiredTools: { cut: 1 }
                },
                {
                    key: 'twisting_vine',
                    category: 'fibre',
                    primary: '5',
                    secondary: '2.4',
                    tertiary: '3',
                    durability: '200',
                    integrityCost: '1',
                    integrityGain: '5',
                    magicCapacity: '90',
                    toolLevel: '0',
                    toolEfficiency: '0',
                    tints: { glyph: 'warped_glyph', texture: 'warped' },
                    textures: ['crude', 'default'],
                    material: { item: 'minecraft:twisting_vines' },
                    effects: { unstable: 10 },
                    requiredTools: { cut: 2 }
                },
                {
                    key: 'string',
                    category: 'fibre',
                    primary: '5',
                    secondary: '0.8',
                    tertiary: '3',
                    durability: '200',
                    integrityCost: '1',
                    integrityGain: '3',
                    magicCapacity: '90',
                    toolLevel: '0',
                    toolEfficiency: '0',
                    tints: { glyph: 'string_glyph', texture: 'string' },
                    textures: ['crude', 'default'],
                    material: { tag: 'forge:string', count: 2 },
                    requiredTools: { cut: 1 }
                },
                {
                    key: 'phantom_membrane',
                    category: 'fibre',
                    primary: '5',
                    secondary: '1.4',
                    tertiary: '3',
                    durability: '1150',
                    integrityCost: '2',
                    integrityGain: '6',
                    magicCapacity: '84',
                    toolLevel: '0',
                    toolEfficiency: '0',
                    tints: { glyph: 'phantom_glyph', texture: 'phantom' },
                    textures: ['metal', 'default'],
                    material: { item: 'minecraft:phantom_membrane' },
                    requiredTools: { cut: 1 }
                }
            ],
            type: 'compat',
            recipes: [
                // todo: mana fiber, vines from various mods, silk
                {
                    key: 'hemp',
                    category: 'fibre',
                    primary: '5',
                    secondary: '1',
                    tertiary: '3',
                    durability: '380',
                    integrityCost: '1',
                    integrityGain: '4',
                    magicCapacity: '98',
                    toolLevel: '0',
                    toolEfficiency: '0',
                    tints: { glyph: '947d6c', texture: '947d6c' },
                    textures: ['crude', 'default'],
                    material: { tag: 'forge:fiber_hemp', count: 2 },
                    requiredTools: { cut: 2 }
                },
                {
                    key: 'mana_string',
                    category: 'fibre',
                    primary: '5',
                    secondary: '4',
                    tertiary: '2',
                    durability: '250',
                    integrityCost: '2',
                    integrityGain: '5',
                    magicCapacity: '120',
                    toolLevel: '3',
                    toolEfficiency: '6',
                    tints: { glyph: 'bdfced', texture: 'b2ffec' },
                    textures: ['crude', 'default'],
                    material: { item: 'botania:mana_string' },
                    improvements: { mana_repair: 2 },
                    requiredTools: { cut: 2 }
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
