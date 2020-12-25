events.listen('recipes', function (event) {
    buildWoodVariants.forEach((variant) => {
        var modID = variant.logBlock.split(':')[0];
        var sawDust = 'emendatusenigmatica:wood_dust';

        // mod blacklist
        if (modID == 'minecraft') {
            return;
        }

        event.recipes.immersiveengineering
            .sawmill(item.of(variant.plankBlock, 6), variant.logBlockStripped, [
                {
                    stripping: false,
                    output: sawDust
                }
            ])
            .energy(800);

        event.recipes.immersiveengineering
            .sawmill(
                item.of(variant.plankBlock, 6),
                [variant.logBlock, variant.woodBlock],
                [
                    {
                        stripping: true,
                        output: sawDust
                    },
                    {
                        stripping: false,
                        output: sawDust
                    }
                ],
                variant.logBlockStripped
            )
            .energy(1600);
    });
});
