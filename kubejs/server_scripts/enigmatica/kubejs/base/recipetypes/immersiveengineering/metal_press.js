events.listen('recipes', (event) => {
    data = {
        recipes: [
            {
                mold: 'immersiveengineering:mold_plate',
                result: 'forge:plates/lapis',
                input: 'forge:storage_blocks/lapis',
                energy: 2400
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.immersiveengineering.metal_press({
            type: 'immersiveengineering.metal_press',
            mold: {
                item: recipe.mold
            },
            result: {
                tag: recipe.result
            },
            input: {
                tag: recipe.input
            },
            energy: recipe.energy
        });
    });
});
