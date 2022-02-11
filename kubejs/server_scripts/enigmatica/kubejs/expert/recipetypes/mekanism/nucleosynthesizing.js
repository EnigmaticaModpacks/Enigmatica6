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
                output: Item.of('fluxnetworks:flux_plug'),
                itemInput: { ingredient: { item: 'powah:ender_cell_nitro' } },
                gasInput: { amount: 10, gas: 'mekanism:antimatter' },
                duration: 25000,
                id: `${id_prefix}flux_plug`
            },
            {
                output: Item.of('fluxnetworks:flux_point'),
                itemInput: { ingredient: { item: 'powah:ender_gate_nitro' } },
                gasInput: { amount: 10, gas: 'mekanism:antimatter' },
                duration: 25000,
                id: `${id_prefix}flux_point`
            },
            {
                output: Item.of('powah:blazing_crystal_block'),
                itemInput: { ingredient: { item: 'quark:blaze_lantern' } },
                gasInput: { amount: 2, gas: 'mekanism:antimatter' },
                duration: 500,
                id: `${id_prefix}blazing_crystal_block`
            },
            {
                output: Item.of('powah:niotic_crystal_block'),
                itemInput: { ingredient: { item: 'astralsorcery:celestial_crystal' } },
                gasInput: { amount: 2, gas: 'mekanism:antimatter' },
                duration: 500,
                id: `${id_prefix}niotic_crystal_block`
            },
            {
                output: Item.of('powah:spirited_crystal_block'),
                itemInput: { ingredient: { item: 'atum:osiris_godforged_block' } },
                gasInput: { amount: 2, gas: 'mekanism:antimatter' },
                duration: 500,
                id: `${id_prefix}spirited_crystal_block`
            },
            {
                output: Item.of('powah:nitro_crystal_block'),
                itemInput: { ingredient: { item: 'bloodmagic:largebloodstonebrick' } },
                gasInput: { amount: 2, gas: 'mekanism:antimatter' },
                duration: 500,
                id: `${id_prefix}nitro_crystal_block`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'mekanism:nucleosynthesizing';
        event.custom(recipe).id(recipe.id);
    });
});
