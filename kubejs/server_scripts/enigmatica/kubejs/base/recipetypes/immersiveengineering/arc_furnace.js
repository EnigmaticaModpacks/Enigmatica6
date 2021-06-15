onEvent('recipes', (event) => {
    var data = {
        recipes: [
            {
                input1: '#forge:ingots/copper',
                secondaries: ['#forge:ingots/zinc'],
                outputs: [Item.of('emendatusenigmatica:brass_ingot', 2)]
            },
            {
                input1: '#forge:ingots/iron',
                secondaries: ['#forge:ingots/lead'],
                outputs: [Item.of('eidolon:pewter_ingot', 2)]
            },
            {
                input1: '#forge:ingots/iron',
                secondaries: ['#forge:dusts/ender'],
                outputs: [Item.of('betterendforge:terminite_ingot')]
            },
            {
                input1: '#forge:ingots/netherite',
                secondaries: ['betterendforge:terminite_ingot'],
                outputs: [Item.of('betterendforge:aeternium_ingot')]
            },
            {
                input1: Ingredient.of('#forge:ingots/copper', 3),
                secondaries: ['#forge:glass'],
                outputs: [Item.of('tconstruct:tinkers_bronze_ingot', 3)]
            }
        ]
    };
    event.remove({ id: 'immersiveengineering:arcfurnace/alloy_brass' });
    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.arc_furnace(recipe.outputs, recipe.input1, recipe.secondaries);
    });
});
