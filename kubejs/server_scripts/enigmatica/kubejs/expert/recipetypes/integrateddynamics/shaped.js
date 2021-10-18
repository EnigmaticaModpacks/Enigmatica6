onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/integrateddynamics/';
    const recipes = [
        {
            output: Item.of('integrateddynamics:variable', 24),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: 'integrateddynamics:crystalized_menril_chunk',
                B: 'pneumaticcraft:upgrade_matrix'
            },
            id: 'integrateddynamics:crafting/variable'
        },
        {
            output: 'integrateddynamics:variablestore',
            pattern: ['ABA', 'CDC', 'EFE'],
            key: {
                A: 'extrastorage:neural_processor',
                B: 'integrateddynamics:crystalized_menril_block',
                C: 'integrateddynamics:menril_wood',
                D: 'pneumaticcraft:smart_chest',
                E: 'pneumaticcraft:upgrade_matrix',
                F: 'pneumaticcraft:memory_stick'
            },
            id: 'integrateddynamics:crafting/variablestore'
        },
        {
            output: 'integrateddynamics:part_connector_mono_directional',
            pattern: [' A ', 'CDC', ' B '],
            key: {
                A: 'integrateddynamics:variable_transformer_output',
                B: 'integrateddynamics:variable_transformer_input',
                C: 'integrateddynamics:cable',
                D: 'botania:corporea_spark'
            },
            id: 'integrateddynamics:crafting/part_connector_mono_directional'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
