onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/tconstruct/melting/';
    const recipes = [
        /*
        {
            ingredient: { item: 'thermal:obsidian_glass' },
            result: { fluid: 'kubejs:molten_hardened_glass', amount: 1000 },
            temperature: 1400,
            time: 64,
            id: `${id_prefix}molten_hardened_glass`
        },
        */
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:melting';
        event.custom(recipe).id(recipe.id);
    });
});
