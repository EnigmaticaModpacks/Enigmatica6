//priority: 1001

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
