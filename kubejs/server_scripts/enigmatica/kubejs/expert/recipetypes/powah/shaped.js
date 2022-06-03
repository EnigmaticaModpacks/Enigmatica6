onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/powah/';
    const recipes = [
        {
            output: 'powah:photoelectric_pane',
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: 'powah:dielectric_paste',
                B: '#forge:gems/silicon',
                C: 'atum:crystal_glass_pane'
            },
            id: 'powah:crafting/photoelectric_pane'
        },
        {
            output: Item.of('powah:dielectric_rod', 8),
            pattern: ['ABA', 'ABA', 'ABA'],
            key: {
                A: 'powah:dielectric_paste',
                B: '#forge:ingots/energized_steel'
            },
            id: 'powah:crafting/dielectric_rod'
        },
        {
            output: Item.of('powah:dielectric_rod_horizontal', 8),
            pattern: ['AAA', 'BBB', 'AAA'],
            key: {
                A: 'powah:dielectric_paste',
                B: '#forge:ingots/energized_steel'
            },
            id: 'powah:crafting/dielectric_rod_h'
        },
        {
            output: 'powah:dielectric_casing',
            pattern: ['ABA', 'C C', 'ABA'],
            key: {
                A: 'atum:ceramic_black',
                B: 'powah:dielectric_rod_horizontal',
                C: 'powah:dielectric_rod'
            },
            id: 'powah:crafting/dielectric_casing'
        },
        {
            output: `powah:player_transmitter_basic`,
            pattern: [' A ', 'BCB', 'BDB'],
            key: {
                A: 'powah:player_aerial_pearl',
                B: 'powah:capacitor_basic_large',
                C: 'immersiveengineering:tesla_coil',
                D: 'powah:dielectric_casing'
            },
            id: `powah:crafting/player_tranmitter_basic`
        },
        {
            output: `powah:energizing_rod_basic`,
            pattern: [' A ', 'BCB', 'BDB'],
            key: {
                A: 'refinedstorage:quartz_enriched_iron_block',
                B: 'powah:capacitor_basic_large',
                C: 'immersiveengineering:tesla_coil',
                D: 'immersiveengineering:coil_lv'
            },
            id: `powah:crafting/energizing_rod_basic`
        }
    ];

    powahTiers.forEach(function (tier, index) {
        if (tier == 'starter') {
            return;
        }
        let capacitor = `powah:capacitor_${tier}`;

        if (tier == 'basic') {
            capacitor = `powah:capacitor_${tier}_large`;
        } else if (tier == 'hardened') {
            crystal = 'powah:steel_energized';
        }

        let wire_coil = 'immersiveengineering:coil_lv';
        if (tier == 'blazing' || tier == 'niotic') {
            wire_coil = 'immersiveengineering:coil_mv';
        } else if (tier == 'spirited' || tier == 'nitro') {
            wire_coil = 'immersiveengineering:coil_hv';
        }

        let lower_tiers = lowerTiers(powahTiers, tier);

        // Primary Craft
        recipes.push(
            {
                output: `powah:furnator_${tier}`,
                pattern: ['AAA', 'BCB', 'ADA'],
                key: {
                    A: 'immersiveengineering:blastbrick_reinforced',
                    B: capacitor,
                    C: 'powah:dielectric_casing',
                    D: 'thermal:dynamo_stirling'
                },
                id: `powah:crafting/furnator_${tier}`
            },
            {
                output: `powah:magmator_${tier}`,
                pattern: ['BAB', 'CDE', 'BFB'],
                key: {
                    A: Item.of('thermal:fluid_cell').ignoreNBT(),
                    B: capacitor,
                    C: 'immersiveengineering:radiator',
                    D: 'pneumaticcraft:turbine_rotor',
                    E: wire_coil,
                    F: 'powah:dielectric_casing'
                },
                id: `powah:crafting/magmator_${tier}`
            },
            {
                output: `powah:thermo_generator_${tier}`,
                pattern: ['BAB', 'BCB', 'DDD'],
                key: {
                    A: `powah:magmator_${tier}`,
                    B: capacitor,
                    C: 'pneumaticcraft:heat_pipe',
                    D: 'powah:thermoelectric_plate'
                },
                id: `powah:crafting/thermo_generator_${tier}`
            },
            {
                output: `powah:energy_discharger_${tier}`,
                pattern: ['BAB', 'DCD', 'DBD'],
                key: {
                    A: `powah:energy_hopper_${tier}`,
                    B: capacitor,
                    C: `powah:energy_cell_${tier}`,
                    D: 'powah:dielectric_rod'
                },
                id: `powah:crafting/energy_discharger_${tier}`
            },
            {
                output: `powah:energy_hopper_${tier}`,
                pattern: ['BDB', 'BCB', 'DAD'],
                key: {
                    A: 'thermal:rf_coil',
                    B: capacitor,
                    C: 'powah:dielectric_casing',
                    D: 'powah:dielectric_rod'
                },
                id: `powah:crafting/energy_hopper_${tier}`
            },
            {
                output: `powah:ender_cell_${tier}`,
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: 'fluxnetworks:flux_core',
                    B: capacitor,
                    C: 'fluxnetworks:flux_block'
                },
                id: `powah:crafting/ender_cell_${tier}`
            }
        );

        // Upgrade Craft
        if (tier != 'basic') {
            recipes.push(
                {
                    output: Item.of(`powah:furnator_${tier}`),
                    pattern: ['BCB'],
                    key: {
                        B: capacitor,
                        C: Ingredient.of(lower_tiers.map((item) => `powah:furnator_${item}`))
                    },
                    id: `${id_prefix}furnator_${tier}_upgrade`
                },
                {
                    output: Item.of(`powah:magmator_${tier}`),
                    pattern: ['BAB', 'BCB'],
                    key: {
                        A: wire_coil,
                        B: capacitor,
                        C: Ingredient.of(lower_tiers.map((item) => `powah:magmator_${item}`))
                    },
                    id: `${id_prefix}magmator_${tier}_upgrade`
                },
                {
                    output: Item.of(`powah:thermo_generator_${tier}`),
                    pattern: ['BAB', 'BCB'],
                    key: {
                        A: `powah:magmator_${tier}`,
                        B: capacitor,
                        C: Ingredient.of(lower_tiers.map((item) => `powah:thermo_generator_${item}`))
                    },
                    id: `${id_prefix}thermo_generator_${tier}_upgrade`
                },
                {
                    output: Item.of(`powah:energy_discharger_${tier}`),
                    pattern: ['ABA', ' C ', ' A '],
                    key: {
                        A: capacitor,
                        B: `powah:energy_discharger_${tier}`,
                        C: Ingredient.of(lower_tiers.map((item) => `powah:energy_cell_${item}`))
                    },
                    id: `${id_prefix}energy_discharger_${tier}_upgrade`
                },
                {
                    output: Item.of(`powah:energy_hopper_${tier}`),
                    pattern: ['A A', 'ABA'],
                    key: {
                        A: capacitor,
                        B: Ingredient.of(lower_tiers.map((item) => `powah:energy_hopper_${item}`))
                    },
                    id: `${id_prefix}energy_hopper_${tier}_upgrade`
                },
                {
                    output: Item.of(`powah:ender_cell_${tier}`),
                    pattern: [' A ', 'ABA', ' A '],
                    key: {
                        A: capacitor,
                        B: Ingredient.of(lower_tiers.map((item) => `powah:ender_cell_${item}`))
                    },
                    id: `${id_prefix}ender_cell_${tier}_upgrade`
                }
            );
        }

        let previousTierRod, previousTierTransmitter;
        if (index > 1) {
            previousTierRod = `powah:energizing_rod_${powahTiers[index - 1]}`;
            previousTierTransmitter = `powah:player_transmitter_${powahTiers[index - 1]}`;

            recipes.push(
                {
                    output: `powah:player_transmitter_${tier}`,
                    pattern: ['BCB', 'BDB'],
                    key: {
                        B: capacitor,
                        C: previousTierTransmitter,
                        D: 'powah:dielectric_casing'
                    },
                    id: `powah:crafting/player_tranmitter_${tier}`
                },
                {
                    output: `powah:energizing_rod_${tier}`,
                    pattern: [' A ', 'BCB', 'BDB'],
                    key: {
                        A: 'refinedstorage:quartz_enriched_iron_block',
                        B: capacitor,
                        C: previousTierRod,
                        D: wire_coil
                    },
                    id: `powah:crafting/energizing_rod_${tier}`
                }
            );
        }
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
