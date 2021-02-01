//priority: 1000

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
        if (unificationBlacklist[i].material === material && unificationBlacklist[i].type === type) {
            return true;
        }
    }
    return false;
}

function tagIsEmpty(tag) {
    return getPreferredItemInTag(ingredient.of(tag)).id == air;
}

function getPreferredItemInTag(tag) {
    let pref =
        utils
            .listOf(tag.stacks)
            .toArray()
            .sort(({ mod: a }, { mod: b }) => compareIndices(a, b, tag))[0] || item.of(air);
    return pref;
}
