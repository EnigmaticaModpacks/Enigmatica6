onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/immersivepetroleum/coker/';

    const recipes = [
        {
            result: { item: 'immersivepetroleum:petcoke' },
            resultfluid: { tag: 'forge:diesel_sulfur', amount: 27 },
            input: {
                base_ingredient: { tag: 'forge:bitumen' },
                count: 2
            },
            inputfluid: { tag: 'minecraft:water', amount: 125 },
            time: 8,
            energy: 24000,
            id: `immersivepetroleum:coking/petcoke`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:coker';
        event.custom(recipe).id(recipe.id);
    });
});
