onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:normal/astralsorcery/block_transmutation/';

    var data = {
        recipes: [
            {
                inputTag: '#forge:ores/iron',
                output: 'astralsorcery:starmetal_ore',
                starlight: 100,
                id: `${id_prefix}starmetal_ore_from_`
            },
            {
                inputTag: '#forge:workbenches',
                output: 'astralsorcery:altar_discovery',
                starlight: 60,
                id: `${id_prefix}luminous_crafting_table_from_`
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
                    recipe.id
                );
            }
        });
    });
});
