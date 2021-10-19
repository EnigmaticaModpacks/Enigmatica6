onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/tconstruct/entity_melting/';
    const recipes = [
        {
            entity: { type: 'minecraft:cow' },
            result: { fluid: 'industrialforegoing:meat', amount: 100 },
            damage: 2,
            id: `${id_prefix}liquid_meat`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:entity_melting';
        event.custom(recipe).id(recipe.id);
    });
});
