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
                F: 'kubejs:memory_advanced_filled'
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
        },
        {
            output: 'integrateddynamics:part_static_light_panel',
            pattern: ['AB', 'CD', 'AB'],
            key: {
                A: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:overworld"}'),
                B: 'integrateddynamics:menril_wood',
                C: '#forge:plates/lumium',
                D: 'atum:white_stained_crystal_glass_pane'
            },
            id: 'integrateddynamics:crafting/part_static_light_panel'
        },
        {
            output: 'integrateddynamics:part_display_panel',
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: Item.of('naturesaura:aura_bottle', '{stored_type:"naturesaura:nether"}'),
                B: 'integrateddynamics:part_static_light_panel'
            },
            id: 'integrateddynamics:crafting/part_display_panel'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
