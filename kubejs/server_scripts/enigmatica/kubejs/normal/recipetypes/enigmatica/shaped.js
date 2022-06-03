onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/enigmatica/';
    const recipes = [
        {
            output: 'magicfeather:magicfeather',
            pattern: ['CFC', 'BDB', 'AEA'],
            key: {
                A: 'alexsmobs:roadrunner_feather',
                B: '#forge:ingots/enderium',
                C: 'ars_nouveau:mana_fiber',
                D: 'byg:leaf_pile',
                E: 'ars_nouveau:glyph_launch',
                F: 'ars_nouveau:glyph_slowfall'
            },
            id: `${id_prefix}magicfeather_magic`
        },
        {
            output: 'magicfeather:magicfeather',
            pattern: ['CFC', 'BDB', 'AEA'],
            key: {
                A: 'thermal:lightning_charge',
                B: '#mekanism:alloys/atomic',
                C: 'thermal:hazmat_fabric',
                D: 'byg:leaf_pile',
                E: 'thermal:hazmat_boots',
                F: 'alexsmobs:frontier_cap'
            },
            id: `${id_prefix}magicfeather_tech`
        },
        {
            output: 'losttrinkets:magical_feathers',
            pattern: ['FAF', 'EBE', 'CDC'],
            key: {
                A: '#forge:elytra',
                B: 'magicfeather:magicfeather',
                C: 'minecraft:prismarine_shard',
                D: '#forge:nether_stars',
                E: 'rftoolsbase:infused_diamond',
                F: 'minecraft:ender_eye'
            },
            id: `${id_prefix}magical_feathers`
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

        let lower_tiers = lowerTiers(powahTiers, tier);

        recipes.push(
            {
                output: Item.of(`powah:energizing_rod_${tier}`),
                pattern: ['   ', 'ACA', ' B '],
                key: {
                    A: capacitor,
                    B: `powah:energy_cable_${tier}`,
                    C: Ingredient.of(lower_tiers.map((item) => `powah:energizing_rod_${item}`))
                },
                id: `${id_prefix}powah/energizing_rod_${tier}`
            },
            {
                output: Item.of(`powah:furnator_${tier}`),
                pattern: ['AAA', 'BCB', 'A A'],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: Ingredient.of(lower_tiers.map((item) => `powah:furnator_${item}`))
                },
                id: `${id_prefix}powah/furnator_${tier}`
            },
            {
                output: Item.of(`powah:magmator_${tier}`),
                pattern: ['AAA', 'BCB', 'A A'],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: Ingredient.of(lower_tiers.map((item) => `powah:magmator_${item}`))
                },
                id: `${id_prefix}powah/magmator_${tier}`
            },
            {
                output: Item.of(`powah:thermo_generator_${tier}`),
                pattern: [' A ', 'BCB'],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: Ingredient.of(lower_tiers.map((item) => `powah:thermo_generator_${item}`))
                },
                id: `${id_prefix}powah/thermo_generator_${tier}`
            },
            {
                output: Item.of(`powah:energy_hopper_${tier}`),
                pattern: ['ABA'],
                key: {
                    A: capacitor,
                    B: Ingredient.of(lower_tiers.map((item) => `powah:energy_hopper_${item}`))
                },
                id: `${id_prefix}powah/energy_hopper_${tier}`
            },
            {
                output: Item.of(`powah:energy_discharger_${tier}`),
                pattern: [' A ', ' B ', ' A '],
                key: {
                    A: capacitor,
                    B: Ingredient.of(lower_tiers.map((item) => `powah:energy_discharger_${item}`))
                },
                id: `${id_prefix}powah/energy_discharger_${tier}`
            },
            {
                output: Item.of(`powah:ender_gate_${tier}`, 4),
                pattern: ['BAB', 'A A', 'BAB'],
                key: {
                    A: cable,
                    B: Ingredient.of(lower_tiers.map((item) => `powah:ender_gate_${item}`))
                },
                id: `${id_prefix}powah/ender_gate_${tier}`
            },
            {
                output: Item.of(`powah:reactor_${tier}`, 4),
                pattern: ['BAB', 'A A', 'BAB'],
                key: {
                    A: capacitor,
                    B: Ingredient.of(lower_tiers.map((item) => `powah:reactor_${item}`))
                },
                id: `${id_prefix}powah/reactor_${tier}`
            }
        );
    });

    buildWoodVariants.forEach((wood) => {
        if (wood.modId == 'minecraft') {
            return;
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

        recipes.push(
            {
                output: Item.of('storagedrawers:oak_full_drawers_1'),
                pattern: ['AAA', ' C ', 'AAA'],
                key: {
                    A: wood.plankBlock,
                    C: '#forge:chests'
                },
                id: `${id_prefix}oak_full_drawers_1_from_${wood.logType}_planks`
            },
            {
                output: Item.of('storagedrawers:oak_full_drawers_2', 2),
                pattern: ['ACA', 'AAA', 'ACA'],
                key: {
                    A: wood.plankBlock,
                    C: '#forge:chests'
                },
                id: `${id_prefix}oak_full_drawers_2_from_${wood.logType}_planks`
            },
            {
                output: Item.of('storagedrawers:oak_full_drawers_4', 4),
                pattern: ['CAC', 'AAA', 'CAC'],
                key: {
                    A: wood.plankBlock,
                    C: '#forge:chests'
                },
                id: `${id_prefix}oak_full_drawers_4_from_${wood.logType}_planks`
            },

            {
                output: Item.of('storagedrawers:oak_half_drawers_1'),
                pattern: ['AAA', ' C ', 'AAA'],
                key: {
                    A: wood.slabBlock,
                    C: '#forge:chests'
                },
                id: `${id_prefix}oak_half_drawers_1_from_${wood.logType}_slab`
            },
            {
                output: Item.of('storagedrawers:oak_half_drawers_2', 2),
                pattern: ['ACA', 'AAA', 'ACA'],
                key: {
                    A: wood.slabBlock,
                    C: '#forge:chests'
                },
                id: `${id_prefix}oak_half_drawers_2_from_${wood.logType}_slab`
            },
            {
                output: Item.of('storagedrawers:oak_half_drawers_4', 4),
                pattern: ['CAC', 'AAA', 'CAC'],
                key: {
                    A: wood.slabBlock,
                    C: '#forge:chests'
                },
                id: `${id_prefix}oak_half_drawers_4_from_${wood.logType}_slab`
            }
        );
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
