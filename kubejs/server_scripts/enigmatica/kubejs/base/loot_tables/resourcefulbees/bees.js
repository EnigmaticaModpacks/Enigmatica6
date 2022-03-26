onEvent('server.datapack.high_priority', (event) => {
    bees.forEach((bee) => {
        event.addJson(`resourcefulbees:loot_tables/entities/${bee}_bee.json`, {
            type: 'minecraft:entity',
            pools: [
                {
                    rolls: 1,
                    entries: [
                        {
                            type: 'minecraft:item',
                            name: `kubejs:${bee}_larva`
                        }
                    ]
                }
            ]
        });
    });
});
