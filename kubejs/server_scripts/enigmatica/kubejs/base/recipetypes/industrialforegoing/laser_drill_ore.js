events.listen('recipes', (event) => {
    const nether_end_biomes = end_biomes.concat(nether_biomes);
    const endBiomes = {
        type: 'minecraft:worldgen/biome',
        values: end_biomes
    };

    const recipes = [
        {
            output: {
                tag: 'forge:chunks/potassium_nitrate'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 32,
                    weight: 6
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens8'
            }
        },
        {
            output: {
                tag: 'forge:chunks/mana'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 32,
                    weight: 6
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens2'
            }
        },
        {
            output: {
                tag: 'forge:chunks/bitumen'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 10,
                    depth_max: 40,
                    weight: 5
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens15'
            }
        },
        {
            output: {
                tag: 'forge:chunks/fluorite'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 16,
                    weight: 4
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens7'
            }
        },
        {
            output: {
                item: 'emendatusenigmatica:dimensional_chunk'
            },
            rarity: [
                {
                    whitelist: endBiomes,
                    blacklist: {},
                    depth_min: 0,
                    depth_max: 255,
                    weight: 12
                },
                {
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: nether_biomes
                    },
                    blacklist: {},
                    depth_min: 7,
                    depth_max: 117,
                    weight: 12
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens0'
            }
        },
        {
            output: {
                tag: 'forge:chunks/aluminum'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 68,
                    depth_max: 84,
                    weight: 5
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens0'
            }
        },
        {
            output: {
                tag: 'forge:chunks/coal'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 132,
                    weight: 10
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 4
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens15'
            }
        },
        {
            output: {
                tag: 'forge:chunks/copper'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 35,
                    depth_max: 65,
                    weight: 10
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 2
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens1'
            }
        },
        {
            output: {
                tag: 'forge:chunks/diamond'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 16,
                    weight: 4
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens3'
            }
        },
        {
            output: {
                tag: 'forge:chunks/cinnabar'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 30,
                    depth_max: 70,
                    weight: 2
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens6'
            }
        },
        {
            output: {
                tag: 'forge:chunks/lapis'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 13,
                    depth_max: 34,
                    weight: 14
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 2
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens11'
            }
        },
        {
            output: {
                tag: 'forge:chunks/lead'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 10,
                    depth_max: 40,
                    weight: 6
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens10'
            }
        },
        {
            output: {
                tag: 'forge:chunks/zinc'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 10,
                    depth_max: 40,
                    weight: 4
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens12'
            }
        },
        {
            output: {
                tag: 'forge:chunks/apatite'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 40,
                    depth_max: 80,
                    weight: 16
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 2
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens9'
            }
        },
        {
            output: {
                tag: 'forge:chunks/nickel'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 68,
                    weight: 4
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens12'
            }
        },
        {
            output: {
                tag: 'forge:chunks/quartz'
            },
            rarity: [
                {
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: nether_biomes
                    },
                    blacklist: {},
                    depth_min: 7,
                    depth_max: 117,
                    weight: 12
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens0'
            }
        },
        {
            output: {
                tag: 'forge:chunks/redstone'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 16,
                    weight: 28
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 4
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens14'
            }
        },
        {
            output: {
                tag: 'forge:chunks/silver'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 10,
                    depth_max: 40,
                    weight: 5
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens8'
            }
        },
        {
            output: {
                tag: 'forge:chunks/sulfur'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 10,
                    weight: 6
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens4'
            }
        },
        {
            output: {
                tag: 'forge:chunks/tin'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 64,
                    depth_max: 96,
                    weight: 8
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 2
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens7'
            }
        },
        {
            output: {
                tag: 'forge:chunks/uranium'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 29,
                    weight: 5
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens5'
            }
        },
        {
            output: {
                tag: 'forge:chunks/emerald'
            },
            rarity: [
                {
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: [
                            'minecraft:mountains',
                            'minecraft:mountain_edge',
                            'minecraft:gravelly_mountains',
                            'minecraft:modified_gravelly_mountains',
                            'minecraft:snowy_mountains',
                            'minecraft:snowy_taiga_mountains'
                        ]
                    },
                    blacklist: {},
                    depth_min: 5,
                    depth_max: 29,
                    weight: 8
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens13'
            }
        },
        {
            output: {
                item: 'minecraft:glowstone'
            },
            rarity: [
                {
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: nether_biomes
                    },
                    blacklist: {},
                    depth_min: 7,
                    depth_max: 117,
                    weight: 8
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens4'
            }
        },
        {
            output: {
                tag: 'forge:chunks/gold'
            },
            rarity: [
                {
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: [
                            'minecraft:badlands',
                            'minecraft:badlands_plateau',
                            'minecraft:eroded_badlands',
                            'minecraft:modified_badlands_plateau',
                            'minecraft:modified_wooded_badlands_plateau',
                            'minecraft:wooded_badlands_plateau'
                        ]
                    },
                    blacklist: {},
                    depth_min: 32,
                    depth_max: 80,
                    weight: 16
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 32,
                    weight: 6
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens4'
            }
        },
        {
            output: {
                tag: 'forge:chunks/iron'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 68,
                    weight: 20
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 3
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens7'
            }
        },
        {
            output: {
                tag: 'forge:chunks/osmium'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 5,
                    depth_max: 36,
                    weight: 8
                },
                {
                    whitelist: {},
                    blacklist: endBiomes,
                    depth_min: 0,
                    depth_max: 255,
                    weight: 2
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens8'
            }
        },
        {
            output: {
                item: 'minecraft:ancient_debris'
            },
            rarity: [
                {
                    whitelist: {
                        type: 'minecraft:worldgen/biome',
                        values: nether_biomes
                    },
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 20,
                    weight: 1
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens12'
            }
        },
        {
            output: {
                item: 'undergarden:cloggrum_ore'
            },
            rarity: [
                {
                    whitelist: {
                        type: 'undergarden:worldgen/biome',
                        values: undergarden_biomes
                    },
                    blacklist: {},
                    depth_min: 5,
                    depth_max: 50,
                    weight: 20
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens12'
            }
        },
        {
            output: {
                item: 'undergarden:froststeel_ore'
            },
            rarity: [
                {
                    whitelist: {
                        type: 'undergarden:worldgen/biome',
                        values: undergarden_biomes
                    },
                    blacklist: {},
                    depth_min: 5,
                    depth_max: 50,
                    weight: 20
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens9'
            }
        },
        {
            output: {
                item: 'undergarden:cloggrum_ore'
            },
            rarity: [
                {
                    whitelist: {
                        type: 'undergarden:worldgen/biome',
                        values: undergarden_biomes
                    },
                    blacklist: {},
                    depth_min: 5,
                    depth_max: 50,
                    weight: 20
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens12'
            }
        },
        {
            output: {
                item: 'undergarden:utherium_ore'
            },
            rarity: [
                {
                    whitelist: {
                        type: 'undergarden:worldgen/biome',
                        values: undergarden_biomes
                    },
                    blacklist: {},
                    depth_min: 5,
                    depth_max: 50,
                    weight: 20
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens1'
            }
        },
        {
            output: {
                item: 'undergarden:regalium_ore'
            },
            rarity: [
                {
                    whitelist: {
                        type: 'undergarden:worldgen/biome',
                        values: undergarden_biomes
                    },
                    blacklist: {},
                    depth_min: 1,
                    depth_max: 10,
                    weight: 2
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens4'
            }
        },
        {
            output: {
                tag: 'forge:ores/aquamarine'
            },
            rarity: [
                {
                    whitelist: {},
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: nether_end_biomes
                    },
                    depth_min: 60,
                    depth_max: 70,
                    weight: 8
                },
                {
                    whitelist: {},
                    blacklist: {
                        type: 'minecraft:worldgen/biome',
                        values: nether_end_biomes
                    },
                    depth_min: 0,
                    depth_max: 255,
                    weight: 1
                }
            ],
            catalyst: {
                item: 'industrialforegoing:laser_lens3'
            }
        }
    ];
    recipes.forEach((recipe) => {
        recipe.id
            ? event
                  .custom({
                      type: 'industrialforegoing:laser_drill_ore',
                      output: recipe.output,
                      rarity: recipe.rarity,
                      pointer: 0,

                      catalyst: recipe.catalyst
                  })
                  .id(recipe.id)
            : event.custom({
                  type: 'industrialforegoing:laser_drill_ore',
                  output: recipe.output,
                  rarity: recipe.rarity,
                  pointer: 0,

                  catalyst: recipe.catalyst
              });
    });
});
