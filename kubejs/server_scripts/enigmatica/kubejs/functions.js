//priority: 1005

/**
 * @param {any[]|Internal.Collection<any>} entries
 */
function randomOf(entries) {
    // @ts-ignore
    return Utils.randomOf(Utils.getRandom(), entries);
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

function entryIsBlacklisted(material, type) {
    for (let blacklistEntry of unificationBlacklist) {
        if (blacklistEntry.material == material && blacklistEntry.type == type) {
            return true;
        }
    }
    return false;
}

function tagIsEmpty(tag) {
    return getPreferredItemInTag(Ingredient.of(tag)).id == air;
}

function getPreferredItemInTag(tag) {
    const items = getItemsInTag(tag);
    if (items.empty) {
        return Item.of(air);
    }
    return items.sort(({ mod: a }, { mod: b }) => compareIndices(a, b, tag))[0];
}

function getItemsInTag(tag) {
    return tag.stacks.toArray();
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

// transplant the md5 from `<type's mod>:kjs_<hash>` onto the supplied prefix
function fallback_id(recipe, id_prefix) {
    if (recipe.getId().includes(':kjs_')) {
        recipe.serializeJson(); // without this the hashes *will* collide
        recipe.id(id_prefix + 'md5_' + recipe.getUniqueId());
    }
}
