onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            inputs: [
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:ingots/steel', count: 2 },
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:tar', count: 2 },
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:obsidian', count: 1 }
            ],
            pressure: 2.0,
            results: [{ type: 'pneumaticcraft:stacked_item', item: 'pneumaticcraft:ingot_iron_compressed', count: 4 }],
            id: 'pneumaticcraft:pressure_chamber/compressed_iron_ingot'
        },
        {
            inputs: [
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:storage_blocks/steel', count: 2 },
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:tar', count: 18 },
                { type: 'pneumaticcraft:stacked_item', tag: 'forge:obsidian', count: 9 }
            ],
            pressure: 2.0,
            results: [{ type: 'pneumaticcraft:stacked_item', item: 'pneumaticcraft:compressed_iron_block', count: 4 }],
            id: 'pneumaticcraft:pressure_chamber/compressed_iron_block'
        },
        {
            inputs: [{ type: 'pneumaticcraft:stacked_item', item: 'minecraft:snow_block', count: 4 }],
            pressure: 1.5,
            results: [{ item: 'betterendforge:dense_snow', count: 1 }]
        },
        {
            inputs: [{ type: 'pneumaticcraft:stacked_item', item: 'betterendforge:dense_snow', count: 4 }],
            pressure: 1.5,
            results: [{ item: 'minecraft:ice', count: 1 }],
            id: 'pneumaticcraft:pressure_chamber/ice'
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
