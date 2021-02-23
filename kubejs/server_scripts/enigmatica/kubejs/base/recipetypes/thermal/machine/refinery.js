events.listen('recipes', (event) => {
    event.recipes.thermal.refinery(
        [
            Item.of('emendatusenigmatica:bitumen_gem').chance(0.1),
            fluid.of('thermal:heavy_oil', 40),
            fluid.of('thermal:light_oil', 60)
        ],
        fluid.of('pneumaticcraft:oil', 100)
    );
});
