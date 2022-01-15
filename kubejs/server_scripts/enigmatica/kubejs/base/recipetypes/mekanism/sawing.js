onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/mekanism/sawing/';
    const recipes = [
        {
            input: '#minecraft:planks',
            output: Item.of('minecraft:stick', 6),
            extraOutput: Item.of('emendatusenigmatica:wood_dust').chance(0.25),
            id: 'mekanism:sawing/planks'
        },
        {
            input: '#minecraft:wooden_slabs',
            output: Item.of('minecraft:stick', 3),
            extraOutput: Item.of('emendatusenigmatica:wood_dust').chance(0.125),
            id: 'mekanism:sawing/slabs'
        },
        {
            input: '#minecraft:wooden_stairs',
            output: Item.of('minecraft:stick', 9),
            extraOutput: Item.of('emendatusenigmatica:wood_dust').chance(0.375),
            id: 'mekanism:sawing/stairs'
        },
        {
            input: ['naturesaura:ancient_bark', 'naturesaura:ancient_log'],
            output: Item.of('6x naturesaura:ancient_planks'),
            extraOutput: Item.of('emendatusenigmatica:wood_dust').chance(0.25),
            id: `${id_prefix}ancient_planks`
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.mekanism.sawing(recipe.output, recipe.input, recipe.extraOutput).id(recipe.id);
    });
});
