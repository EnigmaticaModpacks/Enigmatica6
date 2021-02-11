events.listen('recipes', (event) => {
    event.custom({
        type: 'interactio:item_fluid_transform',
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
    });
});
