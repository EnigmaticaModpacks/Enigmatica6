onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const recipes = [];

    powahTiers.forEach((tier) => {
        let capacitor = 'powah:capacitor_' + tier,
            crystal = 'powah:crystal_' + tier;

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

        recipes.push({
            output: Item.of(`powah:energy_cable_${tier}`, 6),
            pattern: ['CCC', 'BAB', 'CCC'],
            key: {
                A: capacitor,
                B: Ingredient.of(lowerTiers.map((item) => `powah:energy_cable_${item}`)),
                C: Ingredient.of('powah:dielectric_rod_horizontal')
            },
            id: `powah:crafting/cable_${tier}`
        });
    });

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
