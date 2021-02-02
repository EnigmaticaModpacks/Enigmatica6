//priority: 1000

const air = 'minecraft:air';

const beamRecipes = [
    { output: 'decorative_blocks:jungle_beam', input: 'minecraft:jungle_logs' },
    { output: 'decorative_blocks:birch_beam', input: 'minecraft:birch_logs' },
    { output: 'decorative_blocks:acacia_beam', input: 'minecraft:acacia_logs' },
    { output: 'decorative_blocks:dark_oak_beam', input: 'minecraft:dark_oak_logs' },
    { output: 'decorative_blocks:oak_beam', input: 'minecraft:oak_logs' },
    { output: 'decorative_blocks:spruce_beam', input: 'minecraft:spruce_logs' },
    { output: 'decorative_blocks:crimson_beam', input: 'minecraft:crimson_stems' },
    { output: 'decorative_blocks:warped_beam', input: 'minecraft:warped_stems' }
];

// Used for recipes/tags that use colors
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

// Used for tag generation
const createStoneTypes = ['scoria', 'limestone', 'weathered_limestone', 'dolomite', 'gabbro', 'dark_scoria'];

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
    'ars_nouveau:red_archwood',
    'ars_nouveau:green_archwood',
    'ars_nouveau:purple_archwood',
    'ars_nouveau:blue_archwood'
];

var buildWoodVariants = [];

woodVariantsToConstruct.forEach((variant) => {
    var splitVariant = variant.split(':');
    var modId = splitVariant[0];
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

    logBlock = modId + ':' + logType + logSuffix;
    woodBlock = modId + ':' + logType + woodSuffix;
    logBlockStripped = modId + ':stripped_' + logType + logSuffix;
    woodBlockStripped = modId + ':stripped_' + logType + woodSuffix;
    plankBlock = modId + ':' + logType + '_planks';

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
        case 'red_archwood':
            plankBlock = 'ars_nouveau:archwood_planks';
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
        default:
    }

    var woodVariant = {
        modId: modId,
        logBlock: logBlock,
        woodBlock: woodBlock,
        logBlockStripped: logBlockStripped,
        woodBlockStripped: woodBlockStripped,
        plankBlock: plankBlock
    };

    buildWoodVariants.push(woodVariant);
});

// Items added here will get the 'valid_apiary' tag, and be usable as Apiary multiblock walls
const validApiaryBlocks = [
    'botania:bifrost_pane',
    'botania:bifrost_perm',
    'botania:elf_glass_pane',
    'botania:mana_glass_pane',
    'botania:elf_glass',
    'botania:mana_glass',

    'glassential:glass_dark',
    'glassential:glass_dark_ethereal',
    'glassential:glass_ethereal',
    'glassential:glass_light',
    'glassential:glass_redstone',

    'minecraft:soul_sand',
    '#minecraft:stone_bricks'
];

// Items added here will get recipes for Pedestals & Cobblegen Randomizer cobblegens.
const generatableCobblestone = [
    'byg:dacite_cobblestone',
    'byg:ether_stone',
    'byg:red_rock',
    'byg:scoria_cobblestone',
    'byg:soapstone',
    'embellishcraft:basalt_cobblestone',
    'embellishcraft:gneiss_cobblestone',
    'embellishcraft:jade_cobblestone',
    'embellishcraft:larvikite_cobblestone',
    'embellishcraft:marble_cobblestone',
    'embellishcraft:slate_cobblestone',
    'create:andesite_cobblestone',
    'create:diorite_cobblestone',
    'create:granite_cobblestone',
    'quark:cobbedstone',
    'undergarden:depthrock',
    'undergarden:shiverstone',
    'create:dark_scoria_cobblestone',
    'create:scoria_cobblestone',
    'create:gabbro_cobblestone',
    'create:dolomite_cobblestone',
    'create:weathered_limestone_cobblestone',
    'create:limestone_cobblestone'
];
// Items added here will get recipes for Pedestals & Cobblegen Randomizer stonegens.
const generatableStone = [
    'minecraft:andesite',
    'minecraft:diorite',
    'minecraft:granite',
    'byg:black_sandstone',
    'byg:blue_sandstone',
    'byg:dacite',
    'byg:purple_sandstone',
    'byg:pink_sandstone',
    'byg:scoria_stone',
    'byg:white_sandstone',
    'embellishcraft:basalt',
    'embellishcraft:gneiss',
    'embellishcraft:jade',
    'embellishcraft:larvikite',
    'embellishcraft:marble',
    'embellishcraft:slate',
    'minecraft:red_sandstone',
    'minecraft:sandstone',
    'quark:basalt',
    'quark:brimstone',
    'quark:jasper',
    'quark:limestone',
    'quark:marble',
    'quark:permafrost',
    'quark:slate',
    'astralsorcery:marble_raw',
    'create:dark_scoria',
    'create:scoria',
    'create:gabbro',
    'create:dolomite',
    'create:weathered_limestone',
    'create:limestone'
];
const generatableBasalt = [];

