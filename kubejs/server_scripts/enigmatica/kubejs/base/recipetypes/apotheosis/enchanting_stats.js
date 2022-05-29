onEvent('server.datapack.high_priority', (event) => {
    /*          
                Negative values permitted
                maxEterna: max 50,
                eterna: max 50,             // Enchanting Level
                quanta: max 100,            // Increases variability 
                arcana: max 100,            // Increases Rarity
                clues: max useful probably around 10,
                rectification: max 100      // Reduces variance from Quanta
    */
    let enchantingBlocks = [
        {
            block: 'botania:mana_pylon',
            stats: {
                maxEterna: 20,
                eterna: 10,
                arcana: 15,
                clues: 1
            },
            json: 'enchanting_stats/mana_pylon'
        },
        {
            block: 'botania:natura_pylon',
            stats: {
                maxEterna: 30,
                eterna: 15,
                arcana: 30,
                clues: 5
            },
            json: 'enchanting_stats/natura_pylon'
        },
        {
            block: 'botania:gaia_pylon',
            stats: {
                maxEterna: 40,
                eterna: 20,
                arcana: -30,
                quanta: 25,
                rectification: -15
            },
            json: 'enchanting_stats/gaia_pylon'
        },
        {
            block: 'mythicbotany:alfsteel_pylon',
            stats: {
                maxEterna: 50,
                eterna: 25,
                arcana: 50,
                quanta: 50,
                clues: -5,
                rectification: -25
            },
            json: 'enchanting_stats/alfsteel_pylon'
        }
    ];

    enchantingBlocks.forEach((enchantingBlock) => {
        event.addJson(`apotheosis:enchanting_stats/${enchantingBlock.json}.json`, enchantingBlock);
    });
});
