onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                outputs: [
                    Item.of('emendatusenigmatica:bitumen_gem').chance(0.1),
                    fluid.of('thermal:heavy_oil', 40),
                    fluid.of('thermal:light_oil', 60)
                ],
                input: fluid.of('pneumaticcraft:oil', 100)
            },
            {
                outputs: [Item.of('minecraft:sugar', 2)],
                input: fluid.of('thermal:syrup', 25)
            },
            {
                outputs: [Item.of('industrialforegoing:dryrubber', 1)],
                input: fluid.of('industrialforegoing:latex', 900)
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.thermal.refinery(recipe.outputs, recipe.input);
    });
});
