events.listen('recipes', (event) => {
    data = {
        recipes: [
            {
                pattern: ['  L  ', 'RRQRR', ' CCC '],
                key: {
                    L: {
                        tag: 'forge:plates/lapis'
                    },
                    R: {
                        tag: 'forge:dusts/redstone'
                    },
                    Q: {
                        item: 'create:polished_rose_quartz'
                    },
                    C: {
                        tag: 'forge:nuggets/gold'
                    }
                },
                result: 'create:integrated_circuit'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting({
            type: 'create.mechanical_crafting',
            pattern: recipe.pattern,
            key: recipe.key,
            result: {
                item: recipe.result
            }
        });
    });
});
