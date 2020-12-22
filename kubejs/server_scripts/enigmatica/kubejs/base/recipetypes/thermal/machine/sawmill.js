events.listen('recipes', function (event) {
    buildWoodVariants.forEach((variant) => {
        var modID = variant.logBlock.split(':')[0];
        var sawDust = 'emendatusenigmatica:wood_dust';

        // mod blacklist
        if (modID == 'minecraft' || modID == 'byg' || modID == 'biomesoplenty') {
            return;
        }

        var data = {
            recipes: [
                {
                    input: variant.logBlock,
                    output: variant.plankBlock
                },
                {
                    input: variant.woodBlock,
                    output: variant.plankBlock
                },
                {
                    input: variant.logBlockStripped,
                    output: variant.plankBlock
                },
                {
                    input: variant.woodBlockStripped,
                    output: variant.plankBlock
                }
            ]
        };

        data.recipes.forEach((recipe) => {
            event.recipes.thermal
                .sawmill([item.of(recipe.output, 6), item.of(sawDust).chance(1.25)], recipe.input)
                .energy(1000);
        });
    });
});
