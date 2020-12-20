//priority: 1000

function shapedRecipe(result, pattern, key) {
    return { result: result, pattern: pattern, key: key };
}

function shapelessRecipe(result, ingredients) {
    return { result: result, ingredients: ingredients };
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
function getPreferredItemInTag(tag) {
    const pref = wrapArray(tag.stacks).sort(({ mod: a }, { mod: b }) => compareIndices(a, b, tag))[0] || item.of(air);
    // console.info('Preferred item: ' + tag + ' => ' + pref);
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
