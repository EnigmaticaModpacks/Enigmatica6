onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/botania/pure_daisy/';

    var data = {
        recipes: [
            {
                input: 'minecraft:snow_block',
                output: 'betterendforge:dense_snow',
                id: `${id_prefix}dense_snow`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event
            .custom({
                type: 'botania:pure_daisy',
                input: {
                    type: 'block',
                    block: recipe.input
                },
                output: {
                    name: recipe.output
                }
            })
            .id(recipe.id);
    });
});
