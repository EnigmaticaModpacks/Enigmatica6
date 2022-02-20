onEvent('block.loot_tables', (event) => {
    const loot_tables = [
        {
            target: ['projectvibrantjourneys:seashells'],
            block_pools: [
                {
                    rolls: [1, 1],
                    survivesExplosion: false,
                    droppedItems: [
                        { weight: 10, id: 'minecraft:nautilus_shell' },
                        { weight: 60, id: 'minecraft:prismarine_shard' },
                        { weight: 10, id: 'minecraft:prismarine_crystals' }
                    ]
                }
            ]
        }
    ];

    loot_tables.forEach((loot_table) => {
        event.addBlock(loot_table.target, (table) => {
            loot_table.block_pools.forEach((block_pool) => {
                table.addPool((pool) => {
                    if (block_pool.rolls) {
                        pool.rolls = block_pool.rolls;
                    }

                    if (block_pool.survivesExplosion) {
                        pool.survivesExplosion();
                    }
                    block_pool.droppedItems.forEach((item) => {
                        // count and weight default to 1 if omitted
                        if (!item.count) item.count = 1;
                        if (!item.weight) item.weight = 1;
                        pool.addItem(item.id, item.weight, item.count);
                    });

                    // json condition, see vanilla wiki
                    if (block_pool.conditions) {
                        block_pool.conditions.forEach((condition) => {
                            pool.addCondition(condition);
                        });
                    }

                    // json entry, see vanilla wiki for non-item
                    if (block_pool.entry) {
                        pool.addEntry(block_pool.entry);
                    }
                });
            });
        });
    });
});
