//priority: 1000

// Used to populate the buildWoodVariants constant - Add variants here to enable compat with various cutting mechanics.
// Be aware that you may need to specify exceptions in the loop below for this to work properly.
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
    'byg:withering_oak',
    'byg:fungal_imparius',
    'betterendforge:mossy_glowshroom',
    'betterendforge:lacugrove',
    'betterendforge:end_lotus',
    'betterendforge:pythadendron',
    'betterendforge:dragon_tree',
    'betterendforge:tenanea',
    'betterendforge:helix_tree',
    'betterendforge:umbrella_tree',
    'betterendforge:jellyshroom',
    'betterendforge:end_lotus',
    'ars_nouveau:red_archwood',
    'ars_nouveau:green_archwood',
    'ars_nouveau:purple_archwood',
    'ars_nouveau:blue_archwood',
    'integrateddynamics:menril',
    'integrateddynamics:menril_filled',
    'atmospheric:rosewood',
    'atmospheric:morado',
    'atmospheric:yucca',
    'atmospheric:kousa',
    'atmospheric:aspen',
    'atmospheric:watchful_aspen',
    'atmospheric:crustose',
    'atmospheric:grimwood',
    'upgrade_aquatic:driftwood',
    'upgrade_aquatic:river',
    'autumnity:maple',
    'autumnity:sappy_maple'
];

var buildWoodVariants = [];

woodVariantsToConstruct.forEach((variant) => {
    var splitVariant = variant.split(':');
    var modId = splitVariant[0];
    var logType = splitVariant[1];
    var logSuffix, woodSuffix, logBlockStripped, woodBlockStripped, logBlock, woodBlock, plankBlock, slabBlock;

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
        case 'fungal_imparius':
            logSuffix = '_stem';
            woodSuffix = '_hyphae';
            break;
        default:
            logSuffix = '_log';
            woodSuffix = '_wood';
    }

    logBlock = modId + ':' + logType + logSuffix;
    woodBlock = modId + ':' + logType + woodSuffix;
    logBlockStripped = modId + ':stripped_' + logType + logSuffix;
    woodBlockStripped = modId + ':stripped_' + logType + woodSuffix;
    plankBlock = modId + ':' + logType + '_planks';
    slabBlock = modId + ':' + logType + '_slab';

    // Exceptions
    if (modId == 'betterendforge') {
        logSuffix = '_log';
        woodSuffix = '_bark';

        logBlock = modId + ':' + logType + logSuffix;
        woodBlock = modId + ':' + logType + woodSuffix;
        logBlockStripped = modId + ':' + logType + '_stripped' + logSuffix;
        woodBlockStripped = modId + ':' + logType + '_stripped' + woodSuffix;
        plankBlock = modId + ':' + logType + '_planks';
    }

    switch (logType) {
        case 'palo_verde':
            plankBlock = 'minecraft:birch_planks';
            break;
        case 'withering_oak':
            logBlockStripped = 'minecraft:stripped_oak_log';
            woodBlockStripped = 'minecraft:stripped_oak_wood';
            plankBlock = 'minecraft:oak_planks';
            break;
        case 'red_archwood':
            plankBlock = 'ars_nouveau:archwood_planks';
            slabBlock = 'ars_nouveau:archwood_slab';
            break;
        case 'green_archwood':
            plankBlock = 'ars_nouveau:archwood_planks';
            break;
        case 'purple_archwood':
            plankBlock = 'ars_nouveau:archwood_planks';
            break;
        case 'blue_archwood':
            plankBlock = 'ars_nouveau:archwood_planks';
            break;
        case 'crustose':
            logBlockStripped = 'atmospheric:stripped_aspen_log';
            woodBlockStripped = 'atmospheric:stripped_aspen_wood';
            plankBlock = 'atmospheric:aspen_planks';
            break;
        case 'watchful_aspen':
            logBlockStripped = 'atmospheric:stripped_aspen_log';
            woodBlockStripped = 'atmospheric:stripped_aspen_wood';
            plankBlock = 'atmospheric:aspen_planks';
            break;
        case 'sappy_maple':
            logBlockStripped = 'autumnity:stripped_maple_log';
            woodBlockStripped = 'autumnity:stripped_maple_wood';
            plankBlock = 'autumnity:maple_planks';
            break;
        case 'driftwood':
            woodBlock = modId + ':' + logType;
            woodBlockStripped = modId + ':stripped_' + logType;
            break;
        case 'grimwood':
            woodBlock = modId + ':' + logType;
            woodBlockStripped = modId + ':stripped_' + logType;
            break;
        case 'rosewood':
            woodBlock = modId + ':' + logType;
            woodBlockStripped = modId + ':stripped_' + logType;
            break;
        case 'menril':
            logBlock = 'integrateddynamics:menril_log';
            woodBlock = 'integrateddynamics:menril_wood';
            logBlockStripped = 'integrateddynamics:menril_log_stripped';
            woodBlockStripped = 'integrateddynamics:menril_wood_stripped';
            plankBlock = 'integrateddynamics:menril_planks';
            break;
        case 'menril_filled':
            logBlock = 'integrateddynamics:menril_log_filled';
            woodBlock = 'integrateddynamics:menril_wood';
            logBlockStripped = 'integrateddynamics:menril_log_stripped';
            woodBlockStripped = 'integrateddynamics:menril_wood_stripped';
            plankBlock = 'integrateddynamics:menril_planks';
            break;
        case 'fungal_imparius':
            logBlockStripped = 'byg:imparius_stem';
            woodBlockStripped = 'byg:imparius_hyphae';
            plankBlock = 'byg:imparius_planks';
            slabBlock = 'byg:imparius_slab';
            break;
        default:
    }

    var woodVariant = {
        modId: modId,
        logType: logType,
        logBlock: logBlock,
        woodBlock: woodBlock,
        logBlockStripped: logBlockStripped,
        woodBlockStripped: woodBlockStripped,
        plankBlock: plankBlock,
        slabBlock: slabBlock
    };

    buildWoodVariants.push(woodVariant);
});
