events.listen('recipes', function (event) {
    buildWoodVariants.forEach((variant) => {
        var modID = variant.logBlock.split(':')[0];

        // mod blacklist
        if (modID == 'minecraft' || modID == 'byg' || modID == 'biomesoplenty') {
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
            event.recipes.thermal.sawmill({
                type: 'thermal:sawmill',
                ingredient: {
                    item: recipe.input
                },
                result: [
                    {
                        item: recipe.output,
                        count: recipe.count
                    },
                    {
                        item: 'emendatusenigmatica:wood_dust',
                        chance: 1.25
                    }
                ],
                energy: 1000
            });
        });
    });
});
