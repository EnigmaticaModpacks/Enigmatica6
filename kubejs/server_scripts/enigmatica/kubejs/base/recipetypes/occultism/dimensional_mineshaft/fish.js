onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/occultism/miners/fish/';
    const recipes = [
        {
            output: 'kubejs:soggy_treasure_box',
            weight: 177,
            id: `${id_prefix}soggy_treasure_box`
        },
        {
            output: 'aquaculture:starshell_turtle',
            weight: 100,
            id: `${id_prefix}starshell_turtle`
        },
        {
            output: 'aquaculture:arrau_turtle',
            weight: 100,
            id: `${id_prefix}arrau_turtle`
        },
        {
            output: 'aquaculture:box_turtle',
            weight: 100,
            id: `${id_prefix}box_turtle`
        },
        {
            output: 'aquaculture:leech',
            weight: 100,
            id: `${id_prefix}leech`
        },
        {
            output: 'aquaculture:frog',
            weight: 100,
            id: `${id_prefix}frog`
        },
        {
            output: 'aquaculture:jellyfish',
            weight: 100,
            id: `${id_prefix}jellyfish`
        },
        {
            output: 'aquaculture:fish_bones',
            weight: 100,
            id: `${id_prefix}fish_bones`
        }
    ];

    fishableFish.forEach((fish) => {
        recipes.push({
            output: fish,
            weight: 100,
            id: `${id_prefix}${fish.split(':')[1]}`
        });
    });

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:miner';
        recipe.ingredient = { tag: 'occultism:miners/fish' };
        recipe.result = Item.of(recipe.output).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
