//priority: 1005

/**
 * @param {any[]|Internal.Collection<any>} entries
 */
function randomOf(entries) {
    // @ts-ignore
    return Utils.randomOf(Utils.getRandom(), entries);
}

/**
 * @param {any[]} list
 * @param {null|((a:any,b:any)=>number)} comparator If not specified, will use `(a, b) => a - b`
 */
function maxOf(list, comparator) {
    if (list.length == 0) {
        return null;
    }
    if (!comparator) {
        comparator = (a, b) => a - b;
    }
    let targetIndex = 0;
    for (let i = 1; i < list.length; i++) {
        if (comparator(list[i], list[targetIndex]) > 0) {
            targetIndex = i;
        }
    }
    return list[targetIndex];
}

/**
 * @param {string} str
 */
function titleCase(str) {
    return str
        .split(' ')
        .map((part) => part.charAt(0).toUpperCase() + part.substring(1))
        .join(' ');
}

/**
 * @param {string} material 
 * @param {string} type 
 * @see unificationBlacklist
 */
function entryIsBlacklisted(material, type) {
    for (let blacklistEntry of unificationBlacklist) {
        if (blacklistEntry.material == material && blacklistEntry.type == type) {
            return true;
        }
    }
    return false;
}

/**
 * @param {string} tag
 */
function tagIsEmpty(tag) {
    return getPreferredItemInTag(Ingredient.of(tag)).id == air;
}

/**
 * get the most prefered item in a tag based on priorities from variable `modPriorities`
 * @see modPriorities
 * @param {Internal.IngredientJS} tag
 * @returns {Internal.ItemStackJS}
 */
function getPreferredItemInTag(tag) {
    const items = getItemsInTag(tag);
    if (items.length == 0) {
        return Item.of(air);
    }
    //use "max" instead of "sorting", to decrease time complexity from O(n*log(n)) to O(n)
    //being "bigger" here means having smaller index, which means -1, so there's an `-`
    return maxOf(items, (a, b) => -compareIndices(a.mod, b.mod, tag));
}

/**
 * @param {Internal.IngredientJS} tag 
 */
function getItemsInTag(tag) {
    return tag.stacks.toArray();
}

/**
 * @param {string} a 
 * @param {string} b 
 * @param {string} tag 
 * @see modPriorities
*/
function compareIndices(a, b, tag) {
    if (a == b) return 0; // iff a == b, they'll be found at the same position in modPriorities

    for (let mod of modPriorities) {
        if (mod == a) return -1; // if a comes before b, then idx(a) < idx(b), so -1
        if (mod == b) return 1; // if a comes after b, then idx(a) > idx(b), so 1
    }

    console.error('[' + a + ', ' + b + '] were both unaccounted for in mod unification' + (tag ? ' for ' + tag : '!'));
    return 0;
}

/**
 * @param {string} logBlock 
 * @see buildWoodVariants
 */
function getStrippedLogFrom(logBlock) {
    for (let wood of buildWoodVariants) {
        if (wood.logBlock == logBlock) {
            return wood.logBlockStripped;
        }
    }
    return air;
}

const unificationBlacklist = [
    { material: 'quartz', type: 'gem' },
    { material: 'quartz', type: 'storage_block' }
];

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
