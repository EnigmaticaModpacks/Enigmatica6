onEvent('recipes', (event) => {
    let data = {
        recipes: [
            {
                type: 'immersivepetroleum:coker',
                result: { item: 'immersivepetroleum:petcoke' },
                resultfluid: { tag: 'forge:diesel_sulfur', amount: 27 },
                input: {
                    count: 2,
                    base_ingredient: { tag: 'forge:gems/bitumen' }
                },
                inputfluid: { tag: 'minecraft:water', amount: 125 },
                time: 30,
                energy: 1024,
                id: 'petcoke'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'immersivepetroleum:coker';
        const re = event.custom(recipe);
        if (recipe.id) {
            re.id(`immersivepetroleum:coking/${recipe.id}`);
        }
    });
});
