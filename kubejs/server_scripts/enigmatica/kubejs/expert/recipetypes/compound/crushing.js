events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const recipes = [
        // {
        //     secondary_output: Item.of('minecraft:sugar').chance(0.5),
        //     output: Item.of('minecraft:diamond', 8),
        //     input: Item.of('minecraft:lead'),
        //     experience: 0.5,
        //     duration: 100
        // }
    ];

    recipes.forEach((recipe) => {
        recipetypes_crushing(event, recipe);
    });
});
