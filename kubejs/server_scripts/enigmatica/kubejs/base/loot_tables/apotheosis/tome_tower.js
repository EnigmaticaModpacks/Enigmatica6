onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        pools: [
            {
                name: 'placebo_code_pool_15',
                rolls: {
                    min: 6.0,
                    max: 9.0,
                    type: 'minecraft:uniform'
                },
                entries: [
                    {
                        type: 'placebo:stack_entry',
                        weight: 5,
                        quality: 5,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:null_book', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 5,
                        quality: 5,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:armor_head_book', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 5,
                        quality: 5,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:armor_chest_book', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 5,
                        quality: 5,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:armor_legs_book', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 5,
                        quality: 5,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:armor_feet_book', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 5,
                        quality: 5,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:weapon_book', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 5,
                        quality: 5,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:digger_book', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 5,
                        quality: 5,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:fishing_rod_book', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 5,
                        quality: 5,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:bow_book', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 5,
                        quality: 5,
                        min: 1,
                        max: 1,
                        stack: { item: 'minecraft:book', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 16,
                        quality: 10,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:common_tome', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 13,
                        quality: 10,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:uncommon_tome', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 10,
                        quality: 10,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:rare_tome', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 7,
                        quality: 10,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:epic_tome', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 4,
                        quality: 10,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:mythic_tome', count: 1 }
                    },
                    {
                        type: 'apotheosis:affix_entry',
                        weight: 20,
                        quality: 35
                    }
                ]
            },
            {
                rolls: {
                    min: 6.0,
                    max: 9.0
                },
                entries: [
                    {
                        type: 'item',
                        weight: 100,
                        name: 'eidolon:arcane_gold_ingot',
                        functions: [{ function: 'set_count', count: { min: 5, max: 7 } }]
                    },
                    {
                        type: 'item',
                        weight: 100,
                        name: 'thermal:lightning_charge',
                        functions: [{ function: 'set_count', count: { min: 5, max: 7 } }]
                    },
                    {
                        type: 'item',
                        weight: 100,
                        name: 'alexsmobs:kangaroo_hide',
                        functions: [{ function: 'set_count', count: { min: 1, max: 2 } }]
                    },
                    {
                        type: 'item',
                        weight: 100,
                        name: 'alexsmobs:komodo_spit',
                        functions: [{ function: 'set_count', count: { min: 5, max: 7 } }]
                    },
                    {
                        type: 'item',
                        weight: 100,
                        name: 'alexsmobs:rattlesnake_rattle',
                        functions: [{ function: 'set_count', count: { min: 5, max: 7 } }]
                    },
                    {
                        type: 'item',
                        weight: 50,
                        name: 'eidolon:death_essence',
                        functions: [{ function: 'set_count', count: { min: 1, max: 2 } }]
                    },
                    {
                        type: 'item',
                        weight: 50,
                        name: 'eidolon:ender_calx',
                        functions: [{ function: 'set_count', count: { min: 5, max: 7 } }]
                    },
                    {
                        type: 'item',
                        weight: 50,
                        name: 'astralsorcery:nocturnal_powder',
                        functions: [{ function: 'set_count', count: { min: 5, max: 7 } }]
                    },
                    {
                        type: 'item',
                        weight: 50,
                        name: 'astralsorcery:illumination_powder',
                        functions: [{ function: 'set_count', count: { min: 5, max: 7 } }]
                    },
                    {
                        type: 'item',
                        weight: 50,
                        name: 'botania:blacker_lotus',
                        functions: [{ function: 'set_count', count: 1 }]
                    },
                    {
                        type: 'item',
                        weight: 50,
                        name: 'occultism:soul_gem',
                        functions: [{ function: 'set_count', count: 1 }]
                    },
                    {
                        type: 'item',
                        weight: 100,
                        name: 'ars_nouveau:mana_gem',
                        functions: [{ function: 'set_count', count: { min: 5, max: 7 } }]
                    },
                    {
                        type: 'item',
                        weight: 50,
                        name: 'ars_nouveau:wilden_wing',
                        functions: [{ function: 'set_count', count: { min: 1, max: 2 } }]
                    },
                    {
                        type: 'item',
                        weight: 50,
                        name: 'ars_nouveau:wilden_spike',
                        functions: [{ function: 'set_count', count: { min: 1, max: 2 } }]
                    },
                    {
                        type: 'item',
                        weight: 50,
                        name: 'ars_nouveau:wilden_horn',
                        functions: [{ function: 'set_count', count: { min: 1, max: 2 } }]
                    },
                    {
                        type: 'item',
                        weight: 50,
                        name: 'ars_nouveau:drygmy_shard',
                        functions: [{ function: 'set_count', count: 1 }]
                    },
                    {
                        type: 'item',
                        weight: 50,
                        name: 'ars_nouveau:wixie_shards',
                        functions: [{ function: 'set_count', count: 1 }]
                    },
                    {
                        type: 'item',
                        weight: 50,
                        name: 'ars_nouveau:carbuncle_shards',
                        functions: [{ function: 'set_count', count: 1 }]
                    },
                    {
                        type: 'item',
                        weight: 100,
                        name: 'ars_nouveau:warp_scroll',
                        functions: [{ function: 'set_count', count: { min: 1, max: 5 } }]
                    },
                    {
                        type: 'item',
                        weight: 100,
                        name: 'bloodmagic:intermediatecuttingfluid',
                        functions: [{ function: 'set_count', count: 1 }]
                    },
                    {
                        type: 'item',
                        weight: 50,
                        name: 'ars_nouveau:potion_flask',
                        functions: [
                            { function: 'set_count', count: { min: 1, max: 2 } },
                            {
                                function: 'set_nbt',
                                tag: `{count:8,CustomPotionEffects:[{Ambient:0b,CurativeItems:[{id:\"minecraft:milk_bucket\",Count:1b}],ShowIcon:1b,ShowParticles:1b,Duration:9600,Id:90b,Amplifier:0b}],Potion:\"ars_nouveau:spell_damage_long\"}`
                            }
                        ]
                    }
                ]
            },
            {
                rolls: { min: 0, max: 1 },
                entries: [
                    {
                        type: 'item',
                        weight: 1,
                        name: 'ars_nouveau:caster_tome',
                        functions: [
                            {
                                function: 'set_nbt',
                                tag: `{flavor:\"Gusts of wind, sharp as blades.\",color:\"1,1,1\",spell_0:\"[projectile, split, split, pierce, pierce, gust, amplify, amplify, cut, amplify]\",display:{Name:'{\"italic\":true,\"color\":\"dark_purple\",\"text\":\"Wind Blades\"}'},current_slot:0,max_slot:1}`
                            }
                        ]
                    },
                    {
                        type: 'item',
                        weight: 1,
                        name: 'ars_nouveau:caster_tome',
                        functions: [
                            {
                                function: 'set_nbt',
                                tag: `{flavor:\"Creates a fire that quickly freezes to ice.\",color:\"255,25,180\",spell_0:\"[projectile, ignite, delay, conjure_water, freeze]\",display:{Name:'{\"italic\":true,\"color\":\"dark_purple\",\"text\":\"Farfalla\\'s Frosty Flames\"}'},current_slot:0,max_slot:1}`
                            }
                        ]
                    },
                    {
                        type: 'item',
                        weight: 1,
                        name: 'ars_nouveau:caster_tome',
                        functions: [
                            {
                                function: 'set_nbt',
                                tag: `{flavor:\"Believe it!\",color:\"1,1,1\",spell_0:\"[underfoot, linger, accelerate, accelerate, accelerate, aoe, aoe, aoe, summon_decoy]\",display:{Name:'{\"italic\":true,\"color\":\"dark_purple\",\"text\":\"Multi Shadow Clone\"}'},current_slot:0,max_slot:1}`
                            }
                        ]
                    }
                ]
            }
        ]
    };

    event.addJson(`apotheosis:loot_tables/tome_tower.json`, loot_table);
});
