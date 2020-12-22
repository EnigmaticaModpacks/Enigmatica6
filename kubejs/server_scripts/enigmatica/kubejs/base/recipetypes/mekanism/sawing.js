events.listen('recipes', function (event) {
    var sawDust = 'emendatusenigmatica:wood_dust';

    event.recipes.mekanism.sawing(item.of(sawDust), '#forge:rods/wooden');

    buildWoodVariants.forEach((variant) => {
        var modID = variant.logBlock.split(':')[0];

        if (modID == 'minecraft') {
            event.remove({
                output: variant.plankBlock,
                mod: 'mekanism',
                type: 'mekanism:sawing'
            });
        }

        if (variant.logBlock == 'byg:withering_oak_log') {
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
            event.recipes.mekanism.sawing(item.of(recipe.output, 6), recipe.input, item.of(sawDust).chance(0.25));
        });
    });
});
