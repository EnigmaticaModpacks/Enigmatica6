onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:normal/bloodmagic/shaped/';

    const recipes = [
        {
            output: Item.of('bloodmagic:dungeon_stone', 8),
            pattern: ['AAA', 'ABA', 'AAA'],
            key: {
                A: '#forge:stone',
                B: '#bloodmagic:crystals/demon'
            },
            id: `${id_prefix}dungeon_stone`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
