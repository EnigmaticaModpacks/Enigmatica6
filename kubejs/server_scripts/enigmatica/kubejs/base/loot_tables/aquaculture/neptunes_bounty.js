onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        pools: [
            {
                rolls: 1,
                entries: [
                    {
                        type: 'loot_table',
                        weight: 1,
                        name: 'aquaculture:box/neptunes_bounty_junk'
                    }
                ]
            },
            {
                rolls: { min: 1, max: 5 },
                bonus_rolls: { min: 0, max: 3 },
                entries: [
                    {
                        type: 'item',
                        weight: 1,
                        name: 'aquaculture:neptunium_nugget',
                        functions: [
                            {
                                function: 'set_count',
                                count: { min: 1, max: 4 }
                            }
                        ]
                    }
                ]
            },
            {
                rolls: 1,
                entries: [
                    {
                        type: 'loot_table',
                        weight: 1,
                        name: 'aquaculture:box/neptunes_bounty_junk'
                    }
                ]
            }
        ]
    };

    event.addJson(`aquaculture:loot_tables/box/neptunes_bounty.json`, loot_table);
});
