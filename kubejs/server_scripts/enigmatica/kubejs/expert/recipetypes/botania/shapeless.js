onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'botania:auto_crafting_halo',
            inputs: ['botania:crafting_halo', 'eidolon:lesser_soul_gem'],
            id: 'botania:auto_crafting_halo'
        },
        {
            output: 'botania:lens_magnet',
            inputs: [
                'botania:lens_normal',
                'immersiveengineering:wirecoil_copper',
                'immersiveengineering:wirecoil_copper'
            ],
            id: 'botania:lens_magnet'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
