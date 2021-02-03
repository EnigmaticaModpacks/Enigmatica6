//priority: 900
events.listen('recipes', function (event) {
    buildWoodVariants.forEach(function (variant) {
        var modID = variant.logBlock.split(':')[0];
        var sawDust = 'emendatusenigmatica:wood_dust';

        immersiveengineering_sawing(event, variant, modID, sawDust);
        mekanism_sawing(event, variant, modID, sawDust);
        pedestal_sawing(event, variant, modID);
        thermal_sawing(event, variant, modID, sawDust);
    });
});

function immersiveengineering_sawing(event, variant, modID, sawDust) {
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
}

function mekanism_sawing(event, variant, modID, sawDust) {
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
}
function pedestal_sawing(event, variant, modID) {
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
}
function thermal_sawing(event, variant, modID, sawDust) {
    // mod blacklist
    if (modID == 'minecraft' || modID == 'byg') {
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
}
