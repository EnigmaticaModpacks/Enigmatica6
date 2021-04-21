events.listen('recipes', (event) => {
    if (!expertMode) {
        return;
    }

    const recipes = [
        {
            filter: { id: 'create:crafting/kinetics/mechanical_piston' },
            toReplace: '#minecraft:planks',
            replaceWith: ['minecraft:piston', 'minecraft:sticky_piston']
        }
    ];

    recipes.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.toReplace, recipe.replaceWith);
    });
});
