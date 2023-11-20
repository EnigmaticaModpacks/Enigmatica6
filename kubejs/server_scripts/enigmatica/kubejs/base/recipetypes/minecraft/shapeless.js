onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/minecraft/shapeless/';
    const recipes = [
        {
            output: 'minecraft:trapped_chest',
            inputs: ['minecraft:chest', 'minecraft:tripwire_hook'],
            id: `${id_prefix}trapped_chest`
        },
        {
            output: Item.of('minecraft:vine', 2),
            inputs: ['valhelsia_structures:hanging_vines'],
            id: `${id_prefix}vines_from_hanging_vines`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
