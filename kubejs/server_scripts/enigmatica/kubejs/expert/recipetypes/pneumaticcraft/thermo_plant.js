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
            item_input: { item: 'kubejs:rough_machine_frame_top', count: 1 },
            item_output: { item: 'kubejs:coated_machine_frame_top', count: 1 },
            pressure: 4.5,
            speed: 0.8,
            exothermic: false,
            temperature: { min_temp: 1873 },
            id: `${id_prefix}coated_machine_frame_top`
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
        },
        {
            item_input: { item: 'atum:crystal_glass' },
            item_output: { item: 'integratedterminals:menril_glass' },
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'integrateddynamics:menril_resin', amount: 1000 },
            pressure: 4.0,
            speed: 0.5,
            exothermic: false,
            temperature: { min_temp: 1273 },
            id: `${id_prefix}menril_glass`
        },
        {
            item_input: { item: 'atum:crystal_glass' },
            item_output: { item: 'integratedterminals:chorus_glass' },
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'integrateddynamics:liquid_chorus', amount: 1000 },
            pressure: 4.0,
            speed: 0.5,
            exothermic: false,
            temperature: { min_temp: 1273 },
            id: `${id_prefix}chorus_glass`
        },
        {
            item_input: { item: 'minecraft:popped_chorus_fruit' },
            fluid_output: { fluid: 'integrateddynamics:liquid_chorus', amount: 125 },
            pressure: 3.0,
            exothermic: false,
            id: `${id_prefix}liquid_chorus_from_chorus_fruit`
        },
        {
            item_input: { item: 'integrateddynamics:proto_chorus' },
            fluid_output: { fluid: 'integrateddynamics:liquid_chorus', amount: 125 },
            pressure: 3.0,
            exothermic: false,
            id: `${id_prefix}liquid_chorus_from_proto_chorus`
        },
        {
            item_input: { item: 'rftoolsbase:machine_base' },
            item_output: { item: 'rftoolspower:power_core1' },
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'thermal:redstone', amount: 9000 },
            pressure: 2.0,
            exothermic: false,
            temperature: { min_temp: 1973 },
            id: 'rftoolspower:power_core1'
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'mekanism:lithium', amount: 100 },
            item_output: { item: 'emendatusenigmatica:lithium_dust', count: 1 },
            pressure: 2.0,
            exothermic: true,
            temperature: { max_temp: 453 },
            id: `${id_prefix}lithium_dust`
        },
        {
            fluid_input: {
                type: 'pneumaticcraft:fluid',
                fluid: 'resourcefulbees:otherworldly_honey',
                amount: 250
            },
            item_input: { item: 'mythicbotany:kvasir_blood' },
            item_output: { item: 'mythicbotany:kvasir_mead', count: 1 },
            pressure: 4.0,
            exothermic: false,
            speed: 0.1,
            temperature: { max_temp: 1973 },
            id: `${id_prefix}kvasir_mead`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'astralsorcery:liquid_starlight', amount: 1000 },
            item_input: { item: 'kubejs:astrogro' },
            item_output: { item: 'astralsorcery:celestial_crystal', count: 1 },
            pressure: 4.5,
            exothermic: true,
            speed: 0.1,
            temperature: { max_temp: 100 },
            id: `${id_prefix}celestial_crystal`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'industrialforegoing:latex', amount: 900 },
            item_input: { tag: 'forge:dusts/sulfur' },
            item_output: { item: 'industrialforegoing:dryrubber', count: 1 },
            pressure: 3.0,
            exothermic: false,
            speed: 1.1,
            temperature: { min_temp: 433 },
            id: `${id_prefix}dryrubber`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'minecraft:water', amount: 100 },
            item_input: { item: 'minecraft:spider_eye' },
            fluid_output: { fluid: 'tconstruct:venom', amount: 100 },
            pressure: 2.0,
            exothermic: false,
            speed: 0.5,
            temperature: { min_temp: 373 },
            id: `${id_prefix}venom_from_spider_eye`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'minecraft:water', amount: 200 },
            item_input: { item: 'minecraft:fermented_spider_eye' },
            fluid_output: { fluid: 'tconstruct:venom', amount: 200 },
            pressure: 2.0,
            exothermic: false,
            speed: 0.5,
            temperature: { min_temp: 373 },
            id: `${id_prefix}venom_from_fermented_spider_eye`
        },
        {
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'pneumaticcraft:plastic', amount: 1000 },
            item_input: { item: 'kubejs:monster_mash' },
            fluid_output: { fluid: 'pneumaticcraft:etching_acid', amount: 1000 },
            pressure: 1.0,
            exothermic: false,
            speed: 0.5,
            id: `${id_prefix}etching_acid_from_monster_mash`
        }
    ];

    let crystal_colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];

    crystal_colors.forEach((crystal_color) => {
        recipes.push({
            fluid_input: { type: 'pneumaticcraft:fluid', fluid: 'tconstruct:molten_aluminum', amount: 18 },
            item_input: { item: `quark:${crystal_color}_crystal_cluster` },
            item_output: { item: `quark:${crystal_color}_crystal_pane`, count: 1 },
            pressure: 4.8,
            exothermic: false,
            speed: 0.25,
            temperature: { min_temp: 2200 },
            id: `${id_prefix}${crystal_color}_crystal_pane`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:thermo_plant';
        event.custom(recipe).id(recipe.id);
    });
});
