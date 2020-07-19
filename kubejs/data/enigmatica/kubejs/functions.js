//priority: 1000

function shapedRecipe(result, pattern, key) {
    return { result: result, pattern: pattern, key: key };
}

function shapelessRecipe(result, ingredients) {
    return { result: result, ingredients: ingredients };
}

function compareIndices(a, b) {
    var aVal = modPriorities.indexOf(a);
    var bVal = modPriorities.indexOf(b);

    if (aVal == -1) aVal = 2147483647;
    if (bVal == -1) bVal = 2147483647;

    if (aVal > bVal) return 1;
    if (aVal == bVal) return 0;
    if (aVal < bVal) return -1;
}

function getPreferredItemInTag(tag) {
    var prefItem = tag.stacks
        .stream()
        .sorted(function (a, b) {
            return compareIndices(a.mod, b.mod);
        })
        .findFirst()
        .orElse('minecraft:air');
    return prefItem;
}
