onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/industrialforegoing/dissolution_chamber/';
    const recipes = [
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
        }
    ];

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
