onEvent('item.tooltip', (event) => {
    const recipes = [
        {
            items: ['bountifulbaubles:potion_wormhole', 'bountifulbaubles:wormhole_mirror'],
            text: [
                Text.of(
                    'Do not use, you will crash immediately if in multiplayer. We have notified the mod author about the issue.'
                ).red()
            ]
        }
    ];

    refinedStorageItems.forEach((item) => {
        recipes.push({
            items: ['refinedstorage:' + item],
            text: ['Can be dyed through crafting or by right clicking it with dye in-world.']
        });
    });

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });
});
