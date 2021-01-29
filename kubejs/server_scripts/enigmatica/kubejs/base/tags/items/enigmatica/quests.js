events.listen('item.tags', (event) => {
    event
        .get('enigmatica:quests/storage/gold_to_diamond')
        .add(['ironchest:diamond_chest', 'ironchest:gold_to_diamond_chest_upgrade']);
    event
        .get('enigmatica:quests/storage/iron_to_gold')
        .add(['ironchest:gold_chest', 'ironchest:iron_to_gold_chest_upgrade']);
    event
        .get('enigmatica:quests/storage/wood_to_iron')
        .add(['ironchest:iron_chest', 'ironchest:wood_to_iron_chest_upgrade']);
});
