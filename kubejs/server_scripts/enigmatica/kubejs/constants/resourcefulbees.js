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

const combVariants = [ //keep changes synced to "startup_scripts/item_registry.js", bees constant
    'aluminum',
    'blaze',
    'boobee',
    'brass',
    'bronze',
    'catnip',
    'clay',
    'coal',
    'constantan',
    'copper',
    'creeper',
    'diamond',
    'electrum',
    'emerald',
    'ender',
    'enderium',
    'ghast',
    'glowstone',
    'gold',
    'gravel',
    'icy',
    'invar',
    'iron',
    'lapis',
    'lead',
    'lumium',
    'netherite',
    'nether_quartz',
    'nickel',
    'obsidian',
    'osmium',
    'pigman',
    'redstone',
    'rgbee',
    'sand',
    'signalum',
    'silver',
    'skeleton',
    'slimy',
    'steel',
    'tin',
    'uranium',
    'water',
    'wither',
    'zinc',
    'zombie',
    'forest',
    'rocky',
    'industrious',
    'bloody',
    'elven',
    'infused',
    'mana',
    'sky',
    'starry',
    'tainted',
    'terrestrial',
    'enderslime',
    'ichor',
    'skyslime',
    'cobalt',
    'soup',
    'clockwork',
    'spelling',
    'wasabee',
    'basalz',
    'blitz',
    'blizz',
    'direbee20',
    'generikbee',
    'otherworldly',
    'carbee',
    'dusty_mummbee',
    'brutish_zombee',
    'shepherd',
    'clogged',
    'regal',
    'frosty'
];

const bees = [];

combVariants.forEach((bee) => {
    bees.push(bee)
})

let moreBees = [
    'starry_lexxie',
    'kitten',
    'oreo',
    'yeti',
    'abbee'
];

moreBees.forEach((bee) => {
    bees.push(bee);
})