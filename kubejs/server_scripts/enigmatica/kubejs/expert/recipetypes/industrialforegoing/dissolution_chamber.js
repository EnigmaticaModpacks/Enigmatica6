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
                'powah:energy_discharger_spirited',
                'powah:capacitor_spirited',
                'powah:energy_discharger_spirited'
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
            inputs: ['botanypots:botany_pot', 'ars_nouveau:sylph_charm', 'naturesaura:grated_chute'],
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
                'industrialforegoing:laser_lens14',
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
                'industrialforegoing:laser_lens4',
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
                'rftoolscontrol:cpu_core_500',
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
                'rftoolscontrol:cpu_core_1000',
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
                'rftoolscontrol:cpu_core_2000',
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
        {
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
        },
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
            inputs: ['sophisticatedbackpacks:upgrade_base', 'occultism:satchel'],
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
            inputFluidAmount: 1296,
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
                inputs: [`botanypots:${color}_botany_pot`, 'ars_nouveau:sylph_charm', 'naturesaura:grated_chute'],
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

        const re = event.custom({
            type: 'industrialforegoing:dissolution_chamber',
            input: ingredients,
            inputFluid: `{FluidName:"${recipe.inputFluid}",Amount:${recipe.inputFluidAmount}}`,
            processingTime: recipe.processingTime,
            output: recipe.outputItem,
            outputFluid: `{FluidName:"${recipe.outputFluid}",Amount:${recipe.outputFluidAmount}}`
        });

        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
