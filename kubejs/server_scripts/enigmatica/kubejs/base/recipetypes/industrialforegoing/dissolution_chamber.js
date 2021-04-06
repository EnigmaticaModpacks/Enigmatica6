events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                type: 'industrialforegoing:dissolution_chamber',
                input: [
                    {
                        item: 'minecraft:glass_pane'
                    }
                ],
                inputFluid: '{ FluidName: "pneumaticcraft:memory_essence", Amount: 1000 }',
                processingTime: 50,
                output: {
                    item: 'minecraft:glass_pane',
                    count: 1
                },
                outputFluid: '{ FluidName: "industrialforegoing:essence", Amount: 1000 }'
            },
            {
                type: 'industrialforegoing:dissolution_chamber',
                input: [
                    {
                        item: 'minecraft:glass_pane'
                    }
                ],
                inputFluid: '{ FluidName: "industrialforegoing:essence", Amount: 1000 }',
                processingTime: 50,
                output: {
                    item: 'minecraft:glass_pane',
                    count: 1
                },
                outputFluid: '{ FluidName: "pneumaticcraft:memory_essence", Amount: 1000 }'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.custom(recipe);
    });
});
