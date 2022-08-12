onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/industrialforegoing/dissolution_chamber/';
    const recipes = [
        {
            inputs: [
                'immersiveengineering:tesla_coil',
                'rftoolsbase:machine_frame',
                'immersiveengineering:tesla_coil',
                'immersiveengineering:coil_hv',
                'immersiveengineering:coil_hv',
                'immersiveengineering:coil_hv',
                'powah:energy_discharger_nitro',
                'immersiveengineering:coil_hv'
            ],
            inputFluid: 'tconstruct:molten_obsidian',
            inputFluidAmount: 1000,
            processingTime: 600,
            outputItem: { item: 'rftoolsbuilder:shield_block1', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rftoolsbuilder:shield_block1'
        },
        {
            inputs: [
                'atum:fertile_soil',
                'mythicbotany:aquapanthus',
                'atum:fertile_soil',
                'minecraft:terracotta',
                'minecraft:terracotta',
                'minecraft:terracotta',
                'minecraft:terracotta',
                'minecraft:terracotta'
            ],
            inputFluid: 'industrialforegoing:sewage',
            inputFluidAmount: 8000,
            processingTime: 600,
            outputItem: { item: 'botanypots:botany_pot', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'botanypots:crafting/botany_pot'
        },
        {
            inputs: [
                'ars_nouveau:sylph_charm',
                'botanypots:botany_pot',
                'astralsorcery:tree_beacon',
                'botania:enchanted_soil',
                'botania:enchanted_soil',
                '#botania:runes/midgard',
                'naturesaura:grated_chute',
                '#botania:runes/midgard'
            ],
            inputFluid: 'materialis:molten_fairy',
            inputFluidAmount: 1296,
            processingTime: 600,
            outputItem: { item: 'botanypots:hopper_botany_pot', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'botanypots:crafting/hopper_botany_pot'
        },
        {
            inputs: [
                'rftoolsutility:matter_receiver',
                industrialforegoing.laser_lens.red,
                '#industrialforegoing:machine_frame/advanced',
                'minecraft:spawner',
                'minecraft:spawner'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 200,
            processingTime: 600,
            outputItem: { item: 'rftoolsutility:spawner', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rftoolsutility:spawner'
        },
        {
            inputs: [
                'rftoolsutility:matter_transmitter',
                industrialforegoing.laser_lens.yellow,
                '#industrialforegoing:machine_frame/simple',
                '#forge:gears/lumium',
                '#forge:gears/lumium'
            ],
            inputFluid: 'kubejs:pink_ender_slime',
            inputFluidAmount: 500,
            processingTime: 600,
            outputItem: { item: 'rftoolsutility:matter_beamer', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rftoolsutility:matter_beamer'
        },
        {
            inputs: [
                'kubejs:cpu_core_mk_1026',
                '#forge:alloys/advanced',
                '#forge:alloys/advanced',
                '#forge:circuits/basic',
                'kubejs:memory_advanced_filled'
            ],
            inputFluid: 'mekanism:lithium',
            inputFluidAmount: 100,
            processingTime: 300,
            outputItem: { item: 'mekanism:advanced_control_circuit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:control_circuit/advanced'
        },
        {
            inputs: [
                'kubejs:cpu_core_mk_1026',
                '#forge:alloys/advanced',
                '#forge:alloys/advanced',
                '#forge:circuits/basic',
                'kubejs:memory_advanced_filled',
                'bloodmagic:reinforcedslate',
                'bloodmagic:reinforcedslate',
                'bloodmagic:reinforcedslate'
            ],
            inputFluid: 'mekanism:lithium',
            inputFluidAmount: 100,
            processingTime: 300,
            outputItem: { item: 'mekanism:advanced_control_circuit', count: 2 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: `${id_prefix}advanced_control_circuit_magic`
        },
        {
            inputs: [
                'kubejs:cpu_core_eg_28222',
                '#forge:alloys/elite',
                '#forge:alloys/elite',
                '#forge:circuits/advanced',
                'kubejs:memory_elite_filled'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 100,
            processingTime: 300,
            outputItem: { item: 'mekanism:elite_control_circuit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:control_circuit/elite'
        },
        {
            inputs: [
                'kubejs:cpu_core_eg_28222',
                '#forge:alloys/elite',
                '#forge:alloys/elite',
                '#forge:circuits/advanced',
                'kubejs:memory_elite_filled',
                'bloodmagic:infusedslate',
                'bloodmagic:infusedslate',
                'bloodmagic:infusedslate'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 100,
            processingTime: 300,
            outputItem: { item: 'mekanism:elite_control_circuit', count: 2 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: `${id_prefix}elite_control_circuit_magic`
        },
        {
            inputs: [
                'kubejs:cpu_core_as_81221',
                '#forge:alloys/ultimate',
                '#forge:alloys/ultimate',
                '#forge:circuits/elite',
                'kubejs:memory_ultimate_filled'
            ],
            inputFluid: 'kubejs:pink_ender_slime',
            inputFluidAmount: 100,
            processingTime: 300,
            outputItem: { item: 'mekanism:ultimate_control_circuit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:control_circuit/ultimate'
        },
        {
            inputs: [
                'kubejs:cpu_core_as_81221',
                '#forge:alloys/ultimate',
                '#forge:alloys/ultimate',
                '#forge:circuits/elite',
                'kubejs:memory_ultimate_filled',
                'bloodmagic:demonslate',
                'bloodmagic:demonslate',
                'bloodmagic:demonslate'
            ],
            inputFluid: 'kubejs:pink_ender_slime',
            inputFluidAmount: 100,
            processingTime: 300,
            outputItem: { item: 'mekanism:ultimate_control_circuit', count: 2 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: `${id_prefix}ultimate_control_circuit_magic`
        },
        {
            inputs: [
                '#forge:gears/osmium',
                'powah:blank_card',
                '#forge:gears/osmium',
                '#mekanism:alloys/infused',
                '#mekanism:alloys/infused',
                '#forge:nuggets/copper',
                '#forge:nuggets/copper',
                '#forge:nuggets/copper'
            ],
            inputFluid: 'pneumaticcraft:lubricant',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'mekanism:upgrade_speed', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:upgrade/speed'
        },
        {
            inputs: [
                '#forge:gears/cobalt',
                'powah:blank_card',
                '#forge:gears/cobalt',
                '#mekanism:alloys/reinforced',
                '#mekanism:alloys/reinforced',
                '#forge:nuggets/copper',
                '#forge:nuggets/copper',
                '#forge:nuggets/copper'
            ],
            inputFluid: 'mekanism:lithium',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'mekanism:upgrade_energy', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:upgrade/energy'
        },
        /*{
            inputs: [
                '#forge:gears/bronze',
                'powah:blank_card',
                '#forge:gears/bronze',
                '#mekanism:alloys/infused',
                '#mekanism:alloys/infused',
                '#forge:nuggets/copper',
                '#forge:nuggets/copper',
                '#forge:nuggets/copper'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'mekanism:upgrade_filter', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:upgrade/filter'
        },*/
        {
            inputs: [
                '#forge:gears/silver',
                'powah:blank_card',
                '#forge:gears/silver',
                '#mekanism:alloys/reinforced',
                '#mekanism:alloys/reinforced',
                '#forge:nuggets/copper',
                '#forge:nuggets/copper',
                '#forge:nuggets/copper'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'mekanism:upgrade_gas', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:upgrade/gas'
        },
        {
            inputs: [
                '#thermal:rockwool',
                'powah:blank_card',
                '#thermal:rockwool',
                '#thermal:rockwool',
                '#thermal:rockwool',
                '#forge:nuggets/copper',
                '#forge:nuggets/copper',
                '#forge:nuggets/copper'
            ],
            inputFluid: 'integrateddynamics:liquid_chorus',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'mekanism:upgrade_muffling', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:upgrade/muffling'
        },
        {
            inputs: [
                'dustrial_decor:anchor',
                'powah:blank_card',
                'dustrial_decor:anchor',
                '#mekanism:alloys/infused',
                '#mekanism:alloys/infused',
                '#forge:nuggets/copper',
                '#forge:nuggets/copper',
                '#forge:nuggets/copper'
            ],
            inputFluid: 'kubejs:pink_ender_slime',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'mekanism:upgrade_anchor', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:upgrade/anchor'
        },
        {
            inputs: [
                '#forge:gears/osmium',
                'powah:blank_card',
                '#forge:gears/osmium',
                'bloodmagic:reagentwater',
                'bloodmagic:reagentlava',
                '#forge:nuggets/copper',
                '#forge:nuggets/copper',
                '#forge:nuggets/copper'
            ],
            inputFluid: 'tconstruct:blazing_blood',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'mekanism:upgrade_stone_generator', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:upgrade/stone_generator'
        },
        {
            inputs: [
                '#forge:pellets/polonium',
                '#industrialforegoing:machine_frame/supreme',
                '#forge:pellets/polonium',
                '#forge:pellets/polonium',
                '#forge:pellets/polonium',
                'mekanism:hdpe_sheet',
                '#forge:circuits/ultimate',
                'mekanism:hdpe_sheet'
            ],
            inputFluid: 'immersiveengineering:concrete',
            inputFluidAmount: 1000,
            processingTime: 6000,
            outputItem: { item: 'mekanism:sps_casing', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:sps_casing'
        },
        {
            inputs: [
                'mekanism:ultimate_induction_cell',
                'immersiveengineering:coil_mv',
                'mekanism:ultimate_induction_cell',
                '#forge:circuits/ultimate',
                '#forge:circuits/ultimate',
                '#forge:pellets/polonium',
                'mekanism:laser',
                '#forge:pellets/polonium'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 1000,
            processingTime: 6000,
            outputItem: { item: 'mekanism:supercharged_coil', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:supercharged_coil'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                '#industrialforegoing:machine_frame/simple',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet'
            ],
            inputFluid: 'immersiveengineering:concrete',
            inputFluidAmount: 4000,
            processingTime: 100,
            outputItem: { item: 'mekanism:induction_casing', count: 4 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:induction/casing'
        },
        {
            inputs: [
                'mekanismgenerators:electromagnetic_coil',
                '#forge:pellets/polonium',
                '#mekanism:alloys/atomic',
                'powah:dielectric_casing',
                'rftoolscontrol:node',
                '#xnet:cables',
                '#xnet:cables',
                '#xnet:cables'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 100,
            processingTime: 600,
            outputItem: { item: 'mekanismgenerators:fusion_reactor_frame', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanismgenerators:reactor/frame'
        },
        {
            inputs: [
                'mekanism:steel_casing',
                'immersiveengineering:wire_steel',
                'immersiveengineering:wire_steel',
                'immersiveengineering:wire_steel',
                'immersiveengineering:wire_steel'
            ],
            inputFluid: 'immersiveengineering:concrete',
            inputFluidAmount: 1000,
            processingTime: 600,
            outputItem: { item: 'mekanismgenerators:fission_reactor_casing', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanismgenerators:fission_reactor/casing'
        },
        {
            inputs: ['#forge:ingots/lumium'],
            inputFluid: 'thermal:glowstone',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'mekanism:ingot_refined_glowstone', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:processing/refined_glowstone/ingot/from_dust'
        },
        {
            inputs: [
                '#forge:circuits/basic',
                'mekanism:module_base',
                '#forge:circuits/basic',
                '#forge:ingots/refined_obsidian',
                '#forge:ingots/refined_obsidian',
                '#forge:ingots/refined_glowstone',
                '#forge:ingots/refined_glowstone'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'mekanism:basic_tier_installer', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:tier_installer/basic'
        },
        {
            inputs: [
                '#forge:circuits/advanced',
                'mekanism:module_base',
                '#forge:circuits/advanced',
                '#forge:ingots/refined_obsidian',
                '#forge:ingots/refined_obsidian',
                '#forge:ingots/refined_glowstone',
                '#forge:ingots/refined_glowstone'
            ],
            inputFluid: 'mekanism:lithium',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'mekanism:advanced_tier_installer', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:tier_installer/advanced'
        },
        {
            inputs: [
                '#forge:circuits/elite',
                'mekanism:module_base',
                '#forge:circuits/elite',
                '#forge:ingots/refined_obsidian',
                '#forge:ingots/refined_obsidian',
                '#forge:ingots/refined_glowstone',
                '#forge:ingots/refined_glowstone'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'mekanism:elite_tier_installer', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:tier_installer/elite'
        },
        {
            inputs: [
                '#forge:circuits/ultimate',
                'mekanism:module_base',
                '#forge:circuits/ultimate',
                '#forge:ingots/refined_obsidian',
                '#forge:ingots/refined_obsidian',
                '#forge:ingots/refined_glowstone',
                '#forge:ingots/refined_glowstone'
            ],
            inputFluid: 'kubejs:pink_ender_slime',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'mekanism:ultimate_tier_installer', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:tier_installer/ultimate'
        },
        {
            inputs: [
                'ars_nouveau:end_fiber',
                'sophisticatedbackpacks:upgrade_base',
                'ars_nouveau:end_fiber',
                'create:shadow_steel_casing',
                'create:shadow_steel_casing',
                'ars_nouveau:end_fiber',
                'kubejs:dimensional_storage_crystal',
                'ars_nouveau:end_fiber'
            ],
            inputFluid: 'kubejs:pink_ender_slime',
            inputFluidAmount: 250,
            processingTime: 100,
            outputItem: { item: 'sophisticatedbackpacks:inception_upgrade', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'sophisticatedbackpacks:inception_upgrade'
        },
        {
            inputs: [
                'refinedstorage:range_upgrade',
                'refinedstorage:range_upgrade',
                'refinedstorage:range_upgrade',
                'xnet:antenna_dish',
                'xnet:antenna_dish',
                '#forge:ingots/aeternium',
                '#forge:ingots/aeternium',
                '#forge:ingots/aeternium'
            ],
            inputFluid: 'tconstruct:molten_slimesteel',
            inputFluidAmount: 1296,
            processingTime: 400,
            outputItem: { item: 'rsinfinitybooster:infinity_card', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rsinfinitybooster:infinity_card'
        },
        {
            inputs: [
                'rsinfinitybooster:infinity_card',
                'powah:ender_gate_nitro',
                'rsinfinitybooster:infinity_card',
                'powah:ender_gate_nitro',
                'powah:ender_gate_nitro',
                'rsinfinitybooster:infinity_card',
                'powah:ender_gate_nitro',
                'rsinfinitybooster:infinity_card'
            ],
            inputFluid: 'kubejs:pink_ender_slime',
            inputFluidAmount: 1250,
            processingTime: 400,
            outputItem: { item: 'rsinfinitybooster:dimension_card', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'rsinfinitybooster:dimension_card'
        },
        {
            inputs: [
                '#forge:plastic',
                '#industrialforegoing:machine_frame/pity',
                '#forge:plastic',
                '#forge:ingots/refined_obsidian',
                '#forge:ingots/refined_obsidian',
                '#forge:gears/osmium',
                '#forge:circuits/basic',
                '#forge:gears/osmium'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 250,
            processingTime: 300,
            outputItem: { item: 'industrialforegoing:machine_frame_simple', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/simple_machine_frame'
        },
        {
            inputs: [
                '#forge:plastic',
                '#industrialforegoing:machine_frame/simple',
                '#forge:plastic',
                '#forge:ingots/pink_slime',
                '#forge:ingots/pink_slime',
                '#forge:gears/compressed_iron',
                '#forge:circuits/advanced',
                '#forge:gears/compressed_iron'
            ],
            inputFluid: 'kubejs:pink_ender_slime',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'industrialforegoing:machine_frame_advanced', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/advanced_machine_frame'
        },
        {
            inputs: [
                '#forge:plastic',
                '#industrialforegoing:machine_frame/advanced',
                '#forge:plastic',
                '#forge:ingots/iesnium',
                '#forge:ingots/iesnium',
                '#forge:gears/enderium',
                '#forge:circuits/elite',
                '#forge:gears/enderium'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 135,
            processingTime: 300,
            outputItem: { item: 'industrialforegoing:machine_frame_supreme', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/supreme_machine_frame'
        },
        {
            inputs: [
                '#forge:plastic',
                '#forge:circuits/advanced',
                'atum:crystal_glass_pane',
                'atum:crystal_glass_pane',
                '#forge:gears/signalum',
                '#forge:gears/signalum',
                '#forge:gems/blazing',
                '#forge:gems/blazing'
            ],
            inputFluid: 'mekanism:lithium',
            inputFluidAmount: 500,
            processingTime: 200,
            outputItem: { item: 'industrialforegoing:efficiency_addon_1', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/efficiency_addon_1'
        },
        {
            inputs: [
                '#forge:plastic',
                '#forge:circuits/advanced',
                'atum:crystal_glass_pane',
                'atum:crystal_glass_pane',
                '#forge:gears/signalum',
                '#forge:gears/signalum',
                'pneumaticcraft:glycerol',
                'pneumaticcraft:glycerol'
            ],
            inputFluid: 'pneumaticcraft:lubricant',
            inputFluidAmount: 500,
            processingTime: 200,
            outputItem: { item: 'industrialforegoing:speed_addon_1', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/speed_addon_1'
        },
        {
            inputs: [
                '#forge:plastic',
                '#forge:circuits/advanced',
                'atum:crystal_glass_pane',
                'atum:crystal_glass_pane',
                '#forge:gears/signalum',
                '#forge:gears/signalum',
                'refinedstorage:construction_core',
                'refinedstorage:construction_core'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: { item: 'industrialforegoing:processing_addon_1', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/processing_addon_1'
        },
        {
            inputs: [
                'industrialforegoing:efficiency_addon_1',
                '#forge:circuits/elite',
                'atum:crystal_glass_pane',
                'atum:crystal_glass_pane',
                '#forge:gears/enderium',
                '#forge:gears/enderium',
                'rftoolspower:blazing_rod',
                'rftoolspower:blazing_rod'
            ],
            inputFluid: 'mekanism:lithium',
            inputFluidAmount: 500,
            processingTime: 200,
            outputItem: { item: 'industrialforegoing:efficiency_addon_2', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/efficiency_addon_2'
        },
        {
            inputs: [
                'industrialforegoing:speed_addon_1',
                '#forge:circuits/elite',
                'atum:crystal_glass_pane',
                'atum:crystal_glass_pane',
                '#forge:gears/enderium',
                '#forge:gears/enderium',
                'pneumaticcraft:glycerol',
                'pneumaticcraft:glycerol'
            ],
            inputFluid: 'pneumaticcraft:lubricant',
            inputFluidAmount: 500,
            processingTime: 200,
            outputItem: { item: 'industrialforegoing:speed_addon_2', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/speed_addon_2'
        },
        {
            inputs: [
                'industrialforegoing:processing_addon_1',
                '#forge:circuits/elite',
                'atum:crystal_glass_pane',
                'atum:crystal_glass_pane',
                '#forge:gears/enderium',
                '#forge:gears/enderium',
                'extrastorage:neural_processor',
                'extrastorage:neural_processor'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: { item: 'industrialforegoing:processing_addon_2', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/processing_addon_2'
        },
        {
            inputs: [
                '#forge:ingots/queens_slime',
                '#forge:ingots/slimesteel',
                '#forge:ingots/slimesteel',
                '#forge:ingots/slimesteel'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 2000,
            processingTime: 300,
            outputItem: { item: 'industrialforegoing:pink_slime_ingot', count: 4 },
            outputFluid: 'industrialforegoing:sludge',
            outputFluidAmount: 500,
            id: 'industrialforegoing:dissolution_chamber/pink_slime_ingot'
        },
        {
            inputs: [
                'nethers_delight:rich_soul_soil',
                'nethers_delight:rich_soul_soil',
                'nethers_delight:rich_soul_soil',
                'tconstruct:blood_slime',
                'tconstruct:blood_slime',
                'architects_palette:withered_bone_block',
                '#industrialforegoing:machine_frame/simple',
                'architects_palette:withered_bone_block'
            ],
            inputFluid: 'bloodmagic:life_essence_fluid',
            inputFluidAmount: 1000,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:mechanical_dirt', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/mechanical_dirt'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'mekanism:module_base',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                '#forge:ingots/shadow_steel',
                'powah:solar_panel_nitro',
                '#forge:ingots/shadow_steel'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_solar_recharging_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_solar_recharging_unit'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'mekanism:module_base',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                '#forge:circuits/basic',
                'mekanism:electrolytic_core',
                '#forge:circuits/basic'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_electrolytic_breathing_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_electrolytic_breathing_unit'
        },
        {
            inputs: [
                'thermal:cured_rubber',
                'mekanism:module_base',
                'thermal:cured_rubber',
                'thermal:hazmat_fabric',
                'thermal:hazmat_fabric',
                '#forge:circuits/ultimate',
                'mekanism:scuba_mask',
                '#forge:circuits/ultimate'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 500,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_inhalation_purification_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_inhalation_purification_unit'
        },
        {
            inputs: [
                'industrialforegoing:straw',
                'mekanism:module_base',
                'industrialforegoing:straw',
                'industrialforegoing:straw',
                'industrialforegoing:straw',
                'industrialforegoing:straw',
                'mekanism:canteen',
                'industrialforegoing:straw'
            ],
            inputFluid: 'industrialforegoing:meat',
            inputFluidAmount: 16000,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_nutritional_injection_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_nutritional_injection_unit'
        },
        {
            inputs: [
                'mekanism:ultimate_induction_cell',
                'mekanism:module_base',
                'rftoolsbuilder:shield_block1',
                '#forge:circuits/ultimate',
                '#forge:circuits/ultimate',
                '#forge:pellets/polonium',
                '#forge:pellets/polonium',
                '#forge:pellets/polonium'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 2000,
            processingTime: 500,
            outputItem: { item: 'mekanism:module_energy_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_energy_unit'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'mekanism:module_base',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                '#forge:ingots/netherite',
                '#forge:ingots/netherite',
                '#forge:ingots/netherite'
            ],
            inputFluid: 'tconstruct:molten_lead',
            inputFluidAmount: 1296,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_radiation_shielding_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_radiation_shielding_unit'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'mekanism:module_base',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                '#forge:circuits/advanced',
                'advancedperipherals:ar_goggles',
                '#forge:circuits/advanced'
            ],
            inputFluid: 'kubejs:molten_enderium_glass',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_vision_enhancement_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_vision_enhancement_unit'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'mekanism:module_base',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                'immersiveengineering:coil_hv',
                'immersiveengineering:coil_hv',
                'immersiveengineering:coil_hv'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_charge_distribution_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_charge_distribution_unit'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'mekanism:module_base',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                'fluxnetworks:flux_dust',
                'mekanism:dosimeter',
                'fluxnetworks:flux_dust'
            ],
            inputFluid: 'tconstruct:molten_slimesteel',
            inputFluidAmount: 1296,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_dosimeter_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_dosimeter_unit'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'mekanism:module_base',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                '#forge:circuits/elite',
                'mekanism:jetpack',
                '#forge:circuits/elite'
            ],
            inputFluid: 'tconstruct:sky_slime',
            inputFluidAmount: 4000,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_jetpack_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_jetpack_unit'
        },
        {
            inputs: [
                'mekanism:ultimate_induction_provider',
                'mekanism:module_base',
                'mekanism:ultimate_induction_provider',
                '#forge:circuits/ultimate',
                '#forge:circuits/ultimate',
                'ironjetpacks:nitro_thruster',
                '#forge:pellets/antimatter',
                'ironjetpacks:nitro_thruster'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 16000,
            processingTime: 800,
            outputItem: { item: 'mekanism:module_gravitational_modulating_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_gravitational_modulating_unit'
        },
        {
            inputs: [
                '#forge:alloys/elite',
                'mekanism:module_base',
                '#forge:alloys/elite',
                'alexsmobs:warped_muscle',
                'alexsmobs:warped_muscle',
                '#forge:circuits/elite',
                'immersiveengineering:toolupgrade_drill_lube',
                '#forge:circuits/elite'
            ],
            inputFluid: 'pneumaticcraft:lubricant',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_locomotive_boosting_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_locomotive_boosting_unit'
        },
        {
            inputs: [
                '#forge:alloys/elite',
                'mekanism:module_base',
                '#forge:alloys/elite',
                'alexsmobs:warped_muscle',
                'alexsmobs:warped_muscle',
                '#forge:circuits/elite',
                'pneumaticcraft:pneumatic_cylinder',
                '#forge:circuits/elite'
            ],
            inputFluid: 'pneumaticcraft:lubricant',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_hydraulic_propulsion_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_hydraulic_propulsion_unit'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'mekanism:module_base',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                '#forge:circuits/basic',
                'thermal:flux_magnet',
                '#forge:circuits/basic'
            ],
            inputFluid: 'tconstruct:molten_iron',
            inputFluidAmount: 1296,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_magnetic_attraction_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_magnetic_attraction_unit'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'mekanism:module_base',
                'mekanism:hdpe_sheet',
                '#forge:ingots/refined_radiance',
                '#forge:ingots/refined_radiance',
                '#forge:alloys/ultimate',
                'fluxnetworks:flux_core',
                '#forge:alloys/ultimate'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 500,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_laser_dissipation_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_laser_dissipation_unit'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'mekanism:module_base',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                '#forge:ingots/energized_steel',
                '#forge:gems/niotic',
                '#forge:ingots/energized_steel'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 100,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_shearing_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_shearing_unit'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'mekanism:module_base',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                '#forge:alloys/advanced',
                'mekanism:geiger_counter',
                '#forge:alloys/advanced'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 100,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_geiger_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_geiger_unit'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'mekanism:module_base',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                '#forge:alloys/elite',
                'mekanism:hdpe_elytra',
                '#forge:alloys/elite'
            ],
            inputFluid: 'thermal:ender',
            inputFluidAmount: 16000,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_elytra_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_elytra_unit'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'mekanism:module_base',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                '#forge:alloys/elite',
                'betterendforge:ancient_emerald_ice',
                '#forge:alloys/elite'
            ],
            inputFluid: 'mekanism:hydrogen',
            inputFluidAmount: 8000,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_frost_walker_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_frost_walker_unit'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'mekanism:module_base',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                'mekanism:hdpe_sheet',
                '#forge:ingots/shadow_steel',
                'powah:thermo_generator_nitro',
                '#forge:ingots/shadow_steel'
            ],
            inputFluid: 'mekanism:hydrogen',
            inputFluidAmount: 8000,
            processingTime: 200,
            outputItem: { item: 'mekanismgenerators:module_geothermal_generator_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanismgenerators:module_geothermal_generator_unit'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'mekanism:module_base',
                'mekanism:hdpe_sheet',
                '#forge:circuits/elite',
                '#forge:circuits/elite',
                'botania:pixie_dust',
                'travel_anchors:travel_staff',
                'botania:pixie_dust'
            ],
            inputFluid: 'materialis:molten_elementium',
            inputFluidAmount: 1296,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_teleportation_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_teleportation_unit'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'mekanism:module_base',
                'mekanism:hdpe_sheet',
                '#forge:circuits/elite',
                '#forge:circuits/elite',
                'bloodmagic:destructivecrystal',
                'astralsorcery:colored_lens_break',
                'bloodmagic:destructivecrystal'
            ],
            inputFluid: 'thermal:glowstone',
            inputFluidAmount: 8000,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_vein_mining_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_vein_mining_unit'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'mekanism:module_base',
                'mekanism:hdpe_sheet',
                '#forge:circuits/elite',
                '#forge:circuits/elite',
                'bloodmagic:steadfastcrystal',
                'astralsorcery:colored_lens_spectral',
                'bloodmagic:steadfastcrystal'
            ],
            inputFluid: 'thermal:ender',
            inputFluidAmount: 8000,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_silk_touch_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_silk_touch_unit'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'mekanism:module_base',
                'mekanism:hdpe_sheet',
                '#forge:circuits/elite',
                '#forge:circuits/elite',
                'bloodmagic:vengefulcrystal',
                'astralsorcery:colored_lens_damage',
                'bloodmagic:vengefulcrystal'
            ],
            inputFluid: 'tconstruct:molten_quartz',
            inputFluidAmount: 16000,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_attack_amplification_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_attack_amplification_unit'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'mekanism:module_base',
                'mekanism:hdpe_sheet',
                '#forge:circuits/elite',
                '#forge:circuits/elite',
                '#forge:gems/emerald',
                'astralsorcery:colored_lens_push',
                '#forge:gems/emerald'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_farming_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_farming_unit'
        },
        {
            inputs: [
                'mekanism:hdpe_sheet',
                'mekanism:module_base',
                'mekanism:hdpe_sheet',
                '#forge:circuits/elite',
                '#forge:circuits/elite',
                'mekanismgenerators:laser_focus_matrix',
                'astralsorcery:colored_lens_break',
                'mekanismgenerators:laser_focus_matrix'
            ],
            inputFluid: 'thermal:redstone',
            inputFluidAmount: 16000,
            processingTime: 200,
            outputItem: { item: 'mekanism:module_excavation_escalation_unit', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:module_excavation_escalation_unit'
        },
        {
            inputs: ['kubejs:memory_basic_empty'],
            inputFluid: 'pneumaticcraft:memory_essence',
            inputFluidAmount: 8000,
            processingTime: 20,
            outputItem: { item: 'kubejs:memory_basic_filled', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: `${id_prefix}memory_basic_filled`
        },
        {
            inputs: ['kubejs:memory_advanced_empty'],
            inputFluid: 'pneumaticcraft:memory_essence',
            inputFluidAmount: 8000 * 2,
            processingTime: 20 * 2,
            outputItem: { item: 'kubejs:memory_advanced_filled', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: `${id_prefix}memory_advanced_filled`
        },
        {
            inputs: ['kubejs:memory_elite_empty'],
            inputFluid: 'pneumaticcraft:memory_essence',
            inputFluidAmount: 8000 * 4,
            processingTime: 20 * 4,
            outputItem: { item: 'kubejs:memory_elite_filled', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: `${id_prefix}memory_elite_filled`
        },
        {
            inputs: ['kubejs:memory_ultimate_empty'],
            inputFluid: 'pneumaticcraft:memory_essence',
            inputFluidAmount: 8000 * 8,
            processingTime: 20 * 8,
            outputItem: { item: 'kubejs:memory_ultimate_filled', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: `${id_prefix}memory_ultimate_filled`
        },
        {
            inputs: ['extrastorage:diamond_crafter'],
            inputFluid: 'tconstruct:molten_netherite',
            inputFluidAmount: 144 * 9,
            processingTime: 200,
            outputItem: { item: 'extrastorage:netherite_crafter', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'extrastorage:netherite_crafter'
        },
        {
            inputs: [
                'minecraft:light_gray_concrete_powder',
                'minecraft:light_gray_concrete_powder',
                'minecraft:light_gray_concrete_powder',
                'minecraft:light_gray_concrete_powder',
                'minecraft:light_gray_concrete_powder',
                'minecraft:light_gray_concrete_powder',
                'minecraft:light_gray_concrete_powder',
                'minecraft:light_gray_concrete_powder'
            ],
            inputFluid: 'kubejs:molten_compressed_iron',
            inputFluidAmount: 144,
            processingTime: 20,
            outputItem: { item: 'pneumaticcraft:reinforced_stone', count: 8 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: `${id_prefix}reinforced_stone`
        },
        {
            inputs: [
                'astralsorcery:resonating_gem',
                'occultism:infused_lenses',
                'astralsorcery:resonating_gem',
                'astralsorcery:resonating_gem',
                'astralsorcery:resonating_gem'
            ],
            inputFluid: 'astralsorcery:liquid_starlight',
            inputFluidAmount: 100,
            processingTime: 20,
            outputItem: { item: 'astralsorcery:glass_lens', count: 2 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: `${id_prefix}glass_lens`
        },
        {
            inputs: [
                'mekanism:elite_mechanical_pipe',
                '#industrialforegoing:machine_frame/simple',
                'mekanism:elite_mechanical_pipe',
                'mekanism:elite_fluid_tank',
                'mekanism:elite_fluid_tank',
                'mekanism:superheating_element',
                'immersiveengineering:capacitor_hv',
                'mekanism:superheating_element'
            ],
            inputFluid: 'kubejs:pink_ender_slime',
            inputFluidAmount: 1000,
            processingTime: 100,
            outputItem: { item: 'industrialforegoing:dissolution_chamber', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: `${id_prefix}dissolution_chamber_alternate`
        }
        /*
        {
            inputs: [
                '', // top left
                '', // top 
                '', // top right
                '', // left
                '', // right
                '', // bottom left
                '', // bottom
                ''  // bottom right
            ],
            inputFluid: '', // optional
            inputFluidAmount: 0, // leave at 0 for no fluid
            processingTime: 50,
            outputItem: { item: '', count: 1 },
            outputFluid: '', // optional
            outputFluidAmount: 0, // leave at 0 for no fluid
            id: ''
        }
        */
    ];

    colors.forEach((color) => {
        recipes.push(
            {
                inputs: [
                    'atum:fertile_soil',
                    'mythicbotany:aquapanthus',
                    'atum:fertile_soil',
                    `minecraft:${color}_terracotta`,
                    `minecraft:${color}_terracotta`,
                    `minecraft:${color}_terracotta`,
                    `minecraft:${color}_terracotta`,
                    `minecraft:${color}_terracotta`
                ],
                inputFluid: 'industrialforegoing:sewage',
                inputFluidAmount: 8000,
                processingTime: 600,
                outputItem: { item: `botanypots:${color}_botany_pot`, count: 1 },
                outputFluid: '',
                outputFluidAmount: 0,
                id: `botanypots:crafting/${color}_botany_pot`
            },
            {
                inputs: [
                    'ars_nouveau:sylph_charm',
                    `botanypots:${color}_botany_pot`,
                    'astralsorcery:tree_beacon',
                    'botania:enchanted_soil',
                    'botania:enchanted_soil',
                    '#botania:runes/midgard',
                    'naturesaura:grated_chute',
                    '#botania:runes/midgard'
                ],
                inputFluid: 'materialis:molten_fairy',
                inputFluidAmount: 1296,
                processingTime: 600,
                outputItem: { item: `botanypots:hopper_${color}_botany_pot`, count: 1 },
                outputFluid: '',
                outputFluidAmount: 0,
                id: `botanypots:crafting/hopper_${color}_botany_pot`
            }
        );
    });

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input));
        });

        event
            .custom({
                type: 'industrialforegoing:dissolution_chamber',
                input: ingredients,
                inputFluid: `{FluidName:"${recipe.inputFluid}",Amount:${recipe.inputFluidAmount}}`,
                processingTime: recipe.processingTime,
                output: recipe.outputItem,
                outputFluid: `{FluidName:"${recipe.outputFluid}",Amount:${recipe.outputFluidAmount}}`
            })
            .id(recipe.id);
    });
});
