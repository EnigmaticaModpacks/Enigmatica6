onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                inputs: ['#forge:ores/nickel'],
                outputs: [
                    Item.of('emendatusenigmatica:nickel_ingot'),
                    Item.of('minecraft:iron_ingot').chance(0.1),
                    Item.of('thermal:rich_slag').chance(0.2)
                ]
            },
            {
                inputs: ['#forge:ores/aluminum'],
                outputs: [
                    Item.of('emendatusenigmatica:aluminum_ingot'),
                    Item.of('minecraft:iron_ingot').chance(0.1),
                    Item.of('thermal:rich_slag').chance(0.2)
                ]
            },
            {
                inputs: ['#forge:ores/uranium'],
                outputs: [
                    Item.of('emendatusenigmatica:uranium_ingot'),
                    Item.of('emendatusenigmatica:lead_ingot').chance(0.1),
                    Item.of('thermal:rich_slag').chance(0.2)
                ]
            },
            {
                inputs: ['#forge:ores/osmium'],
                outputs: [
                    Item.of('emendatusenigmatica:osmium_ingot'),
                    Item.of('emendatusenigmatica:tin_ingot').chance(0.1),
                    Item.of('thermal:rich_slag').chance(0.2)
                ]
            },
            {
                inputs: ['#forge:ores/zinc'],
                outputs: [
                    Item.of('emendatusenigmatica:zinc_ingot'),
                    Item.of('minecraft:gold_ingot').chance(0.1),
                    Item.of('thermal:rich_slag').chance(0.2)
                ]
            },
            {
                inputs: [Item.of('minecraft:netherite_scrap', 4), Item.of('minecraft:gold_ingot', 2)],
                outputs: ['minecraft:netherite_ingot']
            },
            {
                inputs: ['#forge:ingots/iron', '#forge:dusts/coal_coke'],
                outputs: ['emendatusenigmatica:steel_ingot']
            },
            {
                inputs: ['#forge:ingots/iron', '#forge:ingots/lead'],
                outputs: [Item.of('eidolon:pewter_ingot', 2)]
            },
            {
                inputs: ['#forge:ingots/iron', '#forge:dusts/ender'],
                outputs: [Item.of('betterendforge:terminite_ingot')]
            },
            {
                inputs: ['#forge:ingots/thallasium', '#forge:dusts/ender'],
                outputs: [Item.of('betterendforge:terminite_ingot')]
            },
            {
                inputs: ['#forge:ingots/netherite', 'betterendforge:terminite_ingot'],
                outputs: [Item.of('betterendforge:aeternium_ingot')]
            },
            {
                inputs: ['#forge:dusts/refined_obsidian', '#forge:ingots/osmium'],
                outputs: [Item.of('mekanism:ingot_refined_obsidian')]
            },
            {
                inputs: ['#forge:dusts/glowstone', '#forge:ingots/osmium'],
                outputs: [Item.of('mekanism:ingot_refined_glowstone')]
            },
            {
                inputs: ['byg:quartzite_sand'],
                outputs: [Item.of('minecraft:quartz'), Item.of('thermal:slag')]
            },
            {
                inputs: [Item.of('industrialforegoing:dryrubber', 2), '#forge:dusts/sulfur'],
                outputs: [Item.of('thermal:cured_rubber', 2)],
                id: 'thermal:machine/smelter/smelter_cured_rubber'
            },
            {
                inputs: ['#forge:glass', Ingredient.of('#forge:ingots/copper', 3)],
                outputs: [Item.of('tconstruct:tinkers_bronze_ingot', 3)],
                id: 'thermal:compat/tconstruct/smelter_alloy_tconstruct_tinkers_bronze_ingot'
            },
            {
                inputs: [
                    Ingredient.of('#forge:ingots/copper', 2),
                    Ingredient.of('#forge:ingots/cobalt', 1),
                    '#forge:obsidian'
                ],
                outputs: [Item.of('tconstruct:hepatizon_ingot', 4)],
                id: 'thermal:compat/tconstruct/smelter_alloy_tconstruct_hepatizon_ingot'
            },
            {
                inputs: [
                    Ingredient.of('#forge:ingots/gold', 1),
                    Ingredient.of('#forge:ingots/cobalt', 1),
                    'minecraft:magma_cream'
                ],
                outputs: [Item.of('tconstruct:queens_slime_ingot', 2)],
                id: 'thermal:compat/tconstruct/smelter_alloy_tconstruct_queens_slime_ingot'
            },
            {
                inputs: ['#forge:ingots/iron', 'tconstruct:blood_slime_ball', 'minecraft:clay_ball'],
                outputs: [Item.of('tconstruct:pig_iron_ingot', 2)],
                id: 'thermal:compat/tconstruct/smelter_alloy_tconstruct_pig_iron_ingot'
            },
            {
                inputs: ['#forge:ingots/iron', 'tconstruct:sky_slime_ball', 'tconstruct:seared_brick'],
                outputs: [Item.of('tconstruct:slimesteel_ingot', 2)],
                id: 'thermal:compat/tconstruct/smelter_alloy_tconstruct_slimesteel_ingot'
            },
            {
                inputs: [Ingredient.of('#forge:ingots/cobalt', 3), Ingredient.of('#forge:ingots/netherite_scrap', 1)],
                outputs: [Item.of('tconstruct:manyullyn_ingot', 4)],
                id: 'thermal:compat/tconstruct/smelter_alloy_tconstruct_manyullyn_ingot'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.recipes.thermal.smelter(recipe.outputs, recipe.inputs);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
