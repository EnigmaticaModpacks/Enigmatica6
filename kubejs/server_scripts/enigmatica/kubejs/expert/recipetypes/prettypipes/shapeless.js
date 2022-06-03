onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            output: 'prettypipes:crafting_terminal',
            inputs: [
                'prettypipes:item_terminal',
                'prettypipes:low_crafting_module',
                'create:super_glue',
                'minecraft:string',
                'minecraft:string'
            ],
            id: 'prettypipes:crafting_terminal'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
