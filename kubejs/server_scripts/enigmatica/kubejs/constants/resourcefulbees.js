//priority: 1000

// Items added here will get the 'valid_apiary' tag, and be usable as Apiary multiblock walls.
// This is in addition to all blocks that have collision.
const validApiaryBlocks = [
    'glassential:glass_dark',
    'glassential:glass_dark_ethereal',
    'glassential:glass_ethereal',
    'glassential:glass_light',
    'glassential:glass_redstone'
];

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
    'resourcefulbees:wither_honey',
    'resourcefulbees:illuminating_honey',
    'resourcefulbees:rocky_honey',
    'resourcefulbees:meaty_honey',
    'resourcefulbees:rocket_honey',
    'resourcefulbees:mana_honey',
    'resourcefulbees:otherworldly_honey'
];

const combVariants = [
    //keep changes synced to "startup_scripts/item_registry.js", bees constant
    // alloy
    'brass',
    'bronze',
    'constantan',
    'electrum',
    'enderium',
    'invar',
    'lumium',
    'signalum',
    'steel',
    // dev
    'catnip',
    // gem
    'diamond',
    'emerald',
    'lapis',
    'redstone',
    // magic
    'bloody',
    'carbee',
    'elven',
    'infused',
    'mana',
    'otherworldly',
    'sky',
    'starry',
    'tainted',
    'terrestrial',
    // material
    'clay',
    'enderslime',
    'gravel',
    'ichor',
    'shepherd',
    'skyslime',
    // metal
    'aluminum',
    'cobalt',
    'copper',
    'frosty',
    'gold',
    'iron',
    'lead',
    'nickel',
    'osmium',
    'regal',
    'silver',
    'tin',
    'uranium',
    'zinc',
    // natural
    'brutish_zombee',
    'clogged',
    'coal',
    'creeper',
    'ender',
    'forest',
    'glowstone',
    'icy',
    'obsidian',
    'pigman',
    'rgbee',
    'rocky',
    'sand',
    'skeleton',
    'slimy',
    'water',
    'zombie',
    // nether
    'blaze',
    'ghast',
    'netherite',
    'wither',
    'nether_quartz',
    // special
    'boobee',
    'clockwork',
    'direbee20',
    'dusty_mummbee',
    'generikbee',
    'soup',
    'spelling',
    'wasabee',
    // tech
    'basalz',
    'blitz',
    'blizz',
    'industrious',
    'pcbee'
];

const bees = [];

combVariants.forEach((bee) => {
    bees.push(bee);
});

let moreBees = [
    // dev
    'kitten',
    'oreo',
    'starry_lexxie',
    'yeti',
    // manual
    'abbee'
];

moreBees.forEach((bee) => {
    bees.push(bee);
});
