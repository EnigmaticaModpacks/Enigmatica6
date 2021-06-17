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
    'hepatizon',
    'thallasium',
    'nebu'
];

// Used to determine which material types to unify
const typesToUnify = ['nugget', 'ingot', 'gem', 'storage_block', 'ore', 'dust', 'gear', 'plate', 'rod'];

// Used for creating tags on custom ore processing materials
const metals = [
    'aluminum',
    'cloggrum',
    'cobalt',
    'copper',
    'froststeel',
    'gold',
    'iesnium',
    'iron',
    'lead',
    'nebu',
    'nickel',
    'osmium',
    'regalium',
    'silver',
    'thallasium',
    'tin',
    'uranium',
    'utherium',
    'zinc'
];

// Defines melting point of various materials
const meltingPoints = {
    utherium: { temp: 1212 },
    thallasium: { temp: 800 },
    signalum: { temp: 1272 },
    regalium: { temp: 900 },
    nebu: { temp: 1400 },
    lumium: { temp: 1354 },
    iesnium: { temp: 1450 },
    froststeel: { temp: 1380 },
    enderium: { temp: 1450 },
    cloggrum: { temp: 800 },
    sulfur: { temp: 115 },
    redstone: { temp: 660 },
    potassium_nitrate: { temp: 334 },
    lapis: { temp: 115 },
    fluorite: { temp: 1418 },
    dimensional: { temp: 1450 },
    coal: { temp: 1149 },
    cinnabar: { temp: 580 },
    bitumen: { temp: 115 },
    apatite: { temp: 1660 }
};

// Defines the secondary metal each metal type will produce.
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
    },
    cobalt: {
        secondary: 'iron',
        createProcessingTime: 400
    },
    cloggrum: {
        secondary: 'lead',
        createProcessingTime: 300
    },
    froststeel: {
        secondary: 'cobalt',
        createProcessingTime: 400
    },
    regalium: {
        secondary: 'utherium',
        createProcessingTime: 400
    },
    utherium: {
        secondary: 'regalium',
        createProcessingTime: 400
    },
    thallasium: {
        secondary: 'thallasium',
        createProcessingTime: 300
    },
    iesnium: {
        secondary: 'silver',
        createProcessingTime: 500
    }
};

