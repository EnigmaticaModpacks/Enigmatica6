onEvent('recipes', (event) => {
    const recipes = [
        /*
        {
            "fluid": {
                "tag": "tconstruct:molten_diamond",
                "amount": 1296
            },
            "result": "minecraft:diamond_block",
            "cooling_time": 237
        }
        */
        {
            fluid: {
                name: 'emendatusenigmatica:molten_redstone',
                amount: 1296
            },
            result: Item.of('minecraft:redstone_block').toJson(),
            cooling_time: 200
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'tconstruct:casting_basin',
                fluid: recipe.fluid,
                result: recipe.result,
                cooling_time: recipe.cooling_time
            })
            .id(recipe.id);
    });
});
