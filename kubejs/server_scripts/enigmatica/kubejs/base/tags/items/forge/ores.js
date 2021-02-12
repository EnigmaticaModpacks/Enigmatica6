events.listen('item.tags', (event) => {
    event
        .get('forge:ores')
        .add(['powah:uraninite_ore_poor', 'powah:uraninite_ore', 'powah:uraninite_ore_dense'])
        .add('minecraft:ancient_debris')
        .add('occultism:iesnium_ore');
    event
        .get('forge:ores/dimensional')
        .add([
            'rftoolsbase:dimensionalshard_overworld',
            'rftoolsbase:dimensionalshard_nether',
            'rftoolsbase:dimensionalshard_end'
        ]);

    event.get('forge:ores/nether/gold').add('minecraft:nether_gold_ore');
    event.get('forge:ores/netherite_scrap').remove('minecraft:ancient_debris');
    event.get('forge:ores/netherite').add('minecraft:ancient_debris');
});
