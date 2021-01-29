events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'minecraft:glass_bottle',
                fluid: fluid.of('pneumaticcraft:memory_essence', 250),
                output: 'minecraft:experience_bottle'
            },
            {
                input: 'buildinggadgets:construction_block_powder',
                fluid: fluid.of('minecraft:water', 1000),
                output: 'buildinggadgets:construction_block_dense'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]);
    });
});
