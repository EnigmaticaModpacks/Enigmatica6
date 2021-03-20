events.listen('recipes', (event) => {
    /* 
        Recipes use about 40k rf per point of duration. 
        Duration is not a fixed speed, as the machine runs at 10000% speed when the energy buffer is full.  
           
    */
    var data = {
        recipes: [
            {
                itemInput: { ingredient: { item: 'industrialforegoing:infinity_trident' } },
                gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
                output: {
                    item: 'industrialforegoing:infinity_trident',
                    nbt: {
                        CanCharge: 1,
                        Riptide: 0,
                        Channeling: 0,
                        Energy: 9223372036854775807,
                        Fluid: { FluidName: 'biofuel', Amount: 0 },
                        Special: 0,
                        Selected: 'ARTIFACT',
                        Loyalty: 0
                    }
                },
                duration: 2500000
                //Approximately 100 billion RF to complete the craft.
            },
            {
                itemInput: { ingredient: { item: 'industrialforegoing:infinity_hammer' } },
                gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
                output: {
                    item: 'industrialforegoing:infinity_hammer',
                    nbt: {
                        CanCharge: 1,
                        Energy: 9223372036854775807,
                        Fluid: { FluidName: 'biofuel', Amount: 0 },
                        Special: 0,
                        Selected: 'ARTIFACT',
                        Beheading: 0
                    }
                },
                duration: 2500000
                //Approximately 100 billion RF to complete the craft.
            },
            {
                itemInput: { ingredient: { item: 'industrialforegoing:infinity_drill' } },
                gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
                output: {
                    item: 'industrialforegoing:infinity_drill',
                    nbt: {
                        CanCharge: 1,
                        Special: 0,
                        Selected: 'ARTIFACT',
                        Energy: 9223372036854775807,
                        Fluid: { FluidName: 'biofuel', Amount: 0 }
                    }
                },
                duration: 2500000
                //Approximately 100 billion RF to complete the craft.
            },
            {
                itemInput: { ingredient: { item: 'industrialforegoing:infinity_saw' } },
                gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
                output: {
                    item: 'industrialforegoing:infinity_saw',
                    nbt: {
                        CanCharge: 1,
                        Special: 0,
                        Selected: 'ARTIFACT',
                        Energy: 9223372036854775807,
                        Fluid: { FluidName: 'biofuel', Amount: 0 }
                    }
                },
                duration: 2500000
                //Approximately 100 billion RF to complete the craft.
            },
            {
                itemInput: { ingredient: { item: 'industrialforegoing:infinity_backpack' } },
                gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
                output: {
                    item: 'industrialforegoing:infinity_backpack',
                    nbt: {
                        CanCharge: 1,
                        Special: 0,
                        Selected: 'ARTIFACT',
                        Energy: 9223372036854775807
                    }
                },
                duration: 2500000
                //Approximately 100 billion RF to complete the craft.
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'mekanism:nucleosynthesizing',
            itemInput: recipe.itemInput,
            gasInput: recipe.gasInput,
            output: recipe.output,
            duration: recipe.duration
        });
    });
});
