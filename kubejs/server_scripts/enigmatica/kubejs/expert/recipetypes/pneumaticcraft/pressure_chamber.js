onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    const id_prefix = 'enigmatica:expert/pneumaticcraft/pressure_chamber/';
    const recipes = [
        {
            inputs: [
                { tag: 'forge:ingots/steel', count: 2 },
                { tag: 'forge:tar', count: 2 },
                { tag: 'forge:obsidian', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'pneumaticcraft:ingot_iron_compressed', count: 4 }],
            id: 'pneumaticcraft:pressure_chamber/compressed_iron_ingot'
        },
        {
            inputs: [
                { tag: 'forge:storage_blocks/steel', count: 2 },
                { tag: 'forge:tar', count: 18 },
                { tag: 'forge:obsidian', count: 9 }
            ],
            pressure: 2.0,
            results: [{ item: 'pneumaticcraft:compressed_iron_block', count: 4 }],
            id: 'pneumaticcraft:pressure_chamber/compressed_iron_block'
        },
        {
            inputs: [{ item: 'minecraft:snow_block', count: 4 }],
            pressure: 1.5,
            results: [{ item: 'betterendforge:dense_snow', count: 1 }],
            id: `${id_prefix}dense_snow`
        },
        {
            inputs: [{ item: 'betterendforge:dense_snow', count: 4 }],
            pressure: 1.5,
            results: [{ item: 'minecraft:ice', count: 1 }],
            id: 'pneumaticcraft:pressure_chamber/ice'
        },
        {
            inputs: [
                { tag: 'forge:ingots/pewter', count: 4 },
                { item: 'refinedstorage:quartz_enriched_iron', count: 4 },
                { item: 'tconstruct:seared_brick', count: 4 },
                { item: 'thermal:machine_frame', count: 1 }
            ],
            pressure: 2.5,
            results: [{ item: 'refinedstorage:machine_casing', count: 2 }],
            id: 'refinedstorage:machine_casing'
        },
        {
            inputs: [
                { item: 'powah:blank_card', count: 1 },
                { tag: 'mekanism:enriched/redstone', count: 1 },
                { item: 'powah:ender_core', count: 1 }
            ],
            pressure: 4.0,
            results: [{ item: 'powah:binding_card', count: 1 }],
            id: 'powah:crafting/binding_card'
        },
        {
            inputs: [
                { tag: 'forge:alloys/ultimate', count: 1 },
                { item: 'powah:dielectric_paste', count: 1 },
                { item: 'rftoolsbase:infused_enderpearl', count: 1 }
            ],
            pressure: 4.0,
            results: [{ item: 'powah:aerial_pearl', count: 1 }],
            id: 'powah:crafting/aerial_pearl'
        },
        {
            inputs: [
                { tag: 'forge:wires/electrum', count: 1 },
                { item: 'refinedstorage:raw_basic_processor', count: 2 },
                { item: 'powah:dielectric_paste', count: 1 },
                { tag: 'pneumaticcraft:plastic_sheets', count: 1 }
            ],
            pressure: 1.0,
            results: [{ item: 'pneumaticcraft:transistor', count: 2 }],
            id: 'pneumaticcraft:pressure_chamber/transistor'
        },
        {
            inputs: [
                { tag: 'forge:wires/electrum', count: 1 },
                { tag: 'forge:plates/signalum', count: 1 },
                { tag: 'forge:plates/aluminum', count: 1 },
                { item: 'powah:dielectric_paste', count: 1 },
                { tag: 'pneumaticcraft:plastic_sheets', count: 1 }
            ],
            pressure: 1.0,
            results: [{ item: 'pneumaticcraft:capacitor', count: 2 }],
            id: 'pneumaticcraft:pressure_chamber/capacitor'
        },
        {
            inputs: [
                { item: 'pneumaticcraft:unassembled_pcb', count: 1 },
                { item: 'pneumaticcraft:capacitor', count: 2 },
                { item: 'pneumaticcraft:transistor', count: 2 },
                { item: 'refinedstorage:basic_processor', count: 1 },
                { tag: 'forge:wires/lead', count: 1 }
            ],
            pressure: 4.0,
            results: [{ item: 'pneumaticcraft:printed_circuit_board', count: 1 }],
            id: `${id_prefix}printed_circuit_board`
        },
        {
            inputs: [
                { tag: 'forge:plates/copper', count: 1 },
                { item: 'fluxnetworks:flux_dust', count: 6 },
                { tag: 'pneumaticcraft:plastic_sheets', count: 2 }
            ],
            pressure: 1.5,
            results: [{ item: 'pneumaticcraft:empty_pcb', count: 6 }],
            id: 'pneumaticcraft:pressure_chamber/empty_pcb'
        },
        {
            inputs: [
                { tag: 'forge:plates/invar', count: 1 },
                { item: 'fluxnetworks:flux_dust', count: 1 },
                { item: 'thermal:redstone_servo', count: 1 }
            ],
            pressure: 1.0,
            results: [{ item: 'pneumaticcraft:turbine_blade', count: 1 }],
            id: 'pneumaticcraft:pressure_chamber/turbine_blade'
        },
        {
            inputs: [
                { item: 'tconstruct:ichor_slime_crystal', count: 1 },
                { item: 'refinedstorage:basic_processor', count: 1 },
                { item: 'botania:corporea_spark', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'refinedstorage:destruction_core', count: 1 }],
            id: 'refinedstorage:destruction_core'
        },
        {
            inputs: [
                { item: 'tconstruct:sky_slime_crystal', count: 1 },
                { item: 'refinedstorage:basic_processor', count: 1 },
                { item: 'botania:corporea_spark', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'refinedstorage:construction_core', count: 1 }],
            id: 'refinedstorage:construction_core'
        },
        {
            inputs: [
                { tag: 'forge:coins/tin', count: 1 },
                { tag: 'forge:gems/silicon', count: 1 },
                { item: 'refinedstorage:processor_binding', count: 1 },
                { item: 'fluxnetworks:flux_dust', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'refinedstorage:raw_basic_processor', count: 1 }],
            id: 'refinedstorage:raw_basic_processor'
        },
        {
            inputs: [
                { tag: 'forge:coins/lumium', count: 1 },
                { tag: 'forge:gems/silicon', count: 1 },
                { item: 'refinedstorage:processor_binding', count: 1 },
                { item: 'fluxnetworks:flux_dust', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'refinedstorage:raw_improved_processor', count: 1 }],
            id: 'refinedstorage:raw_improved_processor'
        },
        {
            inputs: [
                { tag: 'forge:coins/enderium', count: 1 },
                { tag: 'forge:gems/silicon', count: 1 },
                { item: 'refinedstorage:processor_binding', count: 1 },
                { item: 'fluxnetworks:flux_dust', count: 1 }
            ],
            pressure: 2.0,
            results: [{ item: 'refinedstorage:raw_advanced_processor', count: 1 }],
            id: 'refinedstorage:raw_advanced_processor'
        }
    ];

    powahTiers.forEach(function (tier) {
        if (tier == 'starter') {
            return;
        }
        let capacitor = `powah:capacitor_${tier}`;
        if (tier == 'basic') {
            capacitor = `powah:capacitor_${tier}_large`;
        }

        recipes.push({
            inputs: [
                { item: 'powah:blank_card', count: 1 },
                { item: 'powah:dielectric_paste', count: 1 },
                { item: capacitor, count: 2 },
                { item: 'powah:ender_core', count: 1 }
            ],
            pressure: 4.0,
            results: [{ item: `powah:ender_gate_${tier}`, count: 1 }],
            id: `powah:crafting/ender_gate_${tier}`
        });
    });

    recipes.forEach((recipe) => {
        let ingredients = [];
        recipe.inputs.forEach((input) => {
            input.type = 'pneumaticcraft:stacked_item';
            ingredients.push(input);
        });

        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: ingredients,
                pressure: recipe.pressure,
                results: recipe.results
            })
            .id(recipe.id);
    });
});
