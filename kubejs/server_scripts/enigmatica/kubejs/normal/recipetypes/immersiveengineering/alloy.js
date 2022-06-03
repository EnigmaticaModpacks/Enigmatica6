onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:normal/immersiveengineering/alloy/';
    recipes = [
        {
            input1: '#forge:ingots/iron',
            input2: '#forge:dusts/ender',
            output: Item.of('betterendforge:terminite_ingot'),
            id: `${id_prefix}terminite_ingot_from_iron`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.alloy(recipe.output, recipe.input1, recipe.input2).id(recipe.id);
    });
});
