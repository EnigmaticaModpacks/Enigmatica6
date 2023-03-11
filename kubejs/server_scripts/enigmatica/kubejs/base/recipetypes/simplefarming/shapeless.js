onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/simplefarming/shapeless/';
    const recipes = [
        {
            output: 'simplefarming:tomato_soup',
            inputs: ['#forge:bowls', '#forge:crops/tomato', '#forge:crops/tomato', '#forge:milk/milk_bottle'],
            id: 'simplefarming:tomato_soup'
        },
        {
            output: 'simplefarming:tomato_soup',
            inputs: ['farmersdelight:tomato_sauce', '#forge:milk/milk_bottle'],
            id: `${id_prefix}tomato_soup_from_sauce`
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
