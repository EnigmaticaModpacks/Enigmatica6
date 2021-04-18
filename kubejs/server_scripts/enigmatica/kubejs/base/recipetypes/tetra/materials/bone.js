events.listen('server.datapack.low_priority', (event) => {
    var data = [
        {
            type: 'base',
            recipes: [
                {
                    key: 'bone',
                    category: 'bone',
                    primary: '5',
                    secondary: '1.9',
                    tertiary: '4.5',
                    durability: '120',
                    integrityCost: '1',
                    integrityGain: '5',
                    magicCapacity: '108',
                    toolLevel: '2',
                    toolEfficiency: '4.5',
                    tints: { glyph: 'bone_glyph', texture: 'bone' },
                    textures: ['bone', 'crude'],
                    material: { item: 'minecraft:bone' },
                    requiredTools: { hammer: 1 }
                }
            ],
            type: 'compat',
            recipes: [
                // todo: brute tusk, chachalot whale tooth, bone serpent tooth, shark tooth, thrasher tooth, wilden horn gazelle horn, Unicorn honr (joke, high magic but crappy stats?)
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
