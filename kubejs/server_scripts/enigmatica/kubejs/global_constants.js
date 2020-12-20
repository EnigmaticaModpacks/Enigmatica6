//priority: 1001

const disabledItems = [
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
    'mapperbase:steel_axe',
    'mapperbase:steel_pickaxe',
    'mapperbase:steel_shovel',
    'mapperbase:steel_hoe',
    'mapperbase:steel_sword',
    'mapperbase:steel_helmet',
    'mapperbase:steel_chestplate',
    'mapperbase:steel_leggings',
    'mapperbase:steel_boots',

    'mythicbotany:raindeletia',
    'mythicbotany:raindeletia_floating',
    'mythicbotany:wither_aconite',
    'mythicbotany:wither_aconite_floating',

    'quark:pipe',

    'thermal:sugar_cane_block'
];
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
    'charged_certus_quartz'
];

var woodVariantsToConstruct = [
    'minecraft:acacia',
    'minecraft:birch',
    'minecraft:dark_oak',
    'minecraft:jungle',
    'minecraft:oak',
    'minecraft:spruce',
    'minecraft:warped',
    'minecraft:crimson',
    'undergarden:smogstem',
    'undergarden:wigglewood',
    'undergarden:grongle',
    'biomesoplenty:cherry',
    'biomesoplenty:dead',
    'biomesoplenty:fir',
    'biomesoplenty:hellbark',
    'biomesoplenty:jacaranda',
    'biomesoplenty:magic',
    'biomesoplenty:mahogany',
    'biomesoplenty:palm',
    'biomesoplenty:redwood',
    'biomesoplenty:umbran',
    'biomesoplenty:willow',
    'byg:aspen',
    'byg:baobab',
    'byg:blue_enchanted',
    'byg:cherry',
    'byg:cika',
    'byg:cypress',
    'byg:ebony',
    'byg:ether',
    'byg:fir',
    'byg:green_enchanted',
    'byg:holly',
    'byg:jacaranda',
    'byg:lament',
    'byg:mahogany',
    'byg:mangrove',
    'byg:maple',
    'byg:nightshade',
    'byg:palm',
    'byg:palo_verde',
    'byg:pine',
    'byg:rainbow_eucalyptus',
    'byg:redwood',
    'byg:skyris',
    'byg:willow',
    'byg:witch_hazel',
    'byg:zelkova',
    'byg:sythian',
    'byg:bulbis',
    'byg:embur',
    'byg:withering_oak'
];

var buildWoodVariants = [];

woodVariantsToConstruct.forEach((variant) => {
    var splitVariant = variant.split(':');
    var modID = splitVariant[0];
    var logType = splitVariant[1];
    var logSuffix, woodSuffix, logBlockStripped, woodBlockStripped, logBlock, woodBlock, plankBlock;

    //suffix exceptions
    switch (logType) {
        case 'bulbis':
            logSuffix = '_stem';
            woodSuffix = '_wood';
            break;
        case 'sythian':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            break;
        case 'warped':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            break;
        case 'crimson':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            break;
        case 'embur':
            logSuffix = '_pedu';
            woodSuffix = '_hyphae';
            break;
        case 'grongle':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            break;
        default:
            logSuffix = '_log';
            woodSuffix = '_wood';
    }

    logBlock = modID + ':' + logType + logSuffix;
    woodBlock = modID + ':' + logType + woodSuffix;
    logBlockStripped = modID + ':stripped_' + logType + logSuffix;
    woodBlockStripped = modID + ':stripped_' + logType + woodSuffix;
    plankBlock = modID + ':' + logType + '_planks';

    //BlockStripped Exceptions
    switch (logType) {
        case 'smogstem':
            logBlockStripped = 'minecraft:air';
            woodBlockStripped = 'minecraft:air';
            break;
        case 'wigglewood':
            logBlockStripped = 'minecraft:air';
            woodBlockStripped = 'minecraft:air';
            break;
        case 'grongle':
            logBlockStripped = 'minecraft:air';
            woodBlockStripped = 'minecraft:air';
            break;
        case 'withering_oak':
            logBlockStripped = 'minecraft:stripped_oak_log';
            woodBlockStripped = 'minecraft:stripped_oak_wood';
            plankBlock = 'minecraft:oak_planks';
        default:
    }

    var woodVariant = {
        logBlock: logBlock,
        woodBlock: woodBlock,
        logBlockStripped: logBlockStripped,
        woodBlockStripped: woodBlockStripped,
        plankBlock: plankBlock
    };

    buildWoodVariants.push(woodVariant);
});

global.woodVariants = buildWoodVariants;
global.materialsToUnify = materialsToUnify;
global.disabledItems = disabledItems;
