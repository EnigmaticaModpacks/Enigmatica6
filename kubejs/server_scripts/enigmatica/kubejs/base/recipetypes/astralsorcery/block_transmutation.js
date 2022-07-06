onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/astralsorcery/block_transmutation/';

    var data = {
        recipes: [
            { inputTag: '#forge:ores/diamond', output: 'emendatusenigmatica:emerald_ore', starlight: 1000 },
            {
                inputTag: 'resourcefulbees:starry_honeycomb_block',
                output: 'astralsorcery:rock_crystal_ore',
                starlight: 1000
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        Ingredient.of(recipe.inputTag).stacks.forEach((input) => {
            if (!input.id.includes('chunk')) {
                fallback_id(
                    event.custom({
                        type: 'astralsorcery:block_transmutation',
                        input: {
                            block: input.id
                        },
                        output: {
                            block: recipe.output
                        },
                        starlight: recipe.starlight
                    }),
                    id_prefix
                );
            }
        });
    });
});
