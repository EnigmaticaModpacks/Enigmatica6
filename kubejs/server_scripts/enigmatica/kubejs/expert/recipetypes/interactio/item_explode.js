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
                { tag: 'forge:obsidian', count: 2 }
            ],
            output: {
                entries: [{ result: { item: 'kubejs:superheated_steel_ingot', count: 4 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'enigmatica:expert/interactio/superheated_steel_ingot'
        },
        {
            inputs: [
                { tag: 'forge:storage_blocks/steel', count: 2 },
                { tag: 'forge:tar', count: 18 },
                { tag: 'forge:obsidian', count: 18 }
            ],
            output: {
                entries: [{ result: { item: 'kubejs:superheated_steel_block', count: 4 }, weight: 1 }],
                empty_weight: 0,
                rolls: 1
            },
            id: 'enigmatica:expert/interactio/superheated_steel_block'
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
        },
        {
            inputs: [
                { item: 'thermal:phytogro', count: 2 },
                { tag: 'forge:dusts/iron', count: 2 },
                { tag: 'forge:dusts/nickel', count: 1 }
            ],
            output: {
                entries: [{ result: { item: 'emendatusenigmatica:invar_dust', count: 1 }, weight: 7 }],
                empty_weight: 3,
                rolls: 3
            },
            id: 'enigmatica:expert/interactio/item_explode/invar_dust'
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
