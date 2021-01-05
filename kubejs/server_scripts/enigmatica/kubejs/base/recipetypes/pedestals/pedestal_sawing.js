events.listen('recipes', (event) => {
    buildWoodVariants.forEach((variant) => {
        var modID = variant.logBlock.split(':')[0];

        // mod blacklist
        if (modID == 'minecraft') {
            return;
        }

        var data = {
            recipes: [
                {
                    input: variant.logBlock,
                    output: variant.plankBlock,
                    count: 6
                },
                {
                    input: variant.woodBlock,
                    output: variant.plankBlock,
                    count: 6
                },
                {
                    input: variant.logBlockStripped,
                    output: variant.plankBlock,
                    count: 6
                },
                {
                    input: variant.woodBlockStripped,
                    output: variant.plankBlock,
                    count: 6
                }
            ]
        };

        data.recipes.forEach((recipe) => {
            event.recipes.pedestals.pedestal_sawing({
                type: 'pedestals:pedestal_sawing',
                ingredient: {
                    item: recipe.input
                },
                result: {
                    item: recipe.output,
                    count: recipe.count
                }
            });
        });
    });
});
