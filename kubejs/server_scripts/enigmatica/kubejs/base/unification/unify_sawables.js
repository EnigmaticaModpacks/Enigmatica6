//priority: 900
events.listen('recipes', (event) => {
    buildWoodVariants.forEach((variant) => {
        var sawDust = 'emendatusenigmatica:wood_dust';

        create_cutting(event, variant);
        immersiveengineering_sawing(event, variant, sawDust);
        mekanism_sawing(event, variant, sawDust);
        pedestal_sawing(event, variant);
        thermal_sawing(event, variant, sawDust);
    });
});

function create_cutting(event, variant) {
    var modID = variant.logBlock.split(':')[0];

    // mod blacklist
    if (
        modID == 'minecraft' ||
        modID == 'integrateddynamics' ||
        variant.modId == 'autumnity' ||
        variant.modId == 'atmospheric' ||
        variant.modId == 'upgrade_aquatic'
    ) {
        return;
    }

    data = {
        recipes: [
            {
                input: variant.logBlock,
                output: variant.logBlockStripped,
                count: 1,
                time: 50
            },
            {
                input: variant.woodBlock,
                output: variant.woodBlockStripped,
                count: 1,
                time: 50
            },
            {
                input: variant.logBlockStripped,
                output: variant.plankBlock,
                count: 5,
                time: 100
            },
            {
                input: variant.woodBlockStripped,
                output: variant.plankBlock,
                count: 5,
                time: 100
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.recipes.create.cutting({
            type: 'create:cutting',
            ingredients: [
                {
                    item: recipe.input
                }
            ],
            results: [
                {
                    item: recipe.output,
                    count: recipe.count
                }
            ],
            processingTime: recipe.time
        });
    });
}

function immersiveengineering_sawing(event, variant, sawDust) {
    // mod blacklist
    if (variant.modId == 'minecraft' || variant.modId == 'integrateddynamics') {
        return;
    }

    event.recipes.immersiveengineering
        .sawmill(Item.of(variant.plankBlock, 6), variant.logBlockStripped, [
            {
                stripping: false,
                output: sawDust
            }
        ])
        .energy(800);

    event.recipes.immersiveengineering
        .sawmill(
            Item.of(variant.plankBlock, 6),
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

function mekanism_sawing(event, variant, sawDust) {
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

    if (variant.modId == 'integrateddynamics') {
        data.recipes.push({
            input: 'integrateddynamics:menril_log_filled',
            output: variant.plankBlock
        });
    }

    data.recipes.forEach((recipe) => {
        if (
            !(
                variant.modId == 'integrateddynamics' &&
                (recipe.input == variant.logBlockStripped ||
                    recipe.input == variant.woodBlockStripped ||
                    recipe.input == variant.woodBlock)
            )
        ) {
            event.recipes.mekanism.sawing(Item.of(recipe.output, 6), recipe.input, Item.of(sawDust).chance(0.25));
        }
    });
}
function pedestal_sawing(event, variant) {
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

    if (variant.modId == 'integrateddynamics') {
        data.recipes.push({
            input: 'integrateddynamics:menril_log_filled',
            output: variant.plankBlock,
            count: 6
        });
    }

    data.recipes.forEach((recipe) => {
        if (
            !(
                variant.modId == 'integrateddynamics' &&
                (recipe.input == variant.logBlockStripped ||
                    recipe.input == variant.woodBlockStripped ||
                    recipe.input == variant.woodBlock)
            )
        ) {
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
        }
    });
}
function thermal_sawing(event, variant, sawDust) {
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

    if (variant.modId == 'integrateddynamics') {
        event.recipes.thermal
            .sawmill(
                [
                    Item.of('integrateddynamics:menril_planks', 6),
                    Item.of('integrateddynamics:crystalized_menril_chunk'),
                    Item.of('emendatusenigmatica:wood_dust').chance(0.25)
                ],
                'integrateddynamics:menril_log_filled'
            )
            .energy(1000);
    }

    data.recipes.forEach((recipe) => {
        if (
            !(
                variant.modId == 'integrateddynamics' &&
                (recipe.input == variant.logBlockStripped ||
                    recipe.input == variant.woodBlockStripped ||
                    recipe.input == variant.woodBlock)
            )
        ) {
            event.recipes.thermal
                .sawmill([Item.of(recipe.output, 6), Item.of(sawDust).chance(1.25)], recipe.input)
                .energy(1000);
        }
    });
}
