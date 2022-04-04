onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/tconstruct/';
    const recipes = [
        {
            output: 'tconstruct:mighty_smelting',
            inputs: ['minecraft:book', 'tconstruct:seared_brick'],
            id: 'tconstruct:common/mighty_smelting'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
