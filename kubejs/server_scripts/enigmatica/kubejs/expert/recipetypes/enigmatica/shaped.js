onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/enigmatica/';
    const recipes = [];

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
