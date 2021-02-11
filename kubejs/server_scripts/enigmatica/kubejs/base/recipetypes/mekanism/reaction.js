events.listen('recipes', (event) => {
    var energyMultiplier = 3,
        durationMultiplier = 20;

    event.custom({
        type: 'mekanism:reaction',
        itemInput: { amount: 2, ingredient: { tag: 'forge:fuels/bio' } },
        fluidInput: { amount: 10, tag: 'minecraft:water' },
        gasInput: { amount: 100, gas: 'mekanism:hydrogen' },
        energyRequired: 200 * energyMultiplier,
        duration: 100 * durationMultiplier,
        itemOutput: { item: 'mekanism:substrate' },
        gasOutput: { gas: 'mekanism:ethene', amount: 100 }
    });
});
