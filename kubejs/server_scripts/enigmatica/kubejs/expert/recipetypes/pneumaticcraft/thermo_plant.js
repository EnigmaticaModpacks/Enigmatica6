onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    var data = {
        recipes: [
            {
                type: 'pneumaticcraft:thermo_plant',
                fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'undergarden:virulent_mix_source', amount: 4000 },
                item_input: { item: 'occultism:spirit_attuned_gem' },
                item_output: { item: 'occultism:spirit_attuned_crystal', count: 1 },
                pressure: 4.8,
                speed: 0.5,
                exothermic: false,
                temperature: { min_temp: 1973 },
                id: 'occultism:crafting/spirit_attuned_crystal'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.custom(recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
