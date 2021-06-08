onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'buildinggadgets:construction_block_dense',
            input: 'buildinggadgets:construction_block_powder',
            gas: { tag: 'mekanism:water_vapor', amount: 200 }
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
            gas: { tag: 'mekanism:hydrogen_chloride', amount: 1 },
            id: 'mekanism:injecting/gunpowder_to_sulfur'
        }
    ];
    recipes.forEach((recipe) => {
        const re = event.recipes.mekanism.injecting(recipe.output, recipe.input, recipe.gas);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
