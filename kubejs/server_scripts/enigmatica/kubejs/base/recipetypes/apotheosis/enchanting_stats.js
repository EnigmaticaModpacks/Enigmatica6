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
            }
        },
        {
            block: 'botania:natura_pylon',
            stats: {
                maxEterna: 30,
                eterna: 15,
                arcana: 30,
                clues: 5
            }
        },
        {
            block: 'botania:gaia_pylon',
            stats: {
                maxEterna: 40,
                eterna: 20,
                arcana: -30,
                quanta: 25,
                rectification: -15
            }
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
            }
        },
        {
            block: 'astralsorcery:prism',
            stats: {
                arcana: 10,
                clues: 2,
                rectification: 15
            }
        },
        {
            block: 'occultism:spirit_attuned_crystal',
            stats: {
                arcana: 15,
                clues: 1,
                quanta: -15
            }
        },
        {
            block: 'botania:floating_rosa_arcana',
            stats: {
                maxEterna: 30,
                eterna: 15,
                arcana: 15
            }
        },
        {
            block: 'eidolon:candle',
            stats: {
                maxEterna: 15,
                eterna: 0.5,
                arcana: 5
            }
        },
        {
            block: 'eidolon:candlestick',
            stats: {
                maxEterna: 15,
                eterna: 0.5,
                arcana: 5
            }
        },
        {
            block: 'eidolon:stone_hand',
            stats: {
                maxEterna: 7.5,
                eterna: 0.5
            }
        },
        {
            block: 'eidolon:plinth',
            stats: {
                maxEterna: 7.5,
                eterna: 0.5
            }
        },
        {
            block: 'eidolon:straw_effigy',
            stats: {
                maxEterna: 7.5,
                eterna: 5,
                quanta: 5,
                rectification: -5
            }
        },
        {
            block: 'eidolon:unholy_effigy',
            stats: {
                maxEterna: 10,
                eterna: 5,
                arcana: 15,
                quanta: 15,
                rectification: -15
            }
        },
        {
            block: 'ars_nouveau:bookwyrm_lectern',
            stats: {
                arcana: 30,
                quanta: -30,
                rectification: 30,
                clues: 3
            }
        },
        {
            block: 'ars_nouveau:arcane_pedestal',
            stats: {
                maxEterna: 15,
                eterna: 1,
                arcana: 2,
                quanta: -2
            }
        },
        {
            block: 'ars_nouveau:arcane_core',
            stats: {
                maxEterna: 15,
                eterna: 3.5,
                quanta: 8
            }
        },
        {
            block: 'ars_nouveau:enchanting_apparatus',
            stats: {
                maxEterna: 15,
                eterna: 3.5,
                quanta: 8
            }
        },
        {
            block: 'mekanism:block_refined_glowstone',
            stats: {
                rectification: 15
            }
        },
        {
            block: 'supplementaries:book_pile',
            stats: {
                maxEterna: 7.5,
                eterna: 1
            }
        },
        {
            block: 'eidolon:necrotic_focus',
            stats: {
                arcana: 2.5
            }
        }
    ];

    colors.forEach((color) => {
        enchantingBlocks.push({
            block: `botania:${color}_floating_flower`,
            stats: {
                maxEterna: 10,
                eterna: 1,
                arcana: 1.5
            }
        });
    });

    atum_aspects.forEach((atum_aspect) => {
        enchantingBlocks.push(
            {
                block: `atum:torch_of_${atum_aspect}`,
                stats: {
                    maxEterna: 10,
                    eterna: 0.5
                }
            },
            {
                block: `atum:lantern_of_${atum_aspect}`,
                stats: {
                    maxEterna: 10,
                    eterna: 1,
                    arcana: 1.5
                }
            }
        );
    });

    enchantingBlocks.forEach((enchantingBlock) => {
        event.addJson(`apotheosis:enchanting_stats/${enchantingBlock.block.replace(':', '_')}.json`, enchantingBlock);
    });
});
