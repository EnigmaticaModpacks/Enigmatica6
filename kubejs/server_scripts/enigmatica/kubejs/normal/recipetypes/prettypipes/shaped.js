onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            output: Item.of('prettypipes:pipe', 12),
            pattern: ['ABA'],
            key: {
                A: '#forge:ingots/tin',
                B: '#forge:glass/colorless'
            },
            id: 'prettypipes:pipe'
        },
        {
            output: Item.of('ppfluids:fluid_pipe', 12),
            pattern: [' C ', 'ABA', ' C '],
            key: {
                A: '#forge:ingots/tin',
                B: '#forge:glass/colorless',
                C: 'thermal:cured_rubber'
            },
            id: 'ppfluids:fluid_pipe'
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
