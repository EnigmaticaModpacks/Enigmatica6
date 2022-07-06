onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/tconstruct/alloy/';
    const recipes = [
        {
            inputs: [
                { tag: 'forge:pink_slime', amount: 250 },
                { tag: 'tconstruct:ender_slime', amount: 250 }
            ],
            result: { fluid: 'kubejs:pink_ender_slime', amount: 500 },
            temperature: 1500,
            id: `${id_prefix}pink_ender_slime`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:alloy';
        event.custom(recipe).id(recipe.id);
    });
});
