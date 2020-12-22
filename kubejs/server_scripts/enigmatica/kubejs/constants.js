//priority: 1000

const air = 'minecraft:air';
const beamRecipes = [
    { output: 'decorative_blocks:hellbark_beam', input: 'biomesoplenty:hellbark_logs' },
    { output: 'decorative_blocks:jungle_beam', input: 'minecraft:jungle_logs' },
    { output: 'decorative_blocks:birch_beam', input: 'minecraft:birch_logs' },
    { output: 'decorative_blocks:umbran_beam', input: 'biomesoplenty:umbran_logs' },
    { output: 'decorative_blocks:jacaranda_beam', input: 'biomesoplenty:jacaranda_logs' },
    { output: 'decorative_blocks:magic_beam', input: 'biomesoplenty:magic_logs' },
    { output: 'decorative_blocks:palm_beam', input: 'biomesoplenty:palm_logs' },
    { output: 'decorative_blocks:mahogany_beam', input: 'biomesoplenty:mahogany_logs' },
    { output: 'decorative_blocks:willow_beam', input: 'biomesoplenty:willow_logs' },
    { output: 'decorative_blocks:acacia_beam', input: 'minecraft:acacia_logs' },
    { output: 'decorative_blocks:cherry_beam', input: 'biomesoplenty:cherry_logs' },
    { output: 'decorative_blocks:fir_beam', input: 'biomesoplenty:fir_logs' },
    { output: 'decorative_blocks:dark_oak_beam', input: 'minecraft:dark_oak_logs' },
    { output: 'decorative_blocks:oak_beam', input: 'minecraft:oak_logs' },
    { output: 'decorative_blocks:redwood_beam', input: 'biomesoplenty:redwood_logs' },
    { output: 'decorative_blocks:dead_beam', input: 'biomesoplenty:dead_logs' },
    { output: 'decorative_blocks:spruce_beam', input: 'minecraft:spruce_logs' },
    { output: 'decorative_blocks:crimson_beam', input: 'minecraft:crimson_stems' },
    { output: 'decorative_blocks:warped_beam', input: 'minecraft:warped_stems' }
];

const modPriorities = [
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

const colors = [
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

const typesToUnify = ['nugget', 'ingot', 'gem', 'storage_block', 'ore', 'dust', 'gear', 'plate', 'rod'];

const createStoneTypes = ['scoria', 'limestone', 'weathered_limestone', 'dolomite', 'gabbro', 'dark_scoria'];

const vanillaWoodTypes = ['oak', 'birch', 'spruce', 'jungle', 'acacia', 'dark_oak'];

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

    // Exceptions
    switch (logType) {
        case 'palo_verde':
            plankBlock = 'minecraft:birch_planks';
            break;
        case 'withering_oak':
            logBlockStripped = 'minecraft:stripped_oak_log';
            woodBlockStripped = 'minecraft:stripped_oak_wood';
            plankBlock = 'minecraft:oak_planks';
            break;
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
