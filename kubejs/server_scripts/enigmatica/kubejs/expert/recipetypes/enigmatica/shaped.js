onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/enigmatica/';
    const recipes = [
        ,
        {
            output: 'ironjetpacks:hardened_jetpack',
            pattern: ['ABA', 'ECE', 'DFD'],
            key: {
                A: 'mekanism:electrolytic_core',
                B: 'powah:battery_hardened',
                C: 'mekanism:jetpack',
                D: 'ironjetpacks:hardened_thruster',
                E: 'powah:energy_hopper_hardened',
                F: Item.of('minecraft:water_bucket', '{display:{Name:\'{"text":"#MLG-YOLO"}\'}}').enchant(
                    'minecraft:infinity',
                    1
                )
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
                D: 'powah:energy_hopper_hardened'
            },
            id: `${id_prefix}ironjetpacks/hardened_thruster`
        },
        {
            output: 'ironjetpacks:invar_jetpack',
            pattern: ['ABA', 'ECE', 'D D'],
            key: {
                A: '#forge:plates/invar',
                B: '#forge:gears/invar',
                C: 'ironjetpacks:hardened_jetpack',
                D: 'ironjetpacks:invar_thruster',
                E: 'thermal:upgrade_augment_1'
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
                D: 'thermal:upgrade_augment_1'
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
                E: 'powah:energy_hopper_blazing'
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
                D: 'powah:energy_hopper_blazing'
            },
            id: `${id_prefix}ironjetpacks/blazing_thruster`
        },
        {
            output: 'ironjetpacks:signalum_jetpack',
            pattern: ['ABA', 'ECE', 'D D'],
            key: {
                A: '#forge:plates/signalum',
                B: '#forge:gears/signalum',
                C: 'ironjetpacks:blazing_jetpack',
                D: 'ironjetpacks:signalum_thruster',
                E: 'thermal:upgrade_augment_2'
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
                D: 'thermal:upgrade_augment_2'
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
                E: 'powah:energy_hopper_niotic'
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
                D: 'powah:energy_hopper_niotic'
            },
            id: `${id_prefix}ironjetpacks/niotic_thruster`
        },

        {
            output: 'ironjetpacks:lumium_jetpack',
            pattern: ['ABA', 'ECE', 'D D'],
            key: {
                A: '#forge:plates/lumium',
                B: '#forge:gears/lumium',
                C: 'ironjetpacks:niotic_jetpack',
                D: 'ironjetpacks:lumium_thruster',
                E: 'thermal:dynamo_fuel_augment'
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
                D: 'thermal:dynamo_fuel_augment'
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
                E: 'powah:energy_hopper_spirited'
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
                D: 'powah:energy_hopper_spirited'
            },
            id: `${id_prefix}ironjetpacks/spirited_thruster`
        },
        {
            output: 'ironjetpacks:enderium_jetpack',
            pattern: ['ABA', 'ECE', 'D D'],
            key: {
                A: '#forge:plates/enderium',
                B: '#forge:gears/enderium',
                C: 'ironjetpacks:spirited_jetpack',
                D: 'ironjetpacks:enderium_thruster',
                E: 'thermal:upgrade_augment_3'
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
                D: 'thermal:upgrade_augment_3'
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
                E: 'powah:energy_hopper_nitro'
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
                D: 'powah:energy_hopper_nitro'
            },
            id: `${id_prefix}ironjetpacks/nitro_thruster`
        }
    ];

    powahTiers.forEach(function (tier, index) {
        if (tier == 'starter') {
            return;
        }
        let capacitor = `powah:capacitor_${tier}`;

        if (tier == 'basic') {
            capacitor = `powah:capacitor_${tier}_large`;
        }

        let wire_coil = 'immersiveengineering:coil_lv';
        if (tier == 'blazing' || tier == 'niotic') {
            wire_coil = 'immersiveengineering:coil_mv';
        } else if (tier == 'spirited' || tier == 'nitro') {
            wire_coil = 'immersiveengineering:coil_hv';
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
                output: Item.of(`powah:furnator_${tier}`),
                pattern: ['BCB'],
                key: {
                    B: capacitor,
                    C: Ingredient.of(lowerTiers.map((item) => `powah:furnator_${item}`))
                },
                id: `${id_prefix}powah/furnator_${tier}`
            },
            {
                output: Item.of(`powah:magmator_${tier}`),
                pattern: ['BAB', 'BCB'],
                key: {
                    A: wire_coil,
                    B: capacitor,
                    C: Ingredient.of(lowerTiers.map((item) => `powah:magmator_${item}`))
                },
                id: `${id_prefix}powah/magmator_${tier}`
            },
            {
                output: Item.of(`powah:thermo_generator_${tier}`),
                pattern: ['BAB', 'BCB'],
                key: {
                    A: `powah:magmator_${tier}`,
                    B: capacitor,
                    C: Ingredient.of(lowerTiers.map((item) => `powah:thermo_generator_${item}`))
                },
                id: `${id_prefix}powah/thermo_generator_${tier}`
            },
            {
                output: Item.of(`powah:energy_hopper_${tier}`),
                pattern: ['A A', 'ABA'],
                key: {
                    A: capacitor,
                    B: Ingredient.of(lowerTiers.map((item) => `powah:energy_hopper_${item}`))
                },
                id: `${id_prefix}powah/energy_hopper_${tier}`
            },
            {
                output: Item.of(`powah:energy_discharger_${tier}`),
                pattern: ['ABA', ' C ', ' A '],
                key: {
                    A: capacitor,
                    B: `powah:energy_discharger_${tier}`,
                    C: Ingredient.of(lowerTiers.map((item) => `powah:energy_cell_${item}`))
                },
                id: `${id_prefix}powah/energy_discharger_${tier}`
            }
        );

        let previousTier;
        if (index > 1) {
            previousTier = `powah:energizing_rod_${powahTiers[index - 1]}`;
        } else {
            previousTier = 'immersiveengineering:tesla_coil';
        }
        recipes.push(
            {
                output: `powah:energizing_rod_${tier}`,
                pattern: [' A ', 'BCB', 'BDB'],
                key: {
                    A: 'refinedstorage:quartz_enriched_iron_block',
                    B: capacitor,
                    C: previousTier,
                    D: wire_coil
                },
                id: `powah:crafting/energizing_rod_${tier}`
            },
            {
                output: `powah:player_transmitter_${tier}`,
                pattern: [' A ', 'BCB', 'BDB'],
                key: {
                    A: 'powah:player_aerial_pearl',
                    B: capacitor,
                    C: previousTier,
                    D: 'powah:dielectric_casing'
                },
                id: `powah:crafting/player_tranmitter_${tier}`
            }
        );
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
