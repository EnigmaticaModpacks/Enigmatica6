onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/tconstruct/casting_basin/';
    const recipes = [
        /*
        {
            fluid: { name: 'kubejs:molten_hardened_glass', amount: 1000 },
            result: Item.of('thermal:obsidian_glass').toJson(),
            cooling_time: 300,
            id: `${id_prefix}obsidian_glass`
        }
        */
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:casting_basin';
        event.custom(recipe).id(recipe.id);
    });
});
