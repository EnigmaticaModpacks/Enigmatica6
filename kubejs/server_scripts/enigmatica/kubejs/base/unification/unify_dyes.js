//priority: 900
events.listen('recipes', (event) => {
    dyeSources.forEach((recipe) => {
        botania_dye_pestle_mortar(event, recipe);
        create_dye_milling(event, recipe);
        immersiveengineering_dye_crusher(event, recipe);
        //integrateddynamics_dye_squeezing(event, recipe);
        mekanism_dye_enriching(event, recipe);
        pedestals_dye_crushing(event, recipe);
        thermal_dye_centrifuge(event, recipe);
    });
});

//dye normalization functions
function botania_dye_pestle_mortar(event, recipe) {
    if (recipe.type == 'petal') {
        return;
    }

    if (recipe.input == 'minecraft:bone') {
        return;
    }

    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }
    if(recipe.primary == 'minecraft:bone_meal') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        output = Item.of(recipe.primary, count),
        inputs = [recipe.input, 'botania:pestle_and_mortar'];

    event.shapeless(output, inputs);
}

function create_dye_milling(event, recipe) {
    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        outputs = [
            Item.of(recipe.primary, count),
            Item.of(recipe.secondary).withCount(count).withChance(0.25),
            Item.of(recipe.tertiary).withCount(multiplier).withChance(0.05)
        ],
        input = recipe.input;

    event.recipes.create.milling(outputs, input);
}
function immersiveengineering_dye_crusher(event, recipe) {
    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }
    var count = baseCount * multiplier,
        output = Item.of(recipe.primary, count),
        extras = [
            Item.of(recipe.secondary).withCount(count).withChance(0.25),
            Item.of(recipe.tertiary).withCount(multiplier).withChance(0.05)
        ],
        input = recipe.input;

    event.recipes.immersiveengineering.crusher(output, input, extras);
}
function integrateddynamics_dye_squeezing(event, recipe) {
    var baseCount = 2,
        multiplier = 1;

    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier;

    event.custom({
        type: 'integrateddynamics:squeezer',
        item: {
            item: recipe.input
        },
        result: {
            items: [
                {
                    item: {
                        item: recipe.primary,
                        count: count
                    }
                },
                {
                    item: {
                        item: recipe.secondary,
                        count: count
                    },
                    chance: 0.25
                },
                {
                    item: {
                        item: recipe.tertiary
                    },
                    chance: 0.05
                }
            ]
        }
    });

    event.custom({
        type: 'integrateddynamics:mechanical_squeezer',
        item: {
            item: recipe.input
        },
        result: {
            items: [
                {
                    item: {
                        item: recipe.primary,
                        count: count
                    }
                },
                {
                    item: {
                        item: recipe.secondary,
                        count: count
                    },
                    chance: 0.25
                },
                {
                    item: {
                        item: recipe.tertiary
                    },
                    chance: 0.05
                }
            ]
        },
        duration: 5
    });
}

function mekanism_dye_enriching(event, recipe) {
    var baseCount = 3,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        output = Item.of(recipe.primary, count),
        input = recipe.input;

    event.recipes.mekanism.enriching(output, input);
}
function pedestals_dye_crushing(event, recipe) {
    if (recipe.input == 'minecraft:bone') {
        return;
    }

    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        output = recipe.primary,
        input = recipe.input;

    event.custom({
        type: 'pedestals:pedestal_crushing',
        ingredient: {
            item: input
        },
        result: {
            item: output,
            count: count
        }
    });
}
function thermal_dye_centrifuge(event, recipe) {
    if (recipe.input == 'minecraft:bone') {
        return;
    }

    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        outputs = [
            Item.of(recipe.primary, count),
            Item.of(recipe.secondary).withCount(count).withChance(0.25),
            Item.of(recipe.tertiary).withCount(multiplier).withChance(0.05)
        ],
        input = recipe.input;

    event.recipes.thermal.centrifuge(outputs, input);
}
