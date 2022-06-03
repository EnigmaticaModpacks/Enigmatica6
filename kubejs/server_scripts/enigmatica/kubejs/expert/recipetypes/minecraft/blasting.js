onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/minecraft/blasting/';
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
        }
    ];
    recipes.forEach((recipe) => {
        event.blasting(recipe.output, recipe.input).xp(recipe.xp).id(recipe.id);
    });
});
