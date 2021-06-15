function blockTransmutationRecipe(input, output, starlight) {
    return {
        type: 'astralsorcery:block_transmutation',
        input: [{ block: input, display: { item: input, count: 1 } }],
        output: { block: output },
        display: { item: output, count: 1 },
        starlight: starlight
    };
}

onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            input: 'eidolon:worktable',
            output: 'astralsorcery:altar_discovery',
            starlight: 60,
            id: 'astralsorcery:block_transmutation/craftingtable_altar'
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.input.charAt(0) == '#') {
            Ingredient.of(recipe.input).stacks.forEach((input) => {
                if (!input.id.includes('chunk')) {
                    const re = event.custom(blockTransmutationRecipe(input.id, recipe.output, recipe.starlight));
                }
            });
        } else {
            const re = event.custom(blockTransmutationRecipe(recipe.input, recipe.output, recipe.starlight));
            if (recipe.id) {
                re.id(recipe.id);
            }
        }
    });
});
