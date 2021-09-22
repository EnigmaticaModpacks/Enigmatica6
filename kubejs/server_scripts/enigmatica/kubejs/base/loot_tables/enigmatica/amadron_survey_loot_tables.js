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
            name: 'amadron_mineral_survey_atum',
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
            name: 'amadron_mineral_survey_undergarden',
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
            name: 'amadron_botanical_survey_nether',
            rolls: [16, 32],
            entries: [
                { amount: [16, 24], weight: 100, item: 'byg:crimson_berries' },
                { amount: [16, 24], weight: 100, item: 'byg:death_cap' },
                { amount: [16, 24], weight: 100, item: 'byg:embur_roots' },
                { amount: [16, 24], weight: 100, item: 'byg:embur_sprouts' },
                { amount: [16, 24], weight: 100, item: 'byg:embur_wart' },
                { amount: [16, 24], weight: 100, item: 'byg:hanging_sythian_roots' },
                { amount: [16, 24], weight: 100, item: 'byg:lament_sapling' },
                { amount: [16, 24], weight: 100, item: 'byg:lament_sprouts' },
                { amount: [16, 24], weight: 100, item: 'byg:lament_vine' },
                { amount: [16, 24], weight: 100, item: 'byg:nether_bristle' },
                { amount: [16, 24], weight: 100, item: 'byg:scorched_bush' },
                { amount: [16, 24], weight: 100, item: 'byg:scorched_grass' },
                { amount: [16, 24], weight: 100, item: 'byg:soul_shroom' },
                { amount: [16, 24], weight: 100, item: 'byg:sythian_fungus' },
                { amount: [16, 24], weight: 100, item: 'byg:sythian_roots' },
                { amount: [16, 24], weight: 100, item: 'byg:sythian_sprout' },
                { amount: [16, 24], weight: 100, item: 'byg:sythian_stalk_block' },
                { amount: [16, 24], weight: 100, item: 'byg:tall_crimson_roots' },
                { amount: [16, 24], weight: 100, item: 'byg:tall_embur_roots' },
                { amount: [16, 24], weight: 100, item: 'byg:warped_bush' },
                { amount: [16, 24], weight: 100, item: 'byg:warped_cactus' },
                { amount: [16, 24], weight: 100, item: 'byg:warped_coral' },
                { amount: [16, 24], weight: 100, item: 'byg:warped_coral_block' },
                { amount: [16, 24], weight: 100, item: 'byg:warped_coral_fan' },
                { amount: [16, 24], weight: 100, item: 'byg:weeping_roots' },
                { amount: [16, 24], weight: 100, item: 'byg:whaling_grass' },
                { amount: [16, 24], weight: 100, item: 'byg:whaling_vine' },
                { amount: [16, 24], weight: 100, item: 'byg:withering_oak_sapling' },
                { amount: [16, 24], weight: 100, item: 'minecraft:crimson_fungus' },
                { amount: [16, 24], weight: 100, item: 'minecraft:crimson_roots' },
                { amount: [16, 24], weight: 100, item: 'minecraft:nether_sprouts' },
                { amount: [16, 24], weight: 100, item: 'minecraft:twisting_vines' },
                { amount: [16, 24], weight: 100, item: 'minecraft:warped_fungus' },
                { amount: [16, 24], weight: 100, item: 'minecraft:warped_roots' },
                { amount: [16, 24], weight: 100, item: 'minecraft:weeping_vines' },

                { amount: [16, 24], weight: 100, item: 'byg:budding_subzero_crystal' },
                { amount: [16, 24], weight: 100, item: 'byg:embur_nylium' },
                { amount: [16, 24], weight: 100, item: 'byg:mossy_netherrack' },
                { amount: [16, 24], weight: 100, item: 'byg:mycelium_netherrack' },
                { amount: [16, 24], weight: 100, item: 'byg:nylium_soul_sand' },
                { amount: [16, 24], weight: 100, item: 'byg:nylium_soul_soil' },
                { amount: [16, 24], weight: 100, item: 'byg:overgrown_crimson_blackstone' },
                { amount: [16, 24], weight: 100, item: 'byg:overgrown_netherrack' },
                { amount: [16, 24], weight: 100, item: 'byg:sythian_nylium' },
                { amount: [16, 24], weight: 100, item: 'byg:wailing_nylium' }
            ]
        },
        {
            name: 'amadron_botanical_survey_end',
            rolls: [16, 32],
            entries: [
                { amount: [16, 24], weight: 100, item: 'betterendforge:amber_moss' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:cave_moss' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:chorus_nylium' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:crystal_moss' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:end_moss' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:end_mycelium' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:jungle_moss' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:mossy_dragon_bone' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:mossy_obsidian' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:pink_moss' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:rutiscus' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:sangnum' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:shadow_grass' },
                { amount: [16, 24], weight: 100, item: 'byg:bulbis_phycelium' },
                { amount: [16, 24], weight: 100, item: 'byg:ether_phylium' },
                { amount: [16, 24], weight: 100, item: 'byg:imparius_phylium' },
                { amount: [16, 24], weight: 100, item: 'byg:ivis_phylium' },
                { amount: [16, 24], weight: 100, item: 'byg:nightshade_phylium' },
                { amount: [16, 24], weight: 100, item: 'byg:shulkren_phylium' },
                { amount: [16, 24], weight: 100, item: 'byg:vermilion_sculk' },

                { amount: [16, 24], weight: 100, item: 'betterendforge:aeridium' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:amber_grass' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:amber_root_seed' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:aurant_polypore' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:blooming_cooksonia' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:blossom_berry' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:blossom_berry_seed' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:blue_vine_seed' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:bolux_mushroom' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:bulb_moss' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:bulb_vine' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:bulb_vine_seed' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:bushy_grass' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:cave_grass' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:charnia_cyan' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:charnia_green' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:charnia_light_blue' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:charnia_orange' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:charnia_purple' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:charnia_red' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:chorus_grass' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:chorus_mushroom_seed' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:clawfern' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:creeping_moss' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:crystal_grass' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:cyan_moss' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:dense_vine' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:dragon_tree_sapling' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:end_lily_seed' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:end_lotus_seed' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:filalux' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:fracturn' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:globulagus' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:glowing_pillar_seed' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:helix_tree_sapling' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:hydralux_sapling' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:jungle_fern' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:jungle_grass' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:jungle_vine' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:lacugrove_sapling' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:lamellarium' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:lanceleaf_seed' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:lucernia_sapling' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:lumecorn_seed' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:lutebus' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:mossy_glowshroom_sapling' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:murkweed' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:needlegrass' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:neon_cactus' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:orango' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:pond_anemone' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:purple_polypore' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:pythadendron_sapling' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:rubinea' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:ruscus' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:salteago' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:shadow_berry' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:shadow_berry_raw' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:shadow_plant' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:small_amaranita_mushroom' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:small_jellyshroom' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:tail_moss' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:tenanea_sapling' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:twisted_moss' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:twisted_umbrella_moss' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:twisted_vine' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:umbrella_moss' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:umbrella_tree_sapling' },
                { amount: [16, 24], weight: 100, item: 'betterendforge:vaiolush_fern' },
                { amount: [16, 24], weight: 100, item: 'byg:bulbis_anomaly' },
                { amount: [16, 24], weight: 100, item: 'byg:bulbis_oddity' },
                { amount: [16, 24], weight: 100, item: 'byg:bulbis_sprouts' },
                { amount: [16, 24], weight: 100, item: 'byg:ender_lily' },
                { amount: [16, 24], weight: 100, item: 'byg:ether_bush' },
                { amount: [16, 24], weight: 100, item: 'byg:ether_foliage' },
                { amount: [16, 24], weight: 100, item: 'byg:ether_grass' },
                { amount: [16, 24], weight: 100, item: 'byg:imparius_bush' },
                { amount: [16, 24], weight: 100, item: 'byg:ivis_roots' },
                { amount: [16, 24], weight: 100, item: 'byg:ivis_sprout' },
                { amount: [16, 24], weight: 100, item: 'byg:nightshade_berries' },
                { amount: [16, 24], weight: 100, item: 'byg:nightshade_roots' },
                { amount: [16, 24], weight: 100, item: 'byg:nightshade_sapling' },
                { amount: [16, 24], weight: 100, item: 'byg:nightshade_sprouts' },
                { amount: [16, 24], weight: 100, item: 'byg:oddity_bush' },
                { amount: [16, 24], weight: 100, item: 'byg:oddity_cactus' },
                { amount: [16, 24], weight: 100, item: 'byg:purple_bulbis_anomaly' },
                { amount: [16, 24], weight: 100, item: 'byg:purple_bulbis_oddity' },
                { amount: [16, 24], weight: 100, item: 'byg:shulkren_fungus' },
                { amount: [16, 24], weight: 100, item: 'byg:shulkren_moss_blanket' },
                { amount: [16, 24], weight: 100, item: 'byg:shulkren_vine' },
                { amount: [16, 24], weight: 100, item: 'byg:thereal_bellflower' },
                { amount: [16, 24], weight: 100, item: 'byg:vermilion_sculk_growth' },
                { amount: [16, 24], weight: 100, item: 'minecraft:chorus_flower' },
                { amount: [16, 24], weight: 100, item: 'quark:chorus_twist' },
                { amount: [16, 24], weight: 100, item: 'quark:chorus_weeds' }
            ]
        },
        {
            name: 'amadron_mineral_survey_atum_combo',
            type: 'multi_pool',
            pools: [
                { table: 'amadron_survey_tool_return', weight: 1 },
                { table: 'amadron_survey_air_canister_return', weight: 1 },
                { table: 'amadron_mineral_survey_atum', weight: 1 }
            ]
        },
        {
            name: 'amadron_mineral_survey_undergarden_combo',
            type: 'multi_pool',
            pools: [
                { table: 'amadron_survey_tool_return', weight: 1 },
                { table: 'amadron_survey_air_canister_return', weight: 1 },
                { table: 'amadron_mineral_survey_undergarden', weight: 1 }
            ]
        },
        {
            name: 'amadron_botanical_survey_nether_combo',
            type: 'multi_pool',
            pools: [
                { table: 'amadron_survey_tool_return', weight: 1 },
                { table: 'amadron_survey_air_canister_return', weight: 1 },
                { table: 'amadron_botanical_survey_nether', weight: 1 }
            ]
        },
        {
            name: 'amadron_botanical_survey_end_combo',
            type: 'multi_pool',
            pools: [
                { table: 'amadron_survey_tool_return', weight: 1 },
                { table: 'amadron_survey_air_canister_return', weight: 1 },
                { table: 'amadron_botanical_survey_end', weight: 1 }
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
