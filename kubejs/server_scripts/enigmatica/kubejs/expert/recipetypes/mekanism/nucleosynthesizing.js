onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/mekanism/nucleosynthesizing/';
    /* 
        Recipes use about 40k rf per point of duration. 
        Duration is not a fixed speed, as the machine runs at 10000% speed when the energy buffer is full.  
           
    */
    var data = {
        recipes: [
            {
                itemInput: { ingredient: { item: 'powah:ender_cell_nitro' } },
                gasInput: { amount: 10, gas: 'mekanism:antimatter' },
                output: Item.of('fluxnetworks:flux_plug'),
                duration: 25000,
                id: `${id_prefix}flux_plug`
            },
            {
                itemInput: { ingredient: { item: 'powah:ender_gate_nitro' } },
                gasInput: { amount: 10, gas: 'mekanism:antimatter' },
                output: Item.of('fluxnetworks:flux_point'),
                duration: 25000,
                id: `${id_prefix}flux_point`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'mekanism:nucleosynthesizing';
        event.custom(recipe).id(recipe.id);
    });
});
