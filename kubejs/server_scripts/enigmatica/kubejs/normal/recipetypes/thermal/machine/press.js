onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/thermal/press/';
    const recipes = [
        {
            inputs: [Ingredient.of('#integrateddynamics:menril_logs', 1)],
            outputs: [
                Item.of('integrateddynamics:crystalized_menril_chunk', 4),
                Fluid.of('integrateddynamics:menril_resin', 1000)
            ],
            energy: 2400,
            id: `${id_prefix}menril_resin_from_logs`
        },
        {
            inputs: [Item.of('integrateddynamics:menril_planks', 1)],
            outputs: [
                Item.of('integrateddynamics:crystalized_menril_chunk', 1),
                Fluid.of('integrateddynamics:menril_resin', 250)
            ],
            energy: 2400,
            id: `${id_prefix}menril_resin_from_planks`
        },
        {
            inputs: [Item.of('minecraft:popped_chorus_fruit', 1)],
            outputs: [
                Item.of('integrateddynamics:crystalized_chorus_chunk', 4),
                Fluid.of('integrateddynamics:liquid_chorus', 125)
            ],
            energy: 2400,
            id: `${id_prefix}liquid_chorus_from_chorus_fruit`
        },
        {
            inputs: [Item.of('integrateddynamics:proto_chorus', 1)],
            outputs: [
                Item.of('integrateddynamics:crystalized_chorus_chunk', 2),
                Fluid.of('integrateddynamics:liquid_chorus', 125)
            ],
            energy: 2400,
            id: `${id_prefix}liquid_chorus_from_proto_chorus`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.press(recipe.outputs, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});
