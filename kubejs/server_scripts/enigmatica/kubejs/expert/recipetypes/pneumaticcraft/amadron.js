onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    /* Usage Documentation: https://github.com/TeamPneumatic/pnc-repressurized/wiki/Amadron-and-Datapacks#1152 */
    const id_prefix = 'enigmatica:expert/pneumaticcraft/amadron/';

    const recipes = [
        {
            static: true,
            input: {
                type: 'ITEM',
                id: 'kubejs:amadron_mineral_survey_tools',
                amount: 1
            },
            output: {
                type: 'ITEM',
                id: 'pneumaticcraft:reinforced_chest',
                amount: 1,
                nbt: `{display:{Name:'[{"text":"Atum Mineral Survey"}]',Lore:['[{"text":"A collection of minerals from Atum.","color":"gold"}]']},BlockEntityTag:{LootTable:"enigmatica:chests/amadron_survey_minerals_atum_combo"}}`
            },
            level: 0,
            maxStock: 5,
            whitelist: {
                and: {
                    dimensions: ['atum:atum']
                }
            },
            id: `${id_prefix}atum_mineral_survey`
        },
        {
            static: true,
            input: {
                type: 'ITEM',
                id: 'kubejs:amadron_mineral_survey_tools',
                amount: 1
            },
            output: {
                type: 'ITEM',
                id: 'pneumaticcraft:reinforced_chest',
                amount: 1,
                nbt: `{display:{Name:'[{"text":"Undergarden Mineral Survey"}]',Lore:['[{"text":"A collection of minerals from the Undergarden.","color":"gold"}]']},BlockEntityTag:{LootTable:"enigmatica:chests/amadron_survey_minerals_atum_combo"}}`
            },
            level: 0,
            maxStock: 5,
            whitelist: {
                and: {
                    dimensions: ['undergarden:undergarden']
                }
            },
            id: `${id_prefix}undergarden_mineral_survey`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'pneumaticcraft:amadron';
        event.custom(recipe).id(recipe.id);
    });
});

/**/
