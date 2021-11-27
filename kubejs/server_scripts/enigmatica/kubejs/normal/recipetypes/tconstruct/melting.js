onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:base/tconstruct/melting/';
    const recipes = [
        {
            ingredient: { item: 'thermal:obsidian_glass' },
            result: { fluid: 'kubejs:molten_hardened_glass', amount: 1000 },
            temperature: 1400,
            time: 64,
            id: `${id_prefix}molten_hardened_glass`
        },
        {
            ingredient: { item: 'thermal:signalum_glass' },
            result: { fluid: 'kubejs:molten_signalum_glass', amount: 1000 },
            temperature: 1400,
            time: 64,
            id: `${id_prefix}molten_signalum_glass`
        },
        {
            ingredient: { item: 'thermal:lumium_glass' },
            result: { fluid: 'kubejs:molten_lumium_glass', amount: 1000 },
            temperature: 1400,
            time: 64,
            id: `${id_prefix}molten_lumium_glass`
        },
        {
            ingredient: { item: 'thermal:enderium_glass' },
            result: { fluid: 'kubejs:molten_enderium_glass', amount: 1000 },
            temperature: 1400,
            time: 64,
            id: `${id_prefix}molten_enderium_glass`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:melting';
        event.custom(recipe).id(recipe.id);
    });
});
