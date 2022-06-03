onEvent('recipes', (event) => {
    const id_prefix = 'powah:base/shaped/';
    const recipes = [];

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
                output: Item.of(`powah:energy_cell_${tier}`),
                pattern: ['ABA', 'BCB', 'ABA'],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: Ingredient.of(lower_tiers.map((item) => `powah:energy_cell_${item}`))
                },
                id: `${id_prefix}energy_cell_${tier}`
            },
            {
                output: Item.of(`powah:battery_${tier}`),
                pattern: [' A ', 'BCB', ' B '],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: Ingredient.of(lower_tiers.map((item) => `powah:battery_${item}`))
                },
                id: `${id_prefix}battery_${tier}`
            },

            {
                output: Item.of(`powah:solar_panel_${tier}`),
                pattern: ['BCB', 'AAA'],
                key: {
                    A: crystal,
                    B: capacitor,
                    C: Ingredient.of(lower_tiers.map((item) => `powah:solar_panel_${item}`))
                },
                id: `${id_prefix}solar_panel_${tier}`
            }
        );
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
