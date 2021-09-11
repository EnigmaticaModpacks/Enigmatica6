onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    powahTiers.forEach((tier) => {
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

        event
            .shaped(Item.of(`powah:energy_cable_${tier}`, 6), ['CCC', 'BAB', 'CCC'], {
                A: capacitor,
                B: Ingredient.of(lowerTiers.map((item) => `powah:energy_cable_${item}`)),
                C: Ingredient.of('powah:dielectric_rod_horizontal')
            })
            .id(`powah:crafting/cable_${tier}`);
    });
});
