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
    var aVal = 2147483647;
    var bVal = 2147483647;

    for (let i = 0; i < modPriorities.length; i++) {
        if (modPriorities[i] == a) {
            aVal = i;
            break;
        }
    }

    for (let i = 0; i < modPriorities.length; i++) {
        if (modPriorities[i] == b) {
            bVal = i;
            break;
        }
    }
    if (aVal == 2147483647) {
        console.error('Mod not accounted for in unification! Mod: ' + a);
    }

    if (bVal == 2147483647) {
        console.error('Mod not accounted for in unification! Mod: ' + b);
    }

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
        .orElse(item.of('minecraft:air'));
    return prefItem;
}
