onEvent('block.loot_tables', (event) => {
    const loot_tables = [
        {
            target: ['pneumaticcraft:air_compressor', 'pneumaticcraft:advanced_air_compressor'],
            rolls: [4, 6],
            survivesExplosion: true,
            droppedItems: [{ id: 'pneumaticcraft:reinforced_bricks' }]
        }
    ];

    loot_tables.forEach((loot_table) => {
        event.addBlock(loot_table.target, (table) => {
            table.addPool((pool) => {
                if (loot_table.rolls) {
                    pool.rolls = loot_table.rolls;
                }

                if (loot_table.survivesExplosion) {
                    pool.survivesExplosion();
                }
                loot_table.droppedItems.forEach((item) => {
                    // count and weight default to 1 if omitted
                    if (!item.count) item.count = 1;
                    if (!item.weight) item.weight = 1;
                    pool.addItem(item.id, item.weight, item.count);
                });

                // json condition, see vanilla wiki
                if (loot_table.condition) {
                    pool.addCondition(loot_table.condition);
                }

                // json entry, see vanilla wiki for non-item
                if (loot_table.entry) {
                    pool.addEntry(loot_table.entry);
                }
            });
        });
    });
});
