events.listen('item.tags', (event) => {
    event.add('tetra:forge_hammer_upgrades', [
        'tetra:combustion_chamber',
        'tetra:planar_stabilizer',
        'tetra:vent_plate'
    ]);
});
