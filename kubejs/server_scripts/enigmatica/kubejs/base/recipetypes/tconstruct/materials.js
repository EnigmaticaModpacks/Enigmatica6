onEvent('server.datapack.low_priority', (event) => {
    var data = [
      //tier 1
       {
            identifier: 'livingrock',
            recipes: [
                {
                    "craftable": true,
                    "tier": 1,
                    "sortOrder": 1,
                    "textColor": '#f6eed8'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 0.8,
                        "miningSpeed": 1.1,
                        "attackSpeed": 1.0,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 191,
                        "miningSpeed": 4.5,
                        "harvestLevel": 1,
                        "attack": 1.5
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:stonebound",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "item": "botania:livingrock"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:livingrock"
                }
            ]
        },
        {
            identifier: 'livingwood',
            recipes: [
                {
                    "craftable": true,
                    "tier": 1,
                    "sortOrder": 0,
                    "textColor": '#291108'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 0.9,
                        "miningSpeed": 1.0,
                        "attackSpeed": 1.1,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 68,
                        "miningSpeed": 2.0,
                        "harvestLevel": 0,
                        "attack": 0.5
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:cultivated",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "item": "botania:livingwood_planks"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:livingwood"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "item": "botania:livingwood"
                    },
                    "value": 4,
                    "needed": 1,
                    "material": "tconstruct:livingwood"
                }
            ]
        },
        {
            identifier: 'treated_wood',
            recipes: [
                {
                    "craftable": true,
                    "tier": 1,
                    "sortOrder": 0,
                    "textColor": '#5c2d19'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 0.9,
                        "miningSpeed": 1.1,
                        "attackSpeed": 1.0,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 60,
                        "miningSpeed": 2.5,
                        "harvestLevel": 0,
                        "attack": 0.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:cultivated",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:treated_wood"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:treated_wood"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:rods/treated_wood"
                    },
                    "value": 1,
                    "needed": 2,
                    "material": "tconstruct:treated_wood"
                }
            ]
        },
      //tier 2
        {
            identifier: 'andesite_alloy',
            recipes: [
                {
                    "craftable": false,
                    "tier": 2,
                    "sortOrder": 0,
                    "textColor": '#a6a6a7'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 1.0,
                        "miningSpeed": 1.05,
                        "attackSpeed": 1.05,
                        "attackDamage": 0.95
                      },
                      "tconstruct:head": {
                        "durability": 200,
                        "miningSpeed": 5.5,
                        "harvestLevel": 2,
                        "attack": 1.5
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:lightweight",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "input": "tconstruct:stone",
                    "fluid": [
                      {
                        "tag": "tconstruct:molten_iron",
                        "amount": 16
                      },
                      {
                        "tag": "tconstruct:molten_zinc",
                        "amount": 16
                      }
                    ],
                    "temperature": 800,
                    "output": "tconstruct:andesite_alloy"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/andesite_alloy"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:andesite_alloy"
                }
            ]
        },
        {
            identifier: 'compressed_iron',
            recipes: [
                {
                    "craftable": false,
                    "tier": 2,
                    "sortOrder": 1,
                    "textColor": '#868686'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 0.95,
                        "miningSpeed": 1.1,
                        "attackSpeed": 1.0,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 660,
                        "miningSpeed": 5.0,
                        "harvestLevel": 2,
                        "attack": 2.5
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:blasting",
                        "level": 1
                      }
                    ]
                },
                {
                  "type": "tconstruct:material_fluid",
                  "fluid": {
                    "name": "kubejs:molten_compressed_iron",
                    "amount": 144
                  },
                  "temperature": 900,
                  "output": "tconstruct:compressed_iron"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/compressed_iron"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:compressed_iron"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:storage_blocks/compressed_iron"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:compressed_iron",
                    "leftover": {
                      "tag": "forge:ingots/compressed_iron"
                    }
                }
            ]
        },
        {
            identifier: 'infused_iron',
            recipes: [
                {
                    "craftable": false,
                    "tier": 2,
                    "sortOrder": 1,
                    "textColor": '#2eb337'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 1.0,
                        "miningSpeed": 1.1,
                        "attackSpeed": 1.0,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 250,
                        "miningSpeed": 6.0,
                        "harvestLevel": 2,
                        "attack": 2.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:maintained",
                        "level": 1
                      }
                    ]
                },
                {
                  "type": "tconstruct:material_fluid",
                  "fluid": {
                    "name": "kubejs:molten_infused_iron",
                    "amount": 144
                  },
                  "temperature": 850,
                  "output": "tconstruct:infused_iron"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/infused_iron"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:infused_iron"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:storage_blocks/infused_iron"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:infused_iron",
                    "leftover": {
                      "tag": "forge:ingots/infused_iron"
                    }
                }
            ]
        },
        {
            identifier: 'manasteel',
            recipes: [
                {
                    "craftable": false,
                    "tier": 2,
                    "sortOrder": 2,
                    "textColor": '#3287fc'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 0.95,
                        "miningSpeed": 1,
                        "attackSpeed": 1.05,
                        "attackDamage": 1.05
                      },
                      "tconstruct:head": {
                        "durability": 300,
                        "miningSpeed": 6.5,
                        "harvestLevel": 2,
                        "attack": 2.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:ductile",
                        "level": 1
                      }
                    ]
                },
                {
                  "type": "tconstruct:material_fluid",
                  "fluid": {
                    "name": "kubejs:molten_manasteel",
                    "amount": 144
                  },
                  "temperature": 900,
                  "output": "tconstruct:manasteel"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/manasteel"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:manasteel"
                },
                {
                  "type": "tconstruct:material",
                  "ingredient": {
                    "tag": "forge:storage_blocks/manasteel"
                  },
                  "value": 9,
                  "needed": 1,
                  "material": "tconstruct:manasteel",
                  "leftover": {
                    "tag": "forge:ingots/manasteel"
                  }
              },
              {
                  "type": "tconstruct:material",
                  "ingredient": {
                    "tag": "forge:nuggets/manasteel"
                  },
                  "value": 1,
                  "needed": 9,
                  "material": "tconstruct:manasteel"
              }
            ]
        },
        {
            identifier: 'thallasium',
            recipes: [
                {
                    "craftable": false,
                    "tier": 2,
                    "sortOrder": 2,
                    "textColor": '#87dad2'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 1.0,
                        "miningSpeed": 1.0,
                        "attackSpeed": 1.05,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 320,
                        "miningSpeed": 7.0,
                        "harvestLevel": 2,
                        "attack": 1.5
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:sturdy",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "fluid": {
                      "name": "emendatusenigmatica:molten_thallasium",
                      "amount": 144
                    },
                    "temperature": 825,
                    "output": "tconstruct:thallasium"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/thallasium"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:thallasium"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:storage_blocks/thallasium"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:thallasium",
                    "leftover": {
                      "tag": "forge:ingots/thallasium"
                    }
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:nuggets/thallasium"
                    },
                    "value": 1,
                    "needed": 9,
                    "material": "tconstruct:thallasium"
                }
            ]
        },
        {
            identifier: 'tin',
            recipes: [
                {
                    "craftable": false,
                    "tier": 2,
                    "sortOrder": 1,
                    "textColor": '#8eadb1'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 0.8,
                        "miningSpeed": 1.05,
                        "attackSpeed": 1.0,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 150,
                        "miningSpeed": 6.0,
                        "harvestLevel": 2,
                        "attack": 1.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:stonebound",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "fluid": {
                      "tag": "tconstruct:molten_tin",
                      "amount": 144
                    },
                    "temperature": 225,
                    "output": "tconstruct:tin"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/tin"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:tin"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:storage_blocks/tin"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:tin",
                    "leftover": {
                      "tag": "forge:ingots/tin"
                    }
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:nuggets/tin"
                    },
                    "value": 1,
                    "needed": 9,
                    "material": "tconstruct:tin"
                }
            ]
        },
        {
            identifier: 'zinc',
            recipes: [
                {
                    "craftable": false,
                    "tier": 2,
                    "sortOrder": 1,
                    "textColor": '#b8bd89'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 0.8,
                        "miningSpeed": 1.05,
                        "attackSpeed": 1.0,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 200,
                        "miningSpeed": 6.0,
                        "harvestLevel": 2,
                        "attack": 1.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:stonebound",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "fluid": {
                      "tag": "tconstruct:molten_zinc",
                      "amount": 144
                    },
                    "temperature": 420,
                    "output": "tconstruct:zinc"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:storage_blocks/zinc"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:zinc",
                    "leftover": {
                      "tag": "forge:ingots/zinc"
                    }
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/zinc"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:zinc"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:nuggets/zinc"
                    },
                    "value": 1,
                    "needed": 9,
                    "material": "tconstruct:zinc"
                }
            ]
        },
      //tier 3
        {
            identifier: 'blazing_crystal',
            recipes: [
                {
                    "craftable": false,
                    "tier": 3,
                    "sortOrder": 2,
                    "textColor": '#d79811'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 1.0,
                        "miningSpeed": 1.0,
                        "attackSpeed": 0.9,
                        "attackDamage": 1.2
                      },
                      "tconstruct:head": {
                        "durability": 600,
                        "miningSpeed": 5.0,
                        "harvestLevel": 3,
                        "attack": 3.5
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:fiery",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "input": "tconstruct:energized_steel",
                    "fluid": {
                      "name": "kubejs:molten_blazing_crystal",
                      "amount": 144
                    },
                    "temperature": 950,
                    "output": "tconstruct:blazing_crystal"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "item": "powah:crystal_blazing"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:blazing_crystal"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "item": "powah:blazing_crystal_block"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:blazing_crystal",
                    "leftover": {
                      "item": "powah:crystal_blazing"
                    }
                }
            ]
        },
        {
            identifier: 'elementium',
            recipes: [
                {
                    "craftable": false,
                    "tier": 3,
                    "sortOrder": 1,
                    "textColor": '#ee5bac'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 1.05,
                        "miningSpeed": 1.1,
                        "attackSpeed": 0.9,
                        "attackDamage": 1.2
                      },
                      "tconstruct:head": {
                        "durability": 720,
                        "miningSpeed": 6.5,
                        "harvestLevel": 3,
                        "attack": 2.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:temperate",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "fluid": {
                      "name": "kubejs:molten_elementium",
                      "amount": 144
                    },
                    "temperature": 875,
                    "output": "tconstruct:elementium"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/elementium"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:elementium"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:storage_blocks/elementium"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:elementium",
                    "leftover": {
                      "tag": "forge:ingots/elementium"
                    }
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:nuggets/elementium"
                    },
                    "value": 1,
                    "needed": 9,
                    "material": "tconstruct:elementium"
                }
            ]
        },
        {
          identifier: 'energized_steel',
          recipes: [
              {
                  "craftable": false,
                  "tier": 3,
                  "sortOrder": 0,
                  "textColor": '#b89365'
              },
              {
                  stats: {
                    "tconstruct:extra": {},
                    "tconstruct:handle": {
                      "durability": 1.0,
                      "miningSpeed": 1.05,
                      "attackSpeed": 1.05,
                      "attackDamage": 1.0
                    },
                    "tconstruct:head": {
                      "durability": 500,
                      "miningSpeed": 7.0,
                      "harvestLevel": 3,
                      "attack": 2.5
                    }
                  }
              },
              {
                  "default": [
                    {
                      "name": "tconstruct:magnetic",
                      "level": 1
                    }
                  ]
              },
              {
                  "type": "tconstruct:material_fluid",
                  "fluid": {
                    "name": "kubejs:molten_energized_steel",
                    "amount": 144
                  },
                  "temperature": 875,
                  "output": "tconstruct:energized_steel"
              },
              {
                  "type": "tconstruct:material",
                  "ingredient": {
                    "tag": "forge:ingots/energized_steel"
                  },
                  "value": 1,
                  "needed": 1,
                  "material": "tconstruct:energized_steel"
              },
              {
                  "type": "tconstruct:material",
                  "ingredient": {
                    "tag": "forge:storage_blocks/energized_steel"
                  },
                  "value": 9,
                  "needed": 1,
                  "material": "tconstruct:energized_steel",
                  "leftover": {
                    "tag": "forge:ingots/energized_steel"
                  }
              }
          ]
        },
        {
          identifier: 'sky',
          recipes: [
              {
                  "craftable": false,
                  "tier": 3,
                  "sortOrder": 2,
                  "textColor": '#88d7fc'
              },
              {
                  stats: {
                    "tconstruct:extra": {},
                    "tconstruct:handle": {
                      "durability": 1.0,
                      "miningSpeed": 1.1,
                      "attackSpeed": 1.0,
                      "attackDamage": 1.0
                    },
                    "tconstruct:head": {
                      "durability": 1561,
                      "miningSpeed": 8.0,
                      "harvestLevel": 3,
                      "attack": 3.0
                    }
                  }
              },
              {
                  "default": [
                    {
                      "name": "tconstruct:maintained",
                      "level": 1
                    }
                  ]
              },
              {
                  "type": "tconstruct:material_fluid",
                  "fluid": {
                    "name": "kubejs:molten_sky",
                    "amount": 144
                  },
                  "temperature": 950,
                  "output": "tconstruct:sky"
              },
              {
                  "type": "tconstruct:material",
                  "ingredient": {
                    "tag": "forge:ingots/sky"
                  },
                  "value": 1,
                  "needed": 1,
                  "material": "tconstruct:sky"
              }
          ]
        },
        {
            identifier: 'terminite',
            recipes: [
                {
                    "craftable": false,
                    "tier": 3,
                    "sortOrder": 2,
                    "textColor": '#74f3e3'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 1.0,
                        "miningSpeed": 1.0,
                        "attackSpeed": 1.05,
                        "attackDamage": 1.05
                      },
                      "tconstruct:head": {
                        "durability": 1230,
                        "miningSpeed": 8.5,
                        "harvestLevel": 3,
                        "attack": 3.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:severing",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "fluid": {
                      "name": "kubejs:molten_terminite",
                      "amount": 144
                    },
                    "temperature": 840,
                    "output": "tconstruct:terminite"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/terminite"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:terminite"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:storage_blocks/terminite"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:terminite",
                    "leftover": {
                      "tag": "forge:ingots/terminite"
                    }
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:nuggets/terminite"
                    },
                    "value": 1,
                    "needed": 9,
                    "material": "tconstruct:terminite"
                }
            ]
        },
        {
            identifier: 'terrasteel',
            recipes: [
                {
                    "craftable": false,
                    "tier": 3,
                    "sortOrder": 0,
                    "textColor": '#38e200'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 0.95,
                        "miningSpeed": 1.1,
                        "attackSpeed": 1.1,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 1750,
                        "miningSpeed": 9.0,
                        "harvestLevel": 3,
                        "attack": 4.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:ductile",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "fluid": {
                      "name": "kubejs:molten_terrasteel",
                      "amount": 144
                    },
                    "temperature": 975,
                    "output": "tconstruct:terrasteel"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/terrasteel"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:terrasteel"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:storage_blocks/terrasteel"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:terrasteel",
                    "leftover": {
                      "tag": "forge:ingots/terrasteel"
                    }
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:nuggets/terrasteel"
                    },
                    "value": 1,
                    "needed": 9,
                    "material": "tconstruct:terrasteel"
                }
            ]
        },
      //tier 4
        {
            identifier: 'aeternium',
            recipes: [
                {
                    "craftable": false,
                    "tier": 4,
                    "sortOrder": 0,
                    "textColor": '#2e847c'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 0.95,
                        "miningSpeed": 1.1,
                        "attackSpeed": 1.1,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 2196,
                        "miningSpeed": 10.0,
                        "harvestLevel": 4,
                        "attack": 4.5
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:ductile",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "fluid": {
                      "name": "kubejs:molten_aeternium",
                      "amount": 144
                    },
                    "temperature": 1250,
                    "output": "tconstruct:aeternium"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/aeternium"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:aeternium"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:storage_blocks/aeternium"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:aeternium",
                    "leftover": {
                      "tag": "forge:ingots/aeternium"
                    }
                }
            ]
        },
        {
            identifier: 'alfsteel',
            recipes: [
                {
                    "craftable": false,
                    "tier": 4,
                    "sortOrder": 2,
                    "textColor": '#fbb616'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 1.0,
                        "miningSpeed": 1.0,
                        "attackSpeed": 1.15,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 2300,
                        "miningSpeed": 9.0,
                        "harvestLevel": 4,
                        "attack": 5.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:piercing",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "input": "tconstruct:terrasteel",
                    "fluid": {
                      "name": "kubejs:molten_alfsteel",
                      "amount": 144
                    },
                    "temperature": 1450,
                    "output": "tconstruct:alfsteel"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/alfsteel"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:alfsteel"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:storage_blocks/alfsteel"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:alfsteel",
                    "leftover": {
                      "tag": "forge:ingots/alfsteel"
                    }
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:nuggets/alfsteel"
                    },
                    "value": 1,
                    "needed": 9,
                    "material": "tconstruct:alfsteel"
                }
            ]
        },
        {
            identifier: 'enderium',
            recipes: [
                {
                    "craftable": false,
                    "tier": 4,
                    "sortOrder": 2,
                    "textColor": '#2c8c9c'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 0.9,
                        "miningSpeed": 1.0,
                        "attackSpeed": 1.05,
                        "attackDamage": 1.2
                      },
                      "tconstruct:head": {
                        "durability": 1800,
                        "miningSpeed": 7.0,
                        "harvestLevel": 4,
                        "attack": 4.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:experienced",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "fluid": {
                      "name": "emendatusenigmatica:molten_enderium",
                      "amount": 144
                    },
                    "temperature": 1450,
                    "output": "tconstruct:enderium"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/enderium"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:enderium"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:storage_blocks/enderium"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:enderium",
                    "leftover": {
                      "tag": "forge:ingots/enderium"
                    }
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:nuggets/enderium"
                    },
                    "value": 1,
                    "needed": 9,
                    "material": "tconstruct:enderium"
                }
            ]
        },
        {
            identifier: 'gaia_spirit',
            recipes: [
                {
                    "craftable": false,
                    "tier": 4,
                    "sortOrder": 1,
                    "textColor": '#94a0bf'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 1.05,
                        "miningSpeed": 1.25,
                        "attackSpeed": 0.95,
                        "attackDamage": 0.95
                      },
                      "tconstruct:head": {
                        "durability": 1950,
                        "miningSpeed": 10.0,
                        "harvestLevel": 4,
                        "attack": 3.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:maintained",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "input": "tconstruct:terrasteel",
                    "fluid": {
                      "name": "kubejs:molten_gaia_spirit",
                      "amount": 144
                    },
                    "temperature": 1350,
                    "output": "tconstruct:gaia_spirit"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/gaia_spirit"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:gaia_spirit"
                }
            ]
        },
        {
            identifier: 'lumium',
            recipes: [
                {
                    "craftable": false,
                    "tier": 4,
                    "sortOrder": 1,
                    "textColor": '#fceea8'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 0.95,
                        "miningSpeed": 1.25,
                        "attackSpeed": 1.0,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 300,
                        "miningSpeed": 11.0,
                        "harvestLevel": 3,
                        "attack": 2.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:lightspeed",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "fluid": {
                      "name": "emendatusenigmatica:molten_lumium",
                      "amount": 144
                    },
                    "temperature": 1354,
                    "output": "tconstruct:lumium"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/lumium"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:lumium"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:storage_blocks/lumium"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:lumium",
                    "leftover": {
                      "tag": "forge:ingots/lumium"
                    }
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:nuggets/lumium"
                    },
                    "value": 1,
                    "needed": 9,
                    "material": "tconstruct:lumium"
                }
            ]
        },
        {
            identifier: 'niotic_crystal',
            recipes: [
                {
                    "craftable": false,
                    "tier": 4,
                    "sortOrder": 0,
                    "textColor": '#54e5ea'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 1.25,
                        "miningSpeed": 0.95,
                        "attackSpeed": 0.95,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 1600,
                        "miningSpeed": 7.5,
                        "harvestLevel": 3,
                        "attack": 3.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:sturdy",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "input": "tconstruct:energized_steel",
                    "fluid": {
                      "name": "kubejs:molten_niotic_crystal",
                      "amount": 144
                    },
                    "temperature": 1250,
                    "output": "tconstruct:niotic_crystal"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "item": "powah:crystal_niotic"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:niotic_crystal"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "item": "powah:niotic_crystal_block"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:niotic_crystal",
                    "leftover": {
                      "item": "powah:crystal_niotic"
                    }
                }
            ]
        },
        {
            identifier: 'nitro_crystal',
            recipes: [
                {
                    "craftable": false,
                    "tier": 4,
                    "sortOrder": 2,
                    "textColor": '#a42022'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 1.25,
                        "miningSpeed": 0.95,
                        "attackSpeed": 0.95,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 1850,
                        "miningSpeed": 5.0,
                        "harvestLevel": 4,
                        "attack": 5.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:lacerating",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "input": "tconstruct:energized_steel",
                    "fluid": {
                      "name": "kubejs:molten_nitro_crystal",
                      "amount": 144
                    },
                    "temperature": 1450,
                    "output": "tconstruct:nitro_crystal"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "item": "powah:crystal_nitro"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:nitro_crystal"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "item": "powah:nitro_crystal_block"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:nitro_crystal",
                    "leftover": {
                      "item": "powah:crystal_nitro"
                    }
                }
            ]
        },
        {
            identifier: 'signalum',
            recipes: [
                {
                    "craftable": false,
                    "tier": 4,
                    "sortOrder": 1,
                    "textColor": '#ec3606'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 0.85,
                        "miningSpeed": 1.2,
                        "attackSpeed": 1.05,
                        "attackDamage": 1.0
                      },
                      "tconstruct:head": {
                        "durability": 350,
                        "miningSpeed": 11.0,
                        "harvestLevel": 3,
                        "attack": 2.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:lightweight",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "fluid": {
                      "name": "emendatusenigmatica:molten_signalum",
                      "amount": 144
                    },
                    "temperature": 1272,
                    "output": "tconstruct:signalum"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:ingots/signalum"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:signalum"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:storage_blocks/signalum"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:signalum",
                    "leftover": {
                      "tag": "forge:ingots/signalum"
                    }
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "tag": "forge:nuggets/signalum"
                    },
                    "value": 1,
                    "needed": 9,
                    "material": "tconstruct:signalum"
                }
            ]
        },
        {
            identifier: 'spirited_crystal',
            recipes: [
                {
                    "craftable": false,
                    "tier": 4,
                    "sortOrder": 1,
                    "textColor": '#86c52d'
                },
                {
                    stats: {
                      "tconstruct:extra": {},
                      "tconstruct:handle": {
                        "durability": 1.1,
                        "miningSpeed": 1.2,
                        "attackSpeed": 1.0,
                        "attackDamage": 0.9
                      },
                      "tconstruct:head": {
                        "durability": 1600,
                        "miningSpeed": 9.5,
                        "harvestLevel": 3,
                        "attack": 3.0
                      }
                    }
                },
                {
                    "default": [
                      {
                        "name": "tconstruct:momentum",
                        "level": 1
                      }
                    ]
                },
                {
                    "type": "tconstruct:material_fluid",
                    "input": "tconstruct:energized_steel",
                    "fluid": {
                      "name": "kubejs:molten_spirited_crystal",
                      "amount": 144
                    },
                    "temperature": 1350,
                    "output": "tconstruct:spirited_crystal"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "item": "powah:crystal_spirited"
                    },
                    "value": 1,
                    "needed": 1,
                    "material": "tconstruct:spirited_crystal"
                },
                {
                    "type": "tconstruct:material",
                    "ingredient": {
                      "item": "powah:spirited_crystal_block"
                    },
                    "value": 9,
                    "needed": 1,
                    "material": "tconstruct:spirited_crystal",
                    "leftover": {
                      "item": "powah:crystal_spirited"
                    }
                }
            ]
        }
    ];

    data.forEach((recipeType) => {
        event.addJson(`tconstruct:materials/definition/${recipeType.identifier}.json`, recipeType.recipes[0]);
        event.addJson(`tconstruct:materials/stats/${recipeType.identifier}.json`, recipeType.recipes[1]);
        event.addJson(`tconstruct:materials/traits/${recipeType.identifier}.json`, recipeType.recipes[2]);
        for(let i = 3; i < recipeType.recipes.length; i++) {
          event.addJson(`tconstruct:recipes/tools/materials/${recipeType.identifier}/${recipeType.identifier}${i}.json`, recipeType.recipes[i]);
        }
    });
});
