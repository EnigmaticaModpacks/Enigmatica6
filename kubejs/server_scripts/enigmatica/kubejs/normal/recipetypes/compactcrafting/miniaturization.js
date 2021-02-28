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
                    id: 'fluxnetworks:flux_dust',
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
                            ['W', '-', 'D', '-', 'W'],
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
                    id: 'fluxnetworks:flux_dust',
                    Count: 1
                },
                components: {
                    W: {
                        Name: 'compactmachines:wall'
                    },
                    D: {
                        Name: 'minecraft:diamond_block'
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
                    id: 'fluxnetworks:flux_dust',
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
                        id: 'compactmachines:machine_large',
                        Count: 1
                    }
                ]
            },
            //Giant
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
                            ['W', '-', '-', 'D', '-', '-', 'W'],
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
                    id: 'fluxnetworks:flux_dust',
                    Count: 1
                },
                components: {
                    W: {
                        Name: 'compactmachines:wall'
                    },
                    D: {
                        Name: 'minecraft:diamond_block'
                    }
                },
                outputs: [
                    {
                        id: 'compactmachines:machine_giant',
                        Count: 1
                    }
                ]
            },
            //Max
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
                            ['W', '-', '-', 'E', '-', '-', 'W'],
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
                    id: 'fluxnetworks:flux_dust',
                    Count: 1
                },
                components: {
                    W: {
                        Name: 'compactmachines:wall'
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
