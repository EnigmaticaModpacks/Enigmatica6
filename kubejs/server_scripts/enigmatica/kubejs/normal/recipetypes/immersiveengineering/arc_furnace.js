onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/immersiveengineering/arc_furnace/';
    recipes = [
        {
            input1: '#forge:ingots/iron',
            secondaries: ['#forge:dusts/ender'],
            outputs: [Item.of('betterendforge:terminite_ingot')],
            id: `${id_prefix}terminite_ingot_from_iron`
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.arc_furnace(recipe.outputs, recipe.input1, recipe.secondaries).id(recipe.id);
    });
});
