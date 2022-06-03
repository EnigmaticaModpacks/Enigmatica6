onEvent('entity.loot_tables', (event) => {
    event.modifyEntity('minecraft:wolf', (table) => {
        table.addPool((pool) => {
            pool.addItem('atum:wolf_pelt').count([1, 3]).lootingEnchant(0, 1).killedByPlayer();
        });
    });
});
