onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/enigmatica/';
    const recipes = [
        {
            // Add Blaze + Coal Comb -> Lava Bucket Recipe
            output: 'minecraft:lava_bucket',
            pattern: ['BDB', 'CAC', 'BDB'],
            key: {
                D: 'resourcefulbees:blaze_honeycomb',
                C: 'resourcefulbees:coal_honeycomb',
                B: 'resourcefulbees:wax',
                A: 'minecraft:bucket'
            },
            id: `${id_prefix}minecraft/lava_bucket`
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
            },
            id: `${id_prefix}ironjetpacks/hardened_jetpack`
        },
        {
            output: 'ironjetpacks:hardened_thruster',
            pattern: [' B ', 'BDB', 'ACA'],
            key: {
                A: 'powah:steel_energized',
                B: 'powah:capacitor_hardened',
                C: 'powah:furnator_hardened',
                D: 'powah:reactor_hardened'
            },
            id: `${id_prefix}ironjetpacks/hardened_thruster`
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
            },
            id: `${id_prefix}ironjetpacks/invar_jetpack`
        },
        {
            output: 'ironjetpacks:invar_thruster',
            pattern: [' B ', 'BDB', 'ACA'],
            key: {
                A: '#forge:plates/invar',
                B: 'powah:capacitor_hardened',
                C: 'powah:furnator_hardened',
                D: '#forge:gears/invar'
            },
            id: `${id_prefix}ironjetpacks/invar_thruster`
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
            },
            id: `${id_prefix}ironjetpacks/blazing_jetpack`
        },
        {
            output: 'ironjetpacks:blazing_thruster',
            pattern: [' B ', 'BDB', 'ACA'],
            key: {
                A: 'powah:crystal_blazing',
                B: 'powah:capacitor_blazing',
                C: 'powah:furnator_blazing',
                D: 'powah:reactor_blazing'
            },
            id: `${id_prefix}ironjetpacks/blazing_thruster`
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
            },
            id: `${id_prefix}ironjetpacks/signalum_jetpack`
        },
        {
            output: 'ironjetpacks:signalum_thruster',
            pattern: [' B ', 'BDB', 'ACA'],
            key: {
                A: '#forge:plates/signalum',
                B: 'powah:capacitor_blazing',
                C: 'powah:furnator_blazing',
                D: '#forge:gears/signalum'
            },
            id: `${id_prefix}ironjetpacks/signalum_thruster`
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
            },
            id: `${id_prefix}ironjetpacks/niotic_jetpack`
        },
        {
            output: 'ironjetpacks:niotic_thruster',
            pattern: [' B ', 'BDB', 'ACA'],
            key: {
                A: 'powah:crystal_niotic',
                B: 'powah:capacitor_niotic',
                C: 'powah:furnator_niotic',
                D: 'powah:reactor_niotic'
            },
            id: `${id_prefix}ironjetpacks/niotic_thruster`
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
            },
            id: `${id_prefix}ironjetpacks/lumium_jetpack`
        },
        {
            output: 'ironjetpacks:lumium_thruster',
            pattern: [' B ', 'BDB', 'ACA'],
            key: {
                A: '#forge:plates/lumium',
                B: 'powah:capacitor_niotic',
                C: 'powah:furnator_niotic',
                D: '#forge:gears/lumium'
            },
            id: `${id_prefix}ironjetpacks/lumium_thruster`
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
            },
            id: `${id_prefix}ironjetpacks/spirited_jetpack`
        },
        {
            output: 'ironjetpacks:spirited_thruster',
            pattern: [' B ', 'BDB', 'ACA'],
            key: {
                A: 'powah:crystal_spirited',
                B: 'powah:capacitor_spirited',
                C: 'powah:furnator_spirited',
                D: 'powah:reactor_spirited'
            },
            id: `${id_prefix}ironjetpacks/spirited_thruster`
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
            },
            id: `${id_prefix}ironjetpacks/enderium_jetpack`
        },
        {
            output: 'ironjetpacks:enderium_thruster',
            pattern: [' B ', 'BDB', 'ACA'],
            key: {
                A: '#forge:plates/enderium',
                B: 'powah:capacitor_spirited',
                C: 'powah:furnator_spirited',
                D: '#forge:gears/enderium'
            },
            id: `${id_prefix}ironjetpacks/enderium_thruster`
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
            },
            id: `${id_prefix}ironjetpacks/nitro_jetpack`
        },
        {
            output: 'ironjetpacks:nitro_thruster',
            pattern: [' B ', 'BDB', 'ACA'],
            key: {
                A: 'powah:crystal_nitro',
                B: 'powah:capacitor_nitro',
                C: 'powah:furnator_nitro',
                D: 'powah:reactor_nitro'
            },
            id: `${id_prefix}ironjetpacks/nitro_thruster`
        },
        {
            output: 'betterendforge:dense_snow',
            pattern: ['AAA', 'AAA', 'AAA'],
            key: {
                A: 'minecraft:snow_block'
            },
            id: `${id_prefix}betterendforge/dense_snow`
        },
        {
            output: Item.of('atum:linen_thread', 8),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:crops/flax',
                B: '#forge:rods/wooden'
            },
            id: `${id_prefix}atum/linen_thread_from_flax`
        },
        {
            output: Item.of('atum:linen_thread', 4),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'atum:cloth_scrap',
                B: '#forge:rods/wooden'
            },
            id: `${id_prefix}atum/linen_thread_from_cloth_scrap`
        },
        {
            output: Item.of('eidolon:lead_ingot', 6),
            pattern: ['AA', 'AA', 'AA'],
            key: {
                A: '#forge:ingots/lead'
            },
            id: `${id_prefix}eidolon/lead_ingot_conversion`
        },
        {
            output: Item.of('atum:marl', 4),
            pattern: ['AB', 'BA'],
            key: {
                A: 'atum:sand',
                B: 'minecraft:clay'
            },
            id: `${id_prefix}atum/marl_from_clay`
        },

        {
            output: Item.of('bloodmagic:dungeon_polished', 4),
            pattern: ['AA', 'AA'],
            key: {
                A: 'bloodmagic:dungeon_stone'
            },
            id: `${id_prefix}bloodmagic/dungeon_polished`
        },
        {
            output: Item.of('bloodmagic:dungeon_brick1', 4),
            pattern: ['AA', 'AA'],
            key: {
                A: 'bloodmagic:dungeon_polished'
            },
            id: `${id_prefix}bloodmagic/dungeon_brick1`
        },
        {
            output: Item.of('bloodmagic:dungeon_polished_stairs', 4),
            pattern: ['A  ', 'AA ', 'AAA'],
            key: {
                A: 'bloodmagic:dungeon_polished'
            },
            id: `${id_prefix}bloodmagic/dungeon_polished_stairs`
        },
        {
            output: Item.of('bloodmagic:dungeon_brick_stairs', 4),
            pattern: ['A  ', 'AA ', 'AAA'],
            key: {
                A: 'bloodmagic:dungeon_brick1'
            },
            id: `${id_prefix}bloodmagic/dungeon_brick_stairs`
        },
        {
            output: Item.of('bloodmagic:dungeon_pillar_center', 2),
            pattern: ['A', 'A'],
            key: {
                A: 'bloodmagic:dungeon_stone'
            },
            id: `${id_prefix}bloodmagic/dungeon_pillar_center`
        },
        {
            output: Item.of('bloodmagic:dungeon_eye', 1),
            pattern: [' B ', 'BAB', ' B '],
            key: {
                A: 'bloodmagic:dungeon_stone',
                B: '#bloodmagic:crystals/demon'
            },
            id: `${id_prefix}bloodmagic/dungeon_eye`
        },
        {
            output: Item.of('bloodmagic:dungeon_polished_wall', 6),
            pattern: ['AAA', 'AAA'],
            key: {
                A: 'bloodmagic:dungeon_polished'
            },
            id: `${id_prefix}bloodmagic/dungeon_polished_wall`
        },
        {
            output: Item.of('bloodmagic:dungeon_brick_wall', 6),
            pattern: ['AAA', 'AAA'],
            key: {
                A: 'bloodmagic:dungeon_brick1'
            },
            id: `${id_prefix}bloodmagic/dungeon_brick_wall`
        },
        {
            output: 'bloodmagic:dungeon_polished_gate',
            pattern: ['BAB', 'BAB'],
            key: {
                A: 'bloodmagic:dungeon_polished',
                B: 'minecraft:stick'
            },
            id: `${id_prefix}bloodmagic/dungeon_polished_gate`
        },
        {
            output: 'bloodmagic:dungeon_brick_gate',
            pattern: ['BAB', 'BAB'],
            key: {
                A: 'bloodmagic:dungeon_brick1',
                B: 'minecraft:stick'
            },
            id: `${id_prefix}bloodmagic/dungeon_brick_gate`
        },
        {
            output: Item.of('projectvibrantjourneys:bones', 8),
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: 'minecraft:bone'
            },
            id: `${id_prefix}projectvibrantjourneys/bones`
        },
        {
            output: Item.of('projectvibrantjourneys:charred_bones', 8),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:bone',
                B: 'minecraft:charcoal'
            },
            id: `${id_prefix}projectvibrantjourneys/charred_bones`
        },
        {
            output: Item.of('projectvibrantjourneys:seashells', 8),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'minecraft:prismarine_shard',
                B: 'minecraft:nautilus_shell'
            },
            id: `${id_prefix}projectvibrantjourneys/seashells`
        },
        {
            output: 'tetra:hammer_base',
            pattern: ['LXL', 'LCL', 'LXL'],
            key: {
                L: '#forge:ingots/steel',
                X: '#forge:circuits/basic',
                C: '#forge:tools/crafting_hammer'
            },
            id: `${id_prefix}tetra/hammer_base`
        },
        {
            output: 'tetra:core_extractor',
            pattern: ['LXL', 'LCL', 'LXL'],
            key: {
                L: '#forge:ingots/steel',
                X: '#forge:circuits/basic',
                C: 'industrialforegoing:fluid_extractor'
            },
            id: `${id_prefix}tetra/core_extractor`
        },
        {
            output: 'minecraft:hopper',
            pattern: ['ABA', 'ABA', ' A '],
            key: {
                A: '#forge:ingots/iron',
                B: '#minecraft:logs'
            },
            id: `${id_prefix}minecraft/hopper`
        },
        {
            output: 'refinedstorageaddons:wireless_crafting_grid',
            pattern: ['ABA', 'ACA', 'ADA'],
            key: {
                A: 'refinedstorage:quartz_enriched_iron',
                B: 'refinedstorage:range_upgrade',
                C: 'refinedstorage:wireless_grid',
                D: 'minecraft:crafting_table'
            },
            id: `${id_prefix}refinedstorageaddons/wireless_crafting_grid_from_wireless_grid`
        },
        {
            output: 'simplefarming:fish_and_chips',
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: '#forge:crops/potato',
                B: '#forge:grain',
                C: 'aquaculture:fish_fillet_cooked'
            },
            id: `${id_prefix}simplefarming/fish_and_chips`
        },
        {
            output: 'minecraft:tube_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:tube_coral_fan'
            },
            id: `${id_prefix}minecraft/tube_coral_block_from_fan`
        },
        {
            output: 'minecraft:brain_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:brain_coral_fan'
            },
            id: `${id_prefix}minecraft/brain_coral_block_from_fan`
        },
        {
            output: 'minecraft:bubble_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:bubble_coral_fan'
            },
            id: `${id_prefix}minecraft/bubble_coral_block_from_fan`
        },
        {
            output: 'minecraft:fire_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:fire_coral_fan'
            },
            id: `${id_prefix}minecraft/fire_coral_block_from_fan`
        },
        {
            output: 'minecraft:horn_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:horn_coral_fan'
            },
            id: `${id_prefix}minecraft/horn_coral_block_from_fan`
        },
        {
            output: 'minecraft:tube_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:tube_coral'
            },
            id: `${id_prefix}minecraft/tube_coral_block`
        },
        {
            output: 'minecraft:brain_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:brain_coral'
            },
            id: `${id_prefix}minecraft/brain_coral_block`
        },
        {
            output: 'minecraft:bubble_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:bubble_coral'
            },
            id: `${id_prefix}minecraft/bubble_coral_block`
        },
        {
            output: 'minecraft:fire_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:fire_coral'
            },
            id: `${id_prefix}minecraft/fire_coral_block`
        },
        {
            output: 'minecraft:horn_coral_block',
            pattern: ['AA', 'AA'],
            key: {
                A: 'minecraft:horn_coral'
            },
            id: `${id_prefix}minecraft/horn_coral_block`
        },
        {
            output: Item.of('valhelsia_structures:oak_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:oak_log'
            },
            id: `${id_prefix}valhelsia_structures/oak_post`
        },
        {
            output: Item.of('valhelsia_structures:spruce_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:spruce_log'
            },
            id: `${id_prefix}valhelsia_structures/spruce_post`
        },
        {
            output: Item.of('valhelsia_structures:birch_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:birch_log'
            },
            id: `${id_prefix}valhelsia_structures/birch_post`
        },
        {
            output: Item.of('valhelsia_structures:jungle_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:jungle_log'
            },
            id: `${id_prefix}valhelsia_structures/jungle_post`
        },
        {
            output: Item.of('valhelsia_structures:dark_oak_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:dark_oak_log'
            },
            id: `${id_prefix}valhelsia_structures/dark_oak_post`
        },
        {
            output: Item.of('valhelsia_structures:acacia_post', 6),
            pattern: ['A', 'A', 'A'],
            key: {
                A: 'minecraft:acacia_log'
            },
            id: `${id_prefix}valhelsia_structures/acacia_post`
        },
        {
            output: Item.of('minecraft:ladder', 4),
            pattern: ['A A', 'ABA', 'A A'],
            key: {
                A: '#forge:rods/wooden',
                B: '#minecraft:planks'
            },
            id: `${id_prefix}minecraft/ladder`
        },
        {
            output: 'tetra:combustion_chamber',
            pattern: ['CBC', 'BAB', 'CBC'],
            key: {
                A: 'mekanism:superheating_element',
                B: 'pneumaticcraft:heat_sink',
                C: 'mekanism:ultimate_thermodynamic_conductor'
            },
            id: `${id_prefix}tetra/combustion_chamber`
        },
        {
            output: Item.of('byg:embur_hyphae', 3),
            pattern: ['AA', 'AA'],
            key: {
                A: 'byg:embur_pedu'
            },
            id: `${id_prefix}byg/embur_hyphae`
        },
        {
            output: Item.of('byg:pollen_block', 1),
            pattern: ['AA', 'AA'],
            key: {
                A: 'byg:pollen_dust'
            },
            id: `${id_prefix}byg/pollen_dust`
        },
        {
            output: Item.of('quark:turf', 1),
            pattern: ['A', 'A'],
            key: {
                A: 'quark:turf_slab'
            },
            id: `${id_prefix}quark/turf_from_slab`
        },
        {
            output: Item.of('morphtool:tool', {
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
                    integratedtunnels: { id: 'integrateddynamics:wrench', Count: 1 },
                    compactmachines: { id: 'compactmachines:personal_shrinking_device', Count: 1 }
                }
            }),
            pattern: ['ABA', 'CFD', 'AEA'],
            key: {
                A: 'minecraft:redstone_block',
                B: '#forge:gears/gold',
                C: '#forge:gears/iron',
                D: '#forge:gears/silver',
                E: '#forge:gears/copper',
                F: 'morphtool:tool'
            },
            id: `${id_prefix}morphtool/tool_filled`
        }
    ];

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

        recipes.push(
            {
                output: Item.of(`powah:energy_cell_${tier}`),
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: Ingredient.of(lowerTiers.map((item) => `powah:energy_cell_${item}`))
                },
                id: `${id_prefix}powah/energy_cell_${tier}`
            },
            {
                output: Item.of(`powah:battery_${tier}`),
                pattern: [' A ', 'BCB', ' B '],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: Ingredient.of(lowerTiers.map((item) => `powah:battery_${item}`))
                },
                id: `${id_prefix}powah/battery_${tier}`
            },
            {
                output: Item.of(`powah:ender_cell_${tier}`),
                pattern: [' A ', 'ABA', ' A '],
                key: {
                    A: crystal,
                    B: Ingredient.of(lowerTiers.map((item) => `powah:ender_cell_${item}`))
                },
                id: `${id_prefix}powah/ender_cell_${tier}`
            },
            {
                output: Item.of(`powah:solar_panel_${tier}`),
                pattern: ['BCB', 'AAA'],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: Ingredient.of(lowerTiers.map((item) => `powah:solar_panel_${item}`))
                },
                id: `${id_prefix}powah/solar_panel_${tier}`
            }
        );
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });

    // Unification type scripts. Consider moving out?

    buildWoodVariants.forEach((wood) => {
        if (wood.modId == 'minecraft') {
            return;
        }
        let craftingTable = wood.modId + ':' + wood.logType + '_crafting_table';
        if (!Item.exists(craftingTable)) {
            event.shaped('minecraft:crafting_table', ['AA', 'AA'], {
                A: wood.plankBlock
            });
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

    //Generate one RGBee Comb recipe for each dye, using the appropriate flowers from dyeSources
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
