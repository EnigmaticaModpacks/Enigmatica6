onEvent('recipes', (event) => {
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
                inputs: ['architects_palette:algal_lamp', '#forge:gems/aquamarine'],
                output: 'minecraft:heart_of_the_sea',
                texture: 'watersigil'
            },
            {
                inputs: ['architects_palette:moonstone', 'minecraft:lapis_lazuli'],
                output: 'bloodmagic:arcaneashes',
                texture: 'moonarray',
                id: 'bloodmagic:array/night'
            },
            {
                inputs: ['architects_palette:sunstone', 'minecraft:coal'],
                output: 'bloodmagic:arcaneashes',
                texture: 'sunarray',
                id: 'bloodmagic:array/day'
            },
            {
                inputs: ['ars_nouveau:ritual_scrying', 'bloodmagic:blankslate'],
                output: 'bloodmagic:divinationsigil',
                texture: 'divinationsigil',
                id: 'bloodmagic:array/divinationsigil'
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'bloodmagic:array',
            texture: `bloodmagic:textures/models/alchemyarrays/${recipe.texture}.png`,
            baseinput: Ingredient.of(recipe.inputs[0]).toJson(),
            addedinput: Ingredient.of(recipe.inputs[1]).toJson(),
            output: {
                item: recipe.output
            }
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
