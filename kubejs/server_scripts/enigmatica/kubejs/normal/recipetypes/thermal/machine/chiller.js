onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/thermal/chiller/';

    const recipes = [
        {
            inputs: [Fluid.of('integrateddynamics:menril_resin', 1000)],
            output: Item.of('integrateddynamics:crystalized_menril_block', 1),
            energy: 4000,
            id: `${id_prefix}crystalized_menril_block`
        },
        {
            inputs: [Fluid.of('integrateddynamics:liquid_chorus', 1000)],
            output: Item.of('integrateddynamics:crystalized_chorus_block', 1),
            energy: 4000,
            id: `${id_prefix}crystalized_chorus_block`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.chiller(recipe.output, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});
