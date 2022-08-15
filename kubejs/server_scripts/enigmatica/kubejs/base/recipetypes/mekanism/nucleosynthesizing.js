onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/mekanism/nucleosynthesizing/';
    /* 
        Recipes use about 40k rf per point of duration. 
        Duration is not a fixed speed, as the machine runs at 10000% speed when the energy buffer is full.  
           
    */
    var data = {
        recipes: [
            {
                itemInput: { ingredient: { item: 'industrialforegoing:infinity_trident' } },
                gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
                output: Item.of('industrialforegoing:infinity_trident', {
                    CanCharge: 1,
                    Riptide: 0,
                    Channeling: 0,
                    Energy: 9223372036854775807,
                    Fluid: { FluidName: 'biofuel', Amount: 0 },
                    Special: 0,
                    Selected: 'ARTIFACT',
                    Loyalty: 0
                }),
                duration: 2500000,
                id: `${id_prefix}infinity_trident`
                //Approximately 100 billion RF to complete the craft.
            },
            {
                itemInput: { ingredient: { item: 'industrialforegoing:infinity_hammer' } },
                gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
                output: Item.of('industrialforegoing:infinity_hammer', {
                    CanCharge: 1,
                    Energy: 9223372036854775807,
                    Fluid: { FluidName: 'biofuel', Amount: 0 },
                    Special: 0,
                    Selected: 'ARTIFACT',
                    Beheading: 0
                }),
                duration: 2500000,
                id: `${id_prefix}infinity_hammer`
                //Approximately 100 billion RF to complete the craft.
            },
            {
                itemInput: { ingredient: { item: 'industrialforegoing:infinity_drill' } },
                gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
                output: Item.of('industrialforegoing:infinity_drill', {
                    CanCharge: 1,
                    Special: 0,
                    Selected: 'ARTIFACT',
                    Energy: 9223372036854775807,
                    Fluid: { FluidName: 'biofuel', Amount: 0 }
                }),
                duration: 2500000,
                id: `${id_prefix}infinity_drill`
                //Approximately 100 billion RF to complete the craft.
            },
            {
                itemInput: { ingredient: { item: 'industrialforegoing:infinity_saw' } },
                gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
                output: Item.of('industrialforegoing:infinity_saw', {
                    CanCharge: 1,
                    Special: 0,
                    Selected: 'ARTIFACT',
                    Energy: 9223372036854775807,
                    Fluid: { FluidName: 'biofuel', Amount: 0 }
                }),
                duration: 2500000,
                id: `${id_prefix}infinity_saw`
                //Approximately 100 billion RF to complete the craft.
            },
            {
                itemInput: { ingredient: { item: 'industrialforegoing:infinity_backpack' } },
                gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
                output: Item.of('industrialforegoing:infinity_backpack', {
                    CanCharge: 1,
                    Special: 0,
                    Selected: 'ARTIFACT',
                    Energy: 9223372036854775807
                }),
                duration: 2500000,
                id: `${id_prefix}infinity_backpack`
                //Approximately 100 billion RF to complete the craft.
            },
            {
                itemInput: { ingredient: { item: 'industrialforegoing:infinity_nuke' } },
                gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
                output: Item.of('industrialforegoing:infinity_nuke', {
                    CanCharge: 1,
                    Special: 0,
                    Selected: 'ARTIFACT',
                    Energy: 9223372036854775807,
                    Fluid: { FluidName: 'biofuel', Amount: 0 }
                }),
                duration: 2500000,
                id: `${id_prefix}infinity_nuke`
                //Approximately 100 billion RF to complete the craft.
            },
            {
                itemInput: { ingredient: { item: 'industrialforegoing:infinity_launcher' } },
                gasInput: { amount: 10000, gas: 'mekanism:antimatter' },
                output: Item.of('industrialforegoing:infinity_launcher', {
                    CanCharge: 1,
                    Energy: 9223372036854775807,
                    Fluid: { FluidName: 'biofuel', Amount: 0 },
                    Special: 0,
                    Selected: 'ARTIFACT',
                    Plunger: 0
                }),
                duration: 2500000,
                id: `${id_prefix}infinity_launcher`
                //Approximately 100 billion RF to complete the craft.
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'mekanism:nucleosynthesizing';
        event.custom(recipe).id(recipe.id);
    });
});
