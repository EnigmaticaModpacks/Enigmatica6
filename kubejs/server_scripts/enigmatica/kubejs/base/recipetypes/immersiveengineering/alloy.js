onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/alloy/';
    recipes = [
        {
            input1: '#forge:ingots/copper',
            input2: '#forge:ingots/zinc',
            output: Item.of('emendatusenigmatica:brass_ingot', 2),
            id: 'immersiveengineering:alloysmelter/brass'
        },
        {
            input1: '#forge:ingots/iron',
            input2: '#forge:ingots/lead',
            output: Item.of('eidolon:pewter_ingot', 2),
            id: `${id_prefix}pewter_ingot`
        },
        {
            input1: '#forge:ingots/thallasium',
            input2: '#forge:dusts/ender',
            output: Item.of('betterendforge:terminite_ingot'),
            id: `${id_prefix}terminite_ingot_from_thallasium`
        },
        {
            input1: '#forge:ingots/netherite',
            input2: 'betterendforge:terminite_ingot',
            output: Item.of('betterendforge:aeternium_ingot'),
            id: `${id_prefix}aeternium_ingot`
        },
        {
            input1: '#forge:glass',
            input2: Ingredient.of('#forge:ingots/copper', 3),
            output: Item.of('tconstruct:tinkers_bronze_ingot', 3),
            id: `${id_prefix}tinkers_bronze_ingot`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.alloy(recipe.output, recipe.input1, recipe.input2).id(recipe.id);
    });
});
