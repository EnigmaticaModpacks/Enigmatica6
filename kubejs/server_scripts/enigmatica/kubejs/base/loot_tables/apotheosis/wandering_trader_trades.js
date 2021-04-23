/// High Priority required or Apotheosis over-writes these.
events.listen('server.datapack.high_priority', (event) => {
    let trades = [
        {
            name: 'arachnids_fear',
            recipe: {
                rare: '',
                input_1: {
                    item: 'minecraft:diamond_sword',
                    count: 1,
                    nbt: '{Damage:0}'
                },
                input_2: {
                    item: 'minecraft:emerald',
                    count: 45
                },
                output: {
                    item: 'minecraft:diamond_sword',
                    count: 1,
                    nbt:
                        '{Enchantments:[{lvl:5s,id:"minecraft:bane_of_arthropods"},{lvl:1s,id:"minecraft:mending"},{lvl:5s,id:"minecraft:looting"},{lvl:5s,id:"minecraft:unbreaking"},{lvl:3s,id:"minecraft:fire_aspect"}],display:{Name:\u0027{"translate":"name.apotheosis.merch_spider_sword"}\u0027},Damage:0}'
                },
                max_trades: 1,
                xp: 20,
                price_mult: 1.0
            }
        },
        {
            name: 'eternal_vigilance',
            recipe: {
                rare: '',
                input_1: {
                    item: 'minecraft:diamond',
                    count: 64
                },
                input_2: {
                    item: 'minecraft:phantom_membrane',
                    count: 32
                },
                output: {
                    item: 'minecraft:diamond_sword',
                    count: 1,
                    nbt:
                        '{Enchantments:[{lvl:5s,id:"ensorcellation:magic_edge"},{lvl:3s,id:"apotheosis:life_mending"},{lvl:3s,id:"minecraft:looting"},{lvl:5s,id:"minecraft:unbreaking"},{lvl:3s,id:"apotheosis:scavenger"}],display:{Name:\u0027{"translate":"name.apotheosis.vigilance"}\u0027},Damage:0}'
                },
                max_trades: 1,
                xp: 20,
                price_mult: 0.0
            }
        },
        {
            name: 'greatplate_of_eternity',
            recipe: {
                rare: '',
                input_1: {
                    item: 'minecraft:diamond_chestplate',
                    count: 1,
                    nbt: '{Damage:0}'
                },
                input_2: {
                    item: 'minecraft:emerald',
                    count: 45
                },
                output: {
                    item: 'minecraft:diamond_chestplate',
                    count: 1,
                    nbt:
                        '{Enchantments:[{lvl:5s,id:"minecraft:fire_protection"},{lvl:1s,id:"minecraft:mending"},{lvl:5s,id:"minecraft:unbreaking"},{lvl:2s,id:"apotheosis:berserk"}],display:{Name:\u0027{"translate":"name.apotheosis.merch_chest"}\u0027},Damage:0}'
                },
                max_trades: 1,
                xp: 20,
                price_mult: 1.0
            }
        },
        {
            name: 'rune_forged_greaves',
            recipe: {
                rare: '',
                input_1: {
                    item: 'minecraft:diamond_boots',
                    count: 1,
                    nbt: '{Damage:0}'
                },
                input_2: {
                    item: 'minecraft:emerald',
                    count: 45
                },
                output: {
                    item: 'minecraft:diamond_boots',
                    count: 1,
                    nbt:
                        '{Enchantments:[{lvl:5s,id:"ensorcellation:magic_protection"},{lvl:1s,id:"minecraft:mending"},{lvl:5s,id:"minecraft:unbreaking"},{lvl:1s,id:"apotheosis:stable_footing"},{lvl:5s,id:"minecraft:feather_falling"}],display:{Name:\u0027{"translate":"name.apotheosis.merch_boots"}\u0027},Damage:0}'
                },
                max_trades: 1,
                xp: 20,
                price_mult: 1.0
            }
        },
        {
            name: 'stonebreaker',
            recipe: {
                rare: '',
                input_1: {
                    item: 'minecraft:diamond_pickaxe',
                    count: 1,
                    nbt: '{Damage:0}'
                },
                input_2: {
                    item: 'minecraft:emerald',
                    count: 45
                },
                output: {
                    item: 'minecraft:diamond_pickaxe',
                    count: 1,
                    nbt:
                        '{Enchantments:[{lvl:5s,id:"minecraft:efficiency"},{lvl:1s,id:"minecraft:mending"},{lvl:5s,id:"minecraft:fortune"},{lvl:5s,id:"minecraft:unbreaking"},{lvl:4s,id:"apotheosis:depth_miner"}],display:{Name:\u0027{"translate":"name.apotheosis.merch_pick"}\u0027},Damage:0}'
                },
                max_trades: 1,
                xp: 20,
                price_mult: 1.0
            }
        },
        {
            name: 'thunder_forged_legguards',
            recipe: {
                rare: '',
                input_1: {
                    item: 'minecraft:diamond_leggings',
                    count: 1,
                    nbt: '{Damage:0}'
                },
                input_2: {
                    item: 'minecraft:emerald',
                    count: 45
                },
                output: {
                    item: 'minecraft:diamond_leggings',
                    count: 1,
                    nbt:
                        '{Enchantments:[{lvl:5s,id:"minecraft:blast_protection"},{lvl:1s,id:"minecraft:mending"},{lvl:5s,id:"minecraft:unbreaking"},{lvl:2s,id:"apotheosis:berserk"}],display:{Name:\u0027{"translate":"name.apotheosis.merch_legs"}\u0027},Damage:0}'
                },
                max_trades: 1,
                xp: 20,
                price_mult: 1.0
            }
        },
        {
            name: 'timeworn_visage',
            recipe: {
                rare: '',
                input_1: {
                    item: 'minecraft:diamond_helmet',
                    count: 1,
                    nbt: '{Damage:0}'
                },
                input_2: {
                    item: 'minecraft:emerald',
                    count: 45
                },
                output: {
                    item: 'minecraft:diamond_helmet',
                    count: 1,
                    nbt:
                        '{Enchantments:[{lvl:5s,id:"minecraft:protection"},{lvl:1s,id:"minecraft:mending"},{lvl:5s,id:"minecraft:unbreaking"},{lvl:3s,id:"minecraft:respiration"},{lvl:3s,id:"minecraft:aqua_affinity"},{lvl:3s,id:"apotheosis:rebounding"}],display:{Name:\u0027{"translate":"name.apotheosis.merch_helm"}\u0027},Damage:0}'
                },
                max_trades: 1,
                xp: 20,
                price_mult: 1.0
            }
        },
        {
            name: 'treecapitator',
            recipe: {
                rare: '',
                input_1: {
                    item: 'minecraft:diamond_axe',
                    count: 1,
                    nbt: '{Damage:0}'
                },
                input_2: {
                    item: 'minecraft:emerald',
                    count: 45
                },
                output: {
                    item: 'minecraft:diamond_axe',
                    count: 1,
                    nbt:
                        '{Enchantments:[{lvl:7s,id:"minecraft:efficiency"},{lvl:1s,id:"minecraft:mending"},{lvl:1s,id:"minecraft:silk_touch"},{lvl:5s,id:"minecraft:unbreaking"}],display:{Name:\u0027{"translate":"name.apotheosis.merch_axe"}\u0027},Damage:0}'
                },
                max_trades: 1,
                xp: 20,
                price_mult: 1.0
            }
        },
        {
            name: 'bonesplitter',
            recipe: {
                rare: '',
                input_1: {
                    item: 'minecraft:diamond_axe',
                    count: 1,
                    nbt: '{Damage:0}'
                },
                input_2: {
                    item: 'minecraft:emerald',
                    count: 45
                },
                output: {
                    item: 'minecraft:diamond_axe',
                    count: 1,
                    nbt:
                        '{Enchantments:[{lvl:1s,id:"ensorcellation:instigating"},{lvl:5s,id:"minecraft:smite"},{lvl:1s,id:"minecraft:mending"},{lvl:5s,id:"apotheosis:hell_infusion"},{lvl:2s,id:"apotheosis:capturing"},{lvl:5s,id:"minecraft:looting"},{lvl:3s,id:"minecraft:unbreaking"}],display:{Name:\u0027{"translate":"name.apotheosis.merch_axe2"}\u0027},Damage:0}'
                },
                max_trades: 1,
                xp: 20,
                price_mult: 1.0
            }
        },
        {
            name: 'captive_dreams',
            recipe: {
                rare: '',
                input_1: {
                    item: 'minecraft:diamond_sword',
                    count: 1,
                    nbt: '{Damage:0}'
                },
                input_2: {
                    item: 'minecraft:emerald',
                    count: 45
                },
                output: {
                    item: 'minecraft:diamond_sword',
                    count: 1,
                    nbt:
                        '{Enchantments:[{lvl:7s,id:"minecraft:sharpness"},{lvl:1s,id:"minecraft:mending"},{lvl:4s,id:"minecraft:looting"},{lvl:5s,id:"minecraft:unbreaking"},{lvl:3s,id:"apotheosis:capturing"}],display:{Name:\u0027{"translate":"name.apotheosis.merch_sword"}\u0027},Damage:0}'
                },
                max_trades: 1,
                xp: 20,
                price_mult: 1.0
            }
        }
    ];

    trades.forEach((trade) => {
        event.addJson(`apotheosis:wanderer_trades/${trade.name}.json`, trade.recipe);
    });
});
