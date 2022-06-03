onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersiveengineering/blast_furnace';
    const recipes = [
        {
            output: 'kubejs:smoldering_lapis_lazuli_compound',
            input: 'kubejs:coarse_lapis_lazuli_compound',
            slag: 'thermal:slag',
            id: `${id_prefix}smoldering_lapis_lazuli_compound`
        },
        {
            output: 'industrialforegoing:plastic',
            input: 'industrialforegoing:dryrubber',
            slag: 'thermal:slag',
            id: 'industrialforegoing:plastic'
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.blast_furnace(recipe.output, recipe.input, recipe.slag).id(recipe.id);
    });
});
