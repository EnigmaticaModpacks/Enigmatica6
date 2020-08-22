events.listen('item.tags', function (event) {
    event
        .get('enigmatica:crafting_materials/diamond')
        .add('mekanism:enriched_diamond')
        .add('botania:mana_diamond')
        .add('titanium:diamond_gear')
        .add('productivebees:honeycomb_diamond')
        .add('minecraft:diamond_block');
});
