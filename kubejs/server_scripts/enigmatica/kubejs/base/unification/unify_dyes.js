//priority: 900
onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/unification/unify_dyes/';

    dyeSources.forEach((recipe) => {
        botania_dye_pestle_mortar(event, recipe, id_prefix);
        create_dye_milling(event, recipe, id_prefix);
        immersiveengineering_dye_crusher(event, recipe, id_prefix);
        //integrateddynamics_dye_squeezing(event, recipe, id_prefix);
        mekanism_dye_enriching(event, recipe, id_prefix);
        mekanism_pigment_extracting(event, recipe, id_prefix);
        pedestals_dye_crushing(event, recipe, id_prefix);
        thermal_dye_centrifuge(event, recipe, id_prefix);
        atum_quern_milling(event, recipe, id_prefix);
        shapeless_dye_crafting(event, recipe, id_prefix);
        occultism_dye_crushing(event, recipe, id_prefix);
    });
});

//dye normalization functions
function botania_dye_pestle_mortar(event, recipe, id_prefix) {
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
    if (recipe.primary == 'minecraft:bone_meal') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        output = Item.of(recipe.primary, count),
        inputs = [recipe.input, 'botania:pestle_and_mortar'];

    fallback_id(event.shapeless(output, inputs), `${id_prefix}${arguments.callee.name}/`);
}

function create_dye_milling(event, recipe, id_prefix) {
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

    fallback_id(event.recipes.create.milling(outputs, input), `${id_prefix}${arguments.callee.name}/`);
}

function immersiveengineering_dye_crusher(event, recipe, id_prefix) {
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

    fallback_id(
        event.recipes.immersiveengineering.crusher(output, input, extras),
        `${id_prefix}${arguments.callee.name}/`
    );
}

// function integrateddynamics_dye_squeezing(event, recipe, id_prefix) {
//     var baseCount = 2,
//         multiplier = 1;

//     if (recipe.type == 'large') {
//         multiplier = 2;
//     }

//     var count = baseCount * multiplier;

//     event.custom({
//         type: 'integrateddynamics:squeezer',
//         item: {
//             item: recipe.input
//         },
//         result: {
//             items: [
//                 { item: { item: recipe.primary, count: count } },
//                 { item: { item: recipe.secondary, count: count }, chance: 0.25 },
//                 { item: { item: recipe.tertiary }, chance: 0.05 }
//             ]
//         }
//     });

//     fallback_id(event.custom({
//         type: 'integrateddynamics:mechanical_squeezer',
//         item: {
//             item: recipe.input
//         },
//         result: {
//             items: [
//                 { item: { item: recipe.primary, count: count } },
//                 { item: { item: recipe.secondary, count: count }, chance: 0.25 },
//                 { item: { item: recipe.tertiary }, chance: 0.05 }
//             ]
//         },
//         duration: 5
//     }), `${id_prefix}${arguments.callee.name}/`);
// }

function mekanism_dye_enriching(event, recipe, id_prefix) {
    var baseCount = 3,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        output = Item.of(recipe.primary, count),
        input = recipe.input;

    fallback_id(event.recipes.mekanism.enriching(output, input), `${id_prefix}${arguments.callee.name}/`);
}

function mekanism_pigment_extracting(event, recipe, id_prefix) {
    if (!recipe.primary.includes('_dye')) {
        return;
    }
    var baseCount = 3,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    let dye_color = recipe.primary.split(':')[1].replace('_dye', '');
    let count = baseCount * multiplier;

    fallback_id(
        event.custom({
            type: 'mekanism:pigment_extracting',
            input: { ingredient: { item: recipe.input } },
            output: { pigment: `mekanism:${dye_color}`, amount: 256 * count }
        }),
        `${id_prefix}${arguments.callee.name}/`
    );
}

function pedestals_dye_crushing(event, recipe, id_prefix) {
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

    fallback_id(
        event.custom({
            type: 'pedestals:pedestal_crushing',
            ingredient: { item: input },
            result: { item: output, count: count }
        }),
        `${id_prefix}${arguments.callee.name}/`
    );
}

function thermal_dye_centrifuge(event, recipe, id_prefix) {
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

    fallback_id(event.recipes.thermal.centrifuge(outputs, input), `${id_prefix}${arguments.callee.name}/`);
}

function atum_quern_milling(event, recipe, id_prefix) {
    var baseCount = 4,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        output = recipe.primary,
        input = recipe.input,
        rotations = 1 * multiplier;

    fallback_id(
        event.custom({
            type: 'atum:quern',
            ingredient: { item: input },
            result: { item: output, count: count },
            rotations: rotations
        }),
        `${id_prefix}${arguments.callee.name}/`
    );
}

function shapeless_dye_crafting(event, recipe, id_prefix) {
    if (recipe.input.split(':')[0] !== 'atum') {
        return;
    }
    var output = Item.of(recipe.primary),
        inputs = [recipe.input];

    fallback_id(event.shapeless(output, inputs), `${id_prefix}${arguments.callee.name}/`);
}

function occultism_dye_crushing(event, recipe, id_prefix) {
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

    fallback_id(
        event.custom({
            type: 'occultism:crushing',
            ingredient: { item: input },
            result: { item: output, count: count },
            crushing_time: 50
        }),
        `${id_prefix}${arguments.callee.name}/`
    );
}
