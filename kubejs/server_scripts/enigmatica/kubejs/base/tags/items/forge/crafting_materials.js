events.listen('item.tags', (event) => {
    event
        .get('enigmatica:crafting_materials/diamond')
        .add('mekanism:enriched_diamond')
        .add('botania:mana_diamond')
        .add('titanium:diamond_gear')
        .add('minecraft:diamond_block');
    event
        .get('enigmatica:crafting_materials/beach_grass')
        .add('byg:beach_grass')
        .add('upgrade_aquatic:beachgrass');
});
