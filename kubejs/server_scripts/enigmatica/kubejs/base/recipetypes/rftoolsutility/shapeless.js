onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/rftoolsutility/';
    const recipes = [
        {
            output: 'rftoolsutility:redstone_transmitter',
            inputs: ['rftoolsutility:redstone_transmitter'],
            id: `${id_prefix}redstone_transmitter`
        },
        {
            output: 'rftoolsutility:redstone_receiver',
            inputs: ['rftoolsutility:redstone_receiver'],
            id: `${id_prefix}redstone_receiver`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
