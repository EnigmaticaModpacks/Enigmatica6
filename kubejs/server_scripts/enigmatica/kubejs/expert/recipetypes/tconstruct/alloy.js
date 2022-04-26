onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefex = 'enigmatica:expert/tconstruct/alloy/';
    const recipes = [
        {
            type: 'tconstruct:alloy',
            inputs: [
                {
                    tag: 'forge:pink_slime',
                    amount: 250
                },
                {
                    tag: 'tconstruct:ender_slime',
                    amount: 250
                }
            ],
            result: {
                fluid: 'kubejs:pink_ender_slime',
                amount: 500
            },
            temperature: 1500,
            id: `${id_prefex}pink_ender_slime`
        }
    ];

    recipes.forEach((recipe) => {
        event.custom(recipe).id(recipe.id);
    });
});
