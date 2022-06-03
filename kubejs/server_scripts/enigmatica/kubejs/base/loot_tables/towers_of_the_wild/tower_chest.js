onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        type: 'minecraft:chest',
        pools: [
            {
                rolls: {
                    min: 6.0,
                    max: 10.0,
                    type: 'minecraft:uniform'
                },
                entries: [
                    {
                        type: 'minecraft:item',
                        weight: 15,
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: {
                                    min: 1.0,
                                    max: 3.0,
                                    type: 'minecraft:uniform'
                                }
                            }
                        ],
                        name: 'minecraft:iron_ingot'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 15,
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: {
                                    min: 1.0,
                                    max: 4.0,
                                    type: 'minecraft:uniform'
                                }
                            }
                        ],
                        name: 'minecraft:feather'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 10,
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: {
                                    min: 1.0,
                                    max: 2.0,
                                    type: 'minecraft:uniform'
                                }
                            }
                        ],
                        name: 'minecraft:emerald'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 10,
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: {
                                    min: 1.0,
                                    max: 4.0,
                                    type: 'minecraft:uniform'
                                }
                            }
                        ],
                        name: 'minecraft:gold_nugget'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 8,
                        name: 'minecraft:ender_pearl'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 5,
                        name: 'minecraft:compass'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 3,
                        functions: [
                            {
                                function: 'minecraft:enchant_with_levels',
                                levels: 30,
                                treasure: true
                            }
                        ],
                        name: 'minecraft:book'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 3,
                        functions: [
                            {
                                function: 'set_nbt',
                                tag: `{flavor:\"Launches the caster into the air and grants temporary elytra flight!\",color:\"255,25,180\",spell_0:\"[self, launch, launch, glide, duration_down]\",display:{Name:\"{\\\"italic\\\":true,\\\"color\\\":\\\"dark_purple\\\",\\\"text\\\":\\\"Takeoff!\\\"}\"},current_slot:0,max_slot:1}`
                            }
                        ],
                        name: 'ars_nouveau:caster_tome'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 1,
                        name: 'artifacts:cloud_in_a_bottle'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 3,
                        name: 'artifacts:umbrella'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 1,
                        name: 'artifacts:helium_flamingo'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 1,
                        name: 'artifacts:bunny_hoppers'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 1,
                        name: 'tconstruct:sky_slime_sling'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 1,
                        name: 'tconstruct:slime_boots'
                    },
                    {
                        type: 'item',
                        weight: 2,
                        name: 'apotheosis:potion_charm',
                        functions: [
                            {
                                function: 'set_nbt',
                                tag: `{Damage:0,Potion:\"minecraft:long_slow_falling\"}`
                            }
                        ]
                    },
                    {
                        type: 'item',
                        weight: 2,
                        name: 'apotheosis:potion_charm',
                        functions: [
                            {
                                function: 'set_nbt',
                                tag: `{Damage:0,Potion:\"undergarden:strong_featherweight\"}`
                            }
                        ]
                    },
                    {
                        type: 'item',
                        weight: 1,
                        name: 'minecraft:enchanted_book',
                        functions: [
                            {
                                function: 'set_nbt',
                                tag: `{StoredEnchantments:[{lvl:5s,id:\"minecraft:feather_falling\"}]}`
                            }
                        ]
                    },
                    {
                        type: 'minecraft:item',
                        weight: 7,
                        functions: [
                            {
                                function: 'minecraft:set_count',
                                count: {
                                    min: 3.0,
                                    max: 5.0,
                                    type: 'minecraft:uniform'
                                }
                            }
                        ],
                        name: 'archers_paradox:lightning_arrow'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 2,
                        name: 'naturesaura:break_prevention'
                    },
                    {
                        type: 'minecraft:item',
                        weight: 1,
                        name: 'ars_nouveau:belt_of_levitation'
                    },
                    {
                        type: 'item',
                        weight: 1,
                        name: 'minecraft:water_bucket',
                        functions: [
                            {
                                function: 'set_nbt',
                                tag: `{Enchantments:[{lvl:1s,id:"minecraft:infinity"}],display:{Name:'{"text":"#MLG-YOLO"}'}}`
                            }
                        ]
                    }
                ]
            },
            {
                rolls: 1,
                entries: [
                    {
                        type: 'minecraft:item',
                        name: 'minecraft:map'
                    }
                ]
            }
        ]
    };

    event.addJson(`towers_of_the_wild:loot_tables/chests/tower/regular/tower_chest.json`, loot_table);
});
