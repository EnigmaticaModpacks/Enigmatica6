events.listen('recipes', (event) => {
    data = {
        recipes: [
            {
                result: 'minecraft:granite',
                weight: 2000
            },
            {
                result: 'minecraft:diorite',
                weight: 2000
            },
            {
                result: 'minecraft:stone',
                weight: 2000
            },
            {
                result: 'minecraft:andesite',
                weight: 2000
            },
            {
                result: 'minecraft:mossy_cobblestone',
                weight: 200
            },
            {
                result: 'minecraft:mossy_stone_bricks',
                weight: 200
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'occultism:miner',
            ingredient: {
                tag: 'occultism:miners/basic_resources'
            },
            result: {
                item: recipe.result
            },
            weight: recipe.weight
        });
    });
});
