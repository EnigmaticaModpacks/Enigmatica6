events.listen('recipes', (event) => {
    event.recipes.pneumaticcraft.thermo_plant({
        type: 'pneumaticcraft:thermo_plant',
        fluid_input: {
            type: 'pneumaticcraft:fluid',
            fluid: 'industrialforegoing:essence',
            amount: 1000
        },
        fluid_output: {
            fluid: 'pneumaticcraft:memory_essence',
            amount: 1000
        },
        pressure: 1.0,
        exothermic: false
    });
});
