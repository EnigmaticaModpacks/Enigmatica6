onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/interactio/item_anvil_smashing/';
    const recipes = [
        {
            inputs: [
                {
                    type: 'forge:nbt',
                    item: 'minecraft:potion',
                    count: 1,
                    nbt: { Potion: 'minecraft:long_swiftness' }
                },
                [Item.of('eidolon:soul_shard'), Item.of('create:cuckoo_clock')]
            ],
            output: {
                entries: [{ result: { item: 'tiab:timeinabottle' }, weight: 1 }],
                rolls: 1
            },
            damage: 2,
            id: `${id_prefix}timeinabottle`
        },
        {
            inputs: [
                Item.of('naturesaura:hopper_upgrade'),
                Item.of('botania:ender_eye_block'),
                Item.of('naturesaura:grated_chute'),
                Item.of('botania:red_string')
            ],
            output: {
                entries: [{ result: { item: 'darkutils:ender_hopper' }, weight: 1 }],
                rolls: 1
            },
            damage: 2,
            id: 'darkutils:crafting/ender_hopper'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'interactio:item_anvil_smashing';
        event.custom(recipe).id(recipe.id);
    });
});