// Used to drive Unify_Materials outputs for gem processing.
const gemProcessingProperties = {
    redstone: {
        output: 'dust',
        create: {
            primaryCount: 8,
            secondaryCount: 6,
            secondaryChance: 0.25,
            stoneOutput: 'minecraft:cobblestone',
            processingTime: 300
        },
        immersiveengineering: {
            count: 6
        },
        occultism: {
            count: 6
        },
        bloodmagic: {
            count: 6
        }
    },
    coal: {
        output: 'gem',
        create: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.5,
            stoneOutput: 'minecraft:cobblestone',
            processingTime: 300
        },
        immersiveengineering: {
            count: 4,
            secondary: 'emendatusenigmatica:sulfur_dust',
            secondaryChance: 0.15
        },
        occultism: {
            count: 4
        },
        bloodmagic: {
            count: 4
        }
    },
    diamond: {
        output: 'gem',
        create: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.25,
            stoneOutput: 'minecraft:cobblestone',
            processingTime: 500
        },
        immersiveengineering: {
            count: 2
        },
        occultism: {
            count: 2
        },
        bloodmagic: {
            count: 2
        }
    },
    emerald: {
        output: 'gem',
        create: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.25,
            stoneOutput: 'minecraft:cobblestone',
            processingTime: 500
        },
        immersiveengineering: {
            count: 4
        },
        occultism: {
            count: 4
        },
        bloodmagic: {
            count: 4
        }
    },
    lapis: {
        output: 'gem',
        create: {
            primaryCount: 8,
            secondaryCount: 4,
            secondaryChance: 0.5,
            stoneOutput: 'minecraft:cobblestone',
            processingTime: 300
        },
        immersiveengineering: {
            count: 9,
            secondary: 'emendatusenigmatica:sulfur_dust',
            secondaryChance: 0.2
        },
        occultism: {
            count: 9
        },
        bloodmagic: {
            count: 9
        }
    },
    quartz: {
        output: 'gem',
        create: {
            primaryCount: 2,
            secondaryCount: 4,
            secondaryChance: 0.5,
            stoneOutput: 'minecraft:netherrack',
            processingTime: 350
        },
        immersiveengineering: {
            count: 3,
            secondary: 'emendatusenigmatica:sulfur_dust',
            secondaryChance: 0.25
        },
        occultism: {
            count: 3
        },
        bloodmagic: {
            count: 3
        }
    },
    sulfur: {
        output: 'gem',
        create: {
            primaryCount: 6,
            secondaryCount: 2,
            secondaryChance: 0.25,
            stoneOutput: 'minecraft:cobblestone',
            processingTime: 300
        },
        immersiveengineering: {
            count: 6
        },
        occultism: {
            count: 6
        },
        bloodmagic: {
            count: 6
        }
    },
    apatite: {
        output: 'gem',
        create: {
            primaryCount: 8,
            secondaryCount: 4,
            secondaryChance: 0.25,
            stoneOutput: 'minecraft:cobblestone',
            processingTime: 300
        },
        immersiveengineering: {
            count: 12
        },
        occultism: {
            count: 12
        },
        bloodmagic: {
            count: 12
        }
    },
    fluorite: {
        output: 'gem',
        create: {
            primaryCount: 6,
            secondaryCount: 3,
            secondaryChance: 0.25,
            stoneOutput: 'minecraft:cobblestone',
            processingTime: 300
        },
        immersiveengineering: {
            count: 6
        },
        occultism: {
            count: 6
        },
        bloodmagic: {
            count: 6
        }
    },
    dimensional: {
        output: 'gem',
        create: {
            primaryCount: 6,
            secondaryCount: 3,
            secondaryChance: 0.25,
            stoneOutput: 'minecraft:cobblestone',
            processingTime: 300
        },
        immersiveengineering: {
            count: 8
        },
        occultism: {
            count: 8
        },
        bloodmagic: {
            count: 8
        }
    },
    ender: {
        output: 'shard',
        create: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.25,
            stoneOutput: 'betterendforge:endstone_dust',
            processingTime: 300
        },
        immersiveengineering: {
            count: 3
        },
        occultism: {
            count: 3
        },
        bloodmagic: {
            count: 3
        }
    },
    amber: {
        output: 'shard',
        create: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.25,
            stoneOutput: 'betterendforge:endstone_dust',
            processingTime: 300
        },
        immersiveengineering: {
            count: 3
        },
        occultism: {
            count: 3
        },
        bloodmagic: {
            count: 3
        }
    },
    potassium_nitrate: {
        output: 'gem',
        create: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.25,
            stoneOutput: 'betterendforge:endstone_dust',
            processingTime: 300
        },
        immersiveengineering: {
            count: 3
        },
        occultism: {
            count: 3
        },
        bloodmagic: {
            count: 3
        }
    },
    bitumen: {
        output: 'gem',
        create: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.5,
            stoneOutput: 'minecraft:cobblestone',
            processingTime: 300
        },
        immersiveengineering: {
            count: 4
        },
        occultism: {
            count: 4
        },
        bloodmagic: {
            count: 4
        }
    },
    cinnabar: {
        output: 'gem',
        create: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.5,
            stoneOutput: 'minecraft:cobblestone',
            processingTime: 300
        },
        immersiveengineering: {
            count: 4
        },
        occultism: {
            count: 4
        },
        bloodmagic: {
            count: 4
        }
    },
    mana: {
        output: 'gem',
        create: {
            primaryCount: 2,
            secondaryCount: 2,
            secondaryChance: 0.5,
            stoneOutput: 'minecraft:cobblestone',
            processingTime: 300
        },
        immersiveengineering: {
            count: 4
        },
        occultism: {
            count: 4
        },
        bloodmagic: {
            count: 4
        }
    }
};
