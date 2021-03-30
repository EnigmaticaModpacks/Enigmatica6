events.listen('recipes', (event) => {
    if (!expertMode) {
        return;
    }
    // Remember duplicate recipes for Create spout & IE bottler
    const recipes = [
        {
            input: Item.of('eidolon:soul_shard'),
            fluid: Fluid.of('minecraft:lava', 1000),
            output: Item.of('tiab:timeinabottle')
        },
        {
            input: Item.of('create:cuckoo_clock'),
            fluid: Fluid.of('minecraft:lava', 1000),
            output: Item.of('tiab:timeinabottle')
        },
        {
            input: Item.of('ars_nouveau:marvelous_clay'),
            fluid: Fluid.of('minecraft:lava', 1000),
            output: Item.of('tiab:timeinabottle')
        }
    ];
    // recipes.forEach((recipe) => {
    //     event.custom({
    //         type: 'thermal:bottler',
    //         ingredient: recipe.ingredient,
    //         result: recipe.result
    //     });
    // });

    event.recipes.thermal.bottler('tiab:timeinabottle', [
        Fluid.of('cofh_core:potion', 1000).nbt({ Potion: 'minecraft:swiftness' }),
        'ars_nouveau:marvelous_clay'
    ]);
});
