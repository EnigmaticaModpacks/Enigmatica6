onEvent('block.loot_tables', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const loot_tables = [
        {
            target: ['pneumaticcraft:air_compressor', 'pneumaticcraft:advanced_air_compressor'],
            block_pools: [
                {
                    rolls: [4, 6],
                    survivesExplosion: true,
                    droppedItems: [{ id: 'pneumaticcraft:reinforced_bricks' }]
                }
            ]
        },
        {
            target: ['eidolon:crucible'],
            block_pools: [
                {
                    rolls: [1, 2],
                    survivesExplosion: true,
                    droppedItems: [{ id: 'eidolon:pewter_ingot' }]
                }
            ]
        },
        {
            target: ['eidolon:worktable'],
            block_pools: [
                {
                    rolls: [1, 1],
                    survivesExplosion: true,
                    droppedItems: [{ id: 'minecraft:conduit' }]
                }
            ]
        }
    ];

    let illusory_blocks = [
        { real: 'botania:livingrock', fake: 'undergarden:shiverstone' },
        { real: 'botania:livingrock_wall', fake: 'undergarden:shiverstone' },
        { real: 'botania:livingrock_bricks', fake: 'undergarden:shiverstone' },
        { real: 'botania:apothecary_default', fake: 'mekanism:salt' },
        { real: 'botania:apothecary_forest', fake: 'mekanism:salt' },
        { real: 'botania:apothecary_plains', fake: 'mekanism:salt' },
        { real: 'botania:apothecary_mountain', fake: 'mekanism:salt' },
        { real: 'botania:apothecary_fungal', fake: 'mekanism:salt' },
        { real: 'botania:apothecary_swamp', fake: 'mekanism:salt' },
        { real: 'botania:apothecary_desert', fake: 'mekanism:salt' },
        { real: 'botania:apothecary_taiga', fake: 'mekanism:salt' },
        { real: 'botania:apothecary_mesa', fake: 'mekanism:salt' },
        { real: 'botania:bifrost_perm', fake: 'dustrial_decor:cardboard' },
        { real: 'botania:diluted_pool', fake: 'dustrial_decor:cardboard' }
    ];
    illusory_blocks.forEach((illusory_block) => {
        loot_tables.push({
            target: [illusory_block.real],
            block_pools: [
                {
                    rolls: 1,
                    survivesExplosion: true,
                    droppedItems: [{ id: illusory_block.real }],
                    conditions: [
                        {
                            condition: 'minecraft:inverted',
                            term: {
                                condition: 'minecraft:location_check',
                                predicate: { dimension: 'mythicbotany:alfheim' }
                            }
                        }
                    ]
                },
                {
                    rolls: 1,
                    survivesExplosion: true,
                    droppedItems: [{ id: illusory_block.fake }],
                    conditions: [
                        {
                            condition: 'minecraft:location_check',
                            predicate: { dimension: 'mythicbotany:alfheim' }
                        }
                    ]
                }
            ]
        });
    });

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
