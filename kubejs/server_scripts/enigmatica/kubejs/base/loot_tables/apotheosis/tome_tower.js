onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        pools: [
            {
                item: 'placebo_code_pool_15',
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
            }
        ]
    };

    event.addJson(`apotheosis:loot_tables/tome_tower.json`, loot_table);
});

onEvent('generic.loot_tables', (event) => {
    const pools = [
        {
            // Caster Tomes: 50:50 chance of one.
            rolls: { min: 0, max: 1 },
            entries: [
                {
                    item: Item.of(
                        'ars_nouveau:caster_tome',
                        '{flavor:"Gusts of wind, sharp as blades.",color:"1,1,1",spell_0:"[projectile, split, split, pierce, pierce, gust, amplify, amplify, cut, amplify]",display:{item:\'{"italic":true,"color":"dark_purple","text":"Wind Blades"}\'},current_slot:0,max_slot:1}'
                    )
                },
                {
                    item: Item.of(
                        'ars_nouveau:caster_tome',
                        '{flavor:"Believe it!",color:"1,1,1",spell_0:"[underfoot, linger, accelerate, accelerate, accelerate, aoe, aoe, aoe, summon_decoy]",display:{item:\'{"italic":true,"color":"dark_purple","text":"Multi Shadow Clone"}\'},current_slot:0,max_slot:1}'
                    )
                },
                {
                    item: Item.of(
                        'ars_nouveau:caster_tome',
                        '{flavor:"Creates a fire that quickly freezes to ice.",color:"255,25,180",spell_0:"[projectile, ignite, delay, conjure_water, freeze]",display:{item:\'{"italic":true,"color":"dark_purple","text":"Farfalla\\\'s Frosty Flames"}\'},current_slot:0,max_slot:1}'
                    )
                }
            ]
        },
        {
            // Magic Reagents and oddities.
            rolls: { min: 6, max: 9 },
            entries: [
                {
                    item: Item.of(
                        'ars_nouveau:potion_flask',
                        '{count:8,CustomPotionEffects:[{Ambient:0b,CurativeItems:[{id:"minecraft:milk_bucket",Count:1b}],ShowIcon:1b,ShowParticles:1b,Duration:9600,Id:90b,Amplifier:0b}],Potion:"ars_nouveau:spell_damage_long"}'
                    ),
                    weight: 50,
                    count: [1, 2]
                },
                {
                    item: 'ars_nouveau:wilden_spike',
                    weight: 50,
                    count: [1, 2]
                },
                {
                    item: 'ars_nouveau:wilden_horn',
                    weight: 50,
                    count: [1, 2]
                },
                {
                    item: 'ars_nouveau:wilden_wing',
                    weight: 50,
                    count: [1, 2]
                },
                {
                    item: 'eidolon:death_essence',
                    weight: 50,
                    count: [1, 2]
                },
                {
                    item: 'alexsmobs:guster_eye',
                    weight: 50,
                    count: [1, 2]
                },
                {
                    item: 'alexsmobs:kangaroo_hide',
                    weight: 50,
                    count: [1, 2]
                },
                {
                    item: 'botania:blacker_lotus',
                    weight: 50
                },
                {
                    item: 'occultism:soul_gem',
                    weight: 50
                },
                {
                    item: 'ars_nouveau:drygmy_shard',
                    weight: 50
                },
                {
                    item: 'ars_nouveau:wixie_shards',
                    weight: 50
                },
                {
                    item: 'ars_nouveau:carbuncle_shards',
                    weight: 50
                },
                {
                    item: 'bloodmagic:intermediatecuttingfluid',
                    weight: 50
                },
                {
                    item: 'ars_nouveau:warp_scroll',
                    weight: 100,
                    count: [1, 5]
                },
                {
                    item: 'eidolon:arcane_gold_ingot',
                    weight: 100,
                    count: [2, 7]
                },
                {
                    item: 'thermal:lightning_charge',
                    weight: 100,
                    count: [2, 7]
                },
                {
                    item: 'alexsmobs:komodo_spit',
                    weight: 50,
                    count: [1, 2]
                },
                {
                    item: 'alexsmobs:rattlesnake_rattle',
                    weight: 50,
                    count: [1, 2]
                },
                {
                    item: 'eidolon:ender_calx',
                    weight: 50,
                    count: [2, 7]
                },
                {
                    item: 'astralsorcery:nocturnal_powder',
                    weight: 50,
                    count: [2, 7]
                },
                {
                    item: 'astralsorcery:illumination_powder',
                    weight: 50,
                    count: [2, 7]
                },
                {
                    item: 'ars_nouveau:mana_gem',
                    weight: 100,
                    count: [5, 9]
                }
            ]
        }
    ];

    event.modify('apotheosis:tome_tower', (table) => {
        pools.forEach((pool) => {
            table.addPool((newPool) => {
                newPool.setUniformRolls(pool.rolls.min, pool.rolls.max);
                pool.entries.forEach((entry) => {
                    let count = 1,
                        weight = 1;

                    if (entry.count) {
                        count = entry.count;
                    }

                    if (entry.weight) {
                        weight = entry.weight;
                    }

                    newPool.addItem(entry.item, weight, count);
                });
            });
        });
    });
});
