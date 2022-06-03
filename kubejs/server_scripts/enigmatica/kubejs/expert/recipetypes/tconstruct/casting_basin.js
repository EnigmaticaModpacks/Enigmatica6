onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/tconstruct/casting_basin/';
    var data = {
        recipes: [
            {
                fluid: 'tconstruct:molten_hepatizon',
                fluid_amount: 576,
                casts: [{ item: 'botania:ender_eye_block' }],
                cast_consumed: true,
                output: 'betterendforge:infusion_pedestal',
                cooling_time: 233,
                id: 'betterendforge:infusion_pedestal'
            },
            {
                fluid: 'kubejs:molten_compressed_iron',
                fluid_amount: 18,
                casts: [{ item: 'minecraft:light_gray_concrete_powder' }],
                cast_consumed: true,
                output: 'pneumaticcraft:reinforced_stone',
                cooling_time: 10,
                id: `${id_prefix}reinforced_stone`
            }
        ]
    };

    data.recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'tconstruct:casting_basin',
            fluid: {
                name: recipe.fluid,
                amount: recipe.fluid_amount
            },
            result: recipe.output,
            cooling_time: recipe.cooling_time
        };

        if (recipe.casts) {
            constructed_recipe.cast = {
                type: 'mantle:intersection',
                ingredients: recipe.casts
            };
            constructed_recipe.cast_consumed = recipe.cast_consumed;
        }

        const re = event.custom(constructed_recipe);
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
