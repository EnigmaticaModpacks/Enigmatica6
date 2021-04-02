events.listen('recipes', (event) => {
    if (!expertMode) {
        return;
    }
    const recipes = [
        // {
        //     output: Item.of('tiab:timeinabottle'),
        //     inputs: [Item.of('eidolon:soul_shard'), Item.of('create:cuckoo_clock')],
        //     fluids: [Fluid.of('industrialforegoing:essence', 1000), Fluid.of('pneumaticcraft:memory_essence', 1000)]
        // }
    ];

    recipes.forEach((recipe) => {
        recipe.inputs.forEach((input) => {
            recipe.fluids.forEach((fluid) => {
                event.recipes.create.filling(recipe.output, [recipe.inputs, recipe.fluids]);
                event.recipes.thermal.bottler(recipe.output, [recipe.fluids, recipe.inputs]);
            });
        });
    });
});
