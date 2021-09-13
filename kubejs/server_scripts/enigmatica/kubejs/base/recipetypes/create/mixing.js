onEvent('recipes', (event) => {
    var data = {
        recipes_unheated: [
            {
                inputs: ['#minecraft:planks', '#minecraft:planks', Fluid.of('immersiveengineering:creosote', 250)],
                output: Item.of('immersiveengineering:treated_wood_horizontal', 2)
            },
            {
                inputs: [
                    '#forge:clay',
                    '#forge:gravel',
                    '#forge:slag',
                    '#forge:slag',
                    Fluid.of('minecraft:water', 4000)
                ],
                output: Fluid.of('immersiveengineering:concrete', 4000)
            },
            {
                inputs: [
                    '#forge:gems/bitumen',
                    '#forge:gravel',
                    '#forge:sand',
                    '#forge:sand',
                    Fluid.of('minecraft:water', 500)
                ],
                output: Item.of('immersivepetroleum:asphalt', 12)
            },
            {
                inputs: [
                    '#forge:gems/bitumen',
                    '#forge:gravel',
                    '#forge:slag',
                    '#forge:slag',
                    Fluid.of('minecraft:water', 500)
                ],
                output: Item.of('immersivepetroleum:asphalt', 16)
            },
            {
                inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:bulbis_sprouts'],
                output: Item.of('byg:bulbis_phycelium')
            },
            {
                inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:imparius_vine'],
                output: Item.of('byg:imparius_phylium')
            },
            {
                inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:shulkren_moss_blanket'],
                output: Item.of('byg:shulkren_phylium')
            },
            {
                inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:nightshade_sprouts'],
                output: Item.of('byg:nightshade_phylium')
            },
            {
                inputs: ['minecraft:end_stone', 'minecraft:bone_meal', 'byg:ivis_sprout'],
                output: Item.of('byg:ivis_phylium')
            },
            {
                inputs: ['byg:ether_soil', 'minecraft:bone_meal', 'byg:ether_foliage'],
                output: Item.of('byg:ether_phylium')
            },
            {
                inputs: ['minecraft:dirt', 'minecraft:bone_meal', 'byg:ether_foliage'],
                output: Item.of('byg:ether_soil')
            },
            {
                inputs: ['byg:ether_stone', 'minecraft:bone_meal', 'byg:vermilion_sculk_growth'],
                output: Item.of('byg:vermilion_sculk')
            }
        ],
        recipes_heated: [
            {
                inputs: [Fluid.of('thermal:sap', 500)],
                output: Fluid.of('thermal:syrup', 25)
            },
            {
                inputs: [
                    '#create:crushed_ores/copper',
                    '#create:crushed_ores/copper',
                    '#create:crushed_ores/copper',
                    '#create:crushed_ores/tin'
                ],
                output: Item.of('emendatusenigmatica:bronze_crushed', 4)
            },
            {
                inputs: ['#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/tin'],
                output: Item.of('emendatusenigmatica:bronze_ingot', 4)
            },
            {
                inputs: ['#create:crushed_ores/copper', '#create:crushed_ores/nickel'],
                output: Item.of('emendatusenigmatica:constantan_crushed', 2)
            },
            {
                inputs: ['#forge:ingots/copper', '#forge:ingots/nickel'],
                output: Item.of('emendatusenigmatica:constantan_ingot', 2)
            },
            {
                inputs: ['#create:crushed_ores/gold', '#create:crushed_ores/silver'],
                output: Item.of('emendatusenigmatica:electrum_crushed', 2)
            },
            {
                inputs: ['#forge:ingots/gold', '#forge:ingots/silver'],
                output: Item.of('emendatusenigmatica:electrum_ingot', 2)
            },
            {
                inputs: ['#create:crushed_ores/iron', '#create:crushed_ores/iron', '#create:crushed_ores/nickel'],
                output: Item.of('emendatusenigmatica:invar_crushed', 3)
            },
            {
                inputs: ['#forge:ingots/iron', '#forge:ingots/iron', '#forge:ingots/nickel'],
                output: Item.of('emendatusenigmatica:invar_ingot', 3)
            },
            {
                inputs: ['#forge:ingots/iron', '#forge:ingots/lead'],
                output: Item.of('eidolon:pewter_ingot', 2)
            },
            {
                inputs: ['#forge:ingots/iron', '#forge:dusts/ender'],
                output: Item.of('betterendforge:terminite_ingot', 1)
            },
            {
                inputs: ['#forge:ingots/thallasium', '#forge:dusts/ender'],
                output: Item.of('betterendforge:terminite_ingot', 1)
            },
            {
                inputs: ['#forge:ingots/iron', 'tconstruct:blood_slime_ball', 'minecraft:clay_ball'],
                output: Item.of('tconstruct:pig_iron_ingot', 2)
            },
            {
                inputs: ['#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/gold'],
                output: Item.of('tconstruct:rose_gold_ingot', 4)
            },
            {
                inputs: ['#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/copper', '#forge:glass'],
                output: Item.of('tconstruct:tinkers_bronze_ingot', 4)
            },
            {
                inputs: ['#forge:ingots/iron', 'tconstruct:sky_slime_ball', 'tconstruct:seared_brick'],
                output: Item.of('tconstruct:slimesteel_ingot', 2)
            }
        ],
        recipes_superheated: [
            {
                inputs: [
                    '#forge:dusts/coal_coke',
                    '#create:crushed_ores/iron',
                    '#create:crushed_ores/iron',
                    '#create:crushed_ores/iron',
                    '#create:crushed_ores/iron'
                ],
                output: Item.of('emendatusenigmatica:steel_crushed', 4)
            },
            {
                inputs: [
                    '#forge:dusts/coal_coke',
                    '#forge:ingots/iron',
                    '#forge:ingots/iron',
                    '#forge:ingots/iron',
                    '#forge:ingots/iron'
                ],
                output: Item.of('emendatusenigmatica:steel_ingot', 4)
            },
            {
                inputs: [
                    '#create:crushed_ores/copper',
                    '#create:crushed_ores/copper',
                    '#create:crushed_ores/copper',
                    '#create:crushed_ores/silver',
                    '#forge:dusts/redstone',
                    '#forge:dusts/redstone',
                    '#forge:dusts/redstone',
                    '#forge:dusts/redstone'
                ],
                output: Item.of('emendatusenigmatica:signalum_crushed', 4)
            },
            {
                inputs: [
                    '#forge:ingots/copper',
                    '#forge:ingots/copper',
                    '#forge:ingots/copper',
                    '#forge:ingots/silver',
                    '#forge:dusts/redstone',
                    '#forge:dusts/redstone',
                    '#forge:dusts/redstone',
                    '#forge:dusts/redstone'
                ],
                output: Item.of('emendatusenigmatica:signalum_ingot', 4)
            },
            {
                inputs: [
                    '#create:crushed_ores/tin',
                    '#create:crushed_ores/tin',
                    '#create:crushed_ores/tin',
                    '#create:crushed_ores/silver',
                    '#forge:dusts/glowstone',
                    '#forge:dusts/glowstone'
                ],
                output: Item.of('emendatusenigmatica:lumium_crushed', 4)
            },
            {
                inputs: [
                    '#forge:ingots/tin',
                    '#forge:ingots/tin',
                    '#forge:ingots/tin',
                    '#forge:ingots/silver',
                    '#forge:dusts/glowstone',
                    '#forge:dusts/glowstone'
                ],
                output: Item.of('emendatusenigmatica:lumium_ingot', 4)
            },
            {
                inputs: [
                    '#create:crushed_ores/lead',
                    '#create:crushed_ores/lead',
                    '#create:crushed_ores/lead',
                    '#forge:dusts/diamond',
                    '#forge:ender_pearls',
                    '#forge:ender_pearls'
                ],
                output: Item.of('emendatusenigmatica:enderium_crushed', 2)
            },
            {
                inputs: [
                    '#forge:ingots/lead',
                    '#forge:ingots/lead',
                    '#forge:ingots/lead',
                    '#forge:dusts/diamond',
                    '#forge:ender_pearls',
                    '#forge:ender_pearls'
                ],
                output: Item.of('emendatusenigmatica:enderium_ingot', 2)
            },
            {
                inputs: ['#forge:ingots/netherite', 'betterendforge:terminite_ingot'],
                output: Item.of('betterendforge:aeternium_ingot', 1)
            },
            {
                inputs: ['#forge:ingots/copper', '#forge:ingots/copper', '#forge:ingots/cobalt', '#forge:obsidian'],
                output: Item.of('tconstruct:hepatizon_ingot', 4)
            },
            {
                inputs: [
                    '#forge:ingots/cobalt',
                    '#forge:ingots/cobalt',
                    '#forge:ingots/cobalt',
                    '#forge:ingots/netherite_scrap'
                ],
                output: Item.of('tconstruct:manyullyn_ingot', 4)
            },
            {
                inputs: ['#forge:ingots/gold', '#forge:ingots/cobalt', 'minecraft:magma_cream'],
                output: Item.of('tconstruct:queens_slime_ingot', 2)
            }
        ]
    };

    data.recipes_unheated.forEach((recipe) => {
        event.recipes.create.mixing(recipe.output, recipe.inputs);
    });
    data.recipes_heated.forEach((recipe) => {
        event.recipes.create.mixing(recipe.output, recipe.inputs).heated();
    });
    data.recipes_superheated.forEach((recipe) => {
        event.recipes.create.mixing(recipe.output, recipe.inputs).superheated();
    });
});
