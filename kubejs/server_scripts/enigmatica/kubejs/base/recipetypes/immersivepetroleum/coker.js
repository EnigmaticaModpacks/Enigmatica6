onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/immersivepetroleum/coker/';

    const recipes = [
        {
            result: { item: 'immersivepetroleum:petcoke' },
            resultfluid: { tag: 'forge:diesel_sulfur', amount: 27 },
            input: {
                count: 2,
                base_ingredient: { tag: 'forge:gems/bitumen' }
            },
            inputfluid: { tag: 'minecraft:water', amount: 125 },
            time: 30,
            energy: 1024,
            id: 'immersivepetroleum:coking/petcoke'
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:coker';
        event.custom(recipe).id(recipe.id);
    });
});
