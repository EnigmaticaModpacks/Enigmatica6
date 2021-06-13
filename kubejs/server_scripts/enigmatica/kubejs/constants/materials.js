//priority: 1010

// Used to determine which materials to unify
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
    'charged_certus_quartz',
    'iesnium',
    'dimensional',
    'cloggrum',
    'froststeel',
    'regalium',
    'utherium',
    'coal_coke',
    'starmetal',
    'amber',
    'cobalt',
    'queens_slime',
    'rose_gold',
    'tinkers_bronze',
    'knightslime',
    'slimesteel',
    'manyullyn',
    'soulsteel',
    'hepatizon'
];

// Used to determine which material types to unify
const typesToUnify = ['nugget', 'ingot', 'gem', 'storage_block', 'ore', 'dust', 'gear', 'plate', 'rod'];

const oreProcessingSecondaries = {
    iron: {
        secondary: 'nickel',
        createProcessingTime: 400
    },
    nickel: {
        secondary: 'iron',
        createProcessingTime: 350
    },
    gold: {
        secondary: 'zinc',
        createProcessingTime: 300
    },
    copper: {
        secondary: 'gold',
        createProcessingTime: 350
    },
    aluminum: {
        secondary: 'iron',
        createProcessingTime: 300
    },
    lead: {
        secondary: 'silver',
        createProcessingTime: 300
    },
    silver: {
        secondary: 'lead',
        createProcessingTime: 300
    },
    uranium: {
        secondary: 'lead',
        createProcessingTime: 400
    },
    osmium: {
        secondary: 'tin',
        createProcessingTime: 400
    },
    tin: {
        secondary: 'osmium',
        createProcessingTime: 350
    },
    zinc: {
        secondary: 'gold',
        createProcessingTime: 350
    },
    nebu: {
        secondary: 'uranium',
        createProcessingTime: 400
    }
};

const gemProcessingProperties = {
    redstone: {
        create: {
            primaryCount: 8,
            secondaryCount: 6,
            secondaryChance: 0.25,
            stoneOutput: 'minecraft:cobblestone',
            output: 'dust',
            processingTime: 300
        }
    },
    coal: {
        create: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.5,
            stoneOutput: 'minecraft:cobblestone',
            output: 'gem',
            processingTime: 300
        }
    },
    diamond: {
        create: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.25,
            stoneOutput: 'minecraft:cobblestone',
            output: 'gem',
            processingTime: 500
        }
    },
    emerald: {
        create: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.25,
            stoneOutput: 'minecraft:cobblestone',
            output: 'gem',
            processingTime: 500
        }
    },
    lapis: {
        create: {
            primaryCount: 8,
            secondaryCount: 4,
            secondaryChance: 0.5,
            stoneOutput: 'minecraft:cobblestone',
            output: 'gem',
            processingTime: 300
        }
    },
    quartz: {
        create: {
            primaryCount: 2,
            secondaryCount: 4,
            secondaryChance: 0.5,
            stoneOutput: 'minecraft:netherrack',
            output: 'gem',
            processingTime: 350
        }
    },
    sulfur: {
        create: {
            primaryCount: 6,
            secondaryCount: 2,
            secondaryChance: 0.25,
            stoneOutput: 'minecraft:cobblestone',
            output: 'gem',
            processingTime: 300
        }
    },
    apatite: {
        create: {
            primaryCount: 8,
            secondaryCount: 4,
            secondaryChance: 0.25,
            stoneOutput: 'minecraft:cobblestone',
            output: 'gem',
            processingTime: 300
        }
    },
    fluorite: {
        create: {
            primaryCount: 6,
            secondaryCount: 3,
            secondaryChance: 0.25,
            stoneOutput: 'minecraft:cobblestone',
            output: 'gem',
            processingTime: 300
        }
    },
    dimensional: {
        create: {
            primaryCount: 6,
            secondaryCount: 3,
            secondaryChance: 0.25,
            stoneOutput: 'minecraft:cobblestone',
            output: 'gem',
            processingTime: 300
        }
    },
    ender: {
        create: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.25,
            stoneOutput: 'betterendforge:endstone_dust',
            output: 'shard',
            processingTime: 300
        }
    },
    amber: {
        create: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.25,
            stoneOutput: 'betterendforge:endstone_dust',
            output: 'shard',
            processingTime: 300
        }
    },
    potassium_nitrate: {
        create: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.25,
            stoneOutput: 'betterendforge:endstone_dust',
            output: 'gem',
            processingTime: 300
        }
    }
};
