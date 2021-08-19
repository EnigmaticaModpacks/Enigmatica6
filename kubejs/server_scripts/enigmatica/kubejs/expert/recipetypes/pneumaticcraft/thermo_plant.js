onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'undergarden:virulent_mix_source', amount: 4000 },
            item_input: { item: 'occultism:spirit_attuned_gem' },
            item_output: { item: 'occultism:spirit_attuned_crystal', count: 1 },
            pressure: 4.8,
            speed: 0.5,
            exothermic: false,
            temperature: { min_temp: 1973 },
            id: 'occultism:crafting/spirit_attuned_crystal'
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'pneumaticcraft:plastic', amount: 1000 },
            item_input: { item: 'kubejs:rftools_machine_frame_parts', count: 1 },
            item_output: { item: 'kubejs:unassembled_rftools_machine_frame_top', count: 1 },
            pressure: 4.5,
            speed: 0.8,
            exothermic: false,
            temperature: { min_temp: 1873 }
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:thermo_plant';
        event.custom(recipe).id(recipe.id);
    });
});
