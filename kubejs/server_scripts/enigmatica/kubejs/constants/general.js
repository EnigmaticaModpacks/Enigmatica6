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

/* 
    The Aura Cache and Aura Trove, when charged on a player, fill to a random amount somewhere shy of their max. 
    Otherwise it would need to be charged in an altar to get to full. This lets any nearly full cache be used for crafting.
    */
const aura_trove_astral_recipes = [],
    aura_cache_astral_recipes = [];

for (let i = 0; i <= 2000; i++) {
    aura_trove_astral_recipes.push({
        type: 'forge:nbt',
        item: 'naturesaura:aura_trove',
        count: 1,
        nbt: `{aura:${1200000 - i}}`
    });

    aura_cache_astral_recipes.push({
        type: 'forge:nbt',
        item: 'naturesaura:aura_cache',
        count: 1,
        nbt: `{aura:${400000 - i}}`
    });
}

const normalMode = global.packmode == 'normal';
const expertMode = global.packmode == 'expert';
