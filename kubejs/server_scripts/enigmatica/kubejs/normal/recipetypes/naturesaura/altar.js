onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:normal/naturesaura/altar/';

    var data = {
        recipes: [
            {
                input: Ingredient.of('#forge:ingots/enderium'),
                output: Item.of('compactmachines:wall', 32),
                aura_type: 'naturesaura:overworld',
                aura: 15000,
                time: 100,
                id: `${id_prefix}compactmachines_wall`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event
            .custom({
                type: 'naturesaura:altar',
                input: recipe.input,
                output: recipe.output,
                aura_type: recipe.aura_type,
                aura: recipe.aura,
                time: recipe.time
            })
            .id(recipe.id);
    });
});
