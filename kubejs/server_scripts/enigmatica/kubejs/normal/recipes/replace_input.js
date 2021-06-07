onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    const recipes = [
        {
            replaceTarget: { id: 'compactmachines:personal_shrinking_device' },
            toReplace: 'minecraft:book',
            replaceWith: 'shrink:shrinking_device'
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.replaceTarget, recipe.toReplace, recipe.replaceWith);
    });

    const alt_material_tag_replacements = [
        {
            type: 'nuggets',
            replace: 'gold',
            replaceWith: 'silver',
            items: ['botania:spark']
        }
    ];

    alt_material_tag_replacements.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.replaceInput(
                { output: item },
                '#forge:' + recipe.type + '/' + recipe.replace,
                '#forge:' + recipe.type + '/' + recipe.replace + '_' + recipe.replaceWith
            );
        });
    });
});
