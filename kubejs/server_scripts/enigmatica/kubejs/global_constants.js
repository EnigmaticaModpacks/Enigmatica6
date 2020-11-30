global.disabledItems = [
    'aquaculture:wooden_fillet_knife',
    'aquaculture:stone_fillet_knife',
    'aquaculture:iron_fillet_knife',
    'aquaculture:gold_fillet_knife',
    'aquaculture:diamond_fillet_knife',

    'byg:ametrine_block',
    'byg:ametrine_boots',
    'byg:ametrine_chestplate',
    'byg:ametrine_gems',
    'byg:ametrine_helmet',
    'byg:ametrine_horse_armor',
    'byg:ametrine_leggings',
    'byg:ametrine_ore',
    'byg:pendorite_axe',
    'byg:pendorite_battleaxe',
    'byg:pendorite_block',
    'byg:pendorite_hoe',
    'byg:pendorite_horse_armor',
    'byg:pendorite_ore',
    'byg:pendorite_pickaxe',
    'byg:pendorite_scraps',
    'byg:pendorite_shovel',
    'byg:pendorite_sword',

    'mapperbase:steel_fence',

    'mythicbotany:raindeletia',
    'mythicbotany:raindeletia_floating',
    'mythicbotany:wither_aconite',
    'mythicbotany:wither_aconite_floating',

    'quark:pipe'
];

global.colors = [
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black',
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray'
];

global.typesToUnify = ['nugget', 'ingot', 'gem', 'storage_block', 'ore', 'dust', 'gear', 'plate', 'rod'];

global.materialsToUnify = [
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
    'certus_quartz',
    'charged_certus_quartz'
];

global.modPriorities = [
    'emendatusenigmatica',
    'minecraft',
    'immersiveengineering',
    'thermal',
    'mekanism',
    'jaopca',
    'kubejs',
    'pneumaticcraft',
    'tmechworks',
    'industrialforegoing',
    'botania',
    'quark',
    'pedestals',
    'refinedstorage',
    'mapperbase'
];

global.unificationBlacklist = [
    unificationBlacklistEntry('quartz', 'gem'),
    unificationBlacklistEntry('quartz', 'storage_block')
];

global.vanillaWoodTypes = ['oak', 'birch', 'spruce', 'jungle', 'acacia', 'dark_oak'];

global.unificationBlacklistEntry = function unificationBlacklistEntry(material, type) {
    return { material: material, type: type };
};

global.getPreferredItemInTag = function getPreferredItemInTag(tag) {
    const pref = wrapArray(tag.stacks).sort(({ mod: a }, { mod: b }) => compareIndices(a, b, tag))[0] || item.of(air);
    // console.info('Preferred item: ' + tag + ' => ' + pref);
    return pref;
};
global.compareIndices = function compareIndices(a, b, tag) {
    if (a == b) return 0; // iff a == b, they'll be found at the same position in modPriorities

    for (let mod of modPriorities) {
        if (mod == a) return -1; // if a comes before b, then idx(a) < idx(b), so -1
        if (mod == b) return 1; // if a comes after b, then idx(a) > idx(b), so 1
    }

    console.error('[' + a + ', ' + b + '] were both unaccounted for in mod unification' + (tag ? ' for ' + tag : '!'));
    return 0;
};
global.wrapArray = function wrapArray(array) {
    return utils.listOf(array).toArray();
};

const {
    unificationBlacklist,
    unificationBlacklistEntry,
    materialsToUnify,
    typesToUnify,
    colors,
    air,
    vanillaWoodTypes,
    getPreferredItemInTag,
    compareIndices,
    wrapArray
} = global;
