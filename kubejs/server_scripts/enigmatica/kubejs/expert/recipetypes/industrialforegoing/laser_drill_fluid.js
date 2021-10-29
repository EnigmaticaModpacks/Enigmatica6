onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/industrialforegoing/laser_drill_fluids/';
    const recipes = [
        {
            output: '{FluidName:"industrialforegoing:meat",Amount:2500}',
            rarity: [
                {
                    whitelist: {},
                    blacklist: {},
                    depth_min: 0,
                    depth_max: 256,
                    weight: 1
                }
            ],
            pointer: 0,
            catalyst: { item: 'industrialforegoing:laser_lens12' },
            entity: 'minecraft:cow',
            type: 'industrialforegoing:laser_drill_fluid',
            id: `${id_prefix}liquid_meat`
        }
    ];
    recipes.forEach((recipe) => {
        recipe.type = 'industrialforegoing:laser_drill_fluid';
        event.custom(recipe).id(recipe.id);
    });
});
