events.listen('recipes', (event) => {
    event.recipes.thermal.centrifuge(
        [
            Item.of('minecraft:gravel').withChance(0.75),
            Item.of('emendatusenigmatica:bitumen_gem').withChance(1.5),
            Item.of('thermal:tar').withCount(1),
            fluid.of('pneumaticcraft:oil', 100)
        ],
        '#forge:ores/bitumen'
    );
});
