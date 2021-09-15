onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    const recipes = [
        {
            inputs: ['#forge:storage_blocks/coal'],
            output: Item.of('emendatusenigmatica:coke_gem', 9),
            heated: true
        },
        {
            inputs: ['#forge:clay', '#forge:gravel', '#forge:sand', '#forge:sand', Fluid.of('minecraft:water', 4000)],
            output: Fluid.of('immersiveengineering:concrete', 4000)
        },
        {
            inputs: ['#minecraft:coals', '#minecraft:coals', '#forge:clay', Fluid.of('minecraft:lava', 500)],
            output: Item.of('powah:dielectric_paste', 16)
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.heated) {
            event.recipes.create.mixing(recipe.output, recipe.inputs).heated();
        } else if (recipe.superheated) {
            event.recipes.create.mixing(recipe.output, recipe.inputs).superheated();
        } else {
            event.recipes.create.mixing(recipe.output, recipe.inputs);
        }
    });
});
