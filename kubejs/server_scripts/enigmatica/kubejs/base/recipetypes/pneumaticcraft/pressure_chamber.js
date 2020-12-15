events.listen('recipes', function (event) {
    event.remove({ id: 'pneumaticcraft:pressure_chamber/empty_pcb'});
    event.remove({ id: 'pneumaticcraft:pressure_chamber/transistor'});
    event.remove({ id: 'pneumaticcraft:pressure_chamber/capacitor'});

    var data = {
        recipes: [
            {
                ingredients: [
                    {type: 'pneumaticcraft:stacked_item', tag: 'forge:nuggets/gold_copper', count: 3},
                    {type: 'pneumaticcraft:stacked_item', item: 'minecraft:redstone_torch', count: 2},                    
                    {item: 'pneumaticcraft:plastic'},
                  ],
                pressure: 1.5,
                output: [{item: 'pneumaticcraft:empty_pcb', count: 3}]
            },
            {
                ingredients: [                    
                    {type: 'pneumaticcraft:stacked_item', tag: 'forge:nuggets/gold_copper', count: 2},
                    {tag: 'forge:slimeballs'},
                    {item: 'pneumaticcraft:plastic'},
                  ],
                pressure: 1.0,
                output: [{item: 'pneumaticcraft:capacitor'}]
            },
            {
                ingredients: [                    
                    {type: 'pneumaticcraft:stacked_item', tag: 'forge:nuggets/gold_copper', count: 3},
                    {tag: 'forge:dusts/redstone'},
                    {item: 'pneumaticcraft:plastic'},
                  ],
                pressure: 1.0,
                output: [{item: 'pneumaticcraft:transistor'}]
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
