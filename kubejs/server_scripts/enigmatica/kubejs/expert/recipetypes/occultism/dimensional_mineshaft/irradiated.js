onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/occultism/miners/irradiated/';
    const recipes = [
        {
            output: 'emendatusenigmatica:uranium_chunk',
            weight: 6,
            id: `${id_prefix}uranium_chunk`
        },
        {
            output: 'emendatusenigmatica:fluorite_chunk',
            weight: 1,
            id: `${id_prefix}fluorite_chunk`
        },
        {
            output: 'emendatusenigmatica:sulfur_chunk',
            weight: 1,
            id: `${id_prefix}sulfur_chunk`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:miner';
        recipe.ingredient = { tag: 'occultism:miners/irradiated' };
        recipe.result = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
