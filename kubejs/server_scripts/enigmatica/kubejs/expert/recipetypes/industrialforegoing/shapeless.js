onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/industrialforegoing/shapeless/';
    const recipes = [
        {
            output: 'industrialforegoing:fluid_collector',
            inputs: ['industrialforegoing:fluid_placer'],
            id: `${id_prefix}fluid_collector`
        },
        {
            output: 'industrialforegoing:fluid_placer',
            inputs: ['industrialforegoing:fluid_collector'],
            id: `${id_prefix}fluid_placer`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
