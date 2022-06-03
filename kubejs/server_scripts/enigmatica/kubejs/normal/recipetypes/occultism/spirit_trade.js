onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            inputs: [{ item: 'minecraft:stone' }],
            output: {
                item: 'occultism:otherstone',
                count: 2
            },
            id: 'occultism:spirit_trade/stone_to_otherstone'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'occultism:spirit_trade',
            ingredients: recipe.inputs,
            result: recipe.output
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
