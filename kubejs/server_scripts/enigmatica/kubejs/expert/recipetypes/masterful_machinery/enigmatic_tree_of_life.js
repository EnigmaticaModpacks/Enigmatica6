onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }

    const id_prefix = 'enigmatica:expert/masterful_machinery/enigmatic_tree_of_life/';
    const recipes = [
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:botanical_mastery', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'mythicbotany:mana_collector', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:spark', count: 12 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:mana_ring_greater', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:fabulous_pool', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:kekimurus', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:shulk_me_not', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:rosa_arcana', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'botania:dandelifeon', count: 4 } }
            ],
            ticks: 60,
            id: `${id_prefix}botanical_mastery`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:astronomy_mastery', count: 1 } }],
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
                { type: 'masterfulmachinery:fluids', data: { fluid: 'astralsorcery:liquid_starlight', amount: 64000 } }
            ],
            ticks: 60,
            id: `${id_prefix}astronomy_mastery`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:alchemy_mastery', count: 1 } }],
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
                { type: 'masterfulmachinery:items', data: { item: 'darkutils:anchor_plate', count: 9 } }
            ],
            ticks: 60,
            id: `${id_prefix}alchemy_mastery`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:ritual_mastery', count: 5 } }],
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
                { type: 'masterfulmachinery:items', data: { item: 'occultism:chalk_white', count: 10 } },
                { type: 'masterfulmachinery:items', data: { item: 'occultism:chalk_gold', count: 10 } },
                { type: 'masterfulmachinery:items', data: { item: 'occultism:chalk_purple', count: 10 } },
                { type: 'masterfulmachinery:items', data: { item: 'occultism:chalk_red', count: 10 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:skeleton_skull', count: 40 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:wither_skeleton_skull', count: 40 } },
                { type: 'masterfulmachinery:items', data: { item: 'eidolon:candlestick', count: 80 } },
                { type: 'masterfulmachinery:items', data: { item: 'occultism:spirit_attuned_crystal', count: 80 } },
                { type: 'masterfulmachinery:items', data: { item: 'occultism:golden_sacrificial_bowl', count: 10 } },
                { type: 'masterfulmachinery:items', data: { item: 'occultism:sacrificial_bowl', count: 120 } },
                { type: 'masterfulmachinery:fluids', data: { fluid: 'bloodmagic:life_essence_fluid', amount: 64000 } }
            ],
            ticks: 60,
            id: `${id_prefix}ritual_mastery`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:aura_mastery', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:aura_trove', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:generator_limit_remover', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:calling_spirit', count: 16 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:projectile_generator', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:experience_bottle', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:firework_generator', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:firework_rocket', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:chorus_generator', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:chorus_flower', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:moss_generator', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:mossy_cobblestone', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:ancient_sapling', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:mover_cart', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:powered_rail', count: 32 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:rail', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:activator_rail', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'naturesaura:aura_detector', count: 8 } }
            ],
            ticks: 60,
            id: `${id_prefix}aura_mastery`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:engineering_mastery', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'create:flywheel', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:furnace_engine', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:blast_furnace', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:heat_pipe', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:vortex_tube', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:heat_sink', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:advanced_pressure_tube', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:liquid_compressor', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:rotation_speed_controller', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:large_cogwheel', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:shaft', count: 64 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:encased_chain_drive', count: 32 } },
                { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:steel_block', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'immersiveengineering:fluid_pipe', count: 21 } },
                { type: 'masterfulmachinery:items', data: { item: 'minecraft:cauldron', count: 1 } },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'immersiveengineering:heavy_engineering', count: 11 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'immersiveengineering:light_engineering', count: 12 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'immersiveengineering:rs_engineering', count: 3 } },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'immersiveengineering:blastbrick_reinforced', count: 27 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'immersiveengineering:steel_scaffolding_standard', count: 41 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'immersiveengineering:slab_steel_scaffolding_standard', count: 30 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'immersiveengineering:sheetmetal_steel', count: 12 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'immersiveengineering:slab_sheetmetal_steel', count: 20 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'immersiveengineering:sheetmetal_iron', count: 60 } },
                { type: 'masterfulmachinery:items', data: { item: 'immersiveengineering:treated_fence', count: 6 } },
                { type: 'masterfulmachinery:fluids', data: { fluid: 'pneumaticcraft:lubricant', amount: 64000 } }
            ],
            ticks: 60,
            id: `${id_prefix}engineering_mastery`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:energistics_mastery', count: 50 } }],
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
                }
            ],
            ticks: 3000,
            id: `${id_prefix}energistics_mastery`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:dimensional_mastery', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'refinedstorage:16k_storage_disk', count: 8 } },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'refinedstorage:1024k_fluid_storage_disk', count: 8 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'refinedstorage:disk_drive', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:quantum_entangloporter', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'rsinfinitybooster:dimension_card', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'refinedstorage:network_receiver', count: 8 } },
                { type: 'masterfulmachinery:items', data: { item: 'refinedstorage:network_transmitter', count: 8 } }
            ],
            ticks: 60,
            id: `${id_prefix}dimensional_mastery`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'kubejs:battle_mastery', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:mekasuit_helmet', count: 1 } },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanism:module_vision_enhancement_unit', count: 4 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanism:module_inhalation_purification_unit', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanism:module_nutritional_injection_unit', count: 1 }
                },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanism:module_electrolytic_breathing_unit', count: 4 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:mekasuit_bodyarmor', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:module_geiger_unit', count: 1 } },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanism:module_gravitational_modulating_unit', count: 1 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:module_dosimeter_unit', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:mekasuit_pants', count: 1 } },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanismgenerators:module_geothermal_generator_unit', count: 8 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:mekasuit_boots', count: 1 } },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanism:module_hydraulic_propulsion_unit', count: 4 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:meka_tool', count: 1 } },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanism:module_attack_amplification_unit', count: 4 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:module_vein_mining_unit', count: 4 } },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanism:module_excavation_escalation_unit', count: 4 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:module_teleportation_unit', count: 1 } },
                {
                    type: 'masterfulmachinery:items',
                    data: { item: 'mekanism:module_laser_dissipation_unit', count: 4 }
                },
                { type: 'masterfulmachinery:items', data: { item: 'mekanism:module_energy_unit', count: 40 } }
            ],
            ticks: 60,
            id: `${id_prefix}battle_mastery`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'enigmatic_tree_of_life_structure';
        recipe.controllerId = 'enigmatic_tree_of_life';
        event.custom(recipe).id(recipe.id);
    });
});
