onEvent('server.datapack.high_priority', (event) => {
    let loot_table = {
        pools: [
            {
                name: 'placebo_code_pool_15',
                rolls: {
                    min: 6.0,
                    max: 9.0,
                    type: 'minecraft:uniform'
                },
                entries: [
                    {
                        type: 'placebo:stack_entry',
                        weight: 5,
                        quality: 5,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:null_book', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 5,
                        quality: 5,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:armor_head_book', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 5,
                        quality: 5,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:armor_chest_book', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 5,
                        quality: 5,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:armor_legs_book', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 5,
                        quality: 5,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:armor_feet_book', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 5,
                        quality: 5,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:weapon_book', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 5,
                        quality: 5,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:digger_book', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 5,
                        quality: 5,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:fishing_rod_book', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 5,
                        quality: 5,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:bow_book', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 5,
                        quality: 5,
                        min: 1,
                        max: 1,
                        stack: { item: 'minecraft:book', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 16,
                        quality: 10,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:common_tome', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 13,
                        quality: 10,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:uncommon_tome', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 10,
                        quality: 10,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:rare_tome', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 7,
                        quality: 10,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:epic_tome', count: 1 }
                    },
                    {
                        type: 'placebo:stack_entry',
                        weight: 4,
                        quality: 10,
                        min: 1,
                        max: 1,
                        stack: { item: 'apotheosis:mythic_tome', count: 1 }
                    },
                    {
                        type: 'apotheosis:affix_entry',
                        weight: 20,
                        quality: 35
                    }
                ]
            },
            {
                rolls: {
                    min: 6.0,
                    max: 9.0
                },
                entries: [
                    {
                        type: 'item',
                        weight: 1,
                        name: 'thermal:lightning_charge',
                        functions: [{ function: 'set_count', count: { min: 5, max: 15 } }]
                    }
                ]
            }
        ]
    };

    event.addJson(`apotheosis:loot_tables/tome_tower.json`, loot_table);
});
