//priority: 900
events.listen('recipes', (event) => {
    materialsToUnify.forEach((material) => {
        typesToUnify.forEach((type) => {
            if (!entryIsBlacklisted(material, type)) {
                var tagString = `#forge:${type}s/${material}`;
                var tag = ingredient.of(tagString);
                if (tag.stacks.size() > 1) {
                    var prefItem = getPreferredItemInTag(tag);
                    event.replaceOutput({}, tagString, prefItem);
                }
            }
        });
    });
});

// Used to determine which materials to unify
const materialsToUnify = [
    'iron',
    'gold',
    'copper',
    'silver',
    'zinc',
    'brass',
    'lead',
    'tin',
    'compressed_iron',
    'nickel',
    'aluminum',
    'uranium',
    'bronze',
    'electrum',
    'constantan',
    'steel',
    'osmium',
    'diamond',
    'lapis',
    'emerald',
    'quartz',
    'coal',
    'charcoal',
    'obsidian',
    'ender',
    'fluix',
    'saltpeter',
    'fluorite',
    'invar',
    'signalum',
    'lumium',
    'enderium',
    'sulfur',
    'cinnabar',
    'niter',
    'potassium_nitrate',
    'saltpeter',
    'apatite',
    'bitumen',
    'redstone',
    'glowstone',
    'arcane',
    'mana',
    'certus_quartz',
    'charged_certus_quartz',
    'iesnium',
    'dimensional',
    'cloggrum',
    'froststeel',
    'regalium',
    'utherium',
    'coal_coke',
    'starmetal'
];

// Used to determine which material types to unify
const typesToUnify = ['nugget', 'ingot', 'gem', 'storage_block', 'ore', 'dust', 'gear', 'plate', 'rod'];

// Used to determine priority of which mod an output should come from
const modPriorities = [
    'emendatusenigmatica',
    'minecraft',
    'immersiveengineering',
    'thermal',
    'mekanism',
    'jaopca',
    'kubejs',
    'pneumaticcraft',
    'create',
    'occultism',
    'tmechworks',
    'industrialforegoing',
    'botania',
    'quark',
    'pedestals',
    'refinedstorage',
    'mapperbase',
    'bloodmagic',
    'eidolon',
    'morevanillalib',
    'titanium'
];

// This function is used to sort tags based on the modPriority list - Higher in the list will be higher in the tag
function compareIndices(a, b, tag) {
    if (a == b) return 0; // if a == b, they'll be found at the same position in modPriorities

    for (let mod of modPriorities) {
        if (mod == a) {
            return -1;
        } // if a comes before b, then index(a) < index(b), so -1
        if (mod == b) {
            return 1;
        } // if a comes after b, then index(a) > index(b), so 1
    }

    console.error(`[${a}, ${b}] were both unaccounted for in mod unification${tag ? ' for ' + tag : '!'}`);
    return 0;
}

// Material + Type combination to skip unification for
const unificationBlacklist = [
    unificationBlacklistEntry('quartz', 'gem'),
    unificationBlacklistEntry('quartz', 'storage_block')
];
