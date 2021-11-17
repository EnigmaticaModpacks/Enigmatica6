onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        {
            result: { item: 'mekanism:basic_energy_cube' },
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
            result: { item: 'mekanism:advanced_energy_cube' },
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
            result: { item: 'mekanism:elite_energy_cube' },
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
            result: { item: 'mekanism:ultimate_energy_cube' },
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
            result: { item: 'mekanism:basic_induction_cell' },
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { item: 'powah:capacitor_blazing' },
                B: { item: 'immersiveengineering:coil_hv' },
                C: { item: 'mekanism:basic_energy_cube' }
            },
            id: 'mekanism:induction/cell/basic'
        },
        {
            result: { item: 'mekanism:advanced_induction_cell' },
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { item: 'powah:capacitor_niotic' },
                B: { item: 'mekanism:basic_induction_cell' },
                C: { item: 'mekanism:advanced_energy_cube' }
            },
            id: 'mekanism:induction/cell/advanced'
        },
        {
            result: { item: 'mekanism:elite_induction_cell' },
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { item: 'powah:capacitor_spirited' },
                B: { item: 'mekanism:advanced_induction_cell' },
                C: { item: 'mekanism:elite_energy_cube' }
            },
            id: 'mekanism:induction/cell/elite'
        },
        {
            result: { item: 'mekanism:ultimate_induction_cell' },
            pattern: ['ABA', 'BCB', 'ABA'],
            key: {
                A: { item: 'powah:capacitor_nitro' },
                B: { item: 'mekanism:elite_induction_cell' },
                C: { item: 'mekanism:ultimate_energy_cube' }
            },
            id: 'mekanism:induction/cell/ultimate'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'mekanism:mek_data';
        event.custom(recipe).id(recipe.id);
    });
});
