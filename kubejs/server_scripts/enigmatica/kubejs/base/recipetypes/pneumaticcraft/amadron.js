onEvent('recipes', (event) => {
    /* Usage Documentation: https://github.com/TeamPneumatic/pnc-repressurized/wiki/Amadron-and-Datapacks#1152 */
    const id_prefix = 'enigmatica:base/pneumaticcraft/amadron/';

    const recipes = [
        {
            static: true,
            input: { type: 'ITEM', id: 'kubejs:amadron_survey_tools', amount: 1 },
            output: {
                type: 'ITEM',
                id: 'pneumaticcraft:reinforced_chest',
                amount: 1,
                nbt: JSON.stringify({
                    display: {
                        Name: '[{ "translate": "desc.enigmatica.amadron.atum_mineral" }]',
                        Lore: ['[{ "translate": "desc.enigmatica.amadron.atum_mineral.lore", "color": "gold" }]']
                    },
                    BlockEntityTag: { LootTable: 'enigmatica:chests/amadron_mineral_survey_atum_combo' }
                })
            },
            level: 0,
            maxStock: 5,
            whitelist: { and: { dimensions: ['atum:atum'] } },
            id: `${id_prefix}mineral_survey_atum`
        },
        {
            static: true,
            input: { type: 'ITEM', id: 'kubejs:amadron_survey_tools', amount: 1 },
            output: {
                type: 'ITEM',
                id: 'pneumaticcraft:reinforced_chest',
                amount: 1,
                nbt: JSON.stringify({
                    display: {
                        Name: '[{ "translate": "desc.enigmatica.amadron.undergarden_mineral" }]',
                        Lore: ['[{ "translate": "desc.enigmatica.amadron.undergarden_mineral.lore", "color": "gold" }]']
                    },
                    BlockEntityTag: { LootTable: 'enigmatica:chests/amadron_mineral_survey_undergarden_combo' }
                })
            },
            level: 0,
            maxStock: 5,
            whitelist: { and: { dimensions: ['undergarden:undergarden'] } },
            id: `${id_prefix}mineral_survey_undergarden`
        },
        {
            static: true,
            input: { type: 'ITEM', id: 'kubejs:amadron_survey_tools', amount: 1 },
            output: {
                type: 'ITEM',
                id: 'pneumaticcraft:reinforced_chest',
                amount: 1,
                nbt: JSON.stringify({
                    display: {
                        Name: '[{ "translate": "desc.enigmatica.amadron.nether_botanical" }]',
                        Lore: ['[{ "translate": "desc.enigmatica.amadron.nether_botanical.lore", "color": "gold" }]']
                    },
                    BlockEntityTag: { LootTable: 'enigmatica:chests/amadron_botanical_survey_nether_combo' }
                })
            },
            level: 0,
            maxStock: 5,
            whitelist: { and: { dimensions: ['minecraft:the_nether'] } },
            id: `${id_prefix}botanical_survey_nether`
        },
        {
            static: true,
            input: { type: 'ITEM', id: 'kubejs:amadron_survey_tools', amount: 1 },
            output: {
                type: 'ITEM',
                id: 'pneumaticcraft:reinforced_chest',
                amount: 1,
                nbt: JSON.stringify({
                    display: {
                        Name: '[{ "translate": "desc.enigmatica.amadron.end_botanical" }]',
                        Lore: ['[{ "translate": "desc.enigmatica.amadron.end_botanical.lore", "color": "gold" }]']
                    },
                    BlockEntityTag: { LootTable: 'enigmatica:chests/amadron_botanical_survey_end_combo' }
                })
            },
            level: 0,
            maxStock: 5,
            whitelist: { and: { dimensions: ['minecraft:the_end'] } },
            id: `${id_prefix}botanical_survey_end`
        },
        {
            static: true,
            input: { type: 'ITEM', id: 'kubejs:amadron_survey_tools', amount: 1 },
            output: {
                type: 'ITEM',
                id: 'pneumaticcraft:reinforced_chest',
                amount: 1,
                nbt: JSON.stringify({
                    display: {
                        Name: '[{ "translate": "desc.enigmatica.amadron.end_mineral" }]',
                        Lore: ['[{ "translate": "desc.enigmatica.amadron.end_mineral.lore", "color": "gold" }]']
                    },
                    BlockEntityTag: { LootTable: 'enigmatica:chests/amadron_mineral_survey_the_end_combo' }
                })
            },
            level: 0,
            maxStock: 5,
            whitelist: { and: { dimensions: ['minecraft:the_end'] } },
            id: `${id_prefix}mineral_survey_the_end`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:amadron';
        event.custom(recipe).id(recipe.id);
    });
});

/**/
