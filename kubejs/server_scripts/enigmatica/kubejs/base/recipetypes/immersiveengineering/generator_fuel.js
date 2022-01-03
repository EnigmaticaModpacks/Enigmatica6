onEvent('recipes', (event) => {
    var data = {
        recipes: [
            { fluidTag: 'forge:biodiesel', burnTime: 555 },
            { fluidTag: 'forge:creosote', burnTime: 11 },
            { fluidTag: 'forge:kerosene', burnTime: 611 },
            { fluidTag: 'forge:gasoline', burnTime: 611 },
            { fluidTag: 'forge:lpg', burnTime: 1000 },
            { fluidTag: 'forge:ethene', burnTime: 1000 },
            { fluidTag: 'forge:ethanol', burnTime: 222 },
            { fluidTag: 'forge:bioethanol', burnTime: 222 },
            { fluidTag: 'forge:tree_oil', burnTime: 56 },
            { fluidTag: 'forge:rocket_fuel', burnTime: 833 }
        ]
    };
    data.recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:generator_fuel';
        event.custom(recipe);
    });
});
