events.listen('recipes', (event) => {
    event.remove({ id: 'pneumaticcraft:pressure_chamber/empty_pcb' });
    event.remove({ id: 'pneumaticcraft:pressure_chamber/transistor' });
    event.remove({ id: 'pneumaticcraft:pressure_chamber/capacitor' });

    var data = {
        recipes: [
            {
                ingredients: [
                    { type: 'pneumaticcraft:stacked_item', tag: 'forge:nuggets/gold_copper', count: 3 },
                    { type: 'pneumaticcraft:stacked_item', item: 'minecraft:redstone_torch', count: 2 },
                    { item: 'pneumaticcraft:plastic' }
                ],
                pressure: 1.5,
                output: [{ item: 'pneumaticcraft:empty_pcb', count: 3 }]
            },
            {
                ingredients: [
                    { type: 'pneumaticcraft:stacked_item', tag: 'forge:nuggets/gold_copper', count: 2 },
                    { tag: 'forge:slimeballs' },
                    { item: 'pneumaticcraft:plastic' }
                ],
                pressure: 1.0,
                output: [{ item: 'pneumaticcraft:capacitor' }]
            },
            {
                ingredients: [
                    { type: 'pneumaticcraft:stacked_item', tag: 'forge:nuggets/gold_copper', count: 3 },
                    { tag: 'forge:dusts/redstone' },
                    { item: 'pneumaticcraft:plastic' }
                ],
                pressure: 1.0,
                output: [{ item: 'pneumaticcraft:transistor' }]
            },
            {
                ingredients: [{ type: 'pneumaticcraft:stacked_item', tag: 'forge:grain', count: 1 }],
                pressure: 1.5,
                output: [{ item: 'create:wheat_flour', count: 2 }]
            },
            {
                ingredients: [{ type: 'pneumaticcraft:stacked_item', item: 'minecraft:snow_block', count: 4 }],
                pressure: 2.0,
                output: [{ item: 'betterendforge:dense_snow', count: 1 }]
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.pneumaticcraft.pressure_chamber({
            type: 'pneumaticcraft:pressure_chamber',
            inputs: recipe.ingredients,
            pressure: recipe.pressure,
            results: recipe.output
        });
    });
});
