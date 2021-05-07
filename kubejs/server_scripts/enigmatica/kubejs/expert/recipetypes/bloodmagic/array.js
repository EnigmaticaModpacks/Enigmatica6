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
        let primaryinput =
            recipe.inputs[0].charAt(0) == '#' ? { tag: recipe.inputs[0].slice(1) } : { item: recipe.inputs[0] };
        let secondaryinput =
            recipe.inputs[1].charAt(0) == '#' ? { tag: recipe.inputs[1].slice(1) } : { item: recipe.inputs[1] };

        event.custom({
            type: 'bloodmagic:array',
            texture: `bloodmagic:textures/models/alchemyarrays/${recipe.texture}.png`,
            baseinput: primaryinput,
            addedinput: secondaryinput,
            output: {
                item: recipe.output
            }
        });
    });
});
