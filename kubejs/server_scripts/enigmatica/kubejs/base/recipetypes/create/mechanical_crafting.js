events.listen('recipes', (event) => {
    const data = {
        recipes: [
            {
                pattern: ['  L  ', 'RRQRR', ' CCC '],
                key: {
                    L: '#forge:plates/lapis',
                    R: '#forge:dusts/redstone',
                    Q: 'create:polished_rose_quartz',
                    C: '#forge:nuggets/gold'
                },
                result: 'create:integrated_circuit'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.result, recipe.pattern, recipe.key);
    });
});
