onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/betterend/alloying/';

    var data = {
        recipes: [
            {
                inputs: ['#forge:ingots/cobalt', 'thermal:blizz_powder'],
                output: Item.of('undergarden:froststeel_ingot', 1),
                experience: 2,
                smelttime: 300,
                id: `${id_prefix}froststeel_ingot`
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event
            .custom({
                type: 'betterendforge:alloying',
                ingredients: [Ingredient.of(recipe.inputs[0]).toJson(), Ingredient.of(recipe.inputs[1]).toJson()],
                result: recipe.output,
                experience: recipe.experience,
                smelttime: recipe.smelttime
            })
            .id(recipe.id);
    });
});
