onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/interactio/item_explode/';
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
            },
            id: `${id_prefix}andesite_alloy_from_iron`
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
            },
            id: `${id_prefix}andesite_alloy_from_zinc`
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
            id: `${id_prefix}superheated_steel_ingot`
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
            id: `${id_prefix}superheated_steel_block`
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
            id: `${id_prefix}invar_dust`
        },
        {
            inputs: [
                { tag: 'botania:runes/earth', count: 1 },
                { item: 'quark:rainbow_rune', count: 8 }
            ],
            output: {
                entries: [
                    { result: { item: 'quark:red_crystal_cluster', count: 1 }, weight: 2 },
                    { result: { item: 'quark:orange_crystal_cluster', count: 1 }, weight: 2 },
                    { result: { item: 'quark:yellow_crystal_cluster', count: 1 }, weight: 2 },
                    { result: { item: 'quark:green_crystal_cluster', count: 1 }, weight: 2 },
                    { result: { item: 'quark:blue_crystal_cluster', count: 1 }, weight: 2 },
                    { result: { item: 'quark:indigo_crystal_cluster', count: 1 }, weight: 2 },
                    { result: { item: 'quark:violet_crystal_cluster', count: 1 }, weight: 2 },
                    { result: { item: 'quark:white_crystal_cluster', count: 1 }, weight: 2 }
                ],
                empty_weight: 84,
                rolls: 100
            },
            id: `${id_prefix}rainbow_crystal_clusters`
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'interactio:item_explode',
                inputs: recipe.inputs,
                output: recipe.output
            })
            .id(recipe.id);
    });
});
