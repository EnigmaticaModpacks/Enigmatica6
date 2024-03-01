//priority: 900
onEvent('recipes', (event) => {
    buildWoodVariants.forEach((variant) => {
        var sawDust = 'emendatusenigmatica:wood_dust',
            treeBark = 'farmersdelight:tree_bark';

        create_cutting(variant, sawDust, treeBark);
        immersiveengineering_sawing(variant, sawDust, treeBark);
        mekanism_sawing(variant, sawDust);
        pedestal_sawing(variant);
        thermal_sawing(variant, sawDust);
    });

    function create_cutting(variant, sawDust, treeBark) {
        data = {
            recipes: [
                {
                    input: variant.logBlock,
                    output: variant.logBlockStripped,
                    secondaryOutput: treeBark,
                    count: 1,
                    time: 50
                },
                {
                    input: variant.woodBlock,
                    output: variant.woodBlockStripped,
                    secondaryOutput: treeBark,
                    count: 1,
                    time: 50
                },
                {
                    input: variant.logBlockStripped,
                    output: variant.plankBlock,
                    secondaryOutput: sawDust,
                    count: 6,
                    time: 100
                },
                {
                    input: variant.woodBlockStripped,
                    output: variant.plankBlock,
                    secondaryOutput: sawDust,
                    count: 6,
                    time: 100
                }
            ]
        };

        data.recipes.forEach((recipe) => {
            const builder = event.recipes.create
                .cutting([Item.of(recipe.output, recipe.count), Item.of(recipe.secondaryOutput, 1)], recipe.input)
                .processingTime(recipe.time);
            fallback_id(builder, `enigmatica:base/unification/unify_sawables/${arguments.callee.name}/`);
        });
    }

    function immersiveengineering_sawing(variant, sawDust, treeBark) {
        fallback_id(
            event.recipes.immersiveengineering
                .sawmill(Item.of(variant.plankBlock, 6), variant.logBlockStripped, [
                    {
                        stripping: false,
                        output: sawDust
                    }
                ])
                .energy(800),
            `enigmatica:base/unification/unify_sawables/${arguments.callee.name}/`
        );

        fallback_id(
            event.recipes.immersiveengineering
                .sawmill(
                    Item.of(variant.plankBlock, 6),
                    [variant.logBlock, variant.woodBlock],
                    [
                        {
                            stripping: true,
                            output: treeBark
                        },
                        {
                            stripping: false,
                            output: sawDust
                        }
                    ],
                    variant.logBlockStripped
                )
                .energy(1600),
            `enigmatica:base/unification/unify_sawables/${arguments.callee.name}/`
        );
    }

    function mekanism_sawing(variant, sawDust) {
        if (variant.modId == 'minecraft') {
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
            fallback_id(
                event.recipes.mekanism.sawing(Item.of(recipe.output, 6), recipe.input, Item.of(sawDust).chance(0.25)),
                `enigmatica:base/unification/unify_sawables/${arguments.callee.name}/`
            );
        });
    }
    function pedestal_sawing(variant) {
        // mod blacklist
        if (variant.modId == 'minecraft') {
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
            fallback_id(
                event.recipes.pedestals.pedestal_sawing({
                    type: 'pedestals:pedestal_sawing',
                    ingredient: {
                        item: recipe.input
                    },
                    result: {
                        item: recipe.output,
                        count: recipe.count
                    }
                }),
                `enigmatica:base/unification/unify_sawables/${arguments.callee.name}/`
            );
        });
    }
    function thermal_sawing(variant, sawDust) {
        // mod blacklist
        if (
            variant.modId == 'minecraft' ||
            variant.modId == 'byg' ||
            variant.modId == 'autumnity' ||
            variant.modId == 'atmospheric' ||
            variant.modId == 'upgrade_aquatic'
        ) {
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
            fallback_id(
                event.recipes.thermal
                    .sawmill([Item.of(recipe.output, 6), Item.of(sawDust).chance(1.25)], recipe.input)
                    .energy(1000),
                `enigmatica:base/unification/unify_sawables/${arguments.callee.name}/`
            );
        });
    }
});
