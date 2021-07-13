onEvent('recipes', (event) => {
    const recipes = [
        {
            recipe: {
                type: 'forge:conditional',
                recipes: [
                    {
                        conditions: [
                            {
                                values: [
                                    {
                                        item: 'industrialforegoing:machine_frame_pity',
                                        type: 'forge:item_exists'
                                    }
                                ],
                                type: 'forge:and'
                            }
                        ],
                        recipe: {
                            type: 'minecraft:crafting_shaped',
                            pattern: ['CCC', 'ABA', 'CCC'],
                            key: {
                                A: { item: 'immersiveengineering:concrete_leaded' },
                                B: { item: 'thermal:machine_frame' },
                                C: { item: 'create:andesite_casing' }
                            },
                            result: {
                                item: 'industrialforegoing:machine_frame_pity'
                            }
                        }
                    }
                ]
            },
            id: 'industrialforegoing:machine_frame_pity'
        }
    ];
    recipes.forEach((recipe) => {
        event.custom(recipe.recipe).id(recipe.id);
    });
});
