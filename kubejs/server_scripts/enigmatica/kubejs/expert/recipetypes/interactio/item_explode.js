onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            inputs: [
                { tag: 'forge:stones/andesite', count: 1 },
                { tag: 'forge:ingots/iron', count: 1 }
            ],
            output: {
                entries: [{ result: { item: 'create:andesite_alloy', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            }
        },
        {
            inputs: [
                { tag: 'forge:stones/andesite', count: 2 },
                { tag: 'forge:ingots/zinc', count: 1 }
            ],
            output: {
                entries: [{ result: { item: 'create:andesite_alloy', count: 2 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            }
        },
        {
            inputs: [
                { tag: 'forge:ingots/steel', count: 2 },
                { tag: 'forge:tar', count: 2 },
                { tag: 'forge:obsidian', count: 1 }
            ],
            output: {
                entries: [{ result: { item: 'pneumaticcraft:ingot_iron_compressed', count: 4 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot'
        },
        {
            inputs: [
                { tag: 'forge:storage_blocks/steel', count: 2 },
                { tag: 'forge:tar', count: 18 },
                { tag: 'forge:obsidian', count: 9 }
            ],
            output: {
                entries: [{ result: { item: 'pneumaticcraft:compressed_iron_block', count: 4 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'pneumaticcraft:explosion_crafting/compressed_iron_block'
        },
        {
            inputs: [
                { item: 'bloodmagic:fortune_anointment', count: 1 },
                { item: 'atum:coin_gold', count: 7 },
                { item: 'resourcefulbees:nether_quartz_honeycomb', count: 7 }
            ],
            output: {
                entries: [{ result: { item: 'meetyourfight:devils_ante', count: 1 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'meetyourfight:devils_ante'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'interactio:item_explode',
            inputs: recipe.inputs,
            output: recipe.output
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
