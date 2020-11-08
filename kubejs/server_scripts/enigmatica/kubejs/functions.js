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

function compareIndices(a, b) {
    if (a == b) return 0; // iff a == b, they'll be found at the same position in modPriorities

    for (let mod of modPriorities) {
        if (mod == a) return -1; // if a comes before b, then idx(a) < idx(b), so -1
        if (mod == b) return 1; // if a comes after b, then idx(a) > idx(b), so 1
    }

    console.error('Neither ' + a + ' nor ' + b + ' were accounted for in mod unification!');
    return 0;
}

function getPreferredItemInTag(tag) {
    const firstStack = wrapJsArray(tag.stacks).sort((a, b) => compareIndices(a.mod, b.mod))[0];
    //console.info('preferred item for tag ' + tag + ': ' + firstStack);
    return firstStack || item.of('minecraft:air');
}

function wrapJsArray(a) {
    return utils.listOf(a).toArray();
}
