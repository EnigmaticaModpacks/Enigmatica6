onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/mythicbotany/shaped/';
    const recipes = [
        ,
        {
            output: 'mythicbotany:yggdrasil_branch',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'botania:livingwood',
                B: 'kubejs:celestial_mycelium_filaments',
                C: '#botania:runes/midgard'
            },
            id: 'mythicbotany:yggdrasil_branch'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
