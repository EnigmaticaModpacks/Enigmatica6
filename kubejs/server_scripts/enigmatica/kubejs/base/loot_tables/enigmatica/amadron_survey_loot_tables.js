onEvent('server.datapack.low_priority', (event) => {
    let lootTables = [
        {
            name: 'amadron_survey_tool_return',
            rolls: [1, 1],
            entries: [{ item: 'mekanismtools:steel_paxel', weight: 1, chance: 0.15, damage: [0.01, 0.15] }]
        },
        {
            name: 'amadron_survey_air_canister_return',
            rolls: [1, 1],
            entries: [
                { item: 'pneumaticcraft:air_canister', weight: 1, amount: [4, 4], nbt: '{"pneumaticcraft:air":500}' }
            ]
        },
        {
            name: 'amadron_survey_minerals_atum',
            rolls: [16, 32],
            entries: [
                { amount: [16, 24], weight: 200, item: 'emendatusenigmatica:bitumen_chunk' },
                { amount: [16, 24], weight: 100, item: 'emendatusenigmatica:coal_chunk' },
                { amount: [16, 24], weight: 400, item: 'emendatusenigmatica:diamond_chunk' },
                { amount: [16, 24], weight: 600, item: 'emendatusenigmatica:emerald_chunk' },
                { amount: [16, 24], weight: 50, item: 'emendatusenigmatica:fluorite_chunk' },
                { amount: [16, 24], weight: 50, item: 'emendatusenigmatica:lapis_chunk' },
                { amount: [16, 24], weight: 50, item: 'emendatusenigmatica:potassium_nitrate_chunk' },
                { amount: [16, 24], weight: 50, item: 'emendatusenigmatica:redstone_chunk' },

                { amount: [16, 24], weight: 400, item: 'emendatusenigmatica:aluminum_chunk' },
                { amount: [16, 24], weight: 500, item: 'emendatusenigmatica:copper_chunk' },
                { amount: [16, 24], weight: 700, item: 'emendatusenigmatica:gold_chunk' },
                { amount: [16, 24], weight: 700, item: 'emendatusenigmatica:iron_chunk' },
                { amount: [16, 24], weight: 100, item: 'emendatusenigmatica:lead_chunk' },
                { amount: [16, 24], weight: 200, item: 'emendatusenigmatica:nickel_chunk' },
                { amount: [16, 24], weight: 50, item: 'emendatusenigmatica:osmium_chunk' },
                { amount: [16, 24], weight: 500, item: 'emendatusenigmatica:silver_chunk' },
                { amount: [16, 24], weight: 200, item: 'emendatusenigmatica:tin_chunk' },
                { amount: [16, 24], weight: 50, item: 'emendatusenigmatica:uranium_chunk' },
                { amount: [16, 24], weight: 100, item: 'emendatusenigmatica:zinc_chunk' },

                { amount: [16, 24], weight: 2000, item: 'atum:nebu_ore' },
                { amount: [16, 24], weight: 1500, item: 'atum:relic_ore' },
                { amount: [32, 64], weight: 1200, item: 'atum:sand' },
                { amount: [16, 24], weight: 300, item: 'atum:khnumite_raw' }
            ]
        },
        {
            name: 'amadron_survey_minerals_undergarden',
            rolls: [16, 32],
            entries: [
                { amount: [16, 24], weight: 200, item: 'emendatusenigmatica:bitumen_chunk' },
                { amount: [16, 24], weight: 100, item: 'emendatusenigmatica:coal_chunk' },
                { amount: [16, 24], weight: 400, item: 'emendatusenigmatica:diamond_chunk' },
                { amount: [16, 24], weight: 600, item: 'emendatusenigmatica:emerald_chunk' },
                { amount: [16, 24], weight: 50, item: 'emendatusenigmatica:fluorite_chunk' },
                { amount: [16, 24], weight: 50, item: 'emendatusenigmatica:lapis_chunk' },
                { amount: [16, 24], weight: 50, item: 'emendatusenigmatica:potassium_nitrate_chunk' },
                { amount: [16, 24], weight: 50, item: 'emendatusenigmatica:redstone_chunk' },

                { amount: [16, 24], weight: 400, item: 'emendatusenigmatica:aluminum_chunk' },
                { amount: [16, 24], weight: 500, item: 'emendatusenigmatica:copper_chunk' },
                { amount: [16, 24], weight: 700, item: 'emendatusenigmatica:gold_chunk' },
                { amount: [16, 24], weight: 700, item: 'emendatusenigmatica:iron_chunk' },
                { amount: [16, 24], weight: 100, item: 'emendatusenigmatica:lead_chunk' },
                { amount: [16, 24], weight: 200, item: 'emendatusenigmatica:nickel_chunk' },
                { amount: [16, 24], weight: 50, item: 'emendatusenigmatica:osmium_chunk' },
                { amount: [16, 24], weight: 500, item: 'emendatusenigmatica:silver_chunk' },
                { amount: [16, 24], weight: 200, item: 'emendatusenigmatica:tin_chunk' },
                { amount: [16, 24], weight: 50, item: 'emendatusenigmatica:uranium_chunk' },
                { amount: [16, 24], weight: 100, item: 'emendatusenigmatica:zinc_chunk' },

                { amount: [16, 24], weight: 1200, item: 'undergarden:regalium_ore' },
                { amount: [16, 24], weight: 1200, item: 'undergarden:utherium_ore' },
                { amount: [16, 24], weight: 1500, item: 'undergarden:froststeel_ore' },
                { amount: [16, 24], weight: 1100, item: 'undergarden:cloggrum_ore' }
            ]
        },
        {
            name: 'amadron_survey_minerals_atum_combo',
            type: 'multi_pool',
            pools: [
                { table: 'amadron_survey_tool_return', weight: 1 },
                { table: 'amadron_survey_air_canister_return', weight: 1 },
                { table: 'amadron_survey_minerals_atum', weight: 1 }
            ]
        },
        {
            name: 'amadron_survey_minerals_undergarden_combo',
            type: 'multi_pool',
            pools: [
                { table: 'amadron_survey_tool_return', weight: 1 },
                { table: 'amadron_survey_air_canister_return', weight: 1 },
                { table: 'amadron_survey_minerals_undergarden', weight: 1 }
            ]
        }
    ];

    lootTables.forEach((lootTable) => {
        if (lootTable.type == 'multi_pool') {
            let pools = [];
            lootTable.pools.forEach((pool) => {
                pools.push({
                    rolls: { min: 1, max: 1 },
                    entries: [
                        {
                            type: 'loot_table',
                            weight: pool.weight,
                            name: `enigmatica:chests/${pool.table}`
                        }
                    ]
                });
            });

            event.addJson(`enigmatica:loot_tables/chests/${lootTable.name}.json`, {
                pools: pools
            });
        } else {
            let entries = [];
            lootTable.entries.forEach((entry) => {
                let functions = [],
                    conditions = [];
                if (entry.amount) {
                    functions.push({
                        function: 'set_count',
                        count: { min: entry.amount[0], max: entry.amount[1] }
                    });
                }
                if (entry.enchantRange) {
                    functions.push({
                        function: 'enchant_with_levels',
                        levels: { min: entry.enchantRange[0], max: entry.enchantRange[1] },
                        treasure: true
                    });
                }
                if (entry.nbt) {
                    functions.push({ function: 'set_nbt', tag: entry.nbt });
                }
                if (entry.damage) {
                    functions.push({
                        function: 'set_damage',
                        damage: { min: entry.damage[0], max: entry.damage[1] }
                    });
                }
                if (entry.chance) {
                    conditions.push({
                        condition: 'random_chance',
                        chance: entry.chance
                    });
                }
                if (lootTable.type == 'combo_table') {
                    entries.push({
                        type: 'loot_table',
                        weight: entry.weight,
                        name: `enigmatica:chests/${entry.item}`
                    });
                } else {
                    entries.push({
                        type: 'item',
                        weight: entry.weight,
                        name: entry.item,
                        functions: functions,
                        conditions: conditions
                    });
                }
            });

            event.addJson(`enigmatica:loot_tables/chests/${lootTable.name}.json`, {
                pools: [{ rolls: { min: lootTable.rolls[0], max: lootTable.rolls[1] }, entries: entries }]
            });
        }
    });
});

