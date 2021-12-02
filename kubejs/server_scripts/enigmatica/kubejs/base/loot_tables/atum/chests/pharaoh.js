onEvent('chest.loot_tables', (event) => {
    const pools = [
        {
            rolls: { min: 1, max: 1 },
            entries: [
                {
                    item: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:dusty_mummbee_bee' }),
                    weight: 25,
                    count: 1
                }
            ]
        },
        {
            rolls: { min: 1, max: 3 },
            entries: [
                {
                    item: 'eidolon:fungus_sprouts',
                    weight: 100,
                    count: [1, 6]
                },
                {
                    item: 'eidolon:death_essence',
                    weight: 30,
                    count: [1, 6]
                },
                {
                    item: 'eidolon:lesser_soul_gem',
                    weight: 20,
                    count: 1
                },
                {
                    item: 'eidolon:shadow_gem',
                    weight: 10,
                    count: 1
                },
                {
                    item: 'eidolon:zombie_heart',
                    weight: 20,
                    count: 1
                }
            ]
        }
    ];

    event.modify('atum:pharaoh', (table) => {
        pools.forEach((pool) => {
            table.addPool((newPool) => {
                newPool.setUniformRolls(pool.rolls.min, pool.rolls.max);
                pool.entries.forEach((entry) => {
                    let count = entry.count ? entry.count : 1,
                        weight = entry.weight ? entry.weight : 1;

                    const re = newPool.addItem(entry.item, weight, count);
                    if (entry.enchantLevel) {
                        re.enchantWithLevels(entry.enchantLevel, false);
                    }
                });
            });
        });
    });
});
