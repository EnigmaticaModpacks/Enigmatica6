events.listen('recipes', (event) => {
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
                { tag: 'forge:gems/coal_coke', count: 2 },
                { tag: 'forge:ingots/iron', count: 4 },
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
                { tag: 'forge:storage_blocks/coal_coke', count: 2 },
                { tag: 'forge:storage_blocks/iron', count: 4 },
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
            inputs: [{ tag: 'forge:gems/fluorite', count: 1 }],
            output: {
                entries: [{ result: { item: 'emendatusenigmatica:fluorite_dust', count: 1 }, weight: 7 }],
                empty_weight: 3,
                rolls: 1
            }
        },
        {
            inputs: [{ tag: 'forge:gems/lapis', count: 1 }],
            output: {
                entries: [{ result: { item: 'emendatusenigmatica:lapis_dust', count: 1 }, weight: 7 }],
                empty_weight: 3,
                rolls: 1
            }
        },
        {
            inputs: [{ tag: 'forge:gems/mana', count: 1 }],
            output: {
                entries: [{ result: { item: 'botania:mana_powder', count: 1 }, weight: 7 }],
                empty_weight: 3,
                rolls: 1
            }
        },
        {
            inputs: [{ tag: 'forge:gems/apatite', count: 1 }],
            output: {
                entries: [{ result: { item: 'emendatusenigmatica:apatite_dust', count: 1 }, weight: 7 }],
                empty_weight: 3,
                rolls: 1
            }
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