/*
{ item: 'emendatusenigmatica:cobalt_chunk' },
{ item: 'emendatusenigmatica:dimensional_chunk' },
{ item: 'emendatusenigmatica:arcane_chunk' },
{ item: 'emendatusenigmatica:potassium_nitrate_chunk' },
{ item: 'emendatusenigmatica:sulfur_chunk' },
{ item: 'emendatusenigmatica:apatite_chunk' },
{ item: 'emendatusenigmatica:cinnabar_chunk' },
{ item: 'emendatusenigmatica:bitumen_chunk' },
{ item: 'emendatusenigmatica:fluorite_chunk' },
{ item: 'emendatusenigmatica:zinc_chunk' },
{ item: 'emendatusenigmatica:tin_chunk' },
{ item: 'emendatusenigmatica:osmium_chunk' },
{ item: 'emendatusenigmatica:uranium_chunk' },
{ item: 'emendatusenigmatica:nickel_chunk' },
{ item: 'emendatusenigmatica:lead_chunk' },
{ item: 'emendatusenigmatica:silver_chunk' },
{ item: 'emendatusenigmatica:aluminum_chunk' },
{ item: 'emendatusenigmatica:copper_chunk' },
{ item: 'emendatusenigmatica:quartz_chunk' },
{ item: 'emendatusenigmatica:redstone_chunk' },
{ item: 'emendatusenigmatica:lapis_chunk' },
{ item: 'emendatusenigmatica:emerald_chunk' },
{ item: 'emendatusenigmatica:diamond_chunk' },
{ item: 'emendatusenigmatica:gold_chunk' },
{ item: 'emendatusenigmatica:iron_chunk' },
{ item: 'emendatusenigmatica:coal_chunk' },
{ item: 'atum:nebu_ore' },
{ item: 'atum:relic_ore' },
{ item: 'astralsorcery:aquamarine_sand_ore' },
{ item: 'minecrafancient_debris' },
{ item: 'betterendforge:thallasium_ore' },
{ item: 'betterendforge:amber_ore' },
{ item: 'betterendforge:ender_ore' },
{ item: 'minecraft:glowstone' } 
*/
