onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/tconstruct/melting/';
    const recipes = [
        {
            ingredient: { item: 'occultism:iesnium_pickaxe' },
            result: { fluid: 'materialis:molten_iesnium', amount: 144 * 9 },
            temperature: 1090,
            time: 64 * 9,
            id: `materialis:smeltery/melting/metal/tools/iesnium/iesnium_pickaxe`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:melting';
        event.custom(recipe).id(recipe.id);
    });
});
