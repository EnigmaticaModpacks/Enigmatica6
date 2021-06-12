onEvent('jei.information', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const recipes = [
        {
            items: ['resourcefulbees:t2_apiary', 'resourcefulbees:t3_apiary', 'resourcefulbees:t4_apiary'],
            description: [
                'Crafting this will return any bees in the hives/apiaries used ONLY if all hives/apiaries have been previously placed in-world and recieved NBT.'
            ]
        }
    ];

    recipes.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.add(item, recipe.description);
        });
    });
});
