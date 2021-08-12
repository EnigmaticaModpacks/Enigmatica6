onEvent('recipes', (event) => {
    data = {
        recipes: [
            {
                inputs: ['minecraft:gravel', 'minecraft:gravel', 'minecraft:gravel'],
                output: 'minecraft:flint',
                count: 3,
                syphon: 50,
                ticks: 20,
                orbLevel: 0,
                id: 'bloodmagic:alchemytable/flint_from_gravel'
            },
            {
                inputs: [
                    'minecraft:rotten_flesh',
                    'minecraft:rotten_flesh',
                    'minecraft:rotten_flesh',
                    'minecraft:rotten_flesh'
                ],
                output: 'minecraft:leather',
                count: 4,
                syphon: 100,
                ticks: 200,
                orbLevel: 1,
                id: 'bloodmagic:alchemytable/leather_from_flesh'
            },
            {
                inputs: ['#forge:crops/potato', '#forge:crops/potato', '#forge:crops/potato', 'minecraft:bone_meal'],
                output: 'bloodmagic:plantoil',
                count: 1,
                syphon: 100,
                ticks: 100,
                orbLevel: 1,
                id: 'bloodmagic:alchemytable/plantoil_from_taters'
            },
            {
                inputs: ['#forge:crops', '#forge:crops', '#forge:crops', 'minecraft:bone_meal'],
                output: 'bloodmagic:plantoil',
                count: 1,
                syphon: 100,
                ticks: 100,
                orbLevel: 1,
                id: 'bloodmagic:alchemytable/plantoil_from_wheat'
            },
            {
                inputs: ['minecraft:coal', 'minecraft:coal'],
                output: 'emendatusenigmatica:coal_dust',
                count: 2,
                syphon: 400,
                ticks: 200,
                orbLevel: 1,
                id: 'bloodmagic:alchemytable/sand_coal'
            },
            {
                inputs: ['#minecraft:wool'],
                output: 'minecraft:string',
                count: 4,
                syphon: 100,
                ticks: 100,
                orbLevel: 0,
                id: 'bloodmagic:alchemytable/string'
            },
            {
                inputs: ['#forge:sand', '#forge:sand', 'minecraft:water_bucket'],
                output: 'minecraft:clay',
                count: 2,
                syphon: 50,
                ticks: 100,
                orbLevel: 2,
                id: 'bloodmagic:alchemytable/clay_from_sand'
            },
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
                inputs: ['#forge:dusts/sulfur', 'industrialforegoing:dryrubber', 'industrialforegoing:dryrubber'],
                output: 'thermal:cured_rubber',
                count: 2,
                syphon: 400,
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
            },
            {
                inputs: ['minecraft:nether_wart_block'],
                output: 'minecraft:nether_wart',
                count: 4,
                syphon: 50,
                ticks: 40,
                orbLevel: 0,
                id: 'bloodmagic:alchemytable/nether_wart_from_block'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.bloodmagic
            .alchemytable(Item.of(recipe.output, recipe.count), recipe.inputs)
            .syphon(recipe.syphon)
            .ticks(recipe.ticks)
            .upgradeLevel(recipe.orbLevel);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
