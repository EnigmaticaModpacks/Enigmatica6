onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/mekanism/shaped_data/';
    const recipes = [
        {
            result: 'mekanism:basic_energy_cube',
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: { item: 'powah:capacitor_blazing' },
                B: { tag: 'industrialforegoing:machine_frame/simple' },
                C: {
                    type: 'forge:nbt',
                    item: 'immersiveengineering:graphite_electrode',
                    nbt: '{graphDmg:0}'
                },
                D: {
                    type: 'pneumaticcraft:fluid',
                    fluid: 'mekanism:lithium',
                    amount: 1000
                },
                E: { tag: 'forge:ingots/signalum' }
            },
            id: 'mekanism:energy_cube/basic'
        },
        {
            result: 'mekanism:advanced_energy_cube',
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: { item: 'powah:capacitor_niotic' },
                B: { item: 'mekanism:basic_energy_cube' },
                C: {
                    type: 'forge:nbt',
                    item: 'immersiveengineering:graphite_electrode',
                    nbt: '{graphDmg:0}'
                },
                D: {
                    type: 'pneumaticcraft:fluid',
                    fluid: 'mekanism:lithium',
                    amount: 1000
                },
                E: { tag: 'mekanism:alloys/infused' }
            },
            id: 'mekanism:energy_cube/advanced'
        },
        {
            result: 'mekanism:elite_energy_cube',
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: { item: 'powah:capacitor_spirited' },
                B: { item: 'mekanism:advanced_energy_cube' },
                C: {
                    type: 'forge:nbt',
                    item: 'immersiveengineering:graphite_electrode',
                    nbt: '{graphDmg:0}'
                },
                D: {
                    type: 'pneumaticcraft:fluid',
                    fluid: 'mekanism:lithium',
                    amount: 1000
                },
                E: { tag: 'mekanism:alloys/reinforced' }
            },
            id: 'mekanism:energy_cube/elite'
        },
        {
            result: 'mekanism:ultimate_energy_cube',
            pattern: ['ABA', 'CDC', 'EEE'],
            key: {
                A: { item: 'powah:capacitor_nitro' },
                B: { item: 'mekanism:elite_energy_cube' },
                C: {
                    type: 'forge:nbt',
                    item: 'immersiveengineering:graphite_electrode',
                    nbt: '{graphDmg:0}'
                },
                D: {
                    type: 'pneumaticcraft:fluid',
                    fluid: 'mekanism:lithium',
                    amount: 1000
                },
                E: { tag: 'mekanism:alloys/atomic' }
            },
            id: 'mekanism:energy_cube/ultimate'
        },
        {
            result: 'mekanism:basic_induction_cell',
            pattern: ['AAA', 'DCD', 'BBB'],
            key: {
                A: { item: 'powah:capacitor_blazing' },
                B: { item: 'immersiveengineering:coil_hv' },
                C: { item: 'mekanism:basic_energy_cube' },
                D: { tag: 'forge:alloys/elite' }
            },
            id: 'mekanism:induction/cell/basic'
        },
        {
            result: 'mekanism:advanced_induction_cell',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: { item: 'powah:capacitor_niotic' },
                B: { item: 'mekanism:basic_induction_cell' },
                C: { item: 'mekanism:advanced_energy_cube' }
            },
            id: 'mekanism:induction/cell/advanced'
        },
        {
            result: 'mekanism:advanced_induction_cell',
            pattern: ['AAA', 'DCD', 'ABA'],
            key: {
                A: { item: 'powah:capacitor_niotic' },
                B: { item: 'mekanism:basic_induction_cell' },
                C: { item: 'mekanism:advanced_energy_cube' },
                D: { tag: 'forge:ingots/gaia_spirit' }
            },
            id: `${id_prefix}advanced_induction_cell_alt`
        },

        {
            result: 'mekanism:elite_induction_cell',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: { item: 'powah:capacitor_spirited' },
                B: { item: 'mekanism:advanced_induction_cell' },
                C: { item: 'mekanism:elite_energy_cube' }
            },
            id: 'mekanism:induction/cell/elite'
        },
        {
            result: 'mekanism:elite_induction_cell',
            pattern: ['AAA', 'DCD', 'ABA'],
            key: {
                A: { item: 'powah:capacitor_spirited' },
                B: { item: 'mekanism:advanced_induction_cell' },
                C: { item: 'mekanism:elite_energy_cube' },
                D: { tag: 'forge:ingots/gaia_spirit' }
            },
            id: `${id_prefix}elite_induction_cell_alt`
        },

        {
            result: 'mekanism:ultimate_induction_cell',
            pattern: ['AAA', 'BCB', 'ABA'],
            key: {
                A: { item: 'powah:capacitor_nitro' },
                B: { item: 'mekanism:elite_induction_cell' },
                C: { item: 'mekanism:ultimate_energy_cube' }
            },
            id: 'mekanism:induction/cell/ultimate'
        },
        {
            result: 'mekanism:ultimate_induction_cell',
            pattern: ['AAA', 'DCD', 'ABA'],
            key: {
                A: { item: 'powah:capacitor_nitro' },
                B: { item: 'mekanism:elite_induction_cell' },
                C: { item: 'mekanism:ultimate_energy_cube' },
                D: { tag: 'forge:ingots/gaia_spirit' }
            },
            id: `${id_prefix}ultimate_induction_cell_alt`
        },

        {
            result: 'mekanism:advanced_induction_provider',
            pattern: ['BAB', 'ECE', 'DDD'],
            key: {
                A: { tag: 'forge:circuits/advanced' },
                B: { item: 'mekanism:basic_induction_provider' },
                C: { item: 'mekanism:advanced_energy_cube' },
                D: { item: 'powah:capacitor_niotic' },
                E: { tag: 'forge:ingots/gaia_spirit' }
            },
            id: `${id_prefix}advanced_induction_provider_alt`
        },
        {
            result: 'mekanism:elite_induction_provider',
            pattern: ['BAB', 'ECE', 'DDD'],
            key: {
                A: { tag: 'forge:circuits/elite' },
                B: { item: 'mekanism:advanced_induction_provider' },
                C: { item: 'mekanism:elite_energy_cube' },
                D: { item: 'powah:capacitor_spirited' },
                E: { tag: 'forge:ingots/gaia_spirit' }
            },
            id: `${id_prefix}elite_induction_provider_alt`
        },
        {
            result: 'mekanism:ultimate_induction_provider',
            pattern: ['BAB', 'ECE', 'DDD'],
            key: {
                A: { tag: 'forge:circuits/ultimate' },
                B: { item: 'mekanism:elite_induction_provider' },
                C: { item: 'mekanism:ultimate_energy_cube' },
                D: { item: 'powah:capacitor_nitro' },
                E: { tag: 'forge:ingots/gaia_spirit' }
            },
            id: `${id_prefix}ultimate_induction_provider_alt`
        },

        {
            result: 'mekanism:basic_induction_provider',
            pattern: ['BAB', 'BCB', 'DDD'],
            key: {
                A: { tag: 'forge:circuits/basic' },
                B: { tag: 'forge:alloys/elite' },
                C: { item: 'mekanism:basic_energy_cube' },
                D: { item: 'powah:capacitor_blazing' }
            },
            id: 'mekanism:induction/provider/basic'
        },
        {
            result: 'mekanism:advanced_induction_provider',
            pattern: ['BAB', 'BCB', 'DDD'],
            key: {
                A: { tag: 'forge:circuits/advanced' },
                B: { item: 'mekanism:basic_induction_provider' },
                C: { item: 'mekanism:advanced_energy_cube' },
                D: { item: 'powah:capacitor_niotic' }
            },
            id: 'mekanism:induction/provider/advanced'
        },
        {
            result: 'mekanism:elite_induction_provider',
            pattern: ['BAB', 'BCB', 'DDD'],
            key: {
                A: { tag: 'forge:circuits/elite' },
                B: { item: 'mekanism:advanced_induction_provider' },
                C: { item: 'mekanism:elite_energy_cube' },
                D: { item: 'powah:capacitor_spirited' }
            },
            id: 'mekanism:induction/provider/elite'
        },
        {
            result: 'mekanism:ultimate_induction_provider',
            pattern: ['BAB', 'BCB', 'DDD'],
            key: {
                A: { tag: 'forge:circuits/ultimate' },
                B: { item: 'mekanism:elite_induction_provider' },
                C: { item: 'mekanism:ultimate_energy_cube' },
                D: { item: 'powah:capacitor_nitro' }
            },
            id: 'mekanism:induction/provider/ultimate'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:mek_data';
        recipe.result = Item.of(recipe.result).toJson();
        event.custom(recipe).id(recipe.id);
    });
});
