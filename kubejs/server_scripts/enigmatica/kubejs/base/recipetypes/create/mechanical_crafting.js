events.listen('recipes', (event) => {
    data = {
        recipes: [
            {
                pattern: ['  L  ', 'RRQRR', ' CCC '],
                key: {
                    L: {
                        item: 'create:lapis_sheet'
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
            pattern: recipe.pattern,
            key: recipe.key,
            result: {
                item: recipe.result
            }
        });
    });
});
