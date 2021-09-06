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
        },
        {
            input: 'kubejs:firmament',
            output: 'astralsorcery:starmetal_ore',
            starlight: 100,
            id: 'astralsorcery:block_transmutation/iron_starmetal'
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'astralsorcery:block_transmutation',
                input: { block: recipe.input },
                output: { block: recipe.output },
                starlight: recipe.starlight
            })
            .id(recipe.id);
    });
});