const honeyVarieties = [
    'resourcefulbees:blaze_honey',
    'resourcefulbees:brass_honey',
    'resourcefulbees:bronze_honey',
    'resourcefulbees:catnip_honey',
    'resourcefulbees:coal_honey',
    'resourcefulbees:constantan_honey',
    'resourcefulbees:diamond_honey',
    'resourcefulbees:electrum_honey',
    'resourcefulbees:emerald_honey',
    'resourcefulbees:enderium_honey',
    'resourcefulbees:glowstone_honey',
    'resourcefulbees:gold_honey',
    'resourcefulbees:honey',
    'resourcefulbees:icy_honey',
    'resourcefulbees:invar_honey',
    'resourcefulbees:iron_honey',
    'resourcefulbees:lapis_honey',
    'resourcefulbees:lumium_honey',
    'resourcefulbees:netherite_honey',
    'resourcefulbees:obsidian_honey',
    'resourcefulbees:rainbow_honey',
    'resourcefulbees:redstone_honey',
    'resourcefulbees:signalum_honey',
    'resourcefulbees:steel_honey',
    'resourcefulbees:water_honey',
    'resourcefulbees:wither_honey'
];

const candles = [
    'buildersaddition:large_candle',
    'buildersaddition:large_soul_candle',
    'buildersaddition:candle',
    'buildersaddition:soul_candle',
    'eidolon:candle',
    'eidolon:candlestick',
    'occultism:candle_white',
    'supplementaries:candelabra',
    'supplementaries:candelabra_silver',
    'supplementaries:candle_holder'
];

