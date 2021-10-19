//priority: 1001

const air = 'minecraft:air';

// priority of which mod output should come from, if applicable
const modPriorities = [
    'emendatusenigmatica',
    'minecraft',
    'immersiveengineering',
    'thermal',
    'mekanism',
    'kubejs',
    'pneumaticcraft',
    'create',
    'occultism',
    'industrialforegoing',
    'botania',
    'quark',
    'pedestals',
    'refinedstorage',
    'mapperbase',
    'bloodmagic',
    'eidolon',
    'morevanillalib',
    'titanium',
    'mythicbotany',
    'undergarden',
    'byg',
    'atum',
    'betterendforge',
    'miniutilities'
];

const lootChests = ['lootr:lootr_chest', 'lootr:lootr_barrel', 'lootr:lootr_trapped_chest'];

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

// Quark Crystal Cluster Colors

const quark_crystal_colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];

// Used for tag generation
const createStoneTypes = [
    'scoria',
    'limestone',
    'weathered_limestone',
    'dolomite',
    'gabbro',
    'dark_scoria',
    'natural_scoria'
];

const normalMode = global.packmode == 'normal';
const expertMode = global.packmode == 'expert';
