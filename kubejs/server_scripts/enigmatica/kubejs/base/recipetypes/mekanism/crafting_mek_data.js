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
            output: 'mekanism:elite_combining_factory',
            pattern: ['ACA', 'IPI', 'ACA'],
            key: {
                P: { item: 'mekanism:advanced_combining_factory' },
                C: { tag: 'forge:circuits/elite' },
                I: { tag: 'forge:ingots/gold_bronze' },
                A: { tag: 'mekanism:alloys/reinforced' }
            },
            id: 'mekanism:factory/elite/combining'
        },
        {
            output: 'mekanism:elite_enriching_factory',
            pattern: ['ACA', 'IPI', 'ACA'],
            key: {
                P: { item: 'mekanism:advanced_enriching_factory' },
                C: { tag: 'forge:circuits/elite' },
                I: { tag: 'forge:ingots/gold_bronze' },
                A: { tag: 'mekanism:alloys/reinforced' }
            },
            id: 'mekanism:factory/elite/enriching'
        },
        {
            output: 'mekanism:elite_crushing_factory',
            pattern: ['ACA', 'IPI', 'ACA'],
            key: {
                P: { item: 'mekanism:advanced_crushing_factory' },
                C: { tag: 'forge:circuits/elite' },
                I: { tag: 'forge:ingots/gold_bronze' },
                A: { tag: 'mekanism:alloys/reinforced' }
            },
            id: 'mekanism:factory/elite/crushing'
        },
        {
            output: 'mekanism:elite_compressing_factory',
            pattern: ['ACA', 'IPI', 'ACA'],
            key: {
                P: { item: 'mekanism:advanced_compressing_factory' },
                C: { tag: 'forge:circuits/elite' },
                I: { tag: 'forge:ingots/gold_bronze' },
                A: { tag: 'mekanism:alloys/reinforced' }
            },
            id: 'mekanism:factory/elite/compressing'
        },
        {
            output: 'mekanism:elite_smelting_factory',
            pattern: ['ACA', 'IPI', 'ACA'],
            key: {
                P: { item: 'mekanism:advanced_smelting_factory' },
                C: { tag: 'forge:circuits/elite' },
                I: { tag: 'forge:ingots/gold_bronze' },
                A: { tag: 'mekanism:alloys/reinforced' }
            },
            id: 'mekanism:factory/elite/smelting'
        },
        {
            output: 'mekanism:elite_sawing_factory',
            pattern: ['ACA', 'IPI', 'ACA'],
            key: {
                P: { item: 'mekanism:advanced_sawing_factory' },
                C: { tag: 'forge:circuits/elite' },
                I: { tag: 'forge:ingots/gold_bronze' },
                A: { tag: 'mekanism:alloys/reinforced' }
            },
            id: 'mekanism:factory/elite/sawing'
        },
        {
            output: 'mekanism:elite_purifying_factory',
            pattern: ['ACA', 'IPI', 'ACA'],
            key: {
                P: { item: 'mekanism:advanced_purifying_factory' },
                C: { tag: 'forge:circuits/elite' },
                I: { tag: 'forge:ingots/gold_bronze' },
                A: { tag: 'mekanism:alloys/reinforced' }
            },
            id: 'mekanism:factory/elite/purifying'
        },
        {
            output: 'mekanism:elite_injecting_factory',
            pattern: ['ACA', 'IPI', 'ACA'],
            key: {
                P: { item: 'mekanism:advanced_injecting_factory' },
                C: { tag: 'forge:circuits/elite' },
                I: { tag: 'forge:ingots/gold_bronze' },
                A: { tag: 'mekanism:alloys/reinforced' }
            },
            id: 'mekanism:factory/elite/injecting'
        },
        {
            output: 'mekanism:elite_infusing_factory',
            pattern: ['ACA', 'IPI', 'ACA'],
            key: {
                P: { item: 'mekanism:advanced_infusing_factory' },
                C: { tag: 'forge:circuits/elite' },
                I: { tag: 'forge:ingots/gold_bronze' },
                A: { tag: 'mekanism:alloys/reinforced' }
            },
            id: 'mekanism:factory/elite/infusing'
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
