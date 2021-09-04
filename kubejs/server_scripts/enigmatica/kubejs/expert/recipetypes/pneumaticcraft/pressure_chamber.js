onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            inputs: [
                { tag: 'forge:ingots/steel', count: 2, type: 'pneumaticcraft:stacked_item' },
                { tag: 'forge:tar', count: 2, type: 'pneumaticcraft:stacked_item' },
                { tag: 'forge:obsidian', count: 1, type: 'pneumaticcraft:stacked_item' }
            ],
            pressure: 2.0,
            results: [{ item: 'pneumaticcraft:ingot_iron_compressed', count: 4, type: 'pneumaticcraft:stacked_item' }],
            id: 'pneumaticcraft:pressure_chamber/compressed_iron_ingot'
        },
        {
            inputs: [
                { tag: 'forge:storage_blocks/steel', count: 2, type: 'pneumaticcraft:stacked_item' },
                { tag: 'forge:tar', count: 18, type: 'pneumaticcraft:stacked_item' },
                { tag: 'forge:obsidian', count: 9, type: 'pneumaticcraft:stacked_item' }
            ],
            pressure: 2.0,
            results: [{ item: 'pneumaticcraft:compressed_iron_block', count: 4, type: 'pneumaticcraft:stacked_item' }],
            id: 'pneumaticcraft:pressure_chamber/compressed_iron_block'
        },
        {
            inputs: [{ item: 'minecraft:snow_block', count: 4, type: 'pneumaticcraft:stacked_item' }],
            pressure: 1.5,
            results: [{ item: 'betterendforge:dense_snow', count: 1 }],
            id: 'pneumaticcraft:pressure_chamber/betterendforge/dense_snow'
        },
        {
            inputs: [{ item: 'betterendforge:dense_snow', count: 4, type: 'pneumaticcraft:stacked_item' }],
            pressure: 1.5,
            results: [{ item: 'minecraft:ice', count: 1 }],
            id: 'pneumaticcraft:pressure_chamber/ice'
        },
        {
            inputs: [
                { tag: 'forge:ingots/pewter', count: 4, type: 'pneumaticcraft:stacked_item' },
                { item: 'refinedstorage:quartz_enriched_iron', count: 4, type: 'pneumaticcraft:stacked_item' },
                { item: 'tconstruct:seared_brick', count: 4, type: 'pneumaticcraft:stacked_item' },
                { item: 'thermal:machine_frame', count: 1 }
            ],
            pressure: 2.5,
            results: [{ item: 'refinedstorage:machine_casing', count: 2, type: 'pneumaticcraft:stacked_item' }],
            id: 'refinedstorage:machine_casing'
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: recipe.inputs,
                pressure: recipe.pressure,
                results: recipe.results
            })
            .id(recipe.id);
    });
});
