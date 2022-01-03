onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/immersiveengineering/generator_fuel/';
    const recipes = [
        {
            fluidTag: 'forge:biodiesel',
            burnTime: 555,
            id: `${id_prefix}biodiesel`
        },
        {
            fluidTag: 'forge:creosote',
            burnTime: 11,
            id: `${id_prefix}creosote`
        },
        {
            fluidTag: 'forge:kerosene',
            burnTime: 611,
            id: `${id_prefix}kerosene`
        },
        {
            fluidTag: 'forge:gasoline',
            burnTime: 611,
            id: `${id_prefix}gasoline`
        },
        {
            fluidTag: 'forge:lpg',
            burnTime: 1000,
            id: `${id_prefix}lpg`
        },
        {
            fluidTag: 'forge:ethene',
            burnTime: 1000,
            id: `${id_prefix}ethene`
        },
        {
            fluidTag: 'forge:ethanol',
            burnTime: 222,
            id: `${id_prefix}ethanol`
        },
        {
            fluidTag: 'forge:bioethanol',
            burnTime: 222,
            id: `${id_prefix}bioethanol`
        },
        {
            fluidTag: 'forge:tree_oil',
            burnTime: 56,
            id: `${id_prefix}tree_oil`
        },
        {
            fluidTag: 'forge:rocket_fuel',
            burnTime: 833,
            id: `${id_prefix}rocket_fuel`
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'immersiveengineering:generator_fuel';
        event.custom(recipe).id(recipe.id);
    });
});
