onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    var data = {
        recipes: [{ inputTag: '#forge:workbenches', output: 'astralsorcery:altar_discovery', starlight: 60 }]
    };
    data.recipes.forEach((recipe) => {
        Ingredient.of(recipe.inputTag).stacks.forEach((input) => {
            if (!input.id.includes('chunk')) {
                event.recipes.astralsorcery.block_transmutation({
                    type: 'astralsorcery.block_transmutation',
                    input: {
                        block: input.id
                    },
                    output: {
                        block: recipe.output
                    },
                    starlight: recipe.starlight
                });
            }
        });
    });
});
