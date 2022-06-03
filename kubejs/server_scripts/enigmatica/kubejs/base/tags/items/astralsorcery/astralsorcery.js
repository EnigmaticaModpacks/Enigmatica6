onEvent('item.tags', (event) => {
    event
        .get('astralsorcery:crystals/collector')
        .add('astralsorcery:celestial_collector_crystal')
        .add('astralsorcery:rock_collector_crystal');
    event
        .get('astralsorcery:crystals/attuned')
        .add('astralsorcery:attuned_celestial_crystal')
        .add('astralsorcery:attuned_rock_crystal');
    event
        .get('astralsorcery:stars/irradiant')
        .add('astralsorcery:shifting_star_vicio')
        .add('astralsorcery:shifting_star_evorsio')
        .add('astralsorcery:shifting_star_discidia')
        .add('astralsorcery:shifting_star_armara')
        .add('astralsorcery:shifting_star_aevitas');
});
