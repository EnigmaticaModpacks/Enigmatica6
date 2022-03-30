onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        pools: [
            {
                item: 'placebo_code_pool_15',
                rolls: {
                    min: 1.0,
                    max: 1.0,
                    type: 'minecraft:uniform'
                },
                entries: [
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
                        weight: 20,
                        quality: 10,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:epic_tome', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 20,
                        quality: 10,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:mythic_tome', count: 1 }
                    },
                    {
                        type: 'apotheosis:affix_entry',
                        min: 1,
                        max: 4,
                        weight: 100,
                        quality: 100,
                        functions: [
                            {
                                function: 'enchant_with_levels',
                                levels: 30,
                                treasure: true
                            }
                        ]
                    }
                ]
            }
        ]
    };

    event.addJson(`undergarden:loot_tables/chests/catacombs.json`, loot_table);
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
                        '{flavor:"Gusts of wind, sharp as blades.",color:"1,1,1",spell_0:"[projectile, split, split, pierce, pierce, gust, amplify, amplify, cut, amplify]",display:{Name:\'{"italic":true,"color":"dark_purple","text":"Wind Blades"}\'},current_slot:0,max_slot:1}'
                    )
                },
                {
                    item: Item.of(
                        'ars_nouveau:caster_tome',
                        '{flavor:"Believe it!",color:"1,1,1",spell_0:"[underfoot, linger, accelerate, accelerate, accelerate, aoe, aoe, aoe, summon_decoy]",display:{Name:\'{"italic":true,"color":"dark_purple","text":"Multi Shadow Clone"}\'},current_slot:0,max_slot:1}'
                    )
                },
                {
                    item: Item.of(
                        'ars_nouveau:caster_tome',
                        '{flavor:"Creates a fire that quickly freezes to ice.",color:"255,25,180",spell_0:"[projectile, ignite, delay, conjure_water, freeze]",display:{Name:\'{"italic":true,"color":"dark_purple","text":"Farfalla\\\'s Frosty Flames"}\'},current_slot:0,max_slot:1}'
                    )
                },
                {
                    item: Item.of(
                        'ars_nouveau:caster_tome',
                        '{flavor:"Creates a temporary tunnel of blocks.",color:"255,25,180",spell_0:"[touch, intangible, aoe, aoe, pierce, pierce, pierce, pierce, pierce, extend_time]",display:{Name:\'{"italic":true,"color":"dark_purple","text":"The Shadow\\\'s Temporary Tunnel"}\'},current_slot:0,max_slot:1}'
                    )
                },
                {
                    item: Item.of(
                        'ars_nouveau:caster_tome',
                        '{flavor:"Builds a small hut around the user.",color:"255,25,180",spell_0:"[underfoot, phantom_block, aoe, aoe, aoe, pierce, pierce, pierce]",display:{Name:\'{"italic":true,"color":"dark_purple","text":"Xacris\\\' Tiny Hut"}\'},current_slot:0,max_slot:1}'
                    )
                },
                {
                    item: Item.of(
                        'ars_nouveau:caster_tome',
                        '{flavor:"The squid\'s Lovecraftian roots appear to make it immune.",color:"255,25,180",spell_0:"[projectile, launch, amplify, amplify, delay, pull, amplify, amplify]",display:{Name:\'{"italic":true,"color":"dark_purple","text":"Gootastic\\\'s Telekinetic Fishing Rod"}\'},current_slot:0,max_slot:1}'
                    )
                },
                {
                    item: Item.of(
                        'ars_nouveau:caster_tome',
                        '{flavor:"Cures status effects and grants regeneration.",color:"255,25,180",spell_0:"[touch, rune, dispel, heal, extend_time]",display:{Name:\'{"italic":true,"color":"dark_purple","text":"Rune of Renewing"}\'},current_slot:0,max_slot:1}'
                    )
                },
                {
                    item: Item.of(
                        'ars_nouveau:caster_tome',
                        '{flavor:"Sometimes you just need to get over that wall.",color:"255,25,180",spell_0:"[self, launch, delay, leap, slowfall]",display:{Name:\'{"italic":true,"color":"dark_purple","text":"Vault"}\'},current_slot:0,max_slot:1}'
                    )
                },
                {
                    item: Item.of(
                        'ars_nouveau:caster_tome',
                        '{flavor:"Creates three snaring projectiles.",color:"255,25,180",spell_0:"[projectile, split, split, snare, extend_time, extend_time]",display:{Name:\'{"italic":true,"color":"dark_purple","text":"Arachne\\\'s Weaving"}\'},current_slot:0,max_slot:1}'
                    )
                },
                {
                    item: Item.of(
                        'ars_nouveau:caster_tome',
                        '{flavor:"A classic.",color:"255,25,180",spell_0:"[projectile, ignite, explosion, amplify, amplify, aoe, aoe]",display:{Name:\'{"italic":true,"color":"dark_purple","text":"Fireball!"}\'},current_slot:0,max_slot:1}'
                    )
                },
                {
                    item: Item.of(
                        'ars_nouveau:caster_tome',
                        '{flavor:"Teleportation, with style!",color:"255,25,180",spell_0:"[projectile, blink, explosion, aoe]",display:{Name:\'{"italic":true,"color":"dark_purple","text":"Warp Impact"}\'},current_slot:0,max_slot:1}'
                    )
                },
                {
                    item: Item.of(
                        'ars_nouveau:caster_tome',
                        '{flavor:"",color:"255,25,180",spell_0:"[projectile, launch, amplify, amplify, delay, explosion, amplify]",display:{Name:\'{"italic":true,"color":"dark_purple","text":"Bailey\\\'s Bovine Rocket"}\'},current_slot:0,max_slot:1}'
                    )
                }
            ]
        },
        {
            // Incense oddities.
            rolls: { min: 0, max: 1 },
            entries: [
                {
                    item: Item.of('botania:incense_stick', '{brewKey:"botania:bloodthirst"}'),
                    weight: 50
                },
                {
                    item: Item.of('botania:incense_stick', '{brewKey:"botania:regen"}'),
                    weight: 50
                },
                {
                    item: Item.of('botania:incense_stick', '{brewKey:"botania:strength"}'),
                    weight: 50
                },
                {
                    item: Item.of('botania:incense_stick', '{brewKey:"botania:resistance"}'),
                    weight: 50
                },
                {
                    item: Item.of('botania:incense_stick', '{brewKey:"botania:soul_cross"}'),
                    weight: 50
                },
                {
                    item: Item.of('botania:incense_stick', '{brewKey:"botania:emptiness"}'),
                    weight: 50
                },
                {
                    item: Item.of('botania:incense_stick', '{brewKey:"botania:allure"}'),
                    weight: 50
                }
            ]
        },
        {
            // Magic oddities.
            rolls: { min: 6, max: 9 },
            entries: [
                {
                    item: 'eidolon:death_essence',
                    weight: 50,
                    count: [1, 2]
                },
                {
                    item: 'botania:blacker_lotus',
                    count: [2, 4],
                    weight: 50
                },
                {
                    item: 'ars_nouveau:warp_scroll',
                    weight: 100,
                    count: [1, 5]
                },
                {
                    item: 'archers_paradox:lightning_arrow',
                    weight: 100,
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
                    item: 'botania:mana_diamond',
                    weight: 50
                },
                {
                    item: 'bloodmagic:experiencebook',
                    weight: 15
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"undergarden:forgotten_guardian"}'),
                    weight: 50
                },
                {
                    item: Item.of('botania:mana_ring', '{mana:250000}'),
                    weight: 10
                },
                {
                    item: Item.of('botania:mana_ring_greater', '{mana:1000000}'),
                    weight: 2
                },
                {
                    item: Item.of('mythicbotany:mana_ring_greatest', '{mana:2000000}'),
                    weight: 1
                },
                {
                    item: 'undergarden:music_disc_mammoth',
                    weight: 20
                },
                {
                    item: 'undergarden:music_disc_relict',
                    weight: 20
                },
                {
                    item: 'astralsorcery:perk_gem_sky',
                    weight: 15
                },
                {
                    item: 'astralsorcery:perk_gem_day',
                    weight: 15
                },
                {
                    item: 'astralsorcery:perk_gem_night',
                    weight: 15
                }
            ]
        }
    ];

    event.modify('undergarden:chests/catacombs', (table) => {
        pools.forEach((pool) => {
            table.addPool((newPool) => {
                newPool.setUniformRolls(pool.rolls.min, pool.rolls.max);
                pool.entries.forEach((entry) => {
                    let count = entry.count ? entry.count : 1,
                        weight = entry.weight ? entry.weight : 1;

                    newPool.addItem(entry.item, weight, count);
                });
            });
        });
    });
});
