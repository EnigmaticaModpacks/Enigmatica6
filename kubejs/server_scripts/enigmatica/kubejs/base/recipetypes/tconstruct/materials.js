onEvent('server.datapack.low_priority', (event) => {
    var data = [
        //tier 1
        {
            identifier: 'livingrock',
            recipes: [
                {
                    craftable: true,
                    tier: 1,
                    sortOrder: 1,
                    textColor: '#f6eed8'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 0.8,
                            miningSpeed: 1.1,
                            attackSpeed: 1.0,
                            attackDamage: 1.0
                        },
                        'tconstruct:head': {
                            durability: 191,
                            miningSpeed: 4.5,
                            harvestLevel: 1,
                            attack: 1.5
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:stonebound',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        item: 'botania:livingrock'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:livingrock'
                }
            ]
        },
        {
            identifier: 'livingwood',
            recipes: [
                {
                    craftable: true,
                    tier: 1,
                    sortOrder: 0,
                    textColor: '#291108'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 0.9,
                            miningSpeed: 1.0,
                            attackSpeed: 1.1,
                            attackDamage: 1.0
                        },
                        'tconstruct:head': {
                            durability: 68,
                            miningSpeed: 2.0,
                            harvestLevel: 0,
                            attack: 0.5
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:cultivated',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        item: 'botania:livingwood_planks'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:livingwood'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        item: 'botania:livingwood'
                    },
                    value: 4,
                    needed: 1,
                    material: 'enigmatica:livingwood'
                }
            ]
        },
        {
            identifier: 'treated_wood',
            recipes: [
                {
                    craftable: true,
                    tier: 1,
                    sortOrder: 0,
                    textColor: '#5c2d19'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 0.9,
                            miningSpeed: 1.1,
                            attackSpeed: 1.0,
                            attackDamage: 1.0
                        },
                        'tconstruct:head': {
                            durability: 60,
                            miningSpeed: 2.5,
                            harvestLevel: 0,
                            attack: 0.0
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:cultivated',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:treated_wood'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:treated_wood'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:rods/treated_wood'
                    },
                    value: 1,
                    needed: 2,
                    material: 'enigmatica:treated_wood'
                }
            ]
        },
        //tier 2
        {
            identifier: 'andesite_alloy',
            recipes: [
                {
                    craftable: false,
                    tier: 2,
                    sortOrder: 0,
                    textColor: '#a6a6a7'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 1.0,
                            miningSpeed: 1.05,
                            attackSpeed: 1.05,
                            attackDamage: 0.95
                        },
                        'tconstruct:head': {
                            durability: 200,
                            miningSpeed: 5.5,
                            harvestLevel: 2,
                            attack: 1.5
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:lightweight',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    input: 'tconstruct:stone',
                    fluid: [
                        {
                            tag: 'tconstruct:molten_iron',
                            amount: 16
                        },
                        {
                            tag: 'tconstruct:molten_zinc',
                            amount: 16
                        }
                    ],
                    temperature: 800,
                    output: 'enigmatica:andesite_alloy'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:ingots/andesite_alloy'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:andesite_alloy'
                }
            ]
        },
        {
            identifier: 'compressed_iron',
            recipes: [
                {
                    craftable: false,
                    tier: 2,
                    sortOrder: 1,
                    textColor: '#868686'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 0.95,
                            miningSpeed: 1.1,
                            attackSpeed: 1.0,
                            attackDamage: 1.0
                        },
                        'tconstruct:head': {
                            durability: 660,
                            miningSpeed: 5.0,
                            harvestLevel: 2,
                            attack: 2.5
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:blasting',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    fluid: {
                        name: 'kubejs:molten_compressed_iron',
                        amount: 144
                    },
                    temperature: 900,
                    output: 'enigmatica:compressed_iron'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:ingots/compressed_iron'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:compressed_iron'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:storage_blocks/compressed_iron'
                    },
                    value: 9,
                    needed: 1,
                    material: 'enigmatica:compressed_iron',
                    leftover: {
                        tag: 'forge:ingots/compressed_iron'
                    }
                }
            ]
        },
        {
            identifier: 'infused_iron',
            recipes: [
                {
                    craftable: false,
                    tier: 2,
                    sortOrder: 1,
                    textColor: '#2eb337'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 1.0,
                            miningSpeed: 1.1,
                            attackSpeed: 1.0,
                            attackDamage: 1.0
                        },
                        'tconstruct:head': {
                            durability: 250,
                            miningSpeed: 6.0,
                            harvestLevel: 2,
                            attack: 2.0
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:maintained',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    fluid: {
                        name: 'kubejs:molten_infused_iron',
                        amount: 144
                    },
                    temperature: 850,
                    output: 'enigmatica:infused_iron'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:ingots/infused_iron'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:infused_iron'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:storage_blocks/infused_iron'
                    },
                    value: 9,
                    needed: 1,
                    material: 'enigmatica:infused_iron',
                    leftover: {
                        tag: 'forge:ingots/infused_iron'
                    }
                }
            ]
        },
        {
            identifier: 'manasteel',
            recipes: [
                {
                    craftable: false,
                    tier: 2,
                    sortOrder: 2,
                    textColor: '#3287fc'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 0.95,
                            miningSpeed: 1,
                            attackSpeed: 1.05,
                            attackDamage: 1.05
                        },
                        'tconstruct:head': {
                            durability: 300,
                            miningSpeed: 6.5,
                            harvestLevel: 2,
                            attack: 2.0
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:ductile',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    fluid: {
                        name: 'kubejs:molten_manasteel',
                        amount: 144
                    },
                    temperature: 900,
                    output: 'enigmatica:manasteel'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:ingots/manasteel'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:manasteel'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:storage_blocks/manasteel'
                    },
                    value: 9,
                    needed: 1,
                    material: 'enigmatica:manasteel',
                    leftover: {
                        tag: 'forge:ingots/manasteel'
                    }
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:nuggets/manasteel'
                    },
                    value: 1,
                    needed: 9,
                    material: 'enigmatica:manasteel'
                }
            ]
        },
        {
            identifier: 'thallasium',
            recipes: [
                {
                    craftable: false,
                    tier: 2,
                    sortOrder: 2,
                    textColor: '#87dad2'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 1.0,
                            miningSpeed: 1.0,
                            attackSpeed: 1.05,
                            attackDamage: 1.0
                        },
                        'tconstruct:head': {
                            durability: 320,
                            miningSpeed: 7.0,
                            harvestLevel: 2,
                            attack: 1.5
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:sturdy',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    fluid: {
                        name: 'emendatusenigmatica:molten_thallasium',
                        amount: 144
                    },
                    temperature: 825,
                    output: 'enigmatica:thallasium'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:ingots/thallasium'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:thallasium'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:storage_blocks/thallasium'
                    },
                    value: 9,
                    needed: 1,
                    material: 'enigmatica:thallasium',
                    leftover: {
                        tag: 'forge:ingots/thallasium'
                    }
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:nuggets/thallasium'
                    },
                    value: 1,
                    needed: 9,
                    material: 'enigmatica:thallasium'
                }
            ]
        },
        {
            identifier: 'tin',
            recipes: [
                {
                    craftable: false,
                    tier: 2,
                    sortOrder: 1,
                    textColor: '#8eadb1'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 0.8,
                            miningSpeed: 1.05,
                            attackSpeed: 1.0,
                            attackDamage: 1.0
                        },
                        'tconstruct:head': {
                            durability: 150,
                            miningSpeed: 6.0,
                            harvestLevel: 2,
                            attack: 1.0
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:stonebound',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    fluid: {
                        tag: 'tconstruct:molten_tin',
                        amount: 144
                    },
                    temperature: 225,
                    output: 'enigmatica:tin'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:ingots/tin'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:tin'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:storage_blocks/tin'
                    },
                    value: 9,
                    needed: 1,
                    material: 'enigmatica:tin',
                    leftover: {
                        tag: 'forge:ingots/tin'
                    }
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:nuggets/tin'
                    },
                    value: 1,
                    needed: 9,
                    material: 'enigmatica:tin'
                }
            ]
        },
        {
            identifier: 'zinc',
            recipes: [
                {
                    craftable: false,
                    tier: 2,
                    sortOrder: 1,
                    textColor: '#b8bd89'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 0.8,
                            miningSpeed: 1.05,
                            attackSpeed: 1.0,
                            attackDamage: 1.0
                        },
                        'tconstruct:head': {
                            durability: 200,
                            miningSpeed: 6.0,
                            harvestLevel: 2,
                            attack: 1.0
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:stonebound',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    fluid: {
                        tag: 'tconstruct:molten_zinc',
                        amount: 144
                    },
                    temperature: 420,
                    output: 'enigmatica:zinc'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:storage_blocks/zinc'
                    },
                    value: 9,
                    needed: 1,
                    material: 'enigmatica:zinc',
                    leftover: {
                        tag: 'forge:ingots/zinc'
                    }
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:ingots/zinc'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:zinc'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:nuggets/zinc'
                    },
                    value: 1,
                    needed: 9,
                    material: 'enigmatica:zinc'
                }
            ]
        },
        //tier 3
        {
            identifier: 'blazing',
            recipes: [
                {
                    craftable: false,
                    tier: 3,
                    sortOrder: 2,
                    textColor: '#d79811'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 1.0,
                            miningSpeed: 1.0,
                            attackSpeed: 0.9,
                            attackDamage: 1.2
                        },
                        'tconstruct:head': {
                            durability: 600,
                            miningSpeed: 5.0,
                            harvestLevel: 3,
                            attack: 3.5
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:fiery',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    input: 'enigmatica:energized_steel',
                    fluid: {
                        name: 'kubejs:molten_blazing',
                        amount: 144
                    },
                    temperature: 950,
                    output: 'enigmatica:blazing'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        item: 'powah:crystal_blazing'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:blazing'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        item: 'powah:blazing_crystal_block'
                    },
                    value: 9,
                    needed: 1,
                    material: 'enigmatica:blazing',
                    leftover: {
                        item: 'powah:crystal_blazing'
                    }
                }
            ]
        },
        {
            identifier: 'elementium',
            recipes: [
                {
                    craftable: false,
                    tier: 3,
                    sortOrder: 1,
                    textColor: '#ee5bac'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 1.05,
                            miningSpeed: 1.1,
                            attackSpeed: 0.9,
                            attackDamage: 1.2
                        },
                        'tconstruct:head': {
                            durability: 720,
                            miningSpeed: 6.5,
                            harvestLevel: 3,
                            attack: 2.0
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:temperate',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    fluid: {
                        name: 'kubejs:molten_elementium',
                        amount: 144
                    },
                    temperature: 875,
                    output: 'enigmatica:elementium'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:ingots/elementium'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:elementium'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:storage_blocks/elementium'
                    },
                    value: 9,
                    needed: 1,
                    material: 'enigmatica:elementium',
                    leftover: {
                        tag: 'forge:ingots/elementium'
                    }
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:nuggets/elementium'
                    },
                    value: 1,
                    needed: 9,
                    material: 'enigmatica:elementium'
                }
            ]
        },
        {
            identifier: 'energized_steel',
            recipes: [
                {
                    craftable: false,
                    tier: 3,
                    sortOrder: 0,
                    textColor: '#b89365'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 1.0,
                            miningSpeed: 1.05,
                            attackSpeed: 1.05,
                            attackDamage: 1.0
                        },
                        'tconstruct:head': {
                            durability: 500,
                            miningSpeed: 7.0,
                            harvestLevel: 3,
                            attack: 2.5
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:magnetic',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    fluid: {
                        name: 'kubejs:molten_energized_steel',
                        amount: 144
                    },
                    temperature: 875,
                    output: 'enigmatica:energized_steel'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:ingots/energized_steel'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:energized_steel'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:storage_blocks/energized_steel'
                    },
                    value: 9,
                    needed: 1,
                    material: 'enigmatica:energized_steel',
                    leftover: {
                        tag: 'forge:ingots/energized_steel'
                    }
                }
            ]
        },
        {
            identifier: 'sky',
            recipes: [
                {
                    craftable: false,
                    tier: 3,
                    sortOrder: 2,
                    textColor: '#88d7fc'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 1.0,
                            miningSpeed: 1.1,
                            attackSpeed: 1.0,
                            attackDamage: 1.0
                        },
                        'tconstruct:head': {
                            durability: 1561,
                            miningSpeed: 8.0,
                            harvestLevel: 3,
                            attack: 3.0
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:maintained',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    fluid: {
                        name: 'kubejs:molten_sky',
                        amount: 144
                    },
                    temperature: 950,
                    output: 'enigmatica:sky'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:ingots/sky'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:sky'
                }
            ]
        },
        {
            identifier: 'terminite',
            recipes: [
                {
                    craftable: false,
                    tier: 3,
                    sortOrder: 2,
                    textColor: '#74f3e3'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 1.0,
                            miningSpeed: 1.0,
                            attackSpeed: 1.05,
                            attackDamage: 1.05
                        },
                        'tconstruct:head': {
                            durability: 1230,
                            miningSpeed: 8.5,
                            harvestLevel: 3,
                            attack: 3.0
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:severing',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    fluid: {
                        name: 'kubejs:molten_terminite',
                        amount: 144
                    },
                    temperature: 840,
                    output: 'enigmatica:terminite'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:ingots/terminite'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:terminite'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:storage_blocks/terminite'
                    },
                    value: 9,
                    needed: 1,
                    material: 'enigmatica:terminite',
                    leftover: {
                        tag: 'forge:ingots/terminite'
                    }
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:nuggets/terminite'
                    },
                    value: 1,
                    needed: 9,
                    material: 'enigmatica:terminite'
                }
            ]
        },
        {
            identifier: 'terrasteel',
            recipes: [
                {
                    craftable: false,
                    tier: 3,
                    sortOrder: 0,
                    textColor: '#38e200'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 0.95,
                            miningSpeed: 1.1,
                            attackSpeed: 1.1,
                            attackDamage: 1.0
                        },
                        'tconstruct:head': {
                            durability: 1750,
                            miningSpeed: 9.0,
                            harvestLevel: 3,
                            attack: 4.0
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:ductile',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    fluid: {
                        name: 'kubejs:molten_terrasteel',
                        amount: 144
                    },
                    temperature: 975,
                    output: 'enigmatica:terrasteel'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:ingots/terrasteel'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:terrasteel'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:storage_blocks/terrasteel'
                    },
                    value: 9,
                    needed: 1,
                    material: 'enigmatica:terrasteel',
                    leftover: {
                        tag: 'forge:ingots/terrasteel'
                    }
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:nuggets/terrasteel'
                    },
                    value: 1,
                    needed: 9,
                    material: 'enigmatica:terrasteel'
                }
            ]
        },
        //tier 4
        {
            identifier: 'aeternium',
            recipes: [
                {
                    craftable: false,
                    tier: 4,
                    sortOrder: 0,
                    textColor: '#2e847c'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 0.95,
                            miningSpeed: 1.1,
                            attackSpeed: 1.1,
                            attackDamage: 1.0
                        },
                        'tconstruct:head': {
                            durability: 2196,
                            miningSpeed: 10.0,
                            harvestLevel: 4,
                            attack: 4.5
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:ductile',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    fluid: {
                        name: 'kubejs:molten_aeternium',
                        amount: 144
                    },
                    temperature: 1250,
                    output: 'enigmatica:aeternium'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:ingots/aeternium'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:aeternium'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:storage_blocks/aeternium'
                    },
                    value: 9,
                    needed: 1,
                    material: 'enigmatica:aeternium',
                    leftover: {
                        tag: 'forge:ingots/aeternium'
                    }
                }
            ]
        },
        {
            identifier: 'alfsteel',
            recipes: [
                {
                    craftable: false,
                    tier: 4,
                    sortOrder: 2,
                    textColor: '#fbb616'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 1.0,
                            miningSpeed: 1.0,
                            attackSpeed: 1.15,
                            attackDamage: 1.0
                        },
                        'tconstruct:head': {
                            durability: 2300,
                            miningSpeed: 9.0,
                            harvestLevel: 4,
                            attack: 5.0
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:piercing',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    input: 'enigmatica:terrasteel',
                    fluid: {
                        name: 'kubejs:molten_alfsteel',
                        amount: 144
                    },
                    temperature: 1450,
                    output: 'enigmatica:alfsteel'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:ingots/alfsteel'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:alfsteel'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:storage_blocks/alfsteel'
                    },
                    value: 9,
                    needed: 1,
                    material: 'enigmatica:alfsteel',
                    leftover: {
                        tag: 'forge:ingots/alfsteel'
                    }
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:nuggets/alfsteel'
                    },
                    value: 1,
                    needed: 9,
                    material: 'enigmatica:alfsteel'
                }
            ]
        },
        {
            identifier: 'enderium',
            recipes: [
                {
                    craftable: false,
                    tier: 4,
                    sortOrder: 2,
                    textColor: '#2c8c9c'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 0.9,
                            miningSpeed: 1.0,
                            attackSpeed: 1.05,
                            attackDamage: 1.2
                        },
                        'tconstruct:head': {
                            durability: 1800,
                            miningSpeed: 7.0,
                            harvestLevel: 4,
                            attack: 4.0
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:experienced',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    fluid: {
                        name: 'emendatusenigmatica:molten_enderium',
                        amount: 144
                    },
                    temperature: 1450,
                    output: 'enigmatica:enderium'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:ingots/enderium'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:enderium'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:storage_blocks/enderium'
                    },
                    value: 9,
                    needed: 1,
                    material: 'enigmatica:enderium',
                    leftover: {
                        tag: 'forge:ingots/enderium'
                    }
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:nuggets/enderium'
                    },
                    value: 1,
                    needed: 9,
                    material: 'enigmatica:enderium'
                }
            ]
        },
        {
            identifier: 'gaia_spirit',
            recipes: [
                {
                    craftable: false,
                    tier: 4,
                    sortOrder: 1,
                    textColor: '#94a0bf'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 1.05,
                            miningSpeed: 1.25,
                            attackSpeed: 0.95,
                            attackDamage: 0.95
                        },
                        'tconstruct:head': {
                            durability: 1950,
                            miningSpeed: 10.0,
                            harvestLevel: 4,
                            attack: 3.0
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:maintained',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    input: 'enigmatica:terrasteel',
                    fluid: {
                        name: 'kubejs:molten_gaia_spirit',
                        amount: 144
                    },
                    temperature: 1350,
                    output: 'enigmatica:gaia_spirit'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:ingots/gaia_spirit'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:gaia_spirit'
                }
            ]
        },
        {
            identifier: 'lumium',
            recipes: [
                {
                    craftable: false,
                    tier: 4,
                    sortOrder: 1,
                    textColor: '#fceea8'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 0.95,
                            miningSpeed: 1.25,
                            attackSpeed: 1.0,
                            attackDamage: 1.0
                        },
                        'tconstruct:head': {
                            durability: 300,
                            miningSpeed: 11.0,
                            harvestLevel: 3,
                            attack: 2.0
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:lightspeed',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    fluid: {
                        name: 'emendatusenigmatica:molten_lumium',
                        amount: 144
                    },
                    temperature: 1354,
                    output: 'enigmatica:lumium'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:ingots/lumium'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:lumium'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:storage_blocks/lumium'
                    },
                    value: 9,
                    needed: 1,
                    material: 'enigmatica:lumium',
                    leftover: {
                        tag: 'forge:ingots/lumium'
                    }
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:nuggets/lumium'
                    },
                    value: 1,
                    needed: 9,
                    material: 'enigmatica:lumium'
                }
            ]
        },
        {
            identifier: 'niotic',
            recipes: [
                {
                    craftable: false,
                    tier: 4,
                    sortOrder: 0,
                    textColor: '#54e5ea'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 1.25,
                            miningSpeed: 0.95,
                            attackSpeed: 0.95,
                            attackDamage: 1.0
                        },
                        'tconstruct:head': {
                            durability: 1600,
                            miningSpeed: 7.5,
                            harvestLevel: 3,
                            attack: 3.0
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:sturdy',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    input: 'enigmatica:energized_steel',
                    fluid: {
                        name: 'kubejs:molten_niotic',
                        amount: 144
                    },
                    temperature: 1250,
                    output: 'enigmatica:niotic'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        item: 'powah:crystal_niotic'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:niotic'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        item: 'powah:niotic_crystal_block'
                    },
                    value: 9,
                    needed: 1,
                    material: 'enigmatica:niotic',
                    leftover: {
                        item: 'powah:crystal_niotic'
                    }
                }
            ]
        },
        {
            identifier: 'nitro',
            recipes: [
                {
                    craftable: false,
                    tier: 4,
                    sortOrder: 2,
                    textColor: '#a42022'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 1.25,
                            miningSpeed: 0.95,
                            attackSpeed: 0.95,
                            attackDamage: 1.0
                        },
                        'tconstruct:head': {
                            durability: 1850,
                            miningSpeed: 5.0,
                            harvestLevel: 4,
                            attack: 5.0
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:lacerating',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    input: 'enigmatica:energized_steel',
                    fluid: {
                        name: 'kubejs:molten_nitro',
                        amount: 144
                    },
                    temperature: 1450,
                    output: 'enigmatica:nitro'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        item: 'powah:crystal_nitro'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:nitro'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        item: 'powah:nitro_crystal_block'
                    },
                    value: 9,
                    needed: 1,
                    material: 'enigmatica:nitro',
                    leftover: {
                        item: 'powah:crystal_nitro'
                    }
                }
            ]
        },
        {
            identifier: 'signalum',
            recipes: [
                {
                    craftable: false,
                    tier: 4,
                    sortOrder: 1,
                    textColor: '#ec3606'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 0.85,
                            miningSpeed: 1.2,
                            attackSpeed: 1.05,
                            attackDamage: 1.0
                        },
                        'tconstruct:head': {
                            durability: 350,
                            miningSpeed: 11.0,
                            harvestLevel: 3,
                            attack: 2.0
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:lightweight',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    fluid: {
                        name: 'emendatusenigmatica:molten_signalum',
                        amount: 144
                    },
                    temperature: 1272,
                    output: 'enigmatica:signalum'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:ingots/signalum'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:signalum'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:storage_blocks/signalum'
                    },
                    value: 9,
                    needed: 1,
                    material: 'enigmatica:signalum',
                    leftover: {
                        tag: 'forge:ingots/signalum'
                    }
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        tag: 'forge:nuggets/signalum'
                    },
                    value: 1,
                    needed: 9,
                    material: 'enigmatica:signalum'
                }
            ]
        },
        {
            identifier: 'spirited',
            recipes: [
                {
                    craftable: false,
                    tier: 4,
                    sortOrder: 1,
                    textColor: '#86c52d'
                },
                {
                    stats: {
                        'tconstruct:extra': {},
                        'tconstruct:handle': {
                            durability: 1.1,
                            miningSpeed: 1.2,
                            attackSpeed: 1.0,
                            attackDamage: 0.9
                        },
                        'tconstruct:head': {
                            durability: 1600,
                            miningSpeed: 9.5,
                            harvestLevel: 3,
                            attack: 3.0
                        }
                    }
                },
                {
                    default: [
                        {
                            name: 'tconstruct:momentum',
                            level: 1
                        }
                    ]
                },
                {
                    type: 'tconstruct:material_fluid',
                    input: 'enigmatica:energized_steel',
                    fluid: {
                        name: 'kubejs:molten_spirited',
                        amount: 144
                    },
                    temperature: 1350,
                    output: 'enigmatica:spirited'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        item: 'powah:crystal_spirited'
                    },
                    value: 1,
                    needed: 1,
                    material: 'enigmatica:spirited'
                },
                {
                    type: 'tconstruct:material',
                    ingredient: {
                        item: 'powah:spirited_crystal_block'
                    },
                    value: 9,
                    needed: 1,
                    material: 'enigmatica:spirited',
                    leftover: {
                        item: 'powah:crystal_spirited'
                    }
                }
            ]
        }
    ];

    data.forEach((recipeType) => {
        event.addJson(`tconstruct:materials/definition/${recipeType.identifier}.json`, {
            redirect: [
                {
                    id: `enigmatica:${recipeType.identifier}`
                }
            ]
        });

        event.addJson(`enigmatica:materials/definition/${recipeType.identifier}.json`, recipeType.recipes[0]);
        event.addJson(`enigmatica:materials/stats/${recipeType.identifier}.json`, recipeType.recipes[1]);
        event.addJson(`enigmatica:materials/traits/${recipeType.identifier}.json`, recipeType.recipes[2]);
        for (let i = 3; i < recipeType.recipes.length; i++) {
            event.addJson(
                `enigmatica:recipes/tools/materials/${recipeType.identifier}/${recipeType.identifier}${i}.json`,
                recipeType.recipes[i]
            );
        }
    });
});
