events.listen('server.datapack.low_priority', (event) => {
    var data = [
        {
            type: 'base',
            recipes: [
                {
                    key: 'wool',
                    category: 'fabric',
                    primary: '0.5',
                    secondary: '0.5',
                    tertiary: '6',
                    durability: '200',
                    integrityCost: '1',
                    integrityGain: '4',
                    magicCapacity: '90',
                    toolLevel: '0',
                    toolEfficiency: '0',
                    tints: { glyph: 'wool_glyph', texture: 'wool' },
                    textures: ['crude', 'default'],
                    material: { tag: 'minecraft:wool' },
                    requiredTools: { axe: 1 }
                }
            ],
            type: 'compat',
            recipes: [
                // todo: Marine Fabric, Protective Fabric, Tough Fabric, mana weave
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
