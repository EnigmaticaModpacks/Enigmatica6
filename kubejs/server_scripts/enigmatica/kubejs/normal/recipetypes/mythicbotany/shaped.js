onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'mythicbotany:alfsteel_pylon',
            pattern: [' n ', 'npn', ' g '],
            key: {
                n: 'mythicbotany:alfsteel_nugget',
                g: 'minecraft:ghast_tear',
                p: 'botania:gaia_pylon'
            },
            id: 'mythicbotany:alfsteel_pylon'
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
