onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/mekanism/injecting/';

    const recipes = [
        {
            output: 'buildinggadgets:construction_block_dense',
            input: 'buildinggadgets:construction_block_powder',
            gas: { tag: 'mekanism:water_vapor', amount: 1 },
            id: `${id_prefix}construction_block_powder_to_dense`
        },
        {
            output: 'minecraft:clay',
            input: '#forge:terracotta',
            gas: { tag: 'mekanism:water_vapor', amount: 1 },
            id: 'mekanism:injecting/terracotta_to_clay'
        },
        {
            output: 'emendatusenigmatica:sulfur_dust',
            input: '#forge:gunpowder',
            gas: { gas: 'mekanism:hydrogen_chloride', amount: 1 },
            id: 'mekanism:injecting/gunpowder_to_sulfur'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.mekanism.injecting(recipe.output, recipe.input, recipe.gas).id(recipe.id);
    });
});
