onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/thermo_plant/';
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
            temperature: { min_temp: 1873 },
            id: `${id_prefix}unassembled_rftools_machine_frame_top`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'pneumaticcraft:etching_acid', amount: 500 },
            item_input: { item: 'bloodmagic:defaultcrystal', count: 1 },
            item_output: { item: 'bloodmagic:corrosivecrystal', count: 1 },
            pressure: 3.0,
            speed: 0.8,
            exothermic: false,
            id: `${id_prefix}corrosivecrystal`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'tconstruct:blood', amount: 500 },
            item_input: { item: 'bloodmagic:defaultcrystal', count: 1 },
            item_output: { item: 'bloodmagic:vengefulcrystal', count: 1 },
            pressure: 3.0,
            speed: 0.8,
            exothermic: false,
            id: `${id_prefix}vengefulcrystal`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'tconstruct:blazing_blood', amount: 500 },
            item_input: { item: 'bloodmagic:defaultcrystal', count: 1 },
            item_output: { item: 'bloodmagic:destructivecrystal', count: 1 },
            pressure: 3.0,
            speed: 0.8,
            exothermic: false,
            id: `${id_prefix}destructivecrystal`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'tconstruct:molten_obsidian', amount: 500 },
            item_input: { item: 'bloodmagic:defaultcrystal', count: 1 },
            item_output: { item: 'bloodmagic:steadfastcrystal', count: 1 },
            pressure: 3.0,
            speed: 0.8,
            exothermic: false,
            id: `${id_prefix}steadfastcrystal`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', tag: 'forge:experience', amount: 8000 },
            item_input: { item: 'bloodmagic:corrupted_dust', count: 1 },
            item_output: { item: 'bloodmagic:defaultcrystal', count: 2 },
            pressure: 4.8,
            speed: 0.8,
            exothermic: true,
            temperature: { min_temp: 1173, max_temp: 1273 },
            id: `${id_prefix}defaultcrystal`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'minecraft:water', amount: 1000 },
            item_input: { item: 'kubejs:smoldering_lapis_lazuli_compound', count: 1 },
            item_output: { item: 'pneumaticcraft:upgrade_matrix', count: 4 },
            pressure: 2.0,
            speed: 0.8,
            id: 'pneumaticcraft:thermo_plant/upgrade_matrix'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:thermo_plant';
        event.custom(recipe).id(recipe.id);
    });
});
