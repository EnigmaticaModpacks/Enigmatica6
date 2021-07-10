onEvent('recipes', (event) => {
    const recipes = [
        {
            inputs: [
                {
                    tag: 'minecraft:planks',
                    count: 1,
                    return_chance: 0
                }
            ],
            fluid: {
                fluid: 'immersiveengineering:creosote'
            },
            output: {
                entries: [
                    {
                        result: {
                            item: 'immersiveengineering:treated_wood_horizontal',
                            count: 1
                        },
                        weight: 1
                    }
                ],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 0.125
        },
        {
            inputs: [
                {
                    tag: 'forge:rods/wooden',
                    count: 1,
                    return_chance: 0
                }
            ],
            fluid: {
                fluid: 'immersiveengineering:creosote'
            },
            output: {
                entries: [
                    {
                        result: {
                            item: 'immersiveengineering:stick_treated',
                            count: 1
                        },
                        weight: 1
                    }
                ],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 0.005
        },
        {
            inputs: [
                {
                    tag: 'minecraft:logs_that_burn',
                    count: 16,
                    return_chance: 0
                }
            ],
            fluid: {
                fluid: 'minecraft:water'
            },
            output: {
                entries: [
                    {
                        result: {
                            item: 'upgrade_aquatic:driftwood_log',
                            count: 16
                        },
                        weight: 1
                    }
                ],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 0.005
        }
    ];

    const simpleTagRecipes = [
        {
            input: 'forge:ingots/iron',
            output: 'dustrial_decor:rusty_iron_ingot'
        },
        {
            input: 'forge:nuggets/iron',
            output: 'dustrial_decor:rusty_iron_nugget'
        },
        {
            input: 'forge:storage_blocks/iron',
            output: 'dustrial_decor:rusty_iron_block'
        }
    ];

    const simpleItemRecipes = [
        {
            output: 'dustrial_decor:rusty_iron_door',
            input: 'minecraft:iron_door'
        },
        {
            output: 'dustrial_decor:rusty_iron_trapdoor',
            input: 'minecraft:iron_trapdoor'
        },
        {
            output: 'minecraft:soul_sand',
            input: 'byg:nylium_soul_sand'
        },
        {
            output: 'minecraft:soul_soil',
            input: 'byg:nylium_soul_soil'
        }
    ];

    const rustyItems = [
        'quark:rusty_iron_plate_slab',
        'quark:rusty_iron_plate_stairs',
        'quark:rusty_iron_plate_vertical_slab',
        'dustrial_decor:rusty_sheet_metal',
        'dustrial_decor:rusty_sheet_metal_plating',
        'dustrial_decor:rusty_sheet_metal_plating_slab',
        'dustrial_decor:rusty_sheet_metal_plating_stairs',
        'dustrial_decor:rusty_sheet_metal_paneling',
        'dustrial_decor:rusty_sheet_metal_siding',
        'dustrial_decor:rusty_sheet_metal_walling',
        'dustrial_decor:rusty_sheet_metal_treading',
        'dustrial_decor:rusty_sheet_metal_treading_slab',
        'dustrial_decor:rusty_sheet_metal_treading_stairs',
        'dustrial_decor:rusty_sheet_metal_trapdoor',
        'dustrial_decor:rusty_sheet_metal_door'
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'interactio:item_fluid_transform',
            inputs: recipe.inputs,
            fluid: recipe.fluid,
            output: recipe.output,
            consume_fluid: recipe.consume_fluid
        });
    });

    simpleTagRecipes.forEach((recipe) => {
        event.custom({
            type: 'interactio:item_fluid_transform',
            inputs: [
                {
                    tag: recipe.input,
                    count: 1,
                    return_chance: 0
                }
            ],
            fluid: {
                fluid: 'minecraft:water'
            },
            output: {
                entries: [
                    {
                        result: {
                            item: recipe.output,
                            count: 1
                        },
                        weight: 1
                    }
                ],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 0.0
        });
    });

    simpleItemRecipes.forEach((recipe) => {
        event.custom({
            type: 'interactio:item_fluid_transform',
            inputs: [
                {
                    item: recipe.input,
                    count: 1,
                    return_chance: 0
                }
            ],
            fluid: {
                fluid: 'minecraft:water'
            },
            output: {
                entries: [
                    {
                        result: {
                            item: recipe.output,
                            count: 1
                        },
                        weight: 1
                    }
                ],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 0.0
        });
    });

    rustyItems.forEach((rustyItem) => {
        let unrustedItem = rustyItem.replace('rusty_', '');
        event.custom({
            type: 'interactio:item_fluid_transform',
            inputs: [
                {
                    item: unrustedItem,
                    count: 1,
                    return_chance: 0
                }
            ],
            fluid: {
                fluid: 'minecraft:water'
            },
            output: {
                entries: [
                    {
                        result: {
                            item: rustyItem,
                            count: 1
                        },
                        weight: 1
                    }
                ],
                empty_weight: 0,
                rolls: 1
            },
            consume_fluid: 0.0
        });
    });
});
