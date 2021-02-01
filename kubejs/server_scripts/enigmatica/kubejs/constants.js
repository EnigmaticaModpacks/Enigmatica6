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

// priority of which mod output should come from, if applicable
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

// Used to determine which material types to unify
const typesToUnify = ['nugget', 'ingot', 'gem', 'storage_block', 'ore', 'dust', 'gear', 'plate', 'rod'];

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
    'biomesoplenty:black_sandstone',
    'biomesoplenty:orange_sandstone',
    'biomesoplenty:white_sandstone',
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
        input: 'biomesoplenty:blue_hydrangea',
        type: 'tall',
        primary: 'minecraft:light_blue_dye',
        secondary: 'minecraft:light_blue_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'biomesoplenty:burning_blossom',
        type: 'small',
        primary: 'minecraft:orange_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:yellow_dye'
    },
    {
        input: 'biomesoplenty:glowflower',
        type: 'small',
        primary: 'minecraft:cyan_dye',
        secondary: 'minecraft:white_dye',
        tertiary: 'minecraft:yellow_dye'
    },
    {
        input: 'biomesoplenty:goldenrod',
        type: 'tall',
        primary: 'minecraft:yellow_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:orange_dye'
    },
    {
        input: 'biomesoplenty:lavender',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:magenta_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'biomesoplenty:orange_cosmos',
        type: 'small',
        primary: 'minecraft:orange_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'biomesoplenty:pink_daffodil',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:white_dye'
    },
    {
        input: 'biomesoplenty:pink_hibiscus',
        type: 'small',
        primary: 'minecraft:pink_dye',
        secondary: 'minecraft:yellow_dye',
        tertiary: 'minecraft:green_dye'
    },
    {
        input: 'biomesoplenty:rose',
        type: 'small',
        primary: 'minecraft:red_dye',
        secondary: 'minecraft:red_dye',
        tertiary: 'minecraft:pink_dye'
    },
    {
        input: 'biomesoplenty:violet',
        type: 'small',
        primary: 'minecraft:purple_dye',
        secondary: 'minecraft:purple_dye',
        tertiary: 'minecraft:blue_dye'
    },
    {
        input: 'biomesoplenty:wildflower',
        type: 'small',
        primary: 'minecraft:magenta_dye',
        secondary: 'minecraft:pink_dye',
        tertiary: 'minecraft:lime_dye'
    },
    {
        input: 'biomesoplenty:wilted_lily',
        type: 'small',
        primary: 'minecraft:gray_dye',
        secondary: 'minecraft:gray_dye',
        tertiary: 'minecraft:yellow_dye'
    },
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

