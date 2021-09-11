onEvent('recipes', (event) => {
    powahTiers.forEach((tier) => {
        if (tier == 'basic' || tier == 'starter') {
            return;
        } else if (tier == 'hardened') {
        }

        let lowerTiers = [],
            i = 0,
            j = powahTiers.indexOf(tier);

        while (i < j) {
            lowerTiers.push(powahTiers[i]);
            i++;
        }

        event.remove({ id: `powah:crafting/cable_${tier}` });
    });
});
