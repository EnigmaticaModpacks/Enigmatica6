events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            inputs: [
                {
                    tag: 'forge:stones/andesite',
                    count: 1
                },
                {
                    tag: 'forge:ingots/iron',
                    count: 1
                }
            ],
            output: {
                entries: [
                    {
                        result: {
                            item: 'create:andesite_alloy',
                            count: 1
                        },
                        weight: 1
                    }
                ],
                empty_weight: 0,
                rolls: 1
            }
        },
        {
            inputs: [
                {
                    tag: 'forge:stones/andesite',
                    count: 2
                },
                {
                    tag: 'forge:ingots/zinc',
                    count: 1
                }
            ],
            output: {
                entries: [
                    {
                        result: {
                            item: 'create:andesite_alloy',
                            count: 2
                        },
                        weight: 1
                    }
                ],
                empty_weight: 0,
                rolls: 1
            }
        },
        {
            inputs: [
                {
                    tag: 'forge:gems/coal_coke',
                    count: 2
                },
                {
                    tag: 'forge:ingots/iron',
                    count: 4
                },
                {
                    tag: 'forge:obsidian',
                    count: 1
                }
            ],
            output: {
                entries: [
                    {
                        result: {
                            item: 'pneumaticcraft:ingot_iron_compressed',
                            count: 4
                        },
                        weight: 1
                    }
                ],
                empty_weight: 0,
                rolls: 1
            }
        },
        {
            inputs: [
                {
                    tag: 'forge:storage_blocks/coal_coke',
                    count: 2
                },
                {
                    tag: 'forge:storage_blocks/iron',
                    count: 4
                },
                {
                    tag: 'forge:obsidian',
                    count: 9
                }
            ],
            output: {
                entries: [
                    {
                        result: {
                            item: 'pneumaticcraft:compressed_iron_block',
                            count: 4
                        },
                        weight: 1
                    }
                ],
                empty_weight: 0,
                rolls: 1
            }
        }
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'interactio:item_explode',
            inputs: recipe.inputs,
            output: recipe.output
        });
    });
});
