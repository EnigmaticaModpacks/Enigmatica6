events.listen('recipes', function (event) {
    global.woodVariants.forEach((variant) => {
        var modID = variant.logBlock.split(':')[0];

        // mod blacklist
        if (modID == 'minecraft') {
            return;
        }

        if (variant.logBlock == 'byg:withering_oak_log') {
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
            event.recipes.mekanism.sawing({
                type: 'mekanism:sawing',
                input: {
                    ingredient: {
                        item: recipe.input
                    }
                },
                mainOutput: {
                    item: recipe.output,
                    count: recipe.count
                },
                secondaryOutput: {
                    item: 'emendatusenigmatica:wood_dust'
                },
                secondaryChance: 0.25
            });
        });
    });
});
