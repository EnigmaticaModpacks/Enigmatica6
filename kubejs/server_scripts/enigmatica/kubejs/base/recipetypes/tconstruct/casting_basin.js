onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/tconstruct/casting_basin/';
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
            fluid: { name: 'thermal:redstone', amount: 1296 },
            result: Item.of('minecraft:redstone_block').toJson(),
            cooling_time: 200,
            id: `${id_prefix}redstone_block`
        },
        {
            fluid: { name: 'kubejs:molten_hardened_glass', amount: 1000 },
            result: Item.of('thermal:obsidian_glass').toJson(),
            cooling_time: 300,
            id: `${id_prefix}obsidian_glass`
        },
        {
            fluid: { name: 'kubejs:molten_signalum_glass', amount: 1000 },
            result: Item.of('thermal:signalum_glass').toJson(),
            cooling_time: 300,
            id: `${id_prefix}signalum_glass`
        },
        {
            fluid: { name: 'kubejs:molten_lumium_glass', amount: 1000 },
            result: Item.of('thermal:lumium_glass').toJson(),
            cooling_time: 300,
            id: `${id_prefix}lumium_glass`
        },
        {
            fluid: { name: 'kubejs:molten_enderium_glass', amount: 1000 },
            result: Item.of('thermal:enderium_glass').toJson(),
            cooling_time: 300,
            id: `${id_prefix}enderium_glass`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:casting_basin';
        event.custom(recipe).id(recipe.id);
    });
});
