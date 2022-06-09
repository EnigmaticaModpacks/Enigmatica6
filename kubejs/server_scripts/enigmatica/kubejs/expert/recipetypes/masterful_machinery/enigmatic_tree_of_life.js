onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/';
    const recipes = [
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:botanical_mastery_shard', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'mythicbotany:mana_collector', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:spark', count: 12 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:mana_ring_greater', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:fabulous_pool', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:kekimurus', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:shulk_me_not', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:rosa_arcana', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:dandelifeon', count: 4 } },
                { type: 'masterfulmachinery:botania_mana', perTick: true, data: { amount: 500 } }
            ],
            ticks: 60,
            id: `${id_prefix}botanical_mastery_shard`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:astronomy_mastery_shard', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:observatory', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:altar_radiance', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:marble_chiseled', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:marble_raw', count: 12 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:marble_pillar', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:marble_bricks', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:marble_runed', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:black_marble_arch', count: 49 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:marble_bricks', count: 4 } },
                { type: 'masterfulmachinery:items', data: { tag: 'astralsorcery:crystals/attuned', count: 10 } },
                { type: 'masterfulmachinery:fluids', data: { fluid: 'astralsorcery:liquid_starlight', amount: 64000 } },
                { type: 'masterfulmachinery:botania_mana', perTick: true, data: { amount: 500 } }
            ],
            ticks: 60,
            id: `${id_prefix}astronomy_mastery_shard`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:alchemy_mastery_shard', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:death_ring', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'occultism:soul_gem', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:looting_anointment_l', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'ars_nouveau:wixie_charm', count: 3 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:pet_reviver', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'astralsorcery:nocturnal_powder', count: 16 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:enchanted_golden_apple', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'atum:linen_bandage', count: 33 } },
                { type: 'masterfulmachinery:items', data: { item: 'darkutils:rune_weakness', count: 9 } },
                { type: 'masterfulmachinery:items', data: { item: 'darkutils:anchor_plate', count: 9 } },
                { type: 'masterfulmachinery:botania_mana', perTick: true, data: { amount: 500 } }
            ],
            ticks: 60,
            id: `${id_prefix}alchemy_mastery_shard`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:ritual_mastery_shard', count: 5 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:altar', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:largebloodstonebrick', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:sea_lantern', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:beacon', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:chargingrune', count: 48 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:accelerationrune', count: 20 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:dislocationrune', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:altarcapacityrune', count: 16 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:bettercapacityrune', count: 16 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:masterritualstone', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:ritualstone', count: 36 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:ritualdivinerdusk', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'bloodmagic:ritualtinkerer', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:artisinal_ritual_kit', count: 10 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:artisinal_chalk_set', count: 10 } },
                { type: 'masterfulmachinery:fluids', data: { fluid: 'bloodmagic:life_essence_fluid', amount: 64000 } },
                { type: 'masterfulmachinery:botania_mana', perTick: true, data: { amount: 500 } }
            ],
            ticks: 60,
            id: `${id_prefix}ritual_mastery_shard`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:aura_mastery_shard', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:aura_trove', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:generator_limit_remover', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:firework_generator', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:firework_rocket', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:ancient_sapling', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:mover_cart', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:powered_rail', count: 32 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:rail', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:activator_rail', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:aura_detector', count: 8 } },
                { type: 'masterfulmachinery:botania_mana', perTick: true, data: { amount: 500 } }
            ],
            ticks: 60,
            id: `${id_prefix}aura_mastery_shard`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:engineering_mastery_shard', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'create:flywheel', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:furnace_engine', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:blast_furnace', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:heat_pipe', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:vortex_tube', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:heat_sink', count: 1 } },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'pneumaticcraft:advanced_pressure_tube', count: 64 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'pneumaticcraft:advanced_liquid_compressor', count: 1 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'create:rotation_speed_controller', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:large_cogwheel', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:shaft', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:encased_chain_drive', count: 32 } },

                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_arc_furnace', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_pumpjack', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_distillation_tower', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_pressure_chamber', count: 1 } },

                { type: 'masterfulmachinery:fluids', data: { fluid: 'pneumaticcraft:lubricant', amount: 64000 } },
                { type: 'masterfulmachinery:botania_mana', perTick: true, data: { amount: 500 } }
            ],
            ticks: 60,
            id: `${id_prefix}engineering_mastery_shard`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:energistics_mastery_shard', count: 50 } }
            ],
            inputs: [
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanismgenerators:fusion_reactor_controller', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanismgenerators:fusion_reactor_frame', count: 36 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanismgenerators:fusion_reactor_port', count: 5 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'mekanismgenerators:reactor_glass', count: 24 } },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanismgenerators:electromagnetic_coil', count: 5 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:pressure_disperser', count: 224 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanismgenerators:rotational_complex', count: 1 } },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanismgenerators:saturating_condenser', count: 293 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:structural_glass', count: 598 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanismgenerators:turbine_casing', count: 417 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanismgenerators:turbine_rotor', count: 10 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanismgenerators:turbine_blade', count: 20 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanismgenerators:turbine_valve', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanismgenerators:turbine_vent', count: 585 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:induction_casing', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:induction_port', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:ultimate_induction_provider', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:ultimate_induction_cell', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'fluxnetworks:flux_controller', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'fluxnetworks:flux_point', count: 50 } },
                { type: 'masterfulmachinery:items', data: { item: 'fluxnetworks:flux_plug', count: 2 } },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'mekanismgenerators:tritium', amount: 12800 }
                },
                {
                    type: 'masterfulmachinery:fluids',
                    perTick: true,
                    data: { fluid: 'mekanismgenerators:deuterium', amount: 12800 }
                },
                { type: 'masterfulmachinery:botania_mana', perTick: true, data: { amount: 500 } }
            ],
            ticks: 3000,
            id: `${id_prefix}energistics_mastery_shard`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:dimensional_mastery_shard', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'extrastorage:disk_4096k', count: 8 } },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'extrastorage:disk_262144k_fluid', count: 8 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'refinedstorage:disk_drive', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:quantum_entangloporter', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'rsinfinitybooster:dimension_card', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'refinedstorage:network_receiver', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'refinedstorage:network_transmitter', count: 8 } },
                { type: 'masterfulmachinery:botania_mana', perTick: true, data: { amount: 500 } }
            ],
            ticks: 60,
            id: `${id_prefix}dimensional_mastery_shard`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:battle_mastery_shard', count: 5 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_mekasuit_helmet', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_mekasuit_bodyarmor', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_mekasuit_pants', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_mekasuit_boots', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_meka_tool', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:teleporter', count: 5 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:portable_teleporter', count: 1 } },
                { type: 'masterfulmachinery:botania_mana', perTick: true, data: { amount: 500 } }
            ],
            ticks: 60,
            id: `${id_prefix}battle_mastery_shard`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:excavation_mastery_shard', count: 2 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:fluid_laser_base', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:ore_laser_base', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'industrialforegoing:laser_drill', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'occultism:dimensional_mineshaft', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:miner_marid_irradiated', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_excavator', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'immersiveengineering:survey_tools', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:mining_gadget_kit', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:flux_bore_kit', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:diy_pedestal_quarry', count: 4 } },
                { type: 'masterfulmachinery:botania_mana', perTick: true, data: { amount: 500 } }
            ],
            ticks: 60,
            id: `${id_prefix}excavation_mastery_shard`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:culinary_mastery_shard', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:engineering_student_meals', count: 1 } },
                { type: 'masterfulmachinery:botania_mana', perTick: true, data: { amount: 500 } }
            ],
            ticks: 60,
            id: `${id_prefix}culinary_mastery_shard`
        },
        {
            outputs: [
                { type: 'masterfulmachinery:items', data: { item: 'kubejs:automation_mastery_shard', count: 1 } }
            ],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'refinedstorage:controller', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'extrastorage:iron_crafter', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'refinedstorage:pattern_grid', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'refinedstorage:pattern', count: 32 } },
                { type: 'masterfulmachinery:items', data: { item: 'refinedstorage:cable', count: 16 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:drone', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:charging_station', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:programming_puzzle', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:programmer', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:deployer', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:mechanical_arm', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:content_observer', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:stockpile_switch', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'modularrouters:item_router', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'modularrouters:distributor_module', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'modularrouters:vacuum_module', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'modularrouters:player_module', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:auto_crafting_halo', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:field_creator', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:placer', count: 1 } },
                { type: 'masterfulmachinery:botania_mana', perTick: true, data: { amount: 500 } }
            ],
            ticks: 60,
            id: `${id_prefix}automation_mastery_shard`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'enigmatic_tree_of_life_structure';
        recipe.controllerId = 'enigmatic_tree_of_life';
        event.custom(recipe).id(recipe.id);
    });
});
