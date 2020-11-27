events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                fluid: "industrialforegoing:essence"
            },
            {
                fluid: "pneumaticcraft:memory_essence"
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.thermal.bottler({
            ingredient: [
                {
                    item: "minecraft:glass_bottle"
                },
                {
                    fluid: recipe.fluid,
                    amount: 250
                }
            ],
            result: [
                {
                    item: "minecraft:experience_bottle"
                }
            ]
        });
    });
});
