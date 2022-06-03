onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: 'minecraft:chest',
        pools: [
            {
                rolls: { min: 4, max: 6 },
                entries: [
                    {
                        type: 'minecraft:item',
                        weight: 10,
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: {
                                    min: 1.0,
                                    max: 5.0,
                                    type: 'minecraft:uniform'
                                }
                            }
                        ],
                        name: 'pneumaticcraft:air_canister'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 5,
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: {
                                    min: 2.0,
                                    max: 4.0,
                                    type: 'minecraft:uniform'
                                }
                            }
                        ],
                        name: 'pneumaticcraft:pneumatic_cylinder'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 8,
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: {
                                    min: 4.0,
                                    max: 8.0,
                                    type: 'minecraft:uniform'
                                }
                            }
                        ],
                        name: 'pneumaticcraft:logistics_core'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 4,
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: {
                                    min: 4.0,
                                    max: 8.0,
                                    type: 'minecraft:uniform'
                                }
                            }
                        ],
                        name: 'pneumaticcraft:capacitor'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 4,
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: {
                                    min: 4.0,
                                    max: 8.0,
                                    type: 'minecraft:uniform'
                                }
                            }
                        ],
                        name: 'pneumaticcraft:transistor'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 5,
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: {
                                    min: 2.0,
                                    max: 4.0,
                                    type: 'minecraft:uniform'
                                }
                            }
                        ],
                        name: 'pneumaticcraft:turbine_rotor'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 5,
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: 1.0
                            }
                        ],
                        name: 'pneumaticcraft:vortex_tube'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 10,
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: {
                                    min: 3.0,
                                    max: 8.0,
                                    type: 'minecraft:uniform'
                                }
                            }
                        ],
                        name: 'pneumaticcraft:pressure_tube'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 4,
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: {
                                    min: 3.0,
                                    max: 8.0,
                                    type: 'minecraft:uniform'
                                }
                            }
                        ],
                        name: 'pneumaticcraft:advanced_pressure_tube'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 8,
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: {
                                    min: 3.0,
                                    max: 8.0,
                                    type: 'minecraft:uniform'
                                }
                            }
                        ],
                        name: 'pneumaticcraft:heat_pipe'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 5,
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: {
                                    min: 2.0,
                                    max: 3.0,
                                    type: 'minecraft:uniform'
                                }
                            }
                        ],
                        name: 'pneumaticcraft:aphorism_tile'
                    },
                    {
                        type: 'item',
                        weight: 10,
                        name: 'pneumaticcraft:compressed_iron_helmet',
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                levels: {
                                    min: 5,
                                    max: 15
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        weight: 10,
                        name: 'pneumaticcraft:compressed_iron_chestplate',
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                levels: {
                                    min: 5,
                                    max: 15
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        weight: 10,
                        name: 'pneumaticcraft:compressed_iron_leggings',
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                levels: {
                                    min: 5,
                                    max: 15
                                }
                            }
                        ]
                    },
                    {
                        type: 'item',
                        weight: 10,
                        name: 'pneumaticcraft:compressed_iron_boots',
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                levels: {
                                    min: 5,
                                    max: 15
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    };
    event.addJson(`pneumaticcraft:loot_tables/chests/mechanic_house.json`, loot_table);
});
