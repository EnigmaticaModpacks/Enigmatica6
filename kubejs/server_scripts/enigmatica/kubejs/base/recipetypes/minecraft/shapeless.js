onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/minecraft/shapeless/';
    const recipes = [
        {
            output: 'minecraft:trapped_chest',
            inputs: ['minecraft:chest', 'minecraft:tripwire_hook'],
            id: `${id_prefix}trapped_chest`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
