events.listen('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const recipes = [
        {
            inputs: [
                {
                    type: 'forge:nbt',
                    item: 'minecraft:potion',
                    count: 1,
                    nbt: {
                        Potion: 'minecraft:long_swiftness'
                    }
                },
                [Item.of('eidolon:soul_shard'), Item.of('create:cuckoo_clock')]
            ],
            output: {
                entries: [
                    {
                        result: {
                            item: 'tiab:timeinabottle'
                        },
                        weight: 1
                    }
                ],
                rolls: 1
            },
            damage: 2
        }
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'interactio:item_anvil_smashing',
            inputs: recipe.inputs,
            output: recipe.output,
            damage: recipe.damage
        });
    });
});
