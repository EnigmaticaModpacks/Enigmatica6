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
            temperature: 800,
            time: 58,
            id: '${id_prefix}molten_gold/chain'
        },
        {
            ingredient: { item: 'betterendforge:thalassium_chain' },
            result: { fluid: 'tconstruct:molten_thalassium', amount: 22 },
            temperature: 800,
            time: 58,
            id: '${id_prefix}molten_thalassium'
        },
        {
            ingredient: { item: 'betterendforge:terminite_chain' },
            result: { fluid: 'tconstruct:molten_terminite', amount: 22 },
            temperature: 840,
            time: 58,
            id: '${id_prefix}molten_terminite'
        },
        {
            ingredient: { item: 'atum:nebu_chain' },
            result: { fluid: 'tconstruct:molten_nebu', amount: 22 },
            temperature: 1400,
            time: 58,
            id: '${id_prefix}molten_nebu'
        },
        {
            ingredient: { item: 'environmental:ice_chain' },
            result: { fluid: 'tconstruct:molten_iron', amount: 4 },
            temperature: 800,
            time: 58,
            id: '${id_prefix}molten_iron'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'tconstruct:melting';
        event.custom(recipe).id(recipe.id);
    });
});
