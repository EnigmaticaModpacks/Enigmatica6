onEvent('item.tooltip', (event) => {
    const recipes = [
        {
            item: 'bountifulbaubles:potion_wormhole',
            text: [
                Text.of(
                    'Do not use, you will crash immediately if in multiplayer. We have notified the mod author about the issue.'
                ).red()
            ]
        }
    ];

    refinedStorageItems.forEach((item) => {
        recipes.push('refinedstorage:' + item, [
            'Can be dyed through crafting or by right clicking it with dye in-world.'
        ]);
    });

    recipes.forEach((recipe) => {
        event.add(recipe.item, recipe.text);
    });
});
