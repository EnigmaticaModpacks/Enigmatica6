events.listen('item.tags', function (event) {
    event
        .get('forge:ores')
        .add(['powah:uraninite_ore_poor', 'powah:uraninite_ore', 'powah:uraninite_ore_dense'])
        .add('minecraft:ancient_debris');
    event
        .get('forge:ores/dimensional')
        .add([
            'rftoolsbase:dimensionalshard_overworld',
            'rftoolsbase:dimensionalshard_nether',
            'rftoolsbase:dimensionalshard_end'
        ]);

    event.get('forge:ores/cloggrum').add('undergarden:cloggrum_ore');
    event.get('forge:ores/froststeel').add('undergarden:froststeel_ore');
    event.get('forge:ores/utherium').add('undergarden:utherium_ore');
    event.get('forge:ores/regalium').add('undergarden:regalium_ore');

    event.get('forge:ores/nether/gold').add('minecraft:nether_gold_ore');
    event.get('forge:ores/arcane').add('ars_nouveau:arcane_ore');
    event.get('forge:ores/netherite_scrap').remove('minecraft:ancient_debris');
    event.get('forge:ores/netherite').add('minecraft:ancient_debris');

    // event.get('forge:ores').add('occultism:iesnium_ore');
    //event.get('forge:ores/yellorium').add('bigreactors:yellorite_ore');
});
