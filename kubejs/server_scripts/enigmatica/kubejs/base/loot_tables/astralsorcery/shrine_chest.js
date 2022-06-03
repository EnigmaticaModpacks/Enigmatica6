onEvent('generic.loot_tables', (event) => {
    const pools = [
        {
            // Animals
            rolls: { min: 0, max: 1 },
            entries: [
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"minecraft:cow"}'),
                    count: 2,
                    weight: 100
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"minecraft:sheep"}'),
                    count: 2,
                    weight: 100
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"minecraft:chicken"}'),
                    count: 2,
                    weight: 100
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"minecraft:pig"}'),
                    count: 2,
                    weight: 100
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"minecraft:llama"}'),
                    count: 2,
                    weight: 20
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"minecraft:polar_bear"}'),
                    count: 2,
                    weight: 20
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"minecraft:rabbit"}'),
                    count: 2,
                    weight: 100
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"minecraft:turtle"}'),
                    count: 2,
                    weight: 20
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"minecraft:wolf"}'),
                    count: 2,
                    weight: 20
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"minecraft:fox"}'),
                    count: 2,
                    weight: 20
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"minecraft:parrot"}'),
                    count: 2,
                    weight: 20
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"minecraft:panda"}'),
                    count: 2,
                    weight: 20
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"minecraft:ocelot"}'),
                    count: 2,
                    weight: 20
                },
                {
                    item: Item.of('shrink:mob_bottle', '{entity:"alexsmobs:moose"}'),
                    count: 2,
                    weight: 20
                }
            ]
        }
    ];

    event.modify('astralsorcery:shrine_chest', (table) => {
        pools.forEach((pool) => {
            table.addPool((newPool) => {
                newPool.setUniformRolls(pool.rolls.min, pool.rolls.max);
                pool.entries.forEach((entry) => {
                    let count = 1,
                        weight = 1;

                    if (entry.count) {
                        count = entry.count;
                    }

                    if (entry.weight) {
                        weight = entry.weight;
                    }

                    newPool.addItem(entry.item, weight, count);
                });
            });
        });
    });
});
