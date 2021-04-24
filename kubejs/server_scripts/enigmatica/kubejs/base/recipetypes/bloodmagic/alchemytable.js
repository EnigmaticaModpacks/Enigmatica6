events.listen('recipes', (event) => {
    data = {
        recipes: [
            {
                inputs: ['#forge:rods/blaze'],
                output: 'minecraft:blaze_powder',
                count: 4,
                syphon: 50,
                ticks: 20,
                orbLevel: 1
            },
            {
                inputs: ['#forge:rods/basalz'],
                output: 'thermal:basalz_powder',
                count: 4,
                syphon: 50,
                ticks: 20,
                orbLevel: 1
            },
            {
                inputs: ['#forge:rods/blizz'],
                output: 'thermal:blizz_powder',
                count: 4,
                syphon: 50,
                ticks: 20,
                orbLevel: 1
            },
            {
                inputs: ['#forge:rods/blitz'],
                output: 'thermal:blitz_powder',
                count: 4,
                syphon: 50,
                ticks: 20,
                orbLevel: 1
            },
            {
                inputs: ['minecraft:dirt', 'minecraft:bone_meal', '#forge:mushrooms'],
                output: 'minecraft:mycelium',
                count: 1,
                syphon: 200,
                ticks: 200,
                orbLevel: 1
            },
            {
                inputs: ['minecraft:dirt', 'minecraft:bone_meal', '#minecraft:leaves'],
                output: 'minecraft:podzol',
                count: 1,
                syphon: 200,
                ticks: 200,
                orbLevel: 1
            },
            {
                inputs: ['byg:quartzite_sand', 'byg:quartzite_sand', 'byg:quartzite_sand'],
                output: 'minecraft:quartz',
                count: 3,
                syphon: 50,
                ticks: 20,
                orbLevel: 0
            },
            {
                inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:bulbis_sprouts'],
                output: 'byg:bulbis_phycelium',
                count: 1,
                syphon: 200,
                ticks: 200,
                orbLevel: 1
            },
            {
                inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:imparius_vine'],
                output: 'byg:imparius_phylium',
                count: 1,
                syphon: 200,
                ticks: 200,
                orbLevel: 1
            },
            {
                inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:shulkren_moss_blanket'],
                output: 'byg:shulkren_phylium',
                count: 1,
                syphon: 200,
                ticks: 200,
                orbLevel: 1
            },
            {
                inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:nightshade_sprouts'],
                output: 'byg:nightshade_phylium',
                count: 1,
                syphon: 200,
                ticks: 200,
                orbLevel: 1
            },
            {
                inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:ivis_sprout'],
                output: 'byg:ivis_phylium',
                count: 1,
                syphon: 200,
                ticks: 200,
                orbLevel: 1
            },
            {
                inputs: ['byg:ether_soil', 'minecraft:bone_meal', 'byg:ether_foliage'],
                output: 'byg:ether_phylium',
                count: 1,
                syphon: 200,
                ticks: 200,
                orbLevel: 1
            },
            {
                inputs: ['minecraft:dirt', 'minecraft:bone_meal', 'byg:ether_foliage'],
                output: 'byg:ether_soil',
                count: 1,
                syphon: 200,
                ticks: 200,
                orbLevel: 1
            },
            {
                inputs: ['byg:ether_stone', 'minecraft:bone_meal', 'byg:vermilion_sculk_growth'],
                output: 'byg:vermilion_sculk',
                count: 1,
                syphon: 200,
                ticks: 200,
                orbLevel: 1
            },
            {
                inputs: ['minecraft:netherrack', 'minecraft:bone_meal', '#forge:mushrooms'],
                output: 'byg:mycelium_netherrack',
                count: 1,
                syphon: 200,
                ticks: 200,
                orbLevel: 1
            },
            {
                inputs: ['minecraft:end_stone', 'minecraft:bone_meal', '#forge:mushrooms'],
                output: 'betterendforge:end_mycelium',
                count: 1,
                syphon: 200,
                ticks: 200,
                orbLevel: 1
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.bloodmagic
            .alchemytable(Item.of(recipe.output, recipe.count), recipe.inputs)
            .syphon(recipe.syphon)
            .ticks(recipe.ticks)
            .upgradeLevel(recipe.orbLevel);
    });
});
