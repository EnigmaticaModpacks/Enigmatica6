events.listen('recipes', (event) => {
    // Please add new recipes to this object instead of recipes
    const newRecipes = [
        {
            output: 'botanypots:botany_pot',
            pattern: ['ADA', 'ABA', 'ACA'],
            key: {
                A: 'minecraft:terracotta',
                B: 'minecraft:flower_pot',
                C: 'minecraft:bone_block',
                D: 'minecraft:water_bucket'
            },
            id: 'botanypots:crafting/botany_pot'
        },

        {
            output: 'ironjetpacks:hardened_jetpack',
            pattern: ['ABA', 'ECE', 'D D'],
            key: {
                A: 'powah:steel_energized',
                B: 'powah:battery_hardened',
                C: 'thermal:hazmat_chestplate',
                D: 'ironjetpacks:hardened_thruster',
                E: 'powah:reactor_hardened'
            }
        },
        {
            output: 'ironjetpacks:hardened_thruster',
            pattern: [' B ', 'BDB', 'ACA'],
            key: {
                A: 'powah:steel_energized',
                B: 'powah:capacitor_hardened',
                C: 'powah:furnator_hardened',
                D: 'powah:reactor_hardened'
            }
        },

        {
            output: 'ironjetpacks:invar_jetpack',
            pattern: ['ABA', 'ECE', 'D D'],
            key: {
                A: '#forge:plates/invar',
                B: 'thermal:upgrade_augment_1',
                C: 'ironjetpacks:hardened_jetpack',
                D: 'ironjetpacks:invar_thruster',
                E: '#forge:gears/invar'
            }
        },
        {
            output: 'ironjetpacks:invar_thruster',
            pattern: [' B ', 'BDB', 'ACA'],
            key: {
                A: '#forge:plates/invar',
                B: 'powah:capacitor_hardened',
                C: 'powah:furnator_hardened',
                D: '#forge:gears/invar'
            }
        },

        {
            output: 'ironjetpacks:blazing_jetpack',
            pattern: ['ABA', 'ECE', 'D D'],
            key: {
                A: 'powah:crystal_blazing',
                B: 'powah:battery_blazing',
                C: 'ironjetpacks:invar_jetpack',
                D: 'ironjetpacks:blazing_thruster',
                E: 'powah:reactor_blazing'
            }
        },
        {
            output: 'ironjetpacks:blazing_thruster',
            pattern: [' B ', 'BDB', 'ACA'],
            key: {
                A: 'powah:crystal_blazing',
                B: 'powah:capacitor_blazing',
                C: 'powah:furnator_blazing',
                D: 'powah:reactor_blazing'
            }
        },

        {
            output: 'ironjetpacks:signalum_jetpack',
            pattern: ['ABA', 'ECE', 'D D'],
            key: {
                A: '#forge:plates/signalum',
                B: 'thermal:upgrade_augment_2',
                C: 'ironjetpacks:blazing_jetpack',
                D: 'ironjetpacks:signalum_thruster',
                E: '#forge:gears/signalum'
            }
        },
        {
            output: 'ironjetpacks:signalum_thruster',
            pattern: [' B ', 'BDB', 'ACA'],
            key: {
                A: '#forge:plates/signalum',
                B: 'powah:capacitor_blazing',
                C: 'powah:furnator_blazing',
                D: '#forge:gears/signalum'
            }
        },

        {
            output: 'ironjetpacks:niotic_jetpack',
            pattern: ['ABA', 'ECE', 'D D'],
            key: {
                A: 'powah:crystal_niotic',
                B: 'powah:battery_niotic',
                C: 'ironjetpacks:signalum_jetpack',
                D: 'ironjetpacks:niotic_thruster',
                E: 'powah:reactor_niotic'
            }
        },
        {
            output: 'ironjetpacks:niotic_thruster',
            pattern: [' B ', 'BDB', 'ACA'],
            key: {
                A: 'powah:crystal_niotic',
                B: 'powah:capacitor_niotic',
                C: 'powah:furnator_niotic',
                D: 'powah:reactor_niotic'
            }
        },

        {
            output: 'ironjetpacks:lumium_jetpack',
            pattern: ['ABA', 'ECE', 'D D'],
            key: {
                A: '#forge:plates/lumium',
                B: 'thermal:dynamo_fuel_augment',
                C: 'ironjetpacks:niotic_jetpack',
                D: 'ironjetpacks:lumium_thruster',
                E: '#forge:gears/lumium'
            }
        },
        {
            output: 'ironjetpacks:lumium_thruster',
            pattern: [' B ', 'BDB', 'ACA'],
            key: {
                A: '#forge:plates/lumium',
                B: 'powah:capacitor_niotic',
                C: 'powah:furnator_niotic',
                D: '#forge:gears/lumium'
            }
        },

        {
            output: 'ironjetpacks:spirited_jetpack',
            pattern: ['ABA', 'ECE', 'D D'],
            key: {
                A: 'powah:crystal_spirited',
                B: 'powah:battery_spirited',
                C: 'ironjetpacks:lumium_jetpack',
                D: 'ironjetpacks:spirited_thruster',
                E: 'powah:reactor_spirited'
            }
        },
        {
            output: 'ironjetpacks:spirited_thruster',
            pattern: [' B ', 'BDB', 'ACA'],
            key: {
                A: 'powah:crystal_spirited',
                B: 'powah:capacitor_spirited',
                C: 'powah:furnator_spirited',
                D: 'powah:reactor_spirited'
            }
        },

        {
            output: 'ironjetpacks:enderium_jetpack',
            pattern: ['ABA', 'ECE', 'D D'],
            key: {
                A: '#forge:plates/enderium',
                B: 'thermal:upgrade_augment_3',
                C: 'ironjetpacks:spirited_jetpack',
                D: 'ironjetpacks:enderium_thruster',
                E: '#forge:gears/enderium'
            }
        },
        {
            output: 'ironjetpacks:enderium_thruster',
            pattern: [' B ', 'BDB', 'ACA'],
            key: {
                A: '#forge:plates/enderium',
                B: 'powah:capacitor_spirited',
                C: 'powah:furnator_spirited',
                D: '#forge:gears/enderium'
            }
        },

        {
            output: 'ironjetpacks:nitro_jetpack',
            pattern: ['ABA', 'ECE', 'D D'],
            key: {
                A: 'powah:crystal_nitro',
                B: 'powah:battery_nitro',
                C: 'ironjetpacks:enderium_jetpack',
                D: 'ironjetpacks:nitro_thruster',
                E: 'powah:reactor_nitro'
            }
        },
        {
            output: 'ironjetpacks:nitro_thruster',
            pattern: [' B ', 'BDB', 'ACA'],
            key: {
                A: 'powah:crystal_nitro',
                B: 'powah:capacitor_nitro',
                C: 'powah:furnator_nitro',
                D: 'powah:reactor_nitro'
            }
        },
        {
            output: 'betterendforge:dense_snow',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: 'minecraft:snow_block'
            }
        }
    ];

    var recipes = [
        shapedRecipe('tetra:hammer_base', ['LXL', 'LCL', 'LXL'], {
            L: '#forge:ingots/steel',
            X: '#forge:circuits/basic',
            C: '#morevanillalib:tools'
        }),
        shapedRecipe('tetra:core_extractor', ['LXL', 'LCL', 'LXL'], {
            L: '#forge:ingots/steel',
            X: '#forge:circuits/basic',
            C: 'industrialforegoing:fluid_extractor'
        }),

        shapedRecipe('minecraft:hopper', ['ABA', 'ABA', ' A '], {
            A: '#forge:ingots/iron',
            B: '#minecraft:logs'
        }),
        shapedRecipe('refinedstorageaddons:wireless_crafting_grid', ['ABA', 'ACA', 'ADA'], {
            A: 'refinedstorage:quartz_enriched_iron',
            B: 'refinedstorage:range_upgrade',
            C: 'refinedstorage:wireless_grid',
            D: 'minecraft:crafting_table'
        }),
        shapedRecipe('simplefarming:fish_and_chips', [' A ', 'BCB', ' A '], {
            A: '#forge:crops/potato',
            B: '#forge:grain',
            C: 'aquaculture:fish_fillet_cooked'
        }),
        shapedRecipe('minecraft:tube_coral_block', ['AA', 'AA'], {
            A: 'minecraft:tube_coral_fan'
        }),
        shapedRecipe('minecraft:brain_coral_block', ['AA', 'AA'], {
            A: 'minecraft:brain_coral_fan'
        }),
        shapedRecipe('minecraft:bubble_coral_block', ['AA', 'AA'], {
            A: 'minecraft:bubble_coral_fan'
        }),
        shapedRecipe('minecraft:fire_coral_block', ['AA', 'AA'], {
            A: 'minecraft:fire_coral_fan'
        }),
        shapedRecipe('minecraft:horn_coral_block', ['AA', 'AA'], {
            A: 'minecraft:horn_coral_fan'
        }),
        shapedRecipe('minecraft:tube_coral_block', ['AA', 'AA'], {
            A: 'minecraft:tube_coral'
        }),
        shapedRecipe('minecraft:brain_coral_block', ['AA', 'AA'], {
            A: 'minecraft:brain_coral'
        }),
        shapedRecipe('minecraft:bubble_coral_block', ['AA', 'AA'], {
            A: 'minecraft:bubble_coral'
        }),
        shapedRecipe('minecraft:fire_coral_block', ['AA', 'AA'], {
            A: 'minecraft:fire_coral'
        }),
        shapedRecipe('minecraft:horn_coral_block', ['AA', 'AA'], {
            A: 'minecraft:horn_coral'
        }),
        shapedRecipe('decorative_blocks:lattice', ['A A', '   ', 'A A'], {
            A: '#forge:rods/wooden'
        }),
        shapedRecipe(Item.of('valhelsia_structures:oak_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:oak_log'
        }),
        shapedRecipe(Item.of('valhelsia_structures:spruce_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:spruce_log'
        }),
        shapedRecipe(Item.of('valhelsia_structures:birch_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:birch_log'
        }),
        shapedRecipe(Item.of('valhelsia_structures:jungle_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:jungle_log'
        }),
        shapedRecipe(Item.of('valhelsia_structures:dark_oak_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:dark_oak_log'
        }),
        shapedRecipe(Item.of('valhelsia_structures:acacia_post', 6), ['A', 'A', 'A'], {
            A: 'minecraft:acacia_log'
        }),
        shapedRecipe(Item.of('minecraft:ladder', 4), ['A A', 'ABA', 'A A'], {
            A: '#forge:rods/wooden',
            B: '#minecraft:planks'
        }),
        shapedRecipe(Item.of('engineersdecor:slag_brick_block', 8), ['AAA', 'ABA', 'AAA'], {
            A: '#engineersdecor:brick_ingots',
            B: '#forge:slag'
        }),
        shapedRecipe(Item.of('prettypipes:wrench', 1), [' A ', 'AB ', '  B'], {
            A: '#forge:nuggets/iron',
            B: 'prettypipes:pipe'
        }),
        shapedRecipe(Item.of('prettypipes:blank_module', 3), [' A ', 'BBB', 'CCC'], {
            A: '#forge:dusts/redstone',
            B: 'minecraft:stone_slab',
            C: '#forge:nuggets/copper'
        }),
        shapedRecipe(Item.of('prettypipes:low_extraction_module', 1), [' A ', ' B ', ' C '], {
            A: '#forge:dusts/redstone',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:medium_extraction_module', 1), [' C ', 'ABA', ' A '], {
            A: '#forge:nuggets/invar',
            B: 'prettypipes:low_extraction_module',
            C: '#forge:ingots/invar'
        }),
        shapedRecipe(Item.of('prettypipes:high_extraction_module', 1), [' C ', 'ABA', ' A '], {
            A: '#forge:nuggets/electrum',
            B: 'prettypipes:medium_extraction_module',
            C: '#forge:ingots/electrum'
        }),
        shapedRecipe(Item.of('prettypipes:low_filter_module', 1), [' A ', ' B ', ' C '], {
            A: '#forge:paper',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:medium_filter_module', 1), [' C ', 'ABA', ' C '], {
            A: '#forge:nuggets/invar',
            B: 'prettypipes:low_filter_module',
            C: 'minecraft:iron_bars'
        }),
        shapedRecipe(Item.of('prettypipes:high_filter_module', 1), [' C ', 'ABA', ' C '], {
            A: '#forge:nuggets/electrum',
            B: 'prettypipes:medium_filter_module',
            C: 'minecraft:iron_bars'
        }),
        shapedRecipe(Item.of('prettypipes:low_speed_module', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:sugar',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:medium_speed_module', 1), ['ACA', 'CBC', 'ACA'], {
            A: '#forge:nuggets/invar',
            B: 'prettypipes:low_speed_module',
            C: 'minecraft:sugar'
        }),
        shapedRecipe(Item.of('prettypipes:high_speed_module', 1), ['ACA', 'CBC', 'ACA'], {
            A: '#forge:nuggets/electrum',
            B: 'prettypipes:medium_speed_module',
            C: 'minecraft:sugar'
        }),
        shapedRecipe(Item.of('prettypipes:low_low_priority_module', 1), [' A ', ' B ', ' C '], {
            A: '#forge:nuggets/lead',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:medium_low_priority_module', 1), ['ACA', 'CBC', 'ACA'], {
            A: '#forge:nuggets/invar',
            B: 'prettypipes:low_low_priority_module',
            C: '#forge:nuggets/lead'
        }),
        shapedRecipe(Item.of('prettypipes:high_low_priority_module', 1), ['ACA', 'CBC', 'ACA'], {
            A: '#forge:nuggets/electrum',
            B: 'prettypipes:medium_low_priority_module',
            C: '#forge:nuggets/lead'
        }),
        shapedRecipe(Item.of('prettypipes:low_high_priority_module', 1), [' A ', ' B ', ' C '], {
            A: '#forge:nuggets/silver',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:medium_high_priority_module', 1), ['ACA', 'CBC', 'ACA'], {
            A: '#forge:nuggets/invar',
            B: 'prettypipes:low_high_priority_module',
            C: '#forge:nuggets/silver'
        }),
        shapedRecipe(Item.of('prettypipes:high_high_priority_module', 1), ['ACA', 'CBC', 'ACA'], {
            A: '#forge:nuggets/electrum',
            B: 'prettypipes:medium_high_priority_module',
            C: '#forge:nuggets/silver'
        }),
        shapedRecipe(Item.of('prettypipes:low_retrieval_module', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:observer',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:medium_retrieval_module', 1), [' A ', 'ABA', ' C '], {
            A: '#forge:nuggets/invar',
            B: 'prettypipes:low_retrieval_module',
            C: '#forge:ingots/invar'
        }),
        shapedRecipe(Item.of('prettypipes:high_retrieval_module', 1), [' A ', 'ABA', ' C '], {
            A: '#forge:nuggets/electrum',
            B: 'prettypipes:medium_retrieval_module',
            C: '#forge:ingots/electrum'
        }),
        shapedRecipe(Item.of('prettypipes:stack_size_module', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:comparator',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:damage_filter_modifier', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:stone_pickaxe',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:nbt_filter_modifier', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:book',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:tag_filter_modifier', 1), [' A ', ' B ', ' C '], {
            A: '#forge:chunks',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:mod_filter_modifier', 1), [' A ', ' B ', ' C '], {
            A: 'prettypipes:wrench',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:redstone_module', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:redstone_torch',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:filter_increase_modifier', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:iron_bars',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:low_crafting_module', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:crafting_table',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:medium_crafting_module', 1), [' A ', 'ABA', ' C '], {
            A: '#forge:nuggets/invar',
            B: 'prettypipes:low_crafting_module',
            C: '#forge:ingots/invar'
        }),
        shapedRecipe(Item.of('prettypipes:high_crafting_module', 1), [' A ', 'ABA', ' C '], {
            A: '#forge:nuggets/electrum',
            B: 'prettypipes:medium_crafting_module',
            C: '#forge:ingots/electrum'
        }),
        shapedRecipe(Item.of('prettypipes:pipe', 12), ['   ', 'ABA', '   '], {
            A: '#forge:ingots/tin',
            B: '#forge:glass/colorless'
        }),
        shapedRecipe(Item.of('prettypipes:item_terminal', 1), [' B ', 'CAD', 'EFE'], {
            A: 'thermal:machine_frame',
            B: 'minecraft:observer',
            C: 'prettypipes:high_extraction_module',
            D: 'prettypipes:high_retrieval_module',
            E: '#forge:gears/invar',
            F: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:pressurizer', 1), [' E ', 'BAB', 'CDC'], {
            A: 'thermal:machine_frame',
            B: 'prettypipes:high_speed_module',
            C: '#forge:gears/invar',
            D: 'thermal:rf_coil',
            E: 'prettypipes:pipe'
        }),
        shapedRecipe(Item.of('prettypipes:round_robin_sorting_modifier', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:clock',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('prettypipes:random_sorting_modifier', 1), [' A ', ' B ', ' C '], {
            A: 'minecraft:dropper',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo'
        }),
        shapedRecipe(Item.of('bloodmagic:demonwillgauge', 1), [' B ', 'ACA', ' B '], {
            A: '#forge:ingots/tin',
            B: '#forge:nuggets/tin',
            C: '#bloodmagic:crystals/demon'
        }),
        shapedRecipe(Item.of('emendatusenigmatica:steel_ingot', 2), ['AA'], {
            A: 'immersiveengineering:ingot_steel'
        }),
        shapedRecipe(Item.of('immersiveengineering:ingot_steel', 2), ['AA'], {
            A: 'mekanism:ingot_steel'
        }),
        shapedRecipe(Item.of('mekanism:ingot_steel', 2), ['AA'], {
            A: 'emendatusenigmatica:steel_ingot'
        }),
        shapedRecipe('tetra:combustion_chamber', ['CBC', 'BAB', 'CBC'], {
            A: 'mekanism:superheating_element',
            B: 'pneumaticcraft:heat_sink',
            C: 'mekanism:ultimate_thermodynamic_conductor'
        }),
        shapedRecipe('magicfeather:magicfeather', ['CFC', 'BDB', 'AEA'], {
            A: 'alexsmobs:roadrunner_feather',
            B: '#forge:ingots/enderium',
            C: 'ars_nouveau:mana_fiber',
            D: 'paraglider:deku_leaf',
            E: 'ars_nouveau:glyph_launch',
            F: 'ars_nouveau:glyph_slowfall'
        }),
        shapedRecipe('magicfeather:magicfeather', ['CFC', 'BDB', 'AEA'], {
            A: 'thermal:lightning_charge',
            B: '#mekanism:alloys/atomic',
            C: 'thermal:hazmat_fabric',
            D: 'paraglider:deku_leaf',
            E: 'thermal:hazmat_boots',
            F: 'alexsmobs:frontier_cap'
        }),
        shapedRecipe(
            Item.of('morphtool:tool').nbt({
                'morphtool:data': {
                    blockcarpentry: { id: 'blockcarpentry:texture_wrench', Count: 1 },
                    powah: { id: 'powah:wrench', Count: 1 },
                    resourcefulbees: { id: 'resourcefulbees:scraper', Count: 1 },
                    astralsorcery: { id: 'astralsorcery:wand', Count: 1 },
                    pneumaticcraft: { id: 'pneumaticcraft:pneumatic_wrench', Count: 1 },
                    immersiveengineering: { id: 'immersiveengineering:hammer', Count: 1 },
                    transport: { id: 'transport:rail_breaker', Count: 1 },
                    botania: { id: 'botania:twig_wand', Count: 1, tag: { color1: 0, color2: 0 } },
                    ars_nouveau: { id: 'ars_nouveau:dominion_wand', Count: 1 },
                    mekanism: { id: 'mekanism:configurator', Count: 1 },
                    bloodmagic: { id: 'bloodmagic:ritualtinkerer', Count: 1 },
                    thermal: { id: 'thermal:wrench', Count: 1 },
                    rftoolsbase: { id: 'rftoolsbase:smartwrench', Count: 1 },
                    create: { id: 'create:wrench', Count: 1 },
                    chiselsandbits: { id: 'chiselsandbits:wrench_wood', Count: 1 },
                    refinedstorage: { id: 'refinedstorage:wrench', Count: 1 },
                    prettypipes: { id: 'prettypipes:wrench', Count: 1 },
                    storagedrawers: { id: 'storagedrawers:drawer_key', Count: 1 },
                    fluxnetworks: { id: 'fluxnetworks:flux_configurator', Count: 1 },
                    integratedtunnels: { id: 'integrateddynamics:wrench', Count: 1 }
                }
            }),
            ['ABA', 'CFD', 'AEA'],
            {
                A: 'minecraft:redstone_block',
                B: '#forge:gears/gold',
                C: '#forge:gears/iron',
                D: '#forge:gears/silver',
                E: '#forge:gears/copper',
                F: 'morphtool:tool'
            }
        ),
        shapedRecipe(Item.of('occultism:candle_white'), [' B ', 'AAA', 'AAA'], {
            A: '#forge:wax',
            B: '#forge:string'
        }),
        shapedRecipe(Item.of('eidolon:candle', 4), ['B', 'A'], {
            A: '#forge:wax',
            B: '#forge:string'
        }),
        shapedRecipe(Item.of('quark:white_candle', 2), ['B', 'A', 'A'], {
            A: '#forge:wax',
            B: '#forge:string'
        }),
        shapedRecipe(Item.of('byg:embur_hyphae', 3), ['AA', 'AA'], {
            A: 'byg:embur_pedu'
        }),
        shapedRecipe(Item.of('fluxnetworks:flux_controller', 1), ['ABA', 'CDC', 'AAA'], {
            A: 'fluxnetworks:flux_block',
            B: 'fluxnetworks:flux_core',
            C: 'fluxnetworks:flux_dust',
            D: 'powah:player_transmitter_nitro'
        }),
        shapedRecipe(Item.of('fluxnetworks:flux_core', 8), ['ABA', 'BCB', 'ABA'], {
            A: 'fluxnetworks:flux_dust',
            B: '#forge:obsidian',
            C: 'powah:ender_core'
        }),
        shapedRecipe(Item.of('byg:pollen_block', 1), ['AA', 'AA'], {
            A: 'byg:pollen_dust'
        }),
        shapedRecipe('losttrinkets:magical_feathers', ['FAF', 'EBE', 'CDC'], {
            A: 'minecraft:elytra',
            B: 'magicfeather:magicfeather',
            C: 'minecraft:prismarine_shard',
            D: Item.of('minecraft:potion', { Potion: 'bountifulbaubles:flight' }),
            E: 'rftoolsbase:infused_diamond',
            F: 'minecraft:ender_eye'
        }),
        shapedRecipe(Item.of('quark:turf', 1), ['A', 'A'], {
            A: 'quark:turf_slab'
        }),
        shapedRecipe(Item.of('minecraft:string', 3), ['AA', 'A '], {
            A: 'supplementaries:flax'
        }),

        //ID Overrides
        shapedRecipe(
            Item.of('minecraft:honeycomb_block'),
            ['AAA', 'AAA', 'AAA'],
            {
                A: 'minecraft:honeycomb'
            },
            'minecraft:honeycomb_block'
        ),

        shapedRecipe(
            Item.of('resourcefulbees:t1_apiary'),
            ['ABA', 'BCB', 'ABA'],
            {
                A: '#resourcefulbees:resourceful_honeycomb_block',
                B: 'minecraft:honey_block',
                C: 'resourcefulbees:t4_beehive'
            },
            'resourcefulbees:t1_apiary'
        ),

        shapedRecipe(
            Item.of('resourcefulbees:t2_apiary'),
            ['ACA', 'BDB', 'ACA'],
            {
                A: '#resourcefulbees:resourceful_honeycomb_block',
                B: 'resourcefulbees:t4_beehive',
                C: 'resourcefulbees:t1_apiary',
                D: 'minecraft:nether_star'
            },
            'resourcefulbees:t2_apiary'
        ),

        shapedRecipe(
            Item.of('resourcefulbees:t3_apiary'),
            ['DCD', 'BAB', 'DCD'],
            {
                A: '#resourcefulbees:resourceful_honeycomb_block',
                B: 'resourcefulbees:t4_beehive',
                C: 'resourcefulbees:t2_apiary',
                D: 'minecraft:nether_star'
            },
            'resourcefulbees:t3_apiary'
        ),

        shapedRecipe(
            Item.of('resourcefulbees:t4_apiary'),
            ['DCD', 'BAB', 'DCD'],
            {
                A: '#resourcefulbees:resourceful_honeycomb_block',
                B: 'resourcefulbees:t4_beehive',
                C: 'resourcefulbees:t3_apiary',
                D: 'minecraft:nether_star'
            },
            'resourcefulbees:t4_apiary'
        ),

        // Torch from Stick+Standing Fire
        shapedRecipe(Item.of('minecraft:torch', 4), ['A', 'B'], {
            A: 'additional_lights:fire_for_standing_torch_s',
            B: '#forge:rods/wooden'
        }),

        shapedRecipe(Item.of('projectvibrantjourneys:bones', 8), ['AAA', 'A A', 'AAA'], {
            A: 'minecraft:bone'
        }),

        shapedRecipe(Item.of('projectvibrantjourneys:charred_bones', 8), ['AAA', 'ABA', 'AAA'], {
            A: 'minecraft:bone',
            B: 'minecraft:charcoal'
        }),

        shapedRecipe(Item.of('projectvibrantjourneys:seashells', 8), ['AAA', 'ABA', 'AAA'], {
            A: 'minecraft:prismarine_shard',
            B: 'minecraft:nautilus_shell'
        })
    ];

    recipes.forEach(function (recipe) {
        if (recipe.id) {
            event.shaped(recipe.result, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.result, recipe.pattern, recipe.key);
        }
    });

    newRecipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });

    buildWoodVariants.forEach((wood) => {
        if (wood.modId == 'minecraft') {
            return;
        }
        //All recipes using logs here
        var chest = wood.modId + ':' + wood.logType + '_chest';
        if (!Item.exists(chest)) {
            event.shaped(Item.of('minecraft:chest', 4), ['AAA', 'A A', 'AAA'], {
                A: wood.logBlock
            });
        } else {
            event.shaped(Item.of(chest, 4), ['AAA', 'A A', 'AAA'], {
                A: wood.logBlock
            });
        }

        var dupes = [
            'palo_verde',
            'withering_oak',
            'blue_archwood',
            'green_archwood',
            'purple_archwood',
            'menril_filled',
            'watchful_aspen',
            'crustose',
            'sappy_maple'
        ];

        if (dupes.includes(wood.logType)) {
            return;
        }

        //All recipes using planks here
        event.shaped(Item.of('minecraft:oak_sign', 3), ['AAA', 'AAA', ' B '], {
            A: wood.plankBlock,
            B: '#forge:rods/wooden'
        });

        event.shaped(Item.of('minecraft:chest'), ['AAA', 'A A', 'AAA'], {
            A: wood.plankBlock
        });

        event.shaped(Item.of('storagedrawers:oak_full_drawers_1'), ['AAA', ' C ', 'AAA'], {
            A: wood.plankBlock,
            C: '#forge:chests'
        });
        event.shaped(Item.of('storagedrawers:oak_full_drawers_2'), ['ACA', 'AAA', 'ACA'], {
            A: wood.plankBlock,
            C: '#forge:chests'
        });
        event.shaped(Item.of('storagedrawers:oak_full_drawers_4'), ['CAC', 'AAA', 'CAC'], {
            A: wood.plankBlock,
            C: '#forge:chests'
        });
        event.shaped(Item.of('storagedrawers:oak_half_drawers_1'), ['AAA', ' C ', 'AAA'], {
            A: wood.slabBlock,
            C: '#forge:chests'
        });
        event.shaped(Item.of('storagedrawers:oak_half_drawers_2'), ['ACA', 'AAA', 'ACA'], {
            A: wood.slabBlock,
            C: '#forge:chests'
        });
        event.shaped(Item.of('storagedrawers:oak_half_drawers_4'), ['CAC', 'AAA', 'CAC'], {
            A: wood.slabBlock,
            C: '#forge:chests'
        });
    });

    powahTiers.forEach(function (tier) {
        let capacitor = 'powah:capacitor_' + tier,
            crystal = 'powah:crystal_' + tier,
            cable = 'powah:energy_cable_' + tier;

        if (tier == 'basic' || tier == 'starter') {
            return;
        } else if (tier == 'hardened') {
            crystal = 'powah:steel_energized';
        }

        let lowerTiers = [],
            i = 0,
            j = powahTiers.indexOf(tier);

        while (i < j) {
            lowerTiers.push(powahTiers[i]);
            i++;
        }

        event.shaped(Item.of(`powah:energy_cell_${tier}`), ['ABA', 'BCB', 'ABA'], {
            A: crystal,
            B: capacitor,
            C: Ingredient.of(lowerTiers.map((item) => `powah:energy_cell_${item}`))
        });

        event.shaped(Item.of(`powah:ender_cell_${tier}`), [' A ', 'ABA', ' A '], {
            A: crystal,
            B: Ingredient.of(lowerTiers.map((item) => `powah:ender_cell_${item}`))
        });

        event.shaped(Item.of(`powah:energizing_rod_${tier}`), ['   ', 'ACA', ' B '], {
            A: capacitor,
            B: `powah:energy_cable_${tier}`,
            C: Ingredient.of(lowerTiers.map((item) => `powah:energizing_rod_${item}`))
        });

        event.shaped(Item.of(`powah:furnator_${tier}`), ['AAA', 'BCB', 'A A'], {
            A: crystal,
            B: capacitor,
            C: Ingredient.of(lowerTiers.map((item) => `powah:furnator_${item}`))
        });

        event.shaped(Item.of(`powah:magmator_${tier}`), ['AAA', 'BCB', 'A A'], {
            A: crystal,
            B: capacitor,
            C: Ingredient.of(lowerTiers.map((item) => `powah:magmator_${item}`))
        });

        event.shaped(Item.of(`powah:thermo_generator_${tier}`), [' A ', 'BCB'], {
            A: crystal,
            B: capacitor,
            C: Ingredient.of(lowerTiers.map((item) => `powah:thermo_generator_${item}`))
        });

        event.shaped(Item.of(`powah:solar_panel_${tier}`), ['BCB', 'AAA'], {
            A: crystal,
            B: capacitor,
            C: Ingredient.of(lowerTiers.map((item) => `powah:solar_panel_${item}`))
        });

        event.shaped(Item.of(`powah:energy_hopper_${tier}`), ['ABA'], {
            A: capacitor,
            B: Ingredient.of(lowerTiers.map((item) => `powah:energy_hopper_${item}`))
        });

        event.shaped(Item.of(`powah:energy_discharger_${tier}`), [' A ', ' B ', ' A '], {
            A: capacitor,
            B: Ingredient.of(lowerTiers.map((item) => `powah:energy_discharger_${item}`))
        });

        event.shaped(Item.of(`powah:battery_${tier}`), [' A ', 'BCB', ' B '], {
            A: crystal,
            B: capacitor,
            C: Ingredient.of(lowerTiers.map((item) => `powah:battery_${item}`))
        });

        event.shaped(Item.of(`powah:reactor_${tier}`, 4), ['BAB', 'A A', 'BAB'], {
            A: capacitor,
            B: Ingredient.of(lowerTiers.map((item) => `powah:reactor_${item}`))
        });

        event.shaped(Item.of(`powah:ender_gate_${tier}`, 4), ['BAB', 'A A', 'BAB'], {
            A: cable,
            B: Ingredient.of(lowerTiers.map((item) => `powah:ender_gate_${item}`))
        });

        event
            .shaped(Item.of(`powah:energy_cable_${tier}`, 6), ['CCC', 'BAB', 'CCC'], {
                A: capacitor,
                B: Ingredient.of(lowerTiers.map((item) => `powah:energy_cable_${item}`)),
                C: Ingredient.of('powah:dielectric_rod_horizontal')
            })
            .id(`powah:crafting/cable_${tier}`);
    });

    colors.forEach((color) => {
        event
            .shaped(`botanypots:${color}_botany_pot`, ['ADA', 'ABA', 'ACA'], {
                A: `minecraft:${color}_terracotta`,
                B: 'minecraft:flower_pot',
                C: 'minecraft:bone_block',
                D: 'minecraft:water_bucket'
            })
            .id(`botanypots:crafting/${color}_botany_pot`);
        event.remove({ id: `botanypots:crafting/compact_hopper_${color}_botany_pot` });
    });

    [
        { ingredient: '#forge:ingots/copper', tier: 'basic' },
        { ingredient: '#forge:dusts/redstone', tier: 'advanced' },
        { ingredient: '#forge:ingots/osmium', tier: 'elite' },
        { ingredient: '#forge:obsidian', tier: 'ultimate' }
    ].forEach((recipe) => {
        event
            .shaped(`mekanism:${recipe.tier}_bin`, ['ABA', 'A A', 'AAA'], {
                A: 'minecraft:smooth_stone',
                B: recipe.ingredient
            })
            .id(`mekanism:bin/${recipe.tier}`);
    });
});
