onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/tconstruct/tools/severing/';
    const recipes = [
        {
            type: 'tconstruct:ageable_severing',
            entity: {
                types: ['minecraft:rabbit', 'atum:desert_rabbit']
            },
            adult_result: 'minecraft:rabbit_foot',
            id: 'tconstruct:tools/severing/rabbit_foot'
        }
    ];

    recipes.forEach((recipe) => {
        event.custom(recipe).id(recipe.id);
    });
});
