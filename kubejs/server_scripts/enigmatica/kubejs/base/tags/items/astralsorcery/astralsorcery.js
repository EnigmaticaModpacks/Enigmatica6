events.listen('item.tags', function (event) {
    event
        .get('astralsorcery:crystals/collector')
        .add('astralsorcery:celestial_collector_crystal')
        .add('astralsorcery:rock_collector_crystal');
    event
        .get('astralsorcery:crystals/attuned')
        .add('astralsorcery:attuned_celestial_crystal')
        .add('astralsorcery:attuned_rock_crystal');
});
