events.listen('recipes', (event) => {
    const data = {
        recipes: [
            {
                id: 'thermal:machine/integrateddynamics/sawmill_integrateddynamics_menril_log',
                pluginid: 'thermal:machine/plugins/integrateddynamics/sawmill_integrateddynamics_menril_log',
                input: 'integrateddynamics:menril_log',
                outputs: [
                    item.of('integrateddynamics:menril_planks', 6),
                    item.of('emendatusenigmatica:wood_dust').chance(0.25)
                ]
            },
            {
                id: 'thermal:machine/integrateddynamics/sawmill_integrateddynamics_menril_log_filled',
                pluginid: 'thermal:machine/plugins/integrateddynamics/sawmill_integrateddynamics_menril_log_filled',
                input: 'integrateddynamics:menril_log_filled',
                outputs: [
                    item.of('integrateddynamics:menril_planks', 6),
                    item.of('integrateddynamics:crystalized_menril_chunk'),
                    item.of('emendatusenigmatica:wood_dust').chance(0.25)
                ]
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.remove({ id: recipe.pluginid });
        event.recipes.thermal.sawmill(recipe.outputs, recipe.input).id(recipe.id)
    });
});