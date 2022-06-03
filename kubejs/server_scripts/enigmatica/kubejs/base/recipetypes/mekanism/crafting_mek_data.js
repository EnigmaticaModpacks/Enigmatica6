onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'mekanism:elite_energy_cube',
            pattern: ['AEA', 'IPI', 'AEA'],
            key: {
                P: { item: 'mekanism:advanced_energy_cube' },
                E: { item: 'mekanism:energy_tablet' },
                I: { tag: 'forge:ingots/gold_bronze' },
                A: { tag: 'mekanism:alloys/reinforced' }
            },
            id: 'mekanism:energy_cube/elite'
        },
        {
            output: 'mekanism:basic_fluid_tank',
            pattern: ['AIA', 'I I', 'AIA'],
            key: {
                I: { tag: 'forge:ingots/iron_aluminum' },
                A: { tag: 'mekanism:alloys/basic' }
            },
            id: 'mekanism:fluid_tank/basic'
        },
        {
            output: 'mekanism:advanced_fluid_tank',
            pattern: ['AIA', 'IPI', 'AIA'],
            key: {
                P: { item: 'mekanism:basic_fluid_tank' },
                I: { tag: 'forge:ingots/iron_aluminum' },
                A: { tag: 'mekanism:alloys/infused' }
            },
            id: 'mekanism:fluid_tank/advanced'
        },
        {
            output: 'mekanism:elite_fluid_tank',
            pattern: ['AIA', 'IPI', 'AIA'],
            key: {
                P: { item: 'mekanism:advanced_fluid_tank' },
                I: { tag: 'forge:ingots/iron_aluminum' },
                A: { tag: 'mekanism:alloys/reinforced' }
            },
            id: 'mekanism:fluid_tank/elite'
        },
        {
            output: 'mekanism:ultimate_fluid_tank',
            pattern: ['AIA', 'IPI', 'AIA'],
            key: {
                P: { item: 'mekanism:elite_fluid_tank' },
                I: { tag: 'forge:ingots/iron_aluminum' },
                A: { tag: 'mekanism:alloys/atomic' }
            },
            id: 'mekanism:fluid_tank/ultimate'
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'mekanism:mek_data',
            result: Item.of(recipe.output).toJson(),
            pattern: recipe.pattern,
            key: recipe.key
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
