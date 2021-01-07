events.listen('recipes', function (event) {
    var data = {
        recipes: [
            {
                input: '#forge:ores/netherite',
                experience: 0.2,
                outputs: [item.of('minecraft:netherite_scrap', 2)]
            },
            {
                input: '#forge:ores/nickel',
                experience: 0.2,
                outputs: [
                    item.of('emendatusenigmatica:nickel_dust', 2),
                    item.of('emendatusenigmatica:iron_dust').chance(0.1),
                    item.of('minecraft:gravel').chance(0.2)
                ]
            },
            {
                input: '#forge:ores/aluminum',
                experience: 0.2,
                outputs: [
                    item.of('emendatusenigmatica:aluminum_dust', 2),
                    item.of('emendatusenigmatica:iron_dust').chance(0.1),
                    item.of('minecraft:gravel').chance(0.2)
                ]
            },
            {
                input: '#forge:ores/uranium',
                experience: 0.2,
                outputs: [
                    item.of('emendatusenigmatica:uranium_dust', 2),
                    item.of('emendatusenigmatica:lead_dust').chance(0.1),
                    item.of('minecraft:gravel').chance(0.2)
                ]
            },
            {
                input: '#forge:ores/osmium',
                experience: 0.2,
                outputs: [
                    item.of('emendatusenigmatica:osmium_dust', 2),
                    item.of('emendatusenigmatica:tin_dust').chance(0.1),
                    item.of('minecraft:gravel').chance(0.2)
                ]
            },
            {
                input: '#forge:ores/zinc',
                experience: 0.2,
                outputs: [
                    item.of('emendatusenigmatica:zinc_dust', 2),
                    item.of('emendatusenigmatica:gold_dust').chance(0.1),
                    item.of('minecraft:gravel').chance(0.2)
                ]
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.remove({
            input: recipe.input,
            mod: 'thermal',
            type: 'thermal:pulverizer'
        });
        event.recipes.thermal.pulverizer(recipe.outputs, recipe.input).experience(recipe.experience);
    });
});
