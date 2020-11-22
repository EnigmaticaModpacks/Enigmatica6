events.listen('block.tags', function (event) {
    event.get('forge:ores/ancient_debris').add('minecraft:ancient_debris');
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
    event.get('forge:ores/nether/gold').add('minecraft:nether_gold_ore');
    event.get('forge:ores/arcane').add('ars_nouveau:arcane_ore');
    // event.get('forge:ores').add('create:zinc_ore');
    // event.get('forge:ores').add('occultism:iesnium_ore');
    //event.get('forge:ores/yellorium').add('bigreactors:yellorite_ore');
});

