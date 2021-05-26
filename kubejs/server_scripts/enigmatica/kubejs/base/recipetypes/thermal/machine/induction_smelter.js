events.listen('recipes', (event) => {
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
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.thermal.smelter(recipe.outputs, recipe.inputs);
    });
});
