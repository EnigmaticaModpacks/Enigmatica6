events.listen('recipes', (event) => {
    var data = {
        recipes: [
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
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.id
            ? event.recipes.mekanism.injecting(recipe.output, recipe.input, recipe.gas).id(recipe.id)
            : event.recipes.mekanism.injecting(recipe.output, recipe.input, recipe.gas);
    });
});
