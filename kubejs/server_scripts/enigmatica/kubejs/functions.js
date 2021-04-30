//priority: 1005

function shapedRecipe(result, pattern, key, id) {
    return { result: result, pattern: pattern, key: key, id: id };
}

function shapelessRecipe(result, ingredients, id) {
    return { result: result, ingredients: ingredients, id: id };
}
function unificationBlacklistEntry(material, type) {
    return { material: material, type: type };
}
function entryIsBlacklisted(material, type) {
    for (var i = 0; i < unificationBlacklist.length; i++) {
        if (unificationBlacklist[i].material == material && unificationBlacklist[i].type == type) {
            return true;
        }
    }
    return false;
}

function tagIsEmpty(tag) {
    return getPreferredItemInTag(Ingredient.of(tag)).id == air;
}

function getPreferredItemInTag(tag) {
    let pref =
        utils
            .listOf(tag.stacks)
            .toArray()
            .sort(({ mod: a }, { mod: b }) => compareIndices(a, b, tag))[0] || Item.of(air);
    return pref;
}
function compareIndices(a, b, tag) {
    if (a == b) return 0; // iff a == b, they'll be found at the same position in modPriorities

    for (let mod of modPriorities) {
        if (mod == a) return -1; // if a comes before b, then idx(a) < idx(b), so -1
        if (mod == b) return 1; // if a comes after b, then idx(a) > idx(b), so 1
    }

    console.error('[' + a + ', ' + b + '] were both unaccounted for in mod unification' + (tag ? ' for ' + tag : '!'));
    return 0;
}
function wrapArray(array) {
    return utils.listOf(array).toArray();
}

const unificationBlacklist = [
    unificationBlacklistEntry('quartz', 'gem'),
    unificationBlacklistEntry('quartz', 'storage_block')
];

setMode = (player) => {
    if (global.packmode == 'expert') {
        player.data.ftbquests.complete('0000000000000FEC');
    } else {
        player.data.ftbquests.reset('0000000000000FEC');
    }
};

recipetypes_crushing = (event, recipe) => {
    event.custom({
        type: 'pedestals:pedestal_crushing',
        ingredient: recipe.input,
        result: recipe.output
    });
    event.custom({
        type: 'occultism:crushing',
        ingredient: recipe.input,
        result: recipe.output,
        crushing_time: recipe.duration
    });
    event.custom({
        type: 'astralsorcery:infuser',
        fluidInput: 'astralsorcery:liquid_starlight',
        input: recipe.input,
        output: recipe.output,
        consumptionChance: 0.1,
        duration: recipe.duration,
        consumeMultipleFluids: false,
        acceptChaliceInput: true,
        copyNBTToOutputs: false
    });
    event.custom({
        type: 'industrialforegoing:crusher',
        input: recipe.input,
        output: recipe.output
    });
    event.recipes.thermal
        .pulverizer([recipe.output, recipe.secondary_output], recipe.input)
        .experience(recipe.experience);
    event.recipes.mekanism.enriching(recipe.output, recipe.input);
    event.recipes.immersiveengineering.crusher(recipe.output, recipe.input, recipe.secondary_output);
    event.recipes.create.milling([recipe.output, recipe.secondary_output], recipe.input);
};
