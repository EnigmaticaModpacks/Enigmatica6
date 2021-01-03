events.listen('recipes', (event) => {
    event.recipes.industrialforegoing.dissolution_chamber({
        type: 'industrialforegoing.dissolution_chamber',
        input: [
            {
                item: 'minecraft:glass_pane'
            }
        ],
        inputFluid: '{ FluidName: "pneumaticcraft:memory_essence", Amount: 1000 }',
        processingTime: 100,
        output: {
            item: 'minecraft:glass_pane',
            count: 1
        },
        outputFluid: '{FluidName:"industrialforegoing:essence",Amount:1000}',
        type: 'industrialforegoing:dissolution_chamber'
    });
});
