onEvent('item.tags', (event) => {
    const items = [
        'emendatusenigmatica:aluminum_chunk',
        'emendatusenigmatica:apatite_chunk',
        'emendatusenigmatica:arcane_chunk',
        'emendatusenigmatica:bitumen_chunk',
        'emendatusenigmatica:coal_chunk',
        'emendatusenigmatica:copper_chunk',
        'emendatusenigmatica:diamond_chunk',
        'emendatusenigmatica:emerald_chunk',
        'emendatusenigmatica:fluorite_chunk',
        'emendatusenigmatica:gold_chunk',
        'emendatusenigmatica:iron_chunk',
        'emendatusenigmatica:lapis_chunk',
        'emendatusenigmatica:lead_chunk',
        'emendatusenigmatica:nickel_chunk',
        'emendatusenigmatica:osmium_chunk',
        'emendatusenigmatica:potassium_nitrate_chunk',
        'emendatusenigmatica:quartz_chunk',
        'emendatusenigmatica:redstone_chunk',
        'emendatusenigmatica:silver_chunk',
        'emendatusenigmatica:tin_chunk',
        'emendatusenigmatica:uranium_chunk',
        'emendatusenigmatica:zinc_chunk'
    ];
    event.get('apotheosis:boon_drops').removeAll().add(items);
});
