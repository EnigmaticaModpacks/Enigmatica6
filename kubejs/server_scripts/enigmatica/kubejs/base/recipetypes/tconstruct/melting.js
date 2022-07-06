onEvent('recipes', (event) => {
    const id_prefix = 'enigmatica:base/tconstruct/melting/';
    const recipes = [
        {
            ingredient: { tag: 'forge:plates/emerald' },
            result: { fluid: 'tconstruct:molten_emerald', amount: 144 },
            temperature: 934,
            time: 64,
            id: `${id_prefix}molten_emerald_from_plate`
        },
        {
            ingredient: { tag: 'forge:plates/diamond' },
            result: { fluid: 'tconstruct:molten_diamond', amount: 144 },
            temperature: 1450,
            time: 79,
            id: `${id_prefix}molten_diamond_from_plate`
        },
        {
            ingredient: { tag: 'forge:rods/emerald' },
            result: { fluid: 'tconstruct:molten_emerald', amount: 144 },
            temperature: 934,
            time: 64,
            id: `${id_prefix}molten_emerald_from_rod`
        },
        {
            ingredient: { tag: 'forge:rods/diamond' },
            result: { fluid: 'tconstruct:molten_diamond', amount: 144 },
            temperature: 1450,
            time: 79,
            id: `${id_prefix}molten_diamond_from_rod`
        },
        {
            ingredient: { tag: 'forge:gears/emerald' },
            result: { fluid: 'tconstruct:molten_emerald', amount: 576 },
            temperature: 934,
            time: 256,
            id: `${id_prefix}molten_emerald_from_gear`
        },
        {
            ingredient: { tag: 'forge:gears/diamond' },
            result: { fluid: 'tconstruct:molten_diamond', amount: 576 },
            temperature: 1450,
            time: 316,
            id: `${id_prefix}molten_diamond_from_gear`
        },
        {
            ingredient: { item: 'dustrial_decor:barbed_iron_bars' },
            result: { fluid: 'tconstruct:molten_iron', amount: 48 },
            temperature: 800,
            time: 160,
            id: `${id_prefix}molten_iron_from_barbed_iron_bars`
        },
        {
            ingredient: { item: 'quark:gold_bars' },
            result: { fluid: 'tconstruct:molten_gold', amount: 48 },
            temperature: 700,
            time: 160,
            id: `${id_prefix}molten_gold`
        },
        {
            ingredient: { item: 'thermal:obsidian_glass' },
            result: { fluid: 'kubejs:molten_hardened_glass', amount: 1000 },
            temperature: 1400,
            time: 64,
            id: `${id_prefix}molten_hardened_glass`
        },
        {
            ingredient: { item: 'thermal:signalum_glass' },
            result: { fluid: 'kubejs:molten_signalum_glass', amount: 1000 },
            temperature: 1400,
            time: 64,
            id: `${id_prefix}molten_signalum_glass`
        },
        {
            ingredient: { item: 'thermal:lumium_glass' },
            result: { fluid: 'kubejs:molten_lumium_glass', amount: 1000 },
            temperature: 1400,
            time: 64,
            id: `${id_prefix}molten_lumium_glass`
        },
        {
            ingredient: { item: 'thermal:enderium_glass' },
            result: { fluid: 'kubejs:molten_enderium_glass', amount: 1000 },
            temperature: 1400,
            time: 64,
            id: `${id_prefix}molten_enderium_glass`
        },
        {
            ingredient: { item: 'minecraft:chain' },
            result: { fluid: 'tconstruct:molten_iron', amount: 22 },
            temperature: 800,
            time: 58,
            id: 'tconstruct:smeltery/melting/metal/iron/chain'
        },
        {
            ingredient: { item: 'dustrial_decor:gold_chain' },
            result: { fluid: 'tconstruct:molten_gold', amount: 22 },
            temperature: 700,
            time: 58,
            id: `${id_prefix}molten_gold_from_gold_chain`
        },
        {
            ingredient: { item: 'betterendforge:thallasium_chain' },
            result: { fluid: 'emendatusenigmatica:molten_thallasium', amount: 22 },
            temperature: 800,
            time: 58,
            id: `${id_prefix}molten_thallasium_from_thallasium_chain`
        },
        {
            ingredient: { item: 'betterendforge:terminite_chain' },
            result: { fluid: 'kubejs:molten_terminite', amount: 22 },
            temperature: 840,
            time: 58,
            id: `${id_prefix}molten_terminite_from_terminite_chain`
        },
        {
            ingredient: { item: 'atum:nebu_chain' },
            result: { fluid: 'emendatusenigmatica:molten_nebu', amount: 22 },
            temperature: 1400,
            time: 58,
            id: `${id_prefix}molten_nebu_from_nebu_chain`
        },
        {
            ingredient: { item: 'environmental:ice_chain' },
            result: { fluid: 'tconstruct:molten_iron', amount: 22 },
            temperature: 800,
            time: 58,
            id: `${id_prefix}molten_iron_from_ice_chain`
        },
        {
            ingredient: { tag: 'forge:storage_blocks/redstone' },
            result: { fluid: 'thermal:redstone', amount: 900 },
            temperature: 660,
            time: 64 * 9,
            id: `${id_prefix}destabilized_redstone_from_redstone_block`
        },
        {
            ingredient: { tag: 'forge:dusts/redstone' },
            result: { fluid: 'thermal:redstone', amount: 100 },
            temperature: 660,
            time: 64,
            id: `${id_prefix}destabilized_redstone_from_redstone_dust`
        },
        {
            ingredient: { tag: 'forge:ores/utherium' },
            result: { fluid: 'materialis:molten_utherium', amount: 288 },
            temperature: 1070,
            time: 20 * 20,
            byproducts: [{ fluid: 'materialis:molten_regalium', amount: 48 }],
            id: 'materialis:smeltery/melting/metal/utherium/ore'
        },
        {
            ingredient: { tag: 'forge:ores/starmetal' },
            result: { fluid: 'materialis:molten_starmetal', amount: 288 },
            temperature: 750,
            time: 20 * 22,
            byproducts: [{ fluid: 'materialis:molten_starmetal', amount: 48 }],
            id: 'materialis:smeltery/melting/metal/starmetal/ore'
        },
        {
            ingredient: { tag: 'forge:storage_blocks/glowstone' },
            result: { fluid: 'thermal:glowstone', amount: 1000 },
            temperature: 825,
            time: 64 * 4,
            id: `${id_prefix}energized_glowstone_from_glowstone_block`
        },
        {
            ingredient: { tag: 'forge:dusts/glowstone' },
            result: { fluid: 'thermal:glowstone', amount: 250 },
            temperature: 825,
            time: 64,
            id: `${id_prefix}energized_glowstone_from_glowstone_dust`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:melting';
        event.custom(recipe).id(recipe.id);
    });
});
