events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'minecraft:snow_block',
                output: 'betterendforge:dense_snow'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'botania:pure_daisy',
            input: {
                type: 'block',
                block: recipe.input
            },
            output: {
                name: recipe.output
            }
        });
    });
});
