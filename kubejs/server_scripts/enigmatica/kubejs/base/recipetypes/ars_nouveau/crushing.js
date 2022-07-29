onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/ars_nouveau/crush/';
    const recipes = [
        {
            input: 'minecraft:prismarine_bricks',
            outputs: [
                Item.of('minecraft:prismarine_shard', 6).withChance(1.0),
                Item.of('minecraft:prismarine_shard', 3).withChance(0.75)
            ],
            id: `${id_prefix}prismarine_shard_from_bricks`
        },
        {
            input: 'minecraft:prismarine',
            outputs: [
                Item.of('minecraft:prismarine_shard', 3).withChance(1.0),
                Item.of('minecraft:prismarine_shard').withChance(0.75)
            ],
            id: `${id_prefix}prismarine_shard`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'ars_nouveau:crush';
        recipe.input = Ingredient.of(recipe.input).toJson();
        recipe.output = recipe.outputs;

        event.custom(recipe).id(recipe.id);
    });
});
