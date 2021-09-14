onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

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
        }
    ];

    powahTiers.forEach(function (tier, index) {
        if (tier == 'starter') {
            return;
        }
        let capacitor = `powah:capacitor_${tier}`,
            crystal = `powah:crystal_${tier}`;

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

        let lowerTiers = [],
            i = 0,
            j = powahTiers.indexOf(tier);

        while (i < j) {
            lowerTiers.push(powahTiers[i]);
            i++;
        }

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
                    A: 'thermal:fluid_cell',
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
