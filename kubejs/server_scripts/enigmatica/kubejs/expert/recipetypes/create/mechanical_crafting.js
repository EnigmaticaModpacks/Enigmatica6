events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'astralsorcery:hand_telescope',
            pattern: [' A    ', 'ABA   ', ' ABC  ', '  CDC ', '   CCA', '    AB'],
            key: {
                A: '#forge:plates/brass',
                B: 'astralsorcery:glass_lens',
                C: 'botania:livingwood_planks',
                D: '#botania:runes/autumn'
            },
            id: 'astralsorcery:altar/hand_telescope'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
