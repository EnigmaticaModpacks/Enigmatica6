onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/astralsorcery/shapeless/';
    const recipes = [
        {
            output: '4x astralsorcery:infused_wood_planks',
            inputs: ['astralsorcery:infused_wood'],
            id: `${id_prefix}infused_wood_planks`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
