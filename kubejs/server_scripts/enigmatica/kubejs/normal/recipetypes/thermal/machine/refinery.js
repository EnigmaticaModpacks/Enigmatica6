onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/thermal/refinery/';
    const recipes = [
        {
            outputs: [Item.of('industrialforegoing:dryrubber', 1)],
            input: fluid.of('industrialforegoing:latex', 900),
            id: `${id_prefix}dryrubber`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.refinery(recipe.outputs, recipe.input).id(recipe.id);
    });
});