const cropRegistry = [
    {
        type: 'cactus',
        crops: [
            {
                seed: 'byg:golden_spined_cactus',
                render: 'byg:golden_spined_cactus',
                plant: 'byg:golden_spined_cactus',
                plantSecondary: '',
                substrate: 'sand'
            },
            {
                seed: 'byg:mini_cactus',
                render: 'byg:mini_cactus',
                plant: 'byg:mini_cactus',
                plantSecondary: '',
                substrate: 'sand'
            },
            {
                seed: 'byg:prickly_pear_cactus',
                render: 'byg:prickly_pear_cactus',
                plant: 'byg:prickly_pear_cactus',
                plantSecondary: '',
                substrate: 'sand'
            },
            {
                seed: 'byg:warped_cactus',
                render: 'byg:warped_cactus',
                plant: 'byg:warped_cactus',
                plantSecondary: '',
                substrate: 'soul_sand'
            },
            {
                seed: 'minecraft:cactus',
                render: 'minecraft:cactus',
                plant: 'minecraft:cactus',
                plantSecondary: '',
                substrate: 'sand'
            }
        ]
    },
    {
        type: 'cane_like',
        crops: [
            {
                seed: 'byg:blue_glowcane',
                render: 'byg:blue_glowcane',
                plant: 'byg:blue_glowcane',
                plantSecondary: '',
                substrate: 'glowcelium'
            },
            {
                seed: 'byg:pink_glowcane',
                render: 'byg:pink_glowcane',
                plant: 'byg:pink_glowcane',
                plantSecondary: '',
                substrate: 'glowcelium'
            },
            {
                seed: 'byg:purple_glowcane',
                render: 'byg:purple_glowcane',
                plant: 'byg:purple_glowcane',
                plantSecondary: '',
                substrate: 'glowcelium'
            },
            {
                seed: 'byg:red_glowcane',
                render: 'byg:red_glowcane',
                plant: 'byg:red_glowcane',
                plantSecondary: '',
                substrate: 'glowcelium'
            },
            {
                seed: 'byg:sythian_stalk_block',
                render: 'byg:sythian_stalk_block',
                plant: 'byg:sythian_stalk_block',
                plantSecondary: '',
                substrate: 'nether'
            },
            {
                seed: 'minecraft:bamboo',
                render: 'minecraft:bamboo',
                plant: 'minecraft:bamboo',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:chorus_flower',
                render: 'minecraft:chorus_flower',
                plant: 'minecraft:chorus_fruit',
                plantSecondary: '',
                substrate: 'end_stone'
            },
            {
                seed: 'minecraft:sugar_cane',
                render: 'minecraft:sugar_cane',
                plant: 'minecraft:sugar_cane',
                plantSecondary: '',
                substrate: 'sand'
            }
        ]
    },
    {
        type: 'coral',
        crops: [
            {
                seed: 'byg:warped_coral',
                render: 'byg:warped_coral',
                plant: 'byg:warped_coral',
                plantSecondary: '',
                substrate: 'soul_sand'
            },
            {
                seed: 'byg:warped_coral_block',
                render: 'byg:warped_coral_block',
                plant: 'byg:warped_coral_block',
                plantSecondary: '',
                substrate: 'soul_sand'
            },
            {
                seed: 'byg:warped_coral_fan',
                render: 'byg:warped_coral_fan',
                plant: 'byg:warped_coral_fan',
                plantSecondary: '',
                substrate: 'soul_sand'
            },
            {
                seed: 'minecraft:brain_coral',
                render: 'minecraft:brain_coral',
                plant: 'minecraft:brain_coral',
                plantSecondary: '',
                substrate: 'water'
            },
            {
                seed: 'minecraft:brain_coral_block',
                render: 'minecraft:brain_coral_block',
                plant: 'minecraft:brain_coral_block',
                plantSecondary: '',
                substrate: 'water'
            },
            {
                seed: 'minecraft:brain_coral_fan',
                render: 'minecraft:brain_coral_fan',
                plant: 'minecraft:brain_coral_fan',
                plantSecondary: '',
                substrate: 'water'
            },
            {
                seed: 'minecraft:bubble_coral',
                render: 'minecraft:bubble_coral',
                plant: 'minecraft:bubble_coral',
                plantSecondary: '',
                substrate: 'water'
            },
            {
                seed: 'minecraft:bubble_coral_block',
                render: 'minecraft:bubble_coral_block',
                plant: 'minecraft:bubble_coral_block',
                plantSecondary: '',
                substrate: 'water'
            },
            {
                seed: 'minecraft:bubble_coral_fan',
                render: 'minecraft:bubble_coral_fan',
                plant: 'minecraft:bubble_coral_fan',
                plantSecondary: '',
                substrate: 'water'
            },
            {
                seed: 'minecraft:fire_coral',
                render: 'minecraft:fire_coral',
                plant: 'minecraft:fire_coral',
                plantSecondary: '',
                substrate: 'water'
            },
            {
                seed: 'minecraft:fire_coral_block',
                render: 'minecraft:fire_coral_block',
                plant: 'minecraft:fire_coral_block',
                plantSecondary: '',
                substrate: 'water'
            },
            {
                seed: 'minecraft:fire_coral_fan',
                render: 'minecraft:fire_coral_fan',
                plant: 'minecraft:fire_coral_fan',
                plantSecondary: '',
                substrate: 'water'
            },
            {
                seed: 'minecraft:horn_coral',
                render: 'minecraft:horn_coral',
                plant: 'minecraft:horn_coral',
                plantSecondary: '',
                substrate: 'water'
            },
            {
                seed: 'minecraft:horn_coral_block',
                render: 'minecraft:horn_coral_block',
                plant: 'minecraft:horn_coral_block',
                plantSecondary: '',
                substrate: 'water'
            },
            {
                seed: 'minecraft:horn_coral_fan',
                render: 'minecraft:horn_coral_fan',
                plant: 'minecraft:horn_coral_fan',
                plantSecondary: '',
                substrate: 'water'
            },
            {
                seed: 'minecraft:tube_coral',
                render: 'minecraft:tube_coral',
                plant: 'minecraft:tube_coral',
                plantSecondary: '',
                substrate: 'water'
            },
            {
                seed: 'minecraft:tube_coral_block',
                render: 'minecraft:tube_coral_block',
                plant: 'minecraft:tube_coral_block',
                plantSecondary: '',
                substrate: 'water'
            },
            {
                seed: 'minecraft:tube_coral_fan',
                render: 'minecraft:tube_coral_fan',
                plant: 'minecraft:tube_coral_fan',
                plantSecondary: '',
                substrate: 'water'
            }
        ]
    },
    {
        type: 'crop_fiber',
        crops: [
            {
                seed: 'immersiveengineering:seed',
                render: 'immersiveengineering:hemp',
                plant: 'immersiveengineering:hemp_fiber',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:cotton_seeds',
                render: 'simplefarming:cotton_crop',
                plant: 'simplefarming:cotton',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:kenaf_seeds',
                render: 'simplefarming:kenaf_crop',
                plant: 'simplefarming:kenaf_fiber',
                plantSecondary: '',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_fruit',
        crops: [
            {
                seed: 'occultism:datura_seeds',
                render: 'occultism:datura',
                plant: 'occultism:datura',
                plantSecondary: '',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_gourd',
        crops: [
            {
                seed: 'minecraft:pumpkin_seeds',
                render: 'minecraft:pumpkin',
                plant: 'minecraft:pumpkin',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:squash_seeds',
                render: 'simplefarming:squash_crop',
                plant: 'simplefarming:squash_block',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:zucchini_seeds',
                render: 'simplefarming:zucchini_crop',
                plant: 'simplefarming:zucchini',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'undergarden:gloomgourd_seeds',
                render: 'undergarden:gloomgourd_stem',
                plant: 'undergarden:gloomgourd',
                plantSecondary: '',
                substrate: 'deepturf'
            }
        ]
    },
    {
        type: 'crop_grain',
        crops: [
            {
                seed: 'farmersdelight:rice',
                render: 'farmersdelight:rice_upper_crop',
                plant: 'farmersdelight:rice_panicle',
                plantSecondary: '',
                substrate: 'water'
            },
            {
                seed: 'minecraft:wheat_seeds',
                render: 'minecraft:wheat',
                plant: 'minecraft:wheat',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:barley_seeds',
                render: 'simplefarming:barley_crop',
                plant: 'simplefarming:barley',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:corn_seeds',
                render: 'simplefarming:corn_crop',
                plant: 'simplefarming:corn',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:oat_seeds',
                render: 'simplefarming:oat_crop',
                plant: 'simplefarming:oat',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:quinoa_seeds',
                render: 'simplefarming:quinoa',
                plant: 'simplefarming:quinoa_seeds',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:rice_seeds',
                render: 'simplefarming:rice_crop',
                plant: 'simplefarming:rice',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:rye_seeds',
                render: 'simplefarming:rye_crop',
                plant: 'simplefarming:rye',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:sorghum_seeds',
                render: 'simplefarming:sorghum_crop',
                plant: 'simplefarming:sorghum',
                plantSecondary: '',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_leafy',
        crops: [
            {
                seed: 'farmersdelight:cabbage_seeds',
                render: 'farmersdelight:wild_cabbages',
                plant: 'farmersdelight:cabbage',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:lettuce_seeds',
                render: 'simplefarming:lettuce_crop',
                plant: 'simplefarming:lettuce',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:spinach_seeds',
                render: 'simplefarming:spinach_crop',
                plant: 'simplefarming:spinach',
                plantSecondary: '',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_legume',
        crops: [
            {
                seed: 'simplefarming:broccoli_seeds',
                render: 'simplefarming:broccoli_crop',
                plant: 'simplefarming:broccoli',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:cucumber_seeds',
                render: 'simplefarming:cucumber_crop',
                plant: 'simplefarming:cucumber',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:eggplant_seeds',
                render: 'simplefarming:eggplant_crop',
                plant: 'simplefarming:eggplant',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:pea_seeds',
                render: 'simplefarming:pea_crop',
                plant: 'simplefarming:pea_pod',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:pepper_seeds',
                render: 'simplefarming:pepper_crop',
                plant: 'simplefarming:pepper',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:soybean_seeds',
                render: 'simplefarming:soybean_crop',
                plant: 'simplefarming:soybean',
                plantSecondary: '',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_melon',
        crops: [
            {
                seed: 'minecraft:melon_seeds',
                render: 'minecraft:melon',
                plant: 'minecraft:melon',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:cantaloupe_seeds',
                render: 'simplefarming:cantaloupe_crop',
                plant: 'simplefarming:cantaloupe_block',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:honeydew_seeds',
                render: 'simplefarming:honeydew_crop',
                plant: 'simplefarming:honeydew_block',
                plantSecondary: '',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_root',
        crops: [
            {
                seed: 'farmersdelight:onion',
                render: 'farmersdelight:onions',
                plant: 'farmersdelight:onion',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:beetroot_seeds',
                render: 'minecraft:beetroots',
                plant: 'minecraft:beetroot',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:carrot',
                render: 'minecraft:carrots',
                plant: 'minecraft:carrot',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:potato',
                render: 'minecraft:potatoes',
                plant: 'minecraft:potato',
                plantSecondary: 'minecraft:poisonous_potato',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:cassava_seeds',
                render: 'simplefarming:cassava_crop',
                plant: 'simplefarming:cassava',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:chicory_root',
                render: 'simplefarming:chicory',
                plant: 'simplefarming:chicory_root',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:ginger_seeds',
                render: 'simplefarming:ginger_crop',
                plant: 'simplefarming:ginger',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:marshmallow_root',
                render: 'simplefarming:marshmallow',
                plant: 'simplefarming:marshmallow_root',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:onion_seeds',
                render: 'simplefarming:onion_crop',
                plant: 'simplefarming:onion',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:radish_seeds',
                render: 'simplefarming:radish_crop',
                plant: 'simplefarming:radish',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:sweet_potato_seeds',
                render: 'simplefarming:sweet_potato_crop',
                plant: 'simplefarming:sweet_potato',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:turnip_seeds',
                render: 'simplefarming:turnip_crop',
                plant: 'simplefarming:turnip',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:yam_seeds',
                render: 'simplefarming:yam_crop',
                plant: 'simplefarming:yam',
                plantSecondary: '',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_seed',
        crops: [
            {
                seed: 'simplefarming:cumin_seeds',
                render: 'simplefarming:cumin',
                plant: 'simplefarming:cumin_seeds',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:peanut_seeds',
                render: 'simplefarming:peanut_crop',
                plant: 'simplefarming:peanut',
                plantSecondary: '',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'crop_vine',
        crops: [
            {
                seed: 'farmersdelight:tomato_seeds',
                render: 'farmersdelight:wild_tomatoes',
                plant: 'farmersdelight:tomato',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'simplefarming:tomato_seeds',
                render: 'simplefarming:tomato_crop',
                plant: 'simplefarming:tomato',
                plantSecondary: '',
                substrate: 'dirt'
            }
        ]
    },
    {
        type: 'flower',
        crops: [
            {
                seed: 'botania:black_mystical_flower',
                render: 'botania:black_mystical_flower',
                plant: 'botania:black_mystical_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'botania:blue_mystical_flower',
                render: 'botania:blue_mystical_flower',
                plant: 'botania:blue_mystical_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'botania:brown_mystical_flower',
                render: 'botania:brown_mystical_flower',
                plant: 'botania:brown_mystical_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'botania:cyan_mystical_flower',
                render: 'botania:cyan_mystical_flower',
                plant: 'botania:cyan_mystical_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'botania:gray_mystical_flower',
                render: 'botania:gray_mystical_flower',
                plant: 'botania:gray_mystical_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'botania:green_mystical_flower',
                render: 'botania:green_mystical_flower',
                plant: 'botania:green_mystical_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'botania:light_blue_mystical_flower',
                render: 'botania:light_blue_mystical_flower',
                plant: 'botania:light_blue_mystical_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'botania:light_gray_mystical_flower',
                render: 'botania:light_gray_mystical_flower',
                plant: 'botania:light_gray_mystical_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'botania:lime_mystical_flower',
                render: 'botania:lime_mystical_flower',
                plant: 'botania:lime_mystical_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'botania:magenta_mystical_flower',
                render: 'botania:magenta_mystical_flower',
                plant: 'botania:magenta_mystical_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'botania:orange_mystical_flower',
                render: 'botania:orange_mystical_flower',
                plant: 'botania:orange_mystical_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'botania:pink_mystical_flower',
                render: 'botania:pink_mystical_flower',
                plant: 'botania:pink_mystical_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'botania:purple_mystical_flower',
                render: 'botania:purple_mystical_flower',
                plant: 'botania:purple_mystical_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'botania:red_mystical_flower',
                render: 'botania:red_mystical_flower',
                plant: 'botania:red_mystical_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'botania:white_mystical_flower',
                render: 'botania:white_mystical_flower',
                plant: 'botania:white_mystical_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'botania:yellow_mystical_flower',
                render: 'botania:yellow_mystical_flower',
                plant: 'botania:yellow_mystical_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:allium_flower_bush',
                render: 'byg:allium_flower_bush',
                plant: 'byg:allium_flower_bush',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:alpine_bellflower',
                render: 'byg:alpine_bellflower',
                plant: 'byg:alpine_bellflower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:amaranth',
                render: 'byg:amaranth',
                plant: 'byg:amaranth',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:angelica',
                render: 'byg:angelica',
                plant: 'byg:angelica',
                plantSecondary: '',
                substrate: 'dirt'
            },
            { seed: 'byg:azalea', render: 'byg:azalea', plant: 'byg:azalea', plantSecondary: '', substrate: 'dirt' },
            { seed: 'byg:begonia', render: 'byg:begonia', plant: 'byg:begonia', plantSecondary: '', substrate: 'dirt' },
            { seed: 'byg:bistort', render: 'byg:bistort', plant: 'byg:bistort', plantSecondary: '', substrate: 'dirt' },
            {
                seed: 'byg:black_rose',
                render: 'byg:black_rose',
                plant: 'byg:black_rose',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:blue_sage',
                render: 'byg:blue_sage',
                plant: 'byg:blue_sage',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:california_poppy',
                render: 'byg:california_poppy',
                plant: 'byg:california_poppy',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:clover_patch',
                render: 'byg:clover_patch',
                plant: 'byg:clover_patch',
                plantSecondary: '',
                substrate: 'dirt'
            },
            { seed: 'byg:crocus', render: 'byg:crocus', plant: 'byg:crocus', plantSecondary: '', substrate: 'dirt' },
            {
                seed: 'byg:cyan_amaranth',
                render: 'byg:cyan_amaranth',
                plant: 'byg:cyan_amaranth',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:cyan_rose',
                render: 'byg:cyan_rose',
                plant: 'byg:cyan_rose',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:cyan_tulip',
                render: 'byg:cyan_tulip',
                plant: 'byg:cyan_tulip',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:daffodil',
                render: 'byg:daffodil',
                plant: 'byg:daffodil',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:delphinium',
                render: 'byg:delphinium',
                plant: 'byg:delphinium',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:fairy_slipper',
                render: 'byg:fairy_slipper',
                plant: 'byg:fairy_slipper',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:firecracker_flower_bush',
                render: 'byg:firecracker_flower_bush',
                plant: 'byg:firecracker_flower_bush',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:foxglove',
                render: 'byg:foxglove',
                plant: 'byg:foxglove',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:green_tulip',
                render: 'byg:green_tulip',
                plant: 'byg:green_tulip',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:guzmania',
                render: 'byg:guzmania',
                plant: 'byg:guzmania',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:incan_lily',
                render: 'byg:incan_lily',
                plant: 'byg:incan_lily',
                plantSecondary: '',
                substrate: 'dirt'
            },
            { seed: 'byg:iris', render: 'byg:iris', plant: 'byg:iris', plantSecondary: '', substrate: 'dirt' },
            {
                seed: 'byg:japanese_orchid',
                render: 'byg:japanese_orchid',
                plant: 'byg:japanese_orchid',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:kovan_flower',
                render: 'byg:kovan_flower',
                plant: 'byg:kovan_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:lazarus_bellflower',
                render: 'byg:lazarus_bellflower',
                plant: 'byg:lazarus_bellflower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:lolipop_flower',
                render: 'byg:lolipop_flower',
                plant: 'byg:lolipop_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:magenta_amaranth',
                render: 'byg:magenta_amaranth',
                plant: 'byg:magenta_amaranth',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:magenta_tulip',
                render: 'byg:magenta_tulip',
                plant: 'byg:magenta_tulip',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:orange_amaranth',
                render: 'byg:orange_amaranth',
                plant: 'byg:orange_amaranth',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:orange_daisy',
                render: 'byg:orange_daisy',
                plant: 'byg:orange_daisy',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:osiria_rose',
                render: 'byg:osiria_rose',
                plant: 'byg:osiria_rose',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:peach_leather_flower',
                render: 'byg:peach_leather_flower',
                plant: 'byg:peach_leather_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:pink_allium',
                render: 'byg:pink_allium',
                plant: 'byg:pink_allium',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:pink_allium_flower_bush',
                render: 'byg:pink_allium_flower_bush',
                plant: 'byg:pink_allium_flower_bush',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:pink_anemone',
                render: 'byg:pink_anemone',
                plant: 'byg:pink_anemone',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:pink_daffodil',
                render: 'byg:pink_daffodil',
                plant: 'byg:pink_daffodil',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:pink_orchid',
                render: 'byg:pink_orchid',
                plant: 'byg:pink_orchid',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:protea_flower',
                render: 'byg:protea_flower',
                plant: 'byg:protea_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:purple_amaranth',
                render: 'byg:purple_amaranth',
                plant: 'byg:purple_amaranth',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:purple_orchid',
                render: 'byg:purple_orchid',
                plant: 'byg:purple_orchid',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:purple_sage',
                render: 'byg:purple_sage',
                plant: 'byg:purple_sage',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:purple_tulip',
                render: 'byg:purple_tulip',
                plant: 'byg:purple_tulip',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:red_cornflower',
                render: 'byg:red_cornflower',
                plant: 'byg:red_cornflower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:red_orchid',
                render: 'byg:red_orchid',
                plant: 'byg:red_orchid',
                plantSecondary: '',
                substrate: 'dirt'
            },
            { seed: 'byg:richea', render: 'byg:richea', plant: 'byg:richea', plantSecondary: '', substrate: 'dirt' },
            { seed: 'byg:rose', render: 'byg:rose', plant: 'byg:rose', plantSecondary: '', substrate: 'dirt' },
            {
                seed: 'byg:silver_vase_flower',
                render: 'byg:silver_vase_flower',
                plant: 'byg:silver_vase_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:snowdrops',
                render: 'byg:snowdrops',
                plant: 'byg:snowdrops',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:tall_allium',
                render: 'byg:tall_allium',
                plant: 'byg:tall_allium',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:tall_pink_allium',
                render: 'byg:tall_pink_allium',
                plant: 'byg:tall_pink_allium',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:torch_ginger',
                render: 'byg:torch_ginger',
                plant: 'byg:torch_ginger',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:violet_leather_flower',
                render: 'byg:violet_leather_flower',
                plant: 'byg:violet_leather_flower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:white_anemone',
                render: 'byg:white_anemone',
                plant: 'byg:white_anemone',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:white_sage',
                render: 'byg:white_sage',
                plant: 'byg:white_sage',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:winter_cyclamen',
                render: 'byg:winter_cyclamen',
                plant: 'byg:winter_cyclamen',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:winter_rose',
                render: 'byg:winter_rose',
                plant: 'byg:winter_rose',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:winter_scilla',
                render: 'byg:winter_scilla',
                plant: 'byg:winter_scilla',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:winter_succulent',
                render: 'byg:winter_succulent',
                plant: 'byg:winter_succulent',
                plantSecondary: '',
                substrate: 'grass'
            },
            {
                seed: 'byg:yellow_daffodil',
                render: 'byg:yellow_daffodil',
                plant: 'byg:yellow_daffodil',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:yellow_tulip',
                render: 'byg:yellow_tulip',
                plant: 'byg:yellow_tulip',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:allium',
                render: 'minecraft:allium',
                plant: 'minecraft:allium',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:azure_bluet',
                render: 'minecraft:azure_bluet',
                plant: 'minecraft:azure_bluet',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:blue_orchid',
                render: 'minecraft:blue_orchid',
                plant: 'minecraft:blue_orchid',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:cornflower',
                render: 'minecraft:cornflower',
                plant: 'minecraft:cornflower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:dandelion',
                render: 'minecraft:dandelion',
                plant: 'minecraft:dandelion',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:lilac',
                render: 'minecraft:lilac',
                plant: 'minecraft:lilac',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:lily_of_the_valley',
                render: 'minecraft:lily_of_the_valley',
                plant: 'minecraft:lily_of_the_valley',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:orange_tulip',
                render: 'minecraft:orange_tulip',
                plant: 'minecraft:orange_tulip',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:oxeye_daisy',
                render: 'minecraft:oxeye_daisy',
                plant: 'minecraft:oxeye_daisy',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:peony',
                render: 'minecraft:peony',
                plant: 'minecraft:peony',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:pink_tulip',
                render: 'minecraft:pink_tulip',
                plant: 'minecraft:pink_tulip',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:poppy',
                render: 'minecraft:poppy',
                plant: 'minecraft:poppy',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:red_tulip',
                render: 'minecraft:red_tulip',
                plant: 'minecraft:red_tulip',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:rose_bush',
                render: 'minecraft:rose_bush',
                plant: 'minecraft:rose_bush',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:sunflower',
                render: 'minecraft:sunflower',
                plant: 'minecraft:sunflower',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:white_tulip',
                render: 'minecraft:white_tulip',
                plant: 'minecraft:white_tulip',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:wither_rose',
                render: 'minecraft:wither_rose',
                plant: 'minecraft:wither_rose',
                plantSecondary: '',
                substrate: 'soul_sand'
            },
            {
                seed: 'undergarden:ditchbulb',
                render: 'undergarden:ditchbulb',
                plant: 'undergarden:ditchbulb',
                plantSecondary: '',
                substrate: 'deepturf'
            },
            {
                seed: 'undergarden:shimmerweed',
                render: 'undergarden:shimmerweed',
                plant: 'undergarden:shimmerweed',
                plantSecondary: '',
                substrate: 'deepturf'
            }
        ]
    },
    {
        type: 'grass_like',
        crops: [
            {
                seed: 'byg:beach_grass',
                render: 'byg:beach_grass',
                plant: 'byg:beach_grass',
                plantSecondary: '',
                substrate: 'grass'
            },
            {
                seed: 'byg:embur_roots',
                render: 'byg:embur_roots',
                plant: 'byg:embur_roots',
                plantSecondary: '',
                substrate: 'nether'
            },
            {
                seed: 'byg:ether_foliage',
                render: 'byg:ether_foliage',
                plant: 'byg:ether_foliage',
                plantSecondary: '',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:ether_grass',
                render: 'byg:ether_grass',
                plant: 'byg:ether_grass',
                plantSecondary: '',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:flower_patch',
                render: 'byg:flower_patch',
                plant: 'byg:flower_patch',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:ivis_roots',
                render: 'byg:ivis_roots',
                plant: 'byg:ivis_roots',
                plantSecondary: '',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:ivis_sprout',
                render: 'byg:ivis_sprout',
                plant: 'byg:ivis_sprout',
                plantSecondary: '',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:lament_sprouts',
                render: 'byg:lament_sprouts',
                plant: 'byg:lament_sprouts',
                plantSecondary: '',
                substrate: 'nether'
            },
            {
                seed: 'byg:leaf_pile',
                render: 'byg:leaf_pile',
                plant: 'byg:leaf_pile',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:nightshade_roots',
                render: 'byg:nightshade_roots',
                plant: 'byg:nightshade_roots',
                plantSecondary: '',
                substrate: 'nether'
            },
            {
                seed: 'byg:nightshade_sprouts',
                render: 'byg:nightshade_sprouts',
                plant: 'byg:nightshade_sprouts',
                plantSecondary: '',
                substrate: 'nether'
            },
            {
                seed: 'byg:pink_cherry_foliage',
                render: 'byg:pink_cherry_foliage',
                plant: 'byg:pink_cherry_foliage',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:poison_ivy',
                render: 'byg:poison_ivy',
                plant: 'byg:poison_ivy',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:prairie_grass',
                render: 'byg:prairie_grass',
                plant: 'byg:prairie_grass',
                plantSecondary: '',
                substrate: 'grass'
            },
            {
                seed: 'byg:scorched_grass',
                render: 'byg:scorched_grass',
                plant: 'byg:scorched_grass',
                plantSecondary: '',
                substrate: 'nether'
            },
            {
                seed: 'byg:short_beach_grass',
                render: 'byg:short_beach_grass',
                plant: 'byg:short_beach_grass',
                plantSecondary: '',
                substrate: 'grass'
            },
            {
                seed: 'byg:short_grass',
                render: 'byg:short_grass',
                plant: 'byg:short_grass',
                plantSecondary: '',
                substrate: 'grass'
            },
            {
                seed: 'byg:shulkren_moss_blanket',
                render: 'byg:shulkren_moss_blanket',
                plant: 'byg:shulkren_moss_blanket',
                plantSecondary: '',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:shulkren_moss_blanket',
                render: 'byg:shulkren_moss_blanket',
                plant: 'byg:shulkren_moss_blanket',
                plantSecondary: '',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:sythian_roots',
                render: 'byg:sythian_roots',
                plant: 'byg:sythian_roots',
                plantSecondary: '',
                substrate: 'nether'
            },
            {
                seed: 'byg:sythian_sprout',
                render: 'byg:sythian_sprout',
                plant: 'byg:sythian_sprout',
                plantSecondary: '',
                substrate: 'nether'
            },
            {
                seed: 'byg:vermilion_sculk_growth',
                render: 'byg:vermilion_sculk_growth',
                plant: 'byg:vermilion_sculk_growth',
                plantSecondary: '',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:vermilion_sculk_tendrils',
                render: 'byg:vermilion_sculk_tendrils',
                plant: 'byg:vermilion_sculk_tendrils',
                plantSecondary: '',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:warped_bush',
                render: 'byg:warped_bush',
                plant: 'byg:warped_bush',
                plantSecondary: '',
                substrate: 'soul_sand'
            },
            {
                seed: 'byg:weed_grass',
                render: 'byg:weed_grass',
                plant: 'byg:weed_grass',
                plantSecondary: '',
                substrate: 'grass'
            },
            {
                seed: 'byg:whaling_grass',
                render: 'byg:whaling_grass',
                plant: 'byg:whaling_grass',
                plantSecondary: '',
                substrate: 'nether'
            },
            {
                seed: 'byg:white_cherry_foliage',
                render: 'byg:white_cherry_foliage',
                plant: 'byg:white_cherry_foliage',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:wilted_grass',
                render: 'byg:wilted_grass',
                plant: 'byg:wilted_grass',
                plantSecondary: '',
                substrate: 'grass'
            },
            {
                seed: 'byg:winter_grass',
                render: 'byg:winter_grass',
                plant: 'byg:winter_grass',
                plantSecondary: '',
                substrate: 'grass'
            },
            {
                seed: 'minecraft:crimson_roots',
                render: 'minecraft:crimson_roots',
                plant: 'minecraft:crimson_roots',
                plantSecondary: '',
                substrate: 'crimson_nylium'
            },
            {
                seed: 'minecraft:fern',
                render: 'minecraft:fern',
                plant: 'minecraft:fern',
                plantSecondary: '',
                substrate: 'grass'
            },
            {
                seed: 'minecraft:grass',
                render: 'minecraft:grass',
                plant: 'minecraft:grass',
                plantSecondary: '',
                substrate: 'grass'
            },
            {
                seed: 'minecraft:nether_sprouts',
                render: 'minecraft:nether_sprouts',
                plant: 'minecraft:nether_sprouts',
                plantSecondary: '',
                substrate: 'nether'
            },
            {
                seed: 'minecraft:seagrass',
                render: 'minecraft:seagrass',
                plant: 'minecraft:seagrass',
                plantSecondary: '',
                substrate: 'water'
            },
            {
                seed: 'minecraft:warped_roots',
                render: 'minecraft:warped_roots',
                plant: 'minecraft:warped_roots',
                plantSecondary: '',
                substrate: 'warped_nylium'
            },
            {
                seed: 'undergarden:ashen_deepturf',
                render: 'undergarden:ashen_deepturf',
                plant: 'undergarden:ashen_deepturf',
                plantSecondary: '',
                substrate: 'deepturf'
            },
            {
                seed: 'undergarden:ashen_deepturf',
                render: 'undergarden:ashen_deepturf',
                plant: 'undergarden:ashen_deepturf',
                plantSecondary: '',
                substrate: 'deepturf'
            },
            {
                seed: 'undergarden:deepturf',
                render: 'undergarden:deepturf',
                plant: 'undergarden:deepturf',
                plantSecondary: '',
                substrate: 'deepturf'
            }
        ]
    },
    {
        type: 'kelp_like',
        crops: [
            {
                seed: 'minecraft:kelp',
                render: 'minecraft:kelp_plant',
                plant: 'minecraft:kelp',
                plantSecondary: '',
                substrate: 'water'
            },
            {
                seed: 'undergarden:glowing_kelp',
                render: 'undergarden:glowing_kelp_plant',
                plant: 'undergarden:glowing_kelp',
                plantSecondary: '',
                substrate: 'water'
            }
        ]
    },
    {
        type: 'lily_like',
        crops: [
            {
                seed: 'byg:tiny_lilypads',
                render: 'byg:tiny_lilypads',
                plant: 'byg:tiny_lilypads',
                plantSecondary: '',
                substrate: 'water'
            },
            {
                seed: 'byg:water_silk',
                render: 'byg:water_silk',
                plant: 'byg:water_silk',
                plantSecondary: '',
                substrate: 'water'
            },
            {
                seed: 'minecraft:lily_pad',
                render: 'minecraft:lily_pad',
                plant: 'minecraft:lily_pad',
                plantSecondary: '',
                substrate: 'water'
            }
        ]
    },
    {
        type: 'shroom',
        crops: [
            {
                seed: 'botania:black_mushroom',
                render: 'botania:black_mushroom',
                plant: 'botania:black_mushroom',
                plantSecondary: '',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:blue_mushroom',
                render: 'botania:blue_mushroom',
                plant: 'botania:blue_mushroom',
                plantSecondary: '',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:brown_mushroom',
                render: 'botania:brown_mushroom',
                plant: 'botania:brown_mushroom',
                plantSecondary: '',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:cyan_mushroom',
                render: 'botania:cyan_mushroom',
                plant: 'botania:cyan_mushroom',
                plantSecondary: '',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:gray_mushroom',
                render: 'botania:gray_mushroom',
                plant: 'botania:gray_mushroom',
                plantSecondary: '',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:green_mushroom',
                render: 'botania:green_mushroom',
                plant: 'botania:green_mushroom',
                plantSecondary: '',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:light_blue_mushroom',
                render: 'botania:light_blue_mushroom',
                plant: 'botania:light_blue_mushroom',
                plantSecondary: '',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:light_gray_mushroom',
                render: 'botania:light_gray_mushroom',
                plant: 'botania:light_gray_mushroom',
                plantSecondary: '',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:lime_mushroom',
                render: 'botania:lime_mushroom',
                plant: 'botania:lime_mushroom',
                plantSecondary: '',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:magenta_mushroom',
                render: 'botania:magenta_mushroom',
                plant: 'botania:magenta_mushroom',
                plantSecondary: '',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:orange_mushroom',
                render: 'botania:orange_mushroom',
                plant: 'botania:orange_mushroom',
                plantSecondary: '',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:pink_mushroom',
                render: 'botania:pink_mushroom',
                plant: 'botania:pink_mushroom',
                plantSecondary: '',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:purple_mushroom',
                render: 'botania:purple_mushroom',
                plant: 'botania:purple_mushroom',
                plantSecondary: '',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:red_mushroom',
                render: 'botania:red_mushroom',
                plant: 'botania:red_mushroom',
                plantSecondary: '',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:white_mushroom',
                render: 'botania:white_mushroom',
                plant: 'botania:white_mushroom',
                plantSecondary: '',
                substrate: 'mushroom'
            },
            {
                seed: 'botania:yellow_mushroom',
                render: 'botania:yellow_mushroom',
                plant: 'botania:yellow_mushroom',
                plantSecondary: '',
                substrate: 'mushroom'
            },
            {
                seed: 'minecraft:nether_wart',
                render: 'minecraft:nether_wart',
                plant: 'minecraft:nether_wart',
                plantSecondary: '',
                substrate: 'soul_sand'
            },
            {
                seed: 'minecraft:sea_pickle',
                render: 'minecraft:sea_pickle',
                plant: 'minecraft:sea_pickle',
                plantSecondary: '',
                substrate: 'water'
            }
        ]
    },
    {
        type: 'shrub',
        crops: [
            {
                seed: 'byg:blueberries',
                render: 'byg:blueberry_bush',
                plant: 'byg:blueberries',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'byg:nether_bristle',
                render: 'byg:nether_bristle',
                plant: 'byg:nether_bristle',
                plantSecondary: '',
                substrate: 'nether'
            },
            {
                seed: 'minecraft:sweet_berries',
                render: 'minecraft:sweet_berry_bush',
                plant: 'minecraft:sweet_berries',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'undergarden:blisterberry',
                render: 'undergarden:blisterberry_bush',
                plant: 'undergarden:blisterberry',
                plantSecondary: 'undergarden:rotten_blisterberry',
                substrate: 'deepturf'
            },
            {
                seed: 'undergarden:underbeans',
                render: 'undergarden:underbean_bush',
                plant: 'undergarden:underbeans',
                plantSecondary: '',
                substrate: 'deepturf'
            }
        ]
    },
    {
        type: 'vine',
        crops: [
            {
                seed: 'byg:lament_vine',
                render: 'byg:lament_vine_plant',
                plant: 'byg:lament_vine',
                plantSecondary: '',
                substrate: 'nether'
            },
            {
                seed: 'byg:shulkren_vine',
                render: 'byg:shulkren_vine_plant',
                plant: 'byg:shulkren_vine',
                plantSecondary: '',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:skyris_vine',
                render: 'byg:skyris_vine',
                plant: 'byg:skyris_vine',
                plantSecondary: '',
                substrate: 'end_stone'
            },
            {
                seed: 'byg:soul_shroom_spore_end',
                render: 'byg:soul_shroom_spore_end',
                plant: 'byg:soul_shroom_spore_end',
                plantSecondary: '',
                substrate: 'nether'
            },
            {
                seed: 'byg:weeping_roots',
                render: 'byg:weeping_roots',
                plant: 'byg:weeping_roots',
                plantSecondary: '',
                substrate: 'nether'
            },
            {
                seed: 'byg:whaling_vine',
                render: 'byg:whaling_vine',
                plant: 'byg:whaling_vine',
                plantSecondary: '',
                substrate: 'end_stone'
            },
            {
                seed: 'minecraft:twisting_vines',
                render: 'minecraft:twisting_vines_plant',
                plant: 'minecraft:twisting_vines',
                plantSecondary: '',
                substrate: 'warped_nylium'
            },
            {
                seed: 'minecraft:vine',
                render: 'minecraft:vine',
                plant: 'minecraft:vine',
                plantSecondary: '',
                substrate: 'dirt'
            },
            {
                seed: 'minecraft:weeping_vines',
                render: 'minecraft:weeping_vines_plant',
                plant: 'minecraft:weeping_vines',
                plantSecondary: '',
                substrate: 'crimson_nylium'
            },
            {
                seed: 'undergarden:droopvine_item',
                render: 'undergarden:droopvine',
                plant: 'undergarden:droopvine_item',
                plantSecondary: '',
                substrate: 'nether'
            }
        ]
    }
];
