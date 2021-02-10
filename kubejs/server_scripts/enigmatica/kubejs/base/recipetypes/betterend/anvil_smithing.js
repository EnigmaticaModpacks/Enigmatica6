events.listen('recipes', (event) => {
    const data = {
        recipes: [
            {
                id: 'betterendforge:ender_shard_to_dust',
                input: {
                    item: 'betterendforge:ender_shard'
                },
                result: 'emendatusenigmatica:ender_dust',
                level: 2,
                damage: 3
            },
            {
                id: 'betterendforge:ender_pearl_to_dust',
                input: {
                    item: 'minecraft:ender_pearl'
                },
                result: 'emendatusenigmatica:ender_dust',
                level: 4,
                damage: 5
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'betterendforge:anvil_smithing',
            input: recipe.input,
            result: recipe.result,
            level: recipe.level,
            damage: recipe.damage
        }).id(recipe.id);
    });
});
