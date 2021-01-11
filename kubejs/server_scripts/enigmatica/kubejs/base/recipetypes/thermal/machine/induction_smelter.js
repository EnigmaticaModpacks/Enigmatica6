events.listen('recipes', function (event) {
    var data = {
        recipes: [
            {
                input: '#forge:ores/nickel',
                experience: 0.2,
                outputs: [
                    item.of('emendatusenigmatica:nickel_ingot'),
                    item.of('minecraft:iron_ingot').chance(0.1),
                    item.of('thermal:rich_slag').chance(0.2)
                ]
            },
            {
                input: '#forge:ores/aluminum',
                experience: 0.2,
                outputs: [
                    item.of('emendatusenigmatica:aluminum_ingot'),
                    item.of('minecraft:iron_ingot').chance(0.1),
                    item.of('thermal:rich_slag').chance(0.2)
                ]
            },
            {
                input: '#forge:ores/uranium',
                experience: 0.2,
                outputs: [
                    item.of('emendatusenigmatica:uranium_ingot'),
                    item.of('emendatusenigmatica:lead_ingot').chance(0.1),
                    item.of('thermal:rich_slag').chance(0.2)
                ]
            },
            {
                input: '#forge:ores/osmium',
                experience: 0.2,
                outputs: [
                    item.of('emendatusenigmatica:osmium_ingot'),
                    item.of('emendatusenigmatica:tin_ingot').chance(0.1),
                    item.of('thermal:rich_slag').chance(0.2)
                ]
            },
            {
                input: '#forge:ores/zinc',
                experience: 0.2,
                outputs: [
                    item.of('emendatusenigmatica:zinc_ingot'),
                    item.of('minecraft:gold_ingot').chance(0.1),
                    item.of('thermal:rich_slag').chance(0.2)
                ]
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.remove({
            input: recipe.input,
            type: 'thermal:smelter'
        });
        event.recipes.thermal.smelter(recipe.outputs, recipe.input).experience(recipe.experience);
    });

    event.recipes.thermal
        .smelter('minecraft:netherite_ingot', [
            item.of('minecraft:netherite_scrap', 4),
            item.of('minecraft:gold_ingot', 2)
        ])
        .experience(recipe.experience);
});
