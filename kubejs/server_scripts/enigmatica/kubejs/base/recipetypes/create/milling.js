events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'thermal:blizz_rod',
                outputs: [Item.of('thermal:blizz_powder', 3), Item.of('minecraft:snowball', 1).withChance(0.25)],
                processingTime: 30
            },
            {
                input: 'thermal:blitz_rod',
                outputs: [
                    Item.of('thermal:blitz_powder', 3),
                    Item.of('emendatusenigmatica:potassium_nitrate_gem', 1).withChance(0.25)
                ],
                processingTime: 30
            },
            {
                input: 'thermal:basalz_rod',
                outputs: [Item.of('thermal:basalz_powder', 3), Item.of('thermal:slag', 1).withChance(0.25)],
                processingTime: 30
            },
            {
                input: 'byg:pink_sandstone',
                outputs: [Item.of('byg:pink_sand')],
                processingTime: 150
            },
            {
                input: 'byg:purple_sandstone',
                outputs: [Item.of('byg:purple_sand')],
                processingTime: 150
            },
            {
                input: 'byg:blue_sandstone',
                outputs: [Item.of('byg:blue_sand')],
                processingTime: 150
            },
            {
                input: 'byg:white_sandstone',
                outputs: [Item.of('byg:white_sand')],
                processingTime: 150
            },
            {
                input: 'byg:black_sandstone',
                outputs: [Item.of('byg:black_sand')],
                processingTime: 150
            },
            {
                input: 'atmospheric:arid_sandstone',
                outputs: [Item.of('atmospheric:arid_sand')],
                processingTime: 150
            },
            {
                input: 'atmospheric:red_arid_sandstone',
                outputs: [Item.of('atmospheric:red_arid_sand')],
                processingTime: 150
            },
            {
                input: '#forge:end_stones',
                outputs: [Item.of('occultism:crushed_end_stone', 4)],
                processingTime: 150
            },
            {
                input: 'byg:quartzite_sand',
                outputs: ['minecraft:quartz'],
                processingTime: 50
            },
            {
                input: 'minecraft:ancient_debris',
                outputs: ['minecraft:netherite_scrap', Item.of('minecraft:ancient_debris', 1).withChance(0.66)],
                processingTime: 200
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.create.milling(recipe.outputs, recipe.input).processingTime(recipe.processingTime);
    });
});
