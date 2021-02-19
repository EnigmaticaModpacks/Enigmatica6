events.listen('recipes', (event) => {
    if (global.packmode != 'normal') {
        return;
    }

    //https://github.com/CompactMods/CompactCrafting/wiki/Recipe-Specification

    //Also note, can't use Item.of because Count is caps sensitive (Name too)

    var data = {
        recipes: [
            {
                //Tiny
                recipeSize: 5,
                layers: [
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    }
                ],
                catalyst: {
                    id: 'fluxnetworks:flux_dust',
                    Count: 1
                },
                components: {
                    W: {
                        Name: 'compactmachines:wall'
                    }
                },
                outputs: [
                    {
                        id: 'compactmachines:machine_tiny',
                        Count: 1
                    }
                ]
            },
            //Small
            {
                recipeSize: 5,
                layers: [
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', 'W'],
                            ['W', '-', 'R', '-', 'W'],
                            ['W', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W']
                        ]
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    }
                ],
                catalyst: {
                    id: 'industrialforegoing:common_black_hole_unit',
                    Count: 1
                },
                components: {
                    W: {
                        Name: 'compactmachines:wall'
                    },
                    R: {
                        Name: 'minecraft:redstone_block'
                    }
                },
                outputs: [
                    {
                        id: 'compactmachines:machine_small',
                        Count: 1
                    }
                ]
            },
            {
                recipeSize: 5,
                layers: [
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', 'W'],
                            ['W', '-', 'R', '-', 'W'],
                            ['W', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W']
                        ]
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    }
                ],
                catalyst: {
                    id: 'occultism:storage_stabilizer_tier1',
                    Count: 1
                },
                components: {
                    W: {
                        Name: 'compactmachines:wall'
                    },
                    R: {
                        Name: 'minecraft:redstone_block'
                    }
                },
                outputs: [
                    {
                        id: 'compactmachines:machine_small',
                        Count: 1
                    }
                ]
            },

            //Normal
            {
                recipeSize: 7,
                layers: [
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', 'R', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W']
                        ]
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    }
                ],
                catalyst: {
                    id: 'industrialforegoing:pity_black_hole_unit',
                    Count: 1
                },
                components: {
                    W: {
                        Name: 'compactmachines:wall'
                    },
                    R: {
                        Name: 'minecraft:redstone_block'
                    }
                },
                outputs: [
                    {
                        id: 'compactmachines:machine_normal',
                        Count: 1
                    }
                ]
            },
            {
                recipeSize: 7,
                layers: [
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', 'R', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W']
                        ]
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    }
                ],
                catalyst: {
                    id: 'occultism:storage_stabilizer_tier1',
                    Count: 1
                },
                components: {
                    W: {
                        Name: 'compactmachines:wall'
                    },
                    R: {
                        Name: 'minecraft:redstone_block'
                    }
                },
                outputs: [
                    {
                        id: 'compactmachines:machine_normal',
                        Count: 1
                    }
                ]
            },

            //Large
            {
                recipeSize: 9,
                layers: [
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', 'R', 'R', 'R', '-', '-', 'W'],
                            ['W', '-', '-', 'R', 'R', 'R', '-', '-', 'W'],
                            ['W', '-', '-', 'R', 'R', 'R', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', 'R', 'R', 'R', '-', '-', 'W'],
                            ['W', '-', '-', 'R', 'E', 'R', '-', '-', 'W'],
                            ['W', '-', '-', 'R', 'R', 'R', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', 'R', 'R', 'R', '-', '-', 'W'],
                            ['W', '-', '-', 'R', 'R', 'R', '-', '-', 'W'],
                            ['W', '-', '-', 'R', 'R', 'R', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    }
                ],
                catalyst: {
                    id: 'industrialforegoing:simple_black_hole_unit',
                    Count: 1
                },
                components: {
                    W: {
                        Name: 'compactmachines:wall'
                    },
                    R: {
                        Name: 'minecraft:redstone_block'
                    },
                    E: {
                        Name: 'emendatusenigmatica:enderium_block'
                    }
                },
                outputs: [
                    {
                        id: 'compactmachines:machine_large',
                        Count: 1
                    }
                ]
            },
            {
                recipeSize: 9,
                layers: [
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', 'R', 'R', 'R', '-', '-', 'W'],
                            ['W', '-', '-', 'R', 'R', 'R', '-', '-', 'W'],
                            ['W', '-', '-', 'R', 'R', 'R', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', 'R', 'R', 'R', '-', '-', 'W'],
                            ['W', '-', '-', 'R', 'E', 'R', '-', '-', 'W'],
                            ['W', '-', '-', 'R', 'R', 'R', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', 'R', 'R', 'R', '-', '-', 'W'],
                            ['W', '-', '-', 'R', 'R', 'R', '-', '-', 'W'],
                            ['W', '-', '-', 'R', 'R', 'R', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    }
                ],
                catalyst: {
                    id: 'occultism:storage_stabilizer_tier2',
                    Count: 1
                },
                components: {
                    W: {
                        Name: 'compactmachines:wall'
                    },
                    R: {
                        Name: 'minecraft:redstone_block'
                    },
                    E: {
                        Name: 'emendatusenigmatica:enderium_block'
                    }
                },
                outputs: [
                    {
                        id: 'compactmachines:machine_large',
                        Count: 1
                    }
                ]
            },

            //Giant
            {
                recipeSize: 11,
                layers: [
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'R', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', 'R', 'R', 'R', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', 'R', 'E', 'R', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', 'R', 'R', 'R', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'R', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', 'R', 'E', 'R', '-', '-', '-', 'W'],
                            ['W', '-', '-', 'R', 'E', 'E', 'E', 'R', '-', '-', 'W'],
                            ['W', '-', '-', '-', 'R', 'E', 'R', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'R', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', 'R', 'R', 'R', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', 'R', 'E', 'R', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', 'R', 'R', 'R', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'R', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    }
                ],
                catalyst: {
                    id: 'industrialforegoing:advanced_black_hole_unit',
                    Count: 1
                },
                components: {
                    W: {
                        Name: 'compactmachines:wall'
                    },
                    R: {
                        Name: 'minecraft:redstone_block'
                    },
                    E: {
                        Name: 'emendatusenigmatica:enderium_block'
                    }
                },
                outputs: [
                    {
                        id: 'compactmachines:machine_giant',
                        Count: 1
                    }
                ]
            },
            {
                recipeSize: 11,
                layers: [
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'R', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', 'R', 'R', 'R', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', 'R', 'E', 'R', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', 'R', 'R', 'R', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'R', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', 'R', 'E', 'R', '-', '-', '-', 'W'],
                            ['W', '-', '-', 'R', 'E', 'E', 'E', 'R', '-', '-', 'W'],
                            ['W', '-', '-', '-', 'R', 'E', 'R', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'R', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', 'R', 'R', 'R', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', 'R', 'E', 'R', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', 'R', 'R', 'R', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'R', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    }
                ],
                catalyst: {
                    id: 'occultism:storage_stabilizer_tier3',
                    Count: 1
                },
                components: {
                    W: {
                        Name: 'compactmachines:wall'
                    },
                    R: {
                        Name: 'minecraft:redstone_block'
                    },
                    E: {
                        Name: 'emendatusenigmatica:enderium_block'
                    }
                },
                outputs: [
                    {
                        id: 'compactmachines:machine_giant',
                        Count: 1
                    }
                ]
            },

            //Maximum
            {
                recipeSize: 13,
                layers: [
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', 'E', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'R', 'E', 'R', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'E', 'E', 'E', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'R', 'E', 'R', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', 'R', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'R', 'E', 'R', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', 'R', 'E', 'E', 'E', 'R', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'R', 'E', 'R', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', 'R', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'R', 'E', 'R', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'E', 'E', 'E', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'R', 'E', 'R', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', 'E', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    }
                ],
                catalyst: {
                    id: 'industrialforegoing:supreme_black_hole_unit',
                    Count: 1
                },
                components: {
                    W: {
                        Name: 'compactmachines:wall'
                    },
                    R: {
                        Name: 'minecraft:redstone_block'
                    },
                    E: {
                        Name: 'emendatusenigmatica:enderium_block'
                    }
                },
                outputs: [
                    {
                        id: 'compactmachines:machine_maximum',
                        Count: 1
                    }
                ]
            },
            {
                recipeSize: 13,
                layers: [
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', 'E', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'R', 'E', 'R', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'E', 'E', 'E', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'R', 'E', 'R', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', 'R', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'R', 'E', 'R', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', 'R', 'E', 'E', 'E', 'R', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'R', 'E', 'R', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', 'R', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'R', 'E', 'R', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'E', 'E', 'E', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', 'R', 'E', 'R', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:mixed',
                        pattern: [
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', 'E', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'W'],
                            ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                        ]
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:hollow',
                        wall: 'W'
                    },
                    {
                        type: 'compactcrafting:filled',
                        component: 'W'
                    }
                ],
                catalyst: {
                    id: 'occultism:storage_stabilizer_tier4',
                    Count: 1
                },
                components: {
                    W: {
                        Name: 'compactmachines:wall'
                    },
                    R: {
                        Name: 'minecraft:redstone_block'
                    },
                    E: {
                        Name: 'emendatusenigmatica:enderium_block'
                    }
                },
                outputs: [
                    {
                        id: 'compactmachines:machine_maximum',
                        Count: 1
                    }
                ]
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'compactcrafting:miniaturization',
            version: 1,
            recipeSize: recipe.recipeSize,
            layers: recipe.layers,
            catalyst: recipe.catalyst,
            components: recipe.components,
            outputs: recipe.outputs
        });
    });
});
