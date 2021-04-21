events.listen('recipes', (event) => {
    let data = {
        recipes: [
            {
                ores: [
                    { chance: 0.4, output: { item: 'minecraft:gravel' } },
                    { chance: 0.1, output: { item: 'byg:quartzite_sand' } },
                    { chance: 0.1, output: { item: 'alexsmobs:bone_serpent_tooth' } },
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
                sample_background: 'byg:raw_quartz_block',
                id: 'mephitic_quarzite'
            },
            {
                ores: [
                    { chance: 0.75, output: { tag: 'forge:chunks/copper' } },
                    { chance: 0.25, output: { tag: 'forge:chunks/gold' } }
                ],
                dimensions: ['minecraft:overworld', 'undergarden:undergarden'],
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
                sample_background: 'minecraft:prismarine',
                id: 'beryl'
            },
            {
                ores: [
                    { chance: 0.7, output: { tag: 'forge:chunks/coal' } },
                    { chance: 0.1, output: { tag: 'forge:dusts/sulfur' } },
                    { chance: 0.2, output: { tag: 'forge:chunks/bitumen' } }
                ],
                dimensions: ['minecraft:overworld', 'undergarden:undergarden'],
                weight: 25,
                fail_chance: 0.05,
                sample_background: 'minecraft:andesite',
                id: 'bituminous_coal'
            },
            {
                ores: [{ chance: 1.0, output: { tag: 'forge:chunks/tin' } }],
                dimensions: ['minecraft:overworld'],
                weight: 20,
                fail_chance: 0.05,
                sample_background: 'embellishcraft:larvikite',
                id: 'cassiterite'
            },
            {
                ores: [
                    { chance: 0.35, output: { tag: 'forge:chunks/iron' } },
                    { chance: 0.35, output: { tag: 'forge:chunks/copper' } },
                    { chance: 0.3, output: { tag: 'forge:dusts/sulfur' } }
                ],
                dimensions: ['minecraft:overworld', 'undergarden:undergarden'],
                weight: 20,
                fail_chance: 0.05,
                sample_background: 'quark:jasper',
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
                sample_background: 'minecraft:granite',
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
                sample_background: 'quark:slate',
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
                    { chance: 0.2, output: { item: 'botania:metamorphic_swamp_cobblestone' } },
                    { chance: 0.2, output: { item: 'botania:metamorphic_fungal_cobblestone' } },
                    { chance: 0.2, output: { item: 'botania:metamorphic_plains_cobblestone' } },
                    { chance: 0.2, output: { item: 'botania:metamorphic_forest_cobblestone' } },
                    { chance: 0.2, output: { item: 'botania:metamorphic_taiga_cobblestone' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 10,
                fail_chance: 0.05,
                sample_background: 'minecraft:stone',
                id: 'vivacious_metamorphic_rock'
            },
            {
                ores: [
                    { chance: 0.33, output: { item: 'botania:metamorphic_mesa_cobblestone' } },
                    { chance: 0.33, output: { item: 'botania:metamorphic_mountain_cobblestone' } },
                    { chance: 0.33, output: { item: 'botania:metamorphic_desert_cobblestone' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 10,
                fail_chance: 0.05,
                sample_background: 'minecraft:stone',
                id: 'arid_metamorphic_rock'
            },
            {
                ores: [
                    { chance: 0.1, output: { item: 'quark:red_crystal' } },
                    { chance: 0.1, output: { item: 'quark:orange_crystal' } },
                    { chance: 0.1, output: { item: 'quark:yellow_crystal' } },
                    { chance: 0.1, output: { item: 'quark:green_crystal' } },
                    { chance: 0.1, output: { item: 'quark:blue_crystal' } },
                    { chance: 0.1, output: { item: 'quark:indigo_crystal' } },
                    { chance: 0.1, output: { item: 'quark:violet_crystal' } },
                    { chance: 0.1, output: { item: 'quark:white_crystal' } },
                    { chance: 0.1, output: { item: 'quark:black_crystal' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 5,
                fail_chance: 0.05,
                sample_background: 'minecraft:stone',
                id: 'prismatic_corundum_cluster'
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
                sample_background: 'create:weathered_limestone',
                id: 'uraninite'
            },
            {
                ores: [
                    { chance: 0.5, output: { item: 'minecraft:bone_block' } },
                    { chance: 0.125, output: { item: 'alexsmobs:cachalot_whale_tooth' } },
                    { chance: 0.125, output: { item: 'alexsmobs:shark_tooth' } },
                    { chance: 0.125, output: { item: 'upgrade_aquatic:thrasher_tooth' } },
                    { chance: 0.125, output: { item: 'upgrade_aquatic:embedded_ammonite' } }
                ],
                dimensions: ['minecraft:overworld'],
                weight: 10,
                fail_chance: 0.15,
                sample_background: 'minecraft:smooth_sandstone',
                id: 'thymarian_fossil_bed'
            },
            {
                ores: [
                    { chance: 0.25, output: { item: 'minecraft:basalt' } },
                    { chance: 0.25, output: { tag: 'forge:chunks/diamond' } },
                    { chance: 0.25, output: { tag: 'forge:chunks/apatite' } }
                ],
                dimensions: ['minecraft:overworld', 'undergarden:undergarden'],
                weight: 5,
                fail_chance: 0.7,
                sample_background: 'minecraft:basalt',
                id: 'kimberlite'
            },
            {
                ores: [
                    { chance: 0.7, output: { tag: 'forge:ores/thallasium' } },
                    { chance: 0.3, output: { tag: 'forge:shards/ender' } }
                ],
                dimensions: ['minecraft:end'],
                weight: 15,
                fail_chance: 0.15,
                sample_background: 'minecraft:end_stone',
                id: 'abyssalite'
            },
            {
                ores: [
                    { chance: 0.7, output: { tag: 'forge:shards/aurora' } },
                    { chance: 0.3, output: { tag: 'forge:shards/amber' } }
                ],
                dimensions: ['minecraft:end'],
                weight: 15,
                fail_chance: 0.15,
                sample_background: 'betterendforge:flavolite',
                id: 'prismatic_xyloretinite'
            },
            {
                ores: [{ chance: 1.0, output: { tag: 'forge:ores/cloggrum' } }],
                dimensions: ['undergarden:undergarden'],
                weight: 20,
                fail_chance: 0.1,
                sample_background: 'undergarden:depthrock',
                id: 'cloggranite'
            },
            {
                ores: [{ chance: 1.0, output: { tag: 'forge:ores/froststeel' } }],
                dimensions: ['undergarden:undergarden'],
                weight: 15,
                fail_chance: 0.1,
                sample_background: 'undergarden:shiverstone',
                id: 'erythrite'
            },
            {
                ores: [{ chance: 1.0, output: { tag: 'forge:ores/utherium' } }],
                dimensions: ['undergarden:undergarden'],
                weight: 10,
                fail_chance: 0.1,
                sample_background: 'undergarden:depthrock',
                id: 'camlannite'
            },
            {
                ores: [{ chance: 1.0, output: { tag: 'forge:ores/regalium' } }],
                dimensions: ['undergarden:undergarden'],
                weight: 20,
                fail_chance: 0.1,
                sample_background: 'undergarden:depthrock',
                id: 'myrddinite'
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
