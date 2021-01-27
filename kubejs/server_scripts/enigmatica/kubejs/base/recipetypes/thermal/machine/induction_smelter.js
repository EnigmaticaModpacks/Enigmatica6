events.listen('recipes', function (event) {
    var data = {
        recipes: [
            {
                inputs: ['#forge:ores/nickel'],
                experience: 0.2,
                outputs: [
                    item.of('emendatusenigmatica:nickel_ingot'),
                    item.of('minecraft:iron_ingot').chance(0.1),
                    item.of('thermal:rich_slag').chance(0.2)
                ]
            },
            {
                inputs: ['#forge:ores/aluminum'],
                experience: 0.2,
                outputs: [
                    item.of('emendatusenigmatica:aluminum_ingot'),
                    item.of('minecraft:iron_ingot').chance(0.1),
                    item.of('thermal:rich_slag').chance(0.2)
                ]
            },
            {
                inputs: ['#forge:ores/uranium'],
                experience: 0.2,
                outputs: [
                    item.of('emendatusenigmatica:uranium_ingot'),
                    item.of('emendatusenigmatica:lead_ingot').chance(0.1),
                    item.of('thermal:rich_slag').chance(0.2)
                ]
            },
            {
                inputs: ['#forge:ores/osmium'],
                experience: 0.2,
                outputs: [
                    item.of('emendatusenigmatica:osmium_ingot'),
                    item.of('emendatusenigmatica:tin_ingot').chance(0.1),
                    item.of('thermal:rich_slag').chance(0.2)
                ]
            },
            {
                inputs: ['#forge:ores/zinc'],
                experience: 0.2,
                outputs: [
                    item.of('emendatusenigmatica:zinc_ingot'),
                    item.of('minecraft:gold_ingot').chance(0.1),
                    item.of('thermal:rich_slag').chance(0.2)
                ]
            },
            {
                inputs: [item.of('minecraft:netherite_scrap', 4), item.of('minecraft:gold_ingot', 2)],
                experience: 0.2,
                outputs: ['minecraft:netherite_ingot']
            },
            {
                inputs: ['#forge:ingots/iron', '#forge:dusts/coal_coke', 1],
                experience: 0.2,
                outputs: ['emendatusenigmatica:steel_ingot']
            },
            {
                inputs: ['#forge:ingots/iron', '#forge:ingots/lead'],
                experience: 0.2,
                outputs: [Item.of('eidolon:pewter_ingot', 2)]
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.thermal.smelter(recipe.outputs, recipe.inputs).experience(recipe.experience);
    });
});