const dyeSources = [
    {
        input: 'byg:allium_flower_bush',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:alpine_bellflower',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:amaranth',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'byg:angelica',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:yellow_dye'
    },
    {
        input: 'byg:azalea',
        type: 'tall',
        primary: 'minecraft:light_blue_dye',
        secondary: 'minecraft:blue_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:begonia',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'byg:bistort',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'byg:black_rose',
        type: 'small',
        primary: 'minecraft:black_dye',
        secondary: 'minecraft:black_dye',
        tertiary: 'minecraft:gray_dye'
    },
    {
        input: 'byg:blue_sage',
        type: 'small',
        primary: 'minecraft:blue_dye',
        secondary: 'minecraft:blue_dye',
        tertiary: 'minecraft:light_blue_dye'
    },
    {
        input: 'byg:blueberries',
        type: 'small',
        primary: 'minecraft:blue_dye',
        secondary: 'minecraft:blue_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'byg:california_poppy',
        type: 'small',
        primary: 'minecraft:orange_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:black_dye'
    },
    {
        input: 'byg:crocus',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:magenta_dye'
    },
    {
        input: 'byg:cyan_amaranth',
        type: 'small',
        primary: 'minecraft:cyan_dye',
        secondary: 'minecraft:cyan_dye',
        tertiary: 'minecraft:light_blue_dye'
    },
    {
        input: 'byg:cyan_rose',
        type: 'small',
        primary: 'minecraft:cyan_dye',
        secondary: 'minecraft:light_blue_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:cyan_tulip',
        type: 'small',
        primary: 'minecraft:cyan_dye',
        secondary: 'minecraft:cyan_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'byg:daffodil',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:delphinium',
        type: 'tall',
        primary: 'minecraft:blue_dye',
        secondary: 'minecraft:blue_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'byg:fairy_slipper',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:firecracker_flower_bush',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'byg:foxglove',
        type: 'tall',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:cyan_dye',
        tertiary: 'minecraft:light_blue_dye'
    },
    {
        input: 'byg:golden_spined_cactus',
        type: 'small',
        primary: 'minecraft:green_dye',
        secondary: 'minecraft:green_dye',
        tertiary: 'minecraft:yellow_dye'
    },
    {
        input: 'byg:green_tulip',
        type: 'small',
        primary: 'minecraft:lime_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'byg:guzmania',
        type: 'small',
        primary: 'minecraft:orange_dye',
        secondary: 'minecraft:orange_dye',
        tertiary: 'minecraft:yellow_dye'
    },
    {
        input: 'byg:incan_lily',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:orange_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'byg:iris',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'byg:japanese_orchid',
        type: 'tall',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:kovan_flower',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'byg:lazarus_bellflower',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'byg:lolipop_flower',
        type: 'small',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:orange_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'byg:magenta_amaranth',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:magenta_tulip',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'byg:mini_cactus',
        type: 'small',
        primary: 'minecraft:green_dye',
        secondary: 'minecraft:green_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'byg:orange_amaranth',
        type: 'small',
        primary: 'minecraft:orange_dye',
        secondary: 'minecraft:orange_dye',
        tertiary: 'minecraft:yellow_dye'
    },
    {
        input: 'byg:orange_daisy',
        type: 'small',
        primary: 'minecraft:orange_dye',
        secondary: 'minecraft:orange_dye',
        tertiary: 'minecraft:yellow_dye'
    },
    {
        input: 'byg:osiria_rose',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:red_dye'
    },
    {
        input: 'byg:peach_leather_flower',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:pink_allium',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:pink_allium_flower_bush',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:pink_anemone',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'byg:pink_daffodil',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:pink_orchid',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:red_dye'
    },
    {
        input: 'byg:prairie_grass',
        type: 'small',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:brown_dye'
    },
    {
        input: 'byg:prickly_pear_cactus',
        type: 'small',
        primary: 'minecraft:green_dye',
        secondary: 'minecraft:green_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:protea_flower',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:purple_amaranth',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:magenta_dye'
    },
    {
        input: 'byg:purple_orchid',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:magenta_dye'
    },
    {
        input: 'byg:purple_sage',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:purple_tulip',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'byg:red_cornflower',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:red_orchid',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'byg:reeds',
        type: 'small',
        primary: 'minecraft:brown_dye',
        secondary: 'minecraft:brown_dye',
        tertiary: 'minecraft:gray_dye'
    },
    {
        input: 'byg:richea',
        type: 'small',
        primary: 'minecraft:light_gray_dye',
        secondary: 'minecraft:light_gray_dye',
        tertiary: 'minecraft:red_dye'
    },
    {
        input: 'byg:rose',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:silver_vase_flower',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:magenta_dye'
    },
    {
        input: 'byg:snowdrops',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'byg:tall_allium',
        type: 'tall',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:tall_pink_allium',
        type: 'tall',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:thereal_bellflower',
        type: 'small',
        primary: 'minecraft:light_blue_dye',
        secondary: 'minecraft:light_blue_dye',
        tertiary: 'minecraft:cyan_dye'
    },
    {
        input: 'byg:torch_ginger',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'byg:violet_leather_flower',
        type: 'small',
        primary: 'minecraft:blue_dye',
        secondary: 'minecraft:blue_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'byg:white_anemone',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:light_gray_dye'
    },
    {
        input: 'byg:white_sage',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:light_gray_dye'
    },
    {
        input: 'byg:winter_cyclamen',
        type: 'small',
        primary: 'minecraft:cyan_dye',
        secondary: 'minecraft:cyan_dye',
        tertiary: 'minecraft:light_blue_dye'
    },
    {
        input: 'byg:winter_rose',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:light_gray_dye'
    },
    {
        input: 'byg:winter_scilla',
        type: 'small',
        primary: 'minecraft:light_blue_dye',
        secondary: 'minecraft:light_blue_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:yellow_daffodil',
        type: 'small',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'byg:yellow_tulip',
        type: 'small',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'farmersdelight:wild_beetroots',
        type: 'small',
        primary: 'minecraft:beetroot_seeds',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'farmersdelight:wild_cabbages',
        type: 'small',
        primary: 'farmersdelight:cabbage_seeds',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'farmersdelight:wild_carrots',
        type: 'small',
        primary: 'minecraft:light_gray_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'farmersdelight:wild_onions',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'farmersdelight:wild_potatoes',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:lime_dye',
        tertiary: 'minecraft:yellow_dye'
    },
    {
        input: 'farmersdelight:wild_rice',
        type: 'small',
        primary: 'farmersdelight:rice',
        secondary: 'minecraft:brown_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'farmersdelight:wild_tomatoes',
        type: 'small',
        primary: 'farmersdelight:tomato_seeds',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'minecraft:allium',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'minecraft:azure_bluet',
        type: 'small',
        primary: 'minecraft:light_gray_dye',
        secondary: 'minecraft:light_gray_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'minecraft:beetroot',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:red_dye'
    },
    {
        input: 'minecraft:blue_orchid',
        type: 'small',
        primary: 'minecraft:light_blue_dye',
        secondary: 'minecraft:light_blue_dye',
        tertiary: 'minecraft:light_gray_dye'
    },
    {
        input: 'minecraft:bone',
        type: 'small',
        primary: 'minecraft:bone_meal',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:bone_meal'
    },
    {
        input: 'minecraft:bone_meal',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:light_gray_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'minecraft:brain_coral',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:magenta_dye'
    },
    {
        input: 'minecraft:brain_coral_fan',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:magenta_dye'
    },
    {
        input: 'minecraft:bubble_coral',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'minecraft:bubble_coral_fan',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'minecraft:cocoa_beans',
        type: 'small',
        primary: 'minecraft:brown_dye',
        secondary: 'minecraft:brown_dye',
        tertiary: 'minecraft:brown_dye'
    },
    {
        input: 'minecraft:cornflower',
        type: 'small',
        primary: 'minecraft:blue_dye',
        secondary: 'minecraft:blue_dye',
        tertiary: 'minecraft:light_blue_dye'
    },
    {
        input: 'minecraft:dandelion',
        type: 'small',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'minecraft:fern',
        type: 'small',
        primary: 'minecraft:green_dye',
        secondary: 'minecraft:green_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'minecraft:fire_coral',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'minecraft:fire_coral_fan',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'minecraft:horn_coral',
        type: 'small',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'minecraft:horn_coral_fan',
        type: 'small',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'minecraft:large_fern',
        type: 'small',
        primary: 'minecraft:green_dye',
        secondary: 'minecraft:green_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'minecraft:lilac',
        type: 'large',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'minecraft:lily_of_the_valley',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'minecraft:orange_tulip',
        type: 'small',
        primary: 'minecraft:orange_dye',
        secondary: 'minecraft:orange_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'minecraft:oxeye_daisy',
        type: 'small',
        primary: 'minecraft:light_gray_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:yellow_dye'
    },
    {
        input: 'minecraft:peony',
        type: 'large',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:magenta_dye'
    },
    {
        input: 'minecraft:pink_tulip',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'minecraft:poppy',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:black_dye'
    },
    {
        input: 'minecraft:red_tulip',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'minecraft:rose_bush',
        type: 'large',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'minecraft:sea_pickle',
        type: 'small',
        primary: 'minecraft:lime_dye',
        secondary: 'minecraft:lime_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'minecraft:sunflower',
        type: 'large',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'minecraft:tube_coral',
        type: 'small',
        primary: 'minecraft:blue_dye',
        secondary: 'minecraft:blue_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'minecraft:tube_coral_fan',
        type: 'small',
        primary: 'minecraft:blue_dye',
        secondary: 'minecraft:blue_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'minecraft:white_tulip',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'minecraft:wither_rose',
        type: 'small',
        primary: 'minecraft:black_dye',
        secondary: 'minecraft:black_dye',
        tertiary: 'minecraft:gray_dye'
    },
    {
        input: 'simplefarming:blackberries',
        type: 'tiny',
        primary: 'minecraft:black_dye',
        secondary: 'minecraft:black_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'simplefarming:blueberries',
        type: 'tiny',
        primary: 'minecraft:blue_dye',
        secondary: 'minecraft:blue_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'simplefarming:raspberries',
        type: 'tiny',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:red_dye'
    },
    {
        input: 'simplefarming:strawberries',
        type: 'tiny',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:red_dye'
    },
    {
        input: 'undergarden:indigo_mushroom',
        type: 'small',
        primary: 'minecraft:blue_dye',
        secondary: 'minecraft:light_blue_dye',
        tertiary: 'minecraft:purple_dye'
    },
    {
        input: 'undergarden:shimmerweed',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'undergarden:tall_shimmerweed',
        type: 'tall',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'undergarden:veil_mushroom',
        type: 'small',
        primary: 'minecraft:white_dye',
        secondary: 'minecraft:light_gray_dye',
        tertiary: 'minecraft:black_dye'
    }
];

colors.forEach((color) => {
    var botaniaTypes = ['petal', 'mushroom'];
    botaniaTypes.forEach((type) => {
        dyeSources.push({
            input: 'botania:' + color + '_' + type,
            type: 'petal',
            primary: 'minecraft:' + color + '_dye',
            secondary: 'minecraft:' + color + '_dye',
            tertiary: 'minecraft:' + color + '_dye'
        });
    });
});
