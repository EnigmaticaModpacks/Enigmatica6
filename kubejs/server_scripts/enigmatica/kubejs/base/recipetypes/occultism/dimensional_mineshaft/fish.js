onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/occultism/miners/fish/';
    const recipes = [
        {
            output: 'kubejs:soggy_treasure_box',
            weight: 50,
            id: `${id_prefix}soggy_treasure_box`
        }
    ];

    fishableFish.forEach((fish) => {
        recipes.push({
            output: fish,
            weight: 100,
            id: `${id_prefix}${fish.split(':')[0]}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:miner';
        recipe.ingredient = { tag: 'occultism:miners/fish' };
        recipe.result = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
