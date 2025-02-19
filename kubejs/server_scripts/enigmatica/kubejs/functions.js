//priority: 1005

//
// utility functions
//
// To make JSDoc defined in comments actually works, you need ProbeJS Legacy 4.6.0+
// ProbeJS Legacy CF page: https://www.curseforge.com/minecraft/mc-mods/probejs-legacy
//

function shapedRecipe(result, pattern, key, id) {
    return { result: result, pattern: pattern, key: key, id: id };
}

function shapelessRecipe(result, ingredients, id) {
    return { result: result, ingredients: ingredients, id: id };
}

/**
 * @param {string} str 
 * @returns 
 */
function titleCase(str) {
    return str.toLowerCase()
        .split(' ')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')
}

/**
 * @template T
 * @param {$Collection_<T>} array 
 * @returns {T}
 */
function randomOf(array) {
    return Utils.randomOf(Utils.getRandom(), array)
}

/**
 * @param {string} material 
 * @param {string} type 
 * @see unificationBlacklist
 */
function unificationBlacklistEntry(material, type) {
    return { material: material, type: type };
}

/**
 * @param {string} material 
 * @param {string} type 
 * @see unificationBlacklist
 */
function entryIsBlacklisted(material, type) {
    for (let blackList of unificationBlacklist) {
        if (blackList.material == material && blackList.type == type) {
            return true
        }
    }
    return false;
}

/**
 * @param {$IngredientJS_} tag
 */
function tagIsEmpty(tag) {
    return Ingredient.of(tag).empty
}

/**
 * @param {$IngredientJS_} tag 
 */
function getPreferredItemInTag(tag) {
    const got = getItemsInTag(tag).sort((a, b) => compareIndices(a.mod, b.mod, tag))[0]
    return got || Item.of(air)
}

/**
 * @param {$IngredientJS_} tag 
 * @returns {Internal.ItemStackJS[]}
 */
function getItemsInTag(tag) {
    return Ingredient.of(tag).stacks.toArray();
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

function getStrippedLogFrom(logBlock) {
    for (let wood of buildWoodVariants) {
        if (wood.logBlock == logBlock) {
            return wood.logBlockStripped;
        }
    }
    return air;
}

const unificationBlacklist = [
    unificationBlacklistEntry('quartz', 'gem'),
    unificationBlacklistEntry('quartz', 'storage_block')
];

/**
 * @param {$IngredientJS_} item 
 * @param {Internal.PlayerJS<any>} player 
 */
function playerHas(item, player) {
    return player.inventory.find(item) != -1;
}

// lt  = .slice(0, index)
// lte = .slice(0, index + 1)
// gt  = .slice(index)
// gte = .slice(index + 1)

function lowerTiers(tiers, tier) {
    return tiers.slice(0, tiers.indexOf(tier));
}

/**
 * transplant the md5 from `<type's mod>:kjs_<hash>` onto the supplied prefix
 * @param {Internal.RecipeJS} recipe 
 * @param {string} id_prefix 
 */
function fallback_id(recipe, id_prefix) {
    if (recipe.getId().includes(':kjs_')) {
        recipe.serializeJson(); // without this the hashes *will* collide
        recipe.id(id_prefix + 'md5_' + recipe.getUniqueId());
    }
}
