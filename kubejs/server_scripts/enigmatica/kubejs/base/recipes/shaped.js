onEvent('recipes', (event) => {
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
        },
        {
            // Add Oak Recipes for Forest Combs
            output: Item.of('minecraft:oak_log', 8),
            pattern: ['BCB', 'C C', 'BCB'],
            key: {
                C: 'resourcefulbees:forest_honeycomb',
                B: 'resourcefulbees:wax'
            }
        },
        {
            output: Item.of('minecraft:oak_sapling', 4),
            pattern: [' C ', 'B B', ' C '],
            key: {
                C: 'resourcefulbees:forest_honeycomb',
                B: 'resourcefulbees:wax'
            }
        },
        {
            output: Item.of('minecraft:oak_leaves', 16),
            pattern: ['   ', 'B C', '   '],
            key: {
                C: 'resourcefulbees:forest_honeycomb',
                B: 'resourcefulbees:wax'
            }
        },
        {
            // Add Stone Recipes for Rocky Combs
            output: Item.of('minecraft:stone', 32),
            pattern: ['BCB', 'C C', 'BCB'],
            key: {
                C: 'resourcefulbees:rocky_honeycomb',
                B: 'resourcefulbees:wax'
            }
        },
        {
            output: Item.of('minecraft:cobblestone', 32),
            pattern: ['BCB', 'C C', 'BCB'],
            key: {
                C: 'resourcefulbees:rocky_honeycomb',
                B: 'resourcefulbees:wax'
            }
        },
        {
            output: Item.of('minecraft:diorite', 32),
            pattern: ['CBC', 'D D', 'CBC'],
            key: {
                B: 'resourcefulbees:rocky_honeycomb',
                C: 'resourcefulbees:wax',
                D: 'resourcefulbees:nether_quartz_honeycomb'
            }
        },
        {
            output: Item.of('minecraft:andesite', 32),
            pattern: ['CDC', 'B B', 'CDC'],
            key: {
                B: 'resourcefulbees:rocky_honeycomb',
                C: 'resourcefulbees:wax',
                D: 'resourcefulbees:nether_quartz_honeycomb'
            }
        },
        {
            // Add Wet Comb -> Water Bucket Recipe
            output: 'minecraft:water_bucket',
            pattern: ['BCB', 'CAC', 'BCB'],
            key: {
                C: 'resourcefulbees:water_honeycomb',
                B: 'resourcefulbees:wax',
                A: 'minecraft:bucket'
            }
        },
        {
            // Add Blaze + Coal Comb -> Lava Bucket Recipe
            output: 'minecraft:lava_bucket',
            pattern: ['BDB', 'CAC', 'BDB'],
            key: {
                D: 'resourcefulbees:blaze_honeycomb',
                C: 'resourcefulbees:coal_honeycomb',
                B: 'resourcefulbees:wax',
                A: 'minecraft:bucket'
            }
        },
        {
            output: Item.of('farmersdelight:pie_crust', 3),
            pattern: ['A A', 'AAA'],
            key: {
                A: 'farmersdelight:wheat_dough'
            },
            id: 'farmersdelight:pie_crust'
        },
        {
            output: 'upgrade_aquatic:mulberry_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: 'upgrade_aquatic:mulberry'
            },
            id: 'upgrade_aquatic:mulberry_pie'
        },
        {
            output: 'byg:blueberry_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: '#forge:fruits/blueberries'
            },
            id: 'byg:blueberry_pie'
        },
        {
            output: 'byg:nightshade_berry_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: 'byg:nightshade_berries'
            },
            id: 'byg:nightshade_berry_pie'
        },
        {
            output: 'byg:crimson_berry_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: 'byg:crimson_berries'
            },
            id: 'byg:crimson_berry_pie'
        },
        {
            output: 'byg:green_apple_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: 'byg:green_apple'
            },
            id: 'byg:green_apple_pie'
        },
        {
            output: 'farmersdelight:chocolate_pie',
            pattern: ['DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                D: 'create:bar_of_chocolate'
            },
            id: 'farmersdelight:chocolate_pie'
        },
        {
            output: 'farmersdelight:apple_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: 'minecraft:apple'
            },
            id: 'farmersdelight:apple_pie'
        },
        {
            output: 'simplefarming:strawberry_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: '#forge:fruits/strawberries'
            },
            id: 'simplefarming:strawberry_pie'
        },
        {
            output: 'simplefarming:raspberry_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: '#forge:fruits/raspberries'
            },
            id: 'simplefarming:raspberry_pie'
        },
        {
            output: 'simplefarming:plum_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: '#forge:fruits/plum'
            },
            id: 'simplefarming:plum_pie'
        },
        {
            output: 'simplefarming:pear_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: '#forge:fruits/pear'
            },
            id: 'simplefarming:pear_pie'
        },
        {
            output: 'simplefarming:peanut_butter_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: '#forge:crops/peanut'
            },
            id: 'simplefarming:peanut_butter_pie'
        },
        {
            output: 'simplefarming:cherry_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: '#forge:fruits/cherries'
            },
            id: 'simplefarming:cherry_pie'
        },
        {
            output: 'simplefarming:blackberry_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: '#forge:fruits/blackberries'
            },
            id: 'simplefarming:blackberry_pie'
        },
        {
            output: 'simplefarming:apricot_pie',
            pattern: [' C ', 'DDD', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: 'farmersdelight:wheat_dough',
                D: '#forge:fruits/apricot'
            },
            id: 'simplefarming:apricot_pie'
        },
        {
            output: 'minecraft:pumpkin_pie',
            pattern: ['CDC', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: 'minecraft:sugar',
                C: '#forge:eggs',
                D: 'minecraft:pumpkin'
            },
            id: 'minecraft:pumpkin_pie'
        },
        {
            output: 'undergarden:gloomgourd_pie',
            pattern: ['CCC', 'EDE', 'BAB'],
            key: {
                A: 'farmersdelight:pie_crust',
                B: '#undergarden:mushrooms',
                C: 'undergarden:glowing_kelp',
                D: 'undergarden:gloomgourd',
                E: '#forge:eggs'
            },
            id: 'undergarden:gloomgourd_pie'
        },

        {
            output: 'industrialforegoing:animal_baby_separator',
            pattern: ['PAP', 'CMC', 'DGD'],
            key: {
                P: '#forge:plastic',
                A: 'minecraft:golden_carrot',
                C: 'minecraft:wheat',
                G: '#forge:gears/gold_bronze',
                D: '#forge:dyes/purple',
                M: '#industrialforegoing:machine_frame/pity'
            },
            id: 'industrialforegoing:animal_baby_separator'
        },
        {
            output: 'industrialforegoing:animal_feeder',
            pattern: ['PAP', 'CMC', 'DGD'],
            key: {
                P: '#forge:plastic',
                A: 'minecraft:golden_apple',
                C: 'minecraft:golden_carrot',
                G: '#forge:gears/iron_invar',
                D: '#forge:dyes/purple',
                M: '#industrialforegoing:machine_frame/pity'
            },
            id: 'industrialforegoing:animal_feeder'
        },
        {
            output: 'industrialforegoing:animal_rancher',
            pattern: ['PPP', 'SBS', 'GMG'],
            key: {
                P: '#forge:plastic',
                G: '#forge:gears/gold_bronze',
                S: 'minecraft:shears',
                B: 'minecraft:bucket',
                M: '#industrialforegoing:machine_frame/pity'
            },
            id: 'industrialforegoing:animal_rancher'
        },
        {
            output: 'industrialforegoing:biofuel_generator',
            pattern: ['PDP', 'SMS', 'ASA'],
            key: {
                P: '#forge:plastic',
                D: 'minecraft:furnace',
                S: 'minecraft:piston',
                A: '#forge:gears/gold_bronze',
                M: '#industrialforegoing:machine_frame/pity'
            },
            id: 'industrialforegoing:biofuel_generator'
        },
        {
            output: 'industrialforegoing:block_breaker',
            pattern: ['PGP', 'IMD', 'SRS'],
            key: {
                P: '#forge:plastic',
                I: 'minecraft:iron_pickaxe',
                D: 'minecraft:iron_shovel',
                M: '#industrialforegoing:machine_frame/pity',
                R: 'minecraft:redstone',
                G: '#forge:gears/gold_bronze',
                S: '#forge:gears/iron_invar'
            },
            id: 'industrialforegoing:block_breaker'
        },
        {
            output: Item.of('industrialforegoing:conveyor', 6),
            pattern: ['ppp', 'iri', 'ppp'],
            key: {
                p: '#forge:plastic',
                i: '#forge:ingots/iron_aluminum',
                r: 'minecraft:redstone'
            },
            id: 'industrialforegoing:conveyor'
        },
        {
            output: 'industrialforegoing:conveyor_blinking_upgrade',
            pattern: ['IPI', 'IDI', 'ICI'],
            key: {
                I: '#forge:ingots/iron_aluminum',
                P: 'minecraft:chorus_fruit',
                D: 'minecraft:piston',
                C: 'industrialforegoing:conveyor'
            },
            id: 'industrialforegoing:conveyor_blinking_upgrade'
        },
        {
            output: 'industrialforegoing:conveyor_bouncing_upgrade',
            pattern: ['IPI', 'IDI', 'ICI'],
            key: {
                I: '#forge:ingots/iron_aluminum',
                P: 'minecraft:slime_block',
                D: 'minecraft:piston',
                C: 'industrialforegoing:conveyor'
            },
            id: 'industrialforegoing:conveyor_bouncing_upgrade'
        },
        {
            output: 'industrialforegoing:conveyor_detection_upgrade',
            pattern: ['IPI', 'IDI', 'ICI'],
            key: {
                I: '#forge:ingots/iron_aluminum',
                P: 'minecraft:stone_pressure_plate',
                D: 'minecraft:comparator',
                C: 'industrialforegoing:conveyor'
            },
            id: 'industrialforegoing:conveyor_detection_upgrade'
        },
        {
            output: 'industrialforegoing:conveyor_dropping_upgrade',
            pattern: ['IPI', 'IDI', 'ICI'],
            key: {
                I: '#forge:ingots/iron_aluminum',
                P: 'minecraft:iron_bars',
                D: 'minecraft:dropper',
                C: 'industrialforegoing:conveyor'
            },
            id: 'industrialforegoing:conveyor_dropping_upgrade'
        },
        {
            output: 'industrialforegoing:conveyor_extraction_upgrade',
            pattern: ['IPI', 'IDI', 'ICI'],
            key: {
                I: '#forge:ingots/iron_aluminum',
                P: '#forge:plastic',
                D: 'minecraft:dispenser',
                C: 'industrialforegoing:conveyor'
            },
            id: 'industrialforegoing:conveyor_extraction_upgrade'
        },
        {
            output: 'industrialforegoing:conveyor_insertion_upgrade',
            pattern: ['IPI', 'IDI', 'ICI'],
            key: {
                I: '#forge:ingots/iron_aluminum',
                P: '#forge:plastic',
                D: 'minecraft:hopper',
                C: 'industrialforegoing:conveyor'
            },
            id: 'industrialforegoing:conveyor_insertion_upgrade'
        },
        {
            output: 'industrialforegoing:conveyor_splitting_upgrade',
            pattern: ['IPI', 'IDI', 'ICI'],
            key: {
                I: '#forge:ingots/iron_aluminum',
                P: 'industrialforegoing:conveyor',
                D: 'minecraft:hopper',
                C: 'industrialforegoing:conveyor'
            },
            id: 'industrialforegoing:conveyor_splitting_upgrade'
        },
        {
            output: 'industrialforegoing:dissolution_chamber',
            pattern: ['PCP', 'BMB', 'GDG'],
            key: {
                P: '#forge:plastic',
                C: '#forge:chests',
                B: 'minecraft:bucket',
                M: '#industrialforegoing:machine_frame/pity',
                G: '#forge:ingots/gold_tin',
                D: '#forge:gears/diamond'
            },
            id: 'industrialforegoing:dissolution_chamber'
        },
        {
            output: 'industrialforegoing:dye_mixer',
            pattern: ['PDP', 'DMD', 'PRP'],
            key: {
                P: '#forge:plastic',
                D: '#forge:dyes',
                M: '#industrialforegoing:machine_frame/pity',
                R: '#forge:gears/gold_copper'
            },
            id: 'industrialforegoing:dye_mixer'
        },
        {
            output: 'industrialforegoing:fluid_collector',
            pattern: ['PBP', 'BMB', 'SRS'],
            key: {
                P: '#forge:plastic',
                B: 'minecraft:bucket',
                M: '#industrialforegoing:machine_frame/pity',
                R: 'minecraft:redstone',
                S: '#forge:gears/iron_invar'
            },
            id: 'industrialforegoing:fluid_collector'
        },
        {
            output: 'industrialforegoing:fluid_extractor',
            pattern: ['IGI', 'CMC', 'IPI'],
            key: {
                I: '#forge:ingots/iron_aluminum',
                G: 'minecraft:light_weighted_pressure_plate',
                C: '#forge:cobblestone',
                M: '#industrialforegoing:machine_frame/pity',
                P: 'minecraft:piston'
            },
            id: 'industrialforegoing:fluid_extractor'
        },
        {
            output: 'industrialforegoing:fluid_placer',
            pattern: ['PBP', 'BMB', 'SRS'],
            key: {
                P: '#forge:plastic',
                B: 'minecraft:water_bucket',
                M: '#industrialforegoing:machine_frame/pity',
                R: 'minecraft:redstone',
                S: '#forge:gears/iron_invar'
            },
            id: 'industrialforegoing:fluid_placer'
        },
        {
            output: 'industrialforegoing:laser_drill',
            pattern: ['pfp', 'bmb', 'grg'],
            key: {
                p: '#forge:plastic',
                f: '#forge:gears/diamond',
                b: 'minecraft:piston',
                m: '#industrialforegoing:machine_frame/simple',
                g: '#forge:gears/diamond',
                r: 'minecraft:redstone'
            },
            id: 'industrialforegoing:laser_drill'
        },
        {
            output: 'industrialforegoing:latex_processing_unit',
            pattern: ['IGI', 'BML', 'IFI'],
            key: {
                I: '#forge:ingots/iron_aluminum',
                G: '#forge:storage_blocks/redstone',
                B: 'minecraft:water_bucket',
                L: 'industrialforegoing:latex_bucket',
                M: '#industrialforegoing:machine_frame/pity',
                F: 'minecraft:furnace'
            },
            id: 'industrialforegoing:latex_processing_unit'
        },
        {
            output: 'industrialforegoing:machine_frame_pity',
            pattern: ['WIW', 'IRI', 'WIW'],
            key: {
                W: '#minecraft:logs',
                I: '#forge:ingots/iron_aluminum',
                R: '#forge:storage_blocks/redstone'
            },
            id: 'industrialforegoing:machine_frame_pity'
        },
        {
            output: 'industrialforegoing:marine_fisher',
            pattern: ['pfp', 'bmb', 'grg'],
            key: {
                p: '#forge:plastic',
                f: 'minecraft:fishing_rod',
                b: 'minecraft:bucket',
                m: '#industrialforegoing:machine_frame/simple',
                g: '#forge:gears/iron_invar',
                r: 'minecraft:redstone'
            },
            id: 'industrialforegoing:marine_fisher'
        },
        {
            output: 'industrialforegoing:material_stonework_factory',
            pattern: ['pcp', 'gmf', 'aba'],
            key: {
                p: '#forge:plastic',
                c: 'minecraft:crafting_table',
                g: 'minecraft:diamond_pickaxe',
                m: '#industrialforegoing:machine_frame/advanced',
                f: 'minecraft:furnace',
                a: '#forge:gears/gold_bronze',
                b: 'industrialforegoing:pink_slime'
            },
            id: 'industrialforegoing:material_stonework_factory'
        },
        {
            output: 'industrialforegoing:meat_feeder',
            pattern: ['pip', 'gig', ' i '],
            key: {
                p: 'industrialforegoing:plastic',
                i: '#forge:ingots/iron_aluminum',
                g: 'minecraft:glass_bottle'
            },
            id: 'industrialforegoing:meat_feeder'
        },
        {
            output: 'industrialforegoing:mob_crusher',
            pattern: ['PSP', 'BMB', 'GRG'],
            key: {
                P: '#forge:plastic',
                S: 'minecraft:iron_sword',
                B: 'minecraft:book',
                M: '#industrialforegoing:machine_frame/advanced',
                R: 'minecraft:redstone',
                G: '#forge:gears/gold_invar'
            },
            id: 'industrialforegoing:mob_crusher'
        },
        {
            output: 'industrialforegoing:mob_slaughter_factory',
            pattern: ['PDP', 'SMS', 'ARA'],
            key: {
                P: '#forge:plastic',
                D: '#forge:gears/gold_bronze',
                S: 'minecraft:iron_sword',
                A: 'minecraft:iron_axe',
                M: '#industrialforegoing:machine_frame/pity',
                R: 'minecraft:redstone'
            },
            id: 'industrialforegoing:mob_slaughter_factory'
        },
        {
            output: 'industrialforegoing:plant_fertilizer',
            pattern: ['PBP', 'LML', 'GRG'],
            key: {
                P: '#forge:plastic',
                B: 'minecraft:glass_bottle',
                L: 'minecraft:leather',
                M: '#industrialforegoing:machine_frame/simple',
                R: 'minecraft:redstone',
                G: '#forge:gears/iron_invar'
            },
            id: 'industrialforegoing:plant_fertilizer'
        },
        {
            output: 'industrialforegoing:plant_gatherer',
            pattern: ['PHP', 'AMA', 'GRG'],
            key: {
                P: '#forge:plastic',
                H: 'minecraft:iron_hoe',
                A: 'minecraft:iron_axe',
                M: '#industrialforegoing:machine_frame/pity',
                G: '#forge:gears/gold_bronze',
                R: 'minecraft:redstone'
            },
            id: 'industrialforegoing:plant_gatherer'
        },
        {
            output: 'industrialforegoing:plant_sower',
            pattern: ['PBP', 'LML', 'GRG'],
            key: {
                P: '#forge:plastic',
                B: 'minecraft:flower_pot',
                L: 'minecraft:piston',
                M: '#industrialforegoing:machine_frame/pity',
                R: 'minecraft:redstone',
                G: '#forge:gears/iron_invar'
            },
            id: 'industrialforegoing:plant_sower'
        },
        {
            output: 'industrialforegoing:resourceful_furnace',
            pattern: ['PBP', 'LML', 'PRP'],
            key: {
                P: '#forge:plastic',
                B: 'minecraft:bucket',
                L: 'minecraft:furnace',
                M: '#industrialforegoing:machine_frame/pity',
                R: '#forge:gears/gold_copper'
            },
            id: 'industrialforegoing:resourceful_furnace'
        },
        {
            output: 'industrialforegoing:sewage_composter',
            pattern: ['PFP', 'DMD', 'BGB'],
            key: {
                P: '#forge:plastic',
                F: 'minecraft:furnace',
                D: 'minecraft:piston',
                B: 'minecraft:brick',
                M: '#industrialforegoing:machine_frame/pity',
                G: '#forge:gears/iron_invar'
            },
            id: 'industrialforegoing:sewage_composter'
        },
        {
            output: 'industrialforegoing:sewer',
            pattern: ['PEP', 'BMB', 'BGB'],
            key: {
                P: '#forge:plastic',
                E: 'minecraft:bucket',
                B: 'minecraft:brick',
                M: '#industrialforegoing:machine_frame/pity',
                G: '#forge:gears/iron_invar'
            },
            id: 'industrialforegoing:sewer'
        },
        {
            output: 'industrialforegoing:sludge_refiner',
            pattern: ['PBP', 'LML', 'GRG'],
            key: {
                P: '#forge:plastic',
                B: 'minecraft:bucket',
                L: 'minecraft:furnace',
                M: '#industrialforegoing:machine_frame/pity',
                R: '#forge:gears/gold_copper',
                G: '#forge:gears/iron_invar'
            },
            id: 'industrialforegoing:sludge_refiner'
        },
        {
            output: 'industrialforegoing:spores_recreator',
            pattern: ['PSP', 'IMI', 'PSP'],
            key: {
                P: '#forge:plastic',
                I: '#forge:mushrooms',
                M: '#industrialforegoing:machine_frame/pity',
                S: '#forge:gears/iron_invar'
            },
            id: 'industrialforegoing:spores_recreator'
        },
        {
            output: 'industrialforegoing:stasis_chamber',
            pattern: ['sss', 'gmg', 'ipi'],
            key: {
                s: 'minecraft:soul_sand',
                g: 'minecraft:ghast_tear',
                m: '#industrialforegoing:machine_frame/advanced',
                i: '#forge:gears/gold_invar',
                p: 'minecraft:piston'
            },
            id: 'industrialforegoing:stasis_chamber'
        },
        {
            output: 'industrialforegoing:water_condensator',
            pattern: ['PBP', 'LML', 'GRG'],
            key: {
                P: '#forge:plastic',
                B: 'minecraft:water_bucket',
                L: 'minecraft:piston',
                M: '#industrialforegoing:machine_frame/pity',
                R: 'minecraft:redstone',
                G: '#forge:gears/iron_invar'
            },
            id: 'industrialforegoing:water_condensator'
        },
        {
            output: Item.of('industrialforegoing:tinydryrubber', 3),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:vine',
                B: 'minecraft:water_bucket'
            },
            id: 'thermal:rubber_from_vine'
        },
        {
            output: Item.of('industrialforegoing:tinydryrubber', 3),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:dandelion',
                B: 'minecraft:water_bucket'
            },
            id: 'thermal:rubber_from_dandelion'
        },
        {
            output: Item.of('atum:linen_thread', 8),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:crops/flax',
                B: '#forge:rods/wooden'
            }
        },
        {
            output: Item.of('atum:linen_thread', 4),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'atum:cloth_scrap',
                B: '#forge:rods/wooden'
            }
        },
        {
            output: Item.of('minecraft:paper', 3),
            pattern: ['AAA'],
            key: {
                A: '#forge:dusts/wood'
            },
            id: 'mekanism:paper'
        },
        {
            output: 'supplementaries:candle_holder',
            pattern: ['A', 'B'],
            key: {
                A: '#quark:candles',
                B: '#forge:nuggets/pewter'
            },
            id: 'supplementaries:candle_holder'
        },
        {
            output: Item.of('immersiveengineering:sawdust', 6),
            pattern: ['AAA', 'AAA'],
            key: {
                A: '#forge:sawdust'
            },
            id: 'immersiveengineering:crafting/sawdust'
        },
        {
            output: 'thermal:sawdust_block',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: '#forge:sawdust'
            },
            id: 'thermal:storage/sawdust_block'
        },
        {
            output: 'cfm:post_box',
            pattern: ['AAA', 'ABA', 'A A'],
            key: {
                A: '#forge:ingots/iron_aluminum',
                B: '#forge:chests'
            },
            id: 'cfm:post_box'
        }
    ];

    var recipes = [
        shapedRecipe('tetra:hammer_base', ['LXL', 'LCL', 'LXL'], {
            L: '#forge:ingots/steel',
            X: '#forge:circuits/basic',
            C: 'emendatusenigmatica:enigmatic_hammer'
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
        shapedRecipe(Item.of('ppfluids:low_fluid_extraction_module', 1), [' A ', 'DBD', ' C '], {
            A: '#forge:dusts/redstone',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo',
            D: 'thermal:cured_rubber'
        }),
        shapedRecipe(Item.of('ppfluids:medium_fluid_extraction_module', 1), [' C ', 'ABA', ' A '], {
            A: '#forge:nuggets/aluminum',
            B: 'ppfluids:low_fluid_extraction_module',
            C: '#forge:ingots/aluminum'
        }),
        shapedRecipe(Item.of('ppfluids:high_fluid_extraction_module', 1), [' C ', 'ABA', ' A '], {
            A: '#forge:nuggets/bronze',
            B: 'ppfluids:medium_fluid_extraction_module',
            C: '#forge:ingots/bronze'
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

        shapedRecipe(Item.of('ppfluids:low_fluid_filter_module', 1), [' A ', 'DBD', ' C '], {
            A: 'thermal:diving_fabric',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo',
            D: 'thermal:cured_rubber'
        }),
        shapedRecipe(Item.of('ppfluids:medium_fluid_filter_module', 1), [' C ', 'ABA', ' C '], {
            A: '#forge:nuggets/aluminum',
            B: 'ppfluids:low_fluid_filter_module',
            C: 'minecraft:iron_bars'
        }),
        shapedRecipe(Item.of('ppfluids:high_fluid_filter_module', 1), [' C ', 'ABA', ' C '], {
            A: '#forge:nuggets/bronze',
            B: 'ppfluids:medium_fluid_filter_module',
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

        shapedRecipe(Item.of('ppfluids:low_fluid_retrieval_module', 1), [' A ', 'DBD', ' C '], {
            A: 'minecraft:observer',
            B: 'prettypipes:blank_module',
            C: 'thermal:redstone_servo',
            D: 'thermal:cured_rubber'
        }),
        shapedRecipe(Item.of('ppfluids:medium_fluid_retrieval_module', 1), [' A ', 'ABA', ' C '], {
            A: '#forge:nuggets/aluminum',
            B: 'ppfluids:low_fluid_retrieval_module',
            C: '#forge:ingots/aluminum'
        }),
        shapedRecipe(Item.of('ppfluids:high_fluid_retrieval_module', 1), [' A ', 'ABA', ' C '], {
            A: '#forge:nuggets/bronze',
            B: 'ppfluids:medium_fluid_retrieval_module',
            C: '#forge:ingots/bronze'
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
            D: 'byg:leaf_pile',
            E: 'ars_nouveau:glyph_launch',
            F: 'ars_nouveau:glyph_slowfall'
        }),
        shapedRecipe('magicfeather:magicfeather', ['CFC', 'BDB', 'AEA'], {
            A: 'thermal:lightning_charge',
            B: '#mekanism:alloys/atomic',
            C: 'thermal:hazmat_fabric',
            D: 'byg:leaf_pile',
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
            D: '#forge:nether_stars',
            E: 'rftoolsbase:infused_diamond',
            F: 'minecraft:ender_eye'
        }),
        shapedRecipe(Item.of('quark:turf', 1), ['A', 'A'], {
            A: 'quark:turf_slab'
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
            'sappy_maple',
            'avocado'
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
        event.shaped(Item.of('storagedrawers:oak_full_drawers_2', 2), ['ACA', 'AAA', 'ACA'], {
            A: wood.plankBlock,
            C: '#forge:chests'
        });
        event.shaped(Item.of('storagedrawers:oak_full_drawers_4', 4), ['CAC', 'AAA', 'CAC'], {
            A: wood.plankBlock,
            C: '#forge:chests'
        });
        event.shaped(Item.of('storagedrawers:oak_half_drawers_1'), ['AAA', ' C ', 'AAA'], {
            A: wood.slabBlock,
            C: '#forge:chests'
        });
        event.shaped(Item.of('storagedrawers:oak_half_drawers_2', 2), ['ACA', 'AAA', 'ACA'], {
            A: wood.slabBlock,
            C: '#forge:chests'
        });
        event.shaped(Item.of('storagedrawers:oak_half_drawers_4', 4), ['CAC', 'AAA', 'CAC'], {
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

    //Generate Forest Comb recipes for each tree type other than Oak (those are handled under newRecipes)
    treeRegistry.forEach((treeCategories) => {
        if (treeCategories.type == 'tree') {
            treeCategories.trees.forEach((tree) => {
                if (tree.trunk != 'minecraft:oak_log') {
                    event.shaped(Item.of(tree.trunk, 8), ['BCB', 'CAC', 'BCB'], {
                        A: tree.sapling,
                        C: 'resourcefulbees:forest_honeycomb',
                        B: 'resourcefulbees:wax'
                    });
                }
                if (tree.sapling != 'minecraft:oak_sapling') {
                    event.shaped(Item.of(tree.sapling, 4), [' C ', 'BAB', ' C '], {
                        A: tree.sapling,
                        C: 'resourcefulbees:forest_honeycomb',
                        B: 'resourcefulbees:wax'
                    });
                }
                if (tree.leaf != 'minecraft:oak_leaves') {
                    event.shaped(Item.of(tree.leaf, 16), ['   ', 'BAC', '   '], {
                        A: tree.sapling,
                        C: 'resourcefulbees:forest_honeycomb',
                        B: 'resourcefulbees:wax'
                    });
                }
            });
        }
    });

    //Generate one RGBee Comb recipe for each dye, usting the appropriate flowers from dyeSources
    colors.forEach((color) => {
        let flowers = dyeSources.filter((dyeSource) => dyeSource.primary == `minecraft:${color}_dye`);
        let ingredients = flowers.map((flower) => flower.input);
        event.shaped(Item.of(`minecraft:${color}_dye`, 8), ['BCB', 'CAC', 'BCB'], {
            A: ingredients,
            C: 'resourcefulbees:rgbee_honeycomb',
            B: 'resourcefulbees:wax'
        });
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
