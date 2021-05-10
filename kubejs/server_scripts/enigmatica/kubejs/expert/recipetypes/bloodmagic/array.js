events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    data = {
        recipes: [
            {
                inputs: ['#forge:rods/copper', '#forge:dusts/fluorite'],
                output: 'powah:charged_snowball',
                texture: 'bindinglightningarray'
            },
            {
                inputs: ['architects_palette:algal_lamp', '#forge:dusts/lapis'],
                output: 'minecraft:heart_of_the_sea',
                texture: 'watersigil'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        event.custom({
            type: 'bloodmagic:array',
            texture: `bloodmagic:textures/models/alchemyarrays/${recipe.texture}.png`,
            baseinput: Ingredient.of(recipe.inputs[0]).toJson(),
            addedinput: Ingredient.of(recipe.inputs[1]).toJson(),
            output: {
                item: recipe.output
            }
        });
    });
});
