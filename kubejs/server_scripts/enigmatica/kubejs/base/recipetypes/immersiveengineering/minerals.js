events.listen('recipes', (event) => {
    let data = {
        recipes: [
            {
                ores: [
                    { chance: 0.5, output: { item: 'minecraft:gravel' } },
                    { chance: 0.1, output: { item: 'byg:quartzite_sand' } },
                    { chance: 0.4, output: { item: 'minecraft:ancient_debris' } }
                ],
                dimensions: ['minecraft:the_nether'],
                weight: 8,
                fail_chance: 0.7,
                sample_background: 'minecraft:netherrack',
                id: 'ancient_debris'
            },
            {
                ores: [
                    { chance: 0.6, output: { tag: 'forge:chunks/quartz' } },
                    { chance: 0.2, output: { tag: 'forge:chunks/gold' } },
                    { chance: 0.2, output: { tag: 'forge:dusts/sulfur' } }
                ],
                dimensions: ['minecraft:the_nether'],
                weight: 20,
                fail_chance: 0.15,
                sample_background: 'minecraft:netherrack',
                id: 'mephitic_quarzite'
            },
            {
                ores: [
                    { chance: 0.75, output: { tag: 'forge:chunks/copper' } },
                    { chance: 0.25, output: { tag: 'forge:chunks/gold' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 30,
                fail_chance: 0.1,
                sample_background: 'minecraft:stone',
                id: 'auricupride'
            },
            {
                ores: [
                    { chance: 0.45, output: { item: 'minecraft:prismarine' } },
                    { chance: 0.05, output: { item: 'quark:elder_prismarine' } },
                    { chance: 0.25, output: { tag: 'forge:chunks/emerald' } },
                    { chance: 0.25, output: { tag: 'forge:gems/aquamarine' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 5,
                fail_chance: 0.2,
                sample_background: 'minecraft:stone',
                id: 'beryl'
            },
            {
                ores: [
                    { chance: 0.7, output: { tag: 'forge:chunks/coal' } },
                    { chance: 0.1, output: { tag: 'forge:dusts/sulfur' } },
                    { chance: 0.2, output: { tag: 'forge:chunks/bitumen' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 25,
                fail_chance: 0.05,
                sample_background: 'minecraft:stone',
                id: 'bituminous_coal'
            },
            {
                ores: [{ chance: 1.0, output: { tag: 'forge:chunks/tin' } }],
                dimensions: ['minecraft:overworld'],
                weight: 20,
                fail_chance: 0.05,
                sample_background: 'minecraft:stone',
                id: 'cassiterite'
            },
            {
                ores: [
                    { chance: 0.35, output: { tag: 'forge:chunks/iron' } },
                    { chance: 0.35, output: { tag: 'forge:chunks/copper' } },
                    { chance: 0.3, output: { tag: 'forge:dusts/sulfur' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 20,
                fail_chance: 0.05,
                sample_background: 'minecraft:stone',
                id: 'chalcopyrite'
            },
            {
                ores: [
                    { chance: 0.5, output: { tag: 'forge:chunks/redstone' } },
                    { chance: 0.4, output: { tag: 'forge:chunks/cinnabar' } },
                    { chance: 0.1, output: { tag: 'forge:dusts/sulfur' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 15,
                fail_chance: 0.1,
                sample_background: 'minecraft:stone',
                id: 'cinnabar'
            },
            {
                ores: [
                    { chance: 0.4, output: { tag: 'forge:chunks/lead' } },
                    { chance: 0.2, output: { tag: 'forge:chunks/silver' } },
                    { chance: 0.4, output: { tag: 'forge:dusts/sulfur' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 15,
                fail_chance: 0.05,
                sample_background: 'minecraft:stone',
                id: 'galena'
            },
            {
                ores: [
                    { chance: 0.3, output: { item: 'minecraft:granite' } },
                    { chance: 0.3, output: { item: 'minecraft:diorite' } },
                    { chance: 0.3, output: { item: 'minecraft:andesite' } },
                    { chance: 0.1, output: { item: 'minecraft:obsidian' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 25,
                fail_chance: 0.05,
                sample_background: 'minecraft:stone',
                id: 'igneous_rock'
            },
            {
                ores: [
                    { chance: 0.7, output: { tag: 'forge:chunks/aluminum' } },
                    { chance: 0.2, output: { tag: 'forge:chunks/iron' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 20,
                fail_chance: 0.05,
                sample_background: 'minecraft:stone',
                id: 'laterite'
            },
            {
                ores: [
                    { chance: 0.35, output: { tag: 'forge:chunks/iron' } },
                    { chance: 0.35, output: { tag: 'forge:chunks/nickel' } },
                    { chance: 0.3, output: { tag: 'forge:dusts/sulfur' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 25,
                fail_chance: 0.05,
                sample_background: 'quark:jasper',
                id: 'pentlandite'
            },
            {
                ores: [
                    { chance: 0.5, output: { item: 'minecraft:clay' } },
                    { chance: 0.3, output: { item: 'minecraft:sand' } },
                    { chance: 0.2, output: { item: 'minecraft:gravel' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 25,
                fail_chance: 0.05,
                sample_background: 'minecraft:clay',
                id: 'silt'
            },
            {
                ores: [
                    { chance: 0.7, output: { tag: 'forge:chunks/uranium' } },
                    { chance: 0.3, output: { tag: 'forge:chunks/lead' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 10,
                fail_chance: 0.15,
                sample_background: 'minecraft:stone',
                id: 'uraninite'
            },
            {
                ores: [
                    { chance: 0.7, output: { tag: 'forge:ores/thallasium' } },
                    { chance: 0.3, output: { tag: 'forge:ores/ender' } }
                ],
                dimensions: ['minecraft:end'],
                weight: 10,
                fail_chance: 0.15,
                sample_background: 'minecraft:end_stone',
                id: 'abyssalite'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:mineral_mix';
        const re = event.custom(recipe);
        if (recipe.id) {
            re.id(`immersiveengineering:mineral/${recipe.id}`);
        }
    });
});
