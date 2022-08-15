onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/minecraft/smelting/';
    const recipes = [
        {
            input: 'kubejs:coke_brick_blend',
            output: 'kubejs:coke_brick',
            xp: 0.5,
            id: `${id_prefix}coke_brick`
        },
        {
            input: 'kubejs:blast_brick_blend',
            output: 'kubejs:blast_brick',
            xp: 0.5,
            id: `${id_prefix}blast_brick`
        },
        {
            input: 'kubejs:ground_meat',
            output: 'kubejs:meat_ingot',
            xp: 0.5,
            id: `${id_prefix}meat_ingot`
        }
    ];

    recipes.forEach((recipe) => {
        event.smelting(recipe.output, recipe.input).xp(recipe.xp).id(recipe.id);
    });
});
