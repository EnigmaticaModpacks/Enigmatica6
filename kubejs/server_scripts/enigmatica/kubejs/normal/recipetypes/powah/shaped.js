onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/powah/shaped/';
    const recipes = [];

    powahTiers.forEach((tier) => {
        let capacitor = 'powah:capacitor_' + tier,
            crystal = 'powah:crystal_' + tier;

        if (tier == 'basic' || tier == 'starter') {
            return;
        } else if (tier == 'hardened') {
            crystal = 'powah:steel_energized';
        }

        let lower_tiers = lowerTiers(powahTiers, tier);

        recipes.push(
            {
                output: Item.of(`powah:energy_cable_${tier}`, 6),
                pattern: ['CCC', 'BAB', 'CCC'],
                key: {
                    A: capacitor,
                    B: Ingredient.of(lower_tiers.map((item) => `powah:energy_cable_${item}`)),
                    C: Ingredient.of('powah:dielectric_rod_horizontal')
                },
                id: `powah:crafting/cable_${tier}`
            },
            {
                output: Item.of(`powah:ender_cell_${tier}`),
                pattern: [' A ', 'ABA', ' A '],
                key: {
                    A: crystal,
                    B: Ingredient.of(lower_tiers.map((item) => `powah:ender_cell_${item}`))
                },
                id: `${id_prefix}ender_cell_${tier}`
            }
        );
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
