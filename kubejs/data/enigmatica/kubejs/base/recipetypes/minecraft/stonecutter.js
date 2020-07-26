events.listen('recipes', function (event) {
    vanillaWoodTypes.forEach(function (woodType) {
        var log = 'minecraft:' + woodType + '_logs';
        var wood_floor = 'carpetstairsmod:' + woodType + '_wood_floor';
        var planks = 'minecraft:' + woodType + '_planks';

        // Create Stonecutter recipes for both.
        event.recipes.minecraft.stonecutting({
            ingredient: {
                tag: log
            },
            result: wood_floor,
            count: 24
        });
        event.recipes.minecraft.stonecutting({
            ingredient: {
                item: planks
            },
            result: wood_floor,
            count: 6
        });
    });
});
