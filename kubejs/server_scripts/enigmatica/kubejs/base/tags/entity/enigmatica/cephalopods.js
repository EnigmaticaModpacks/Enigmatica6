onEvent('entity_type.tags', (event) => {
    let entities = [
        'minecraft:squid',
        'upgrade_aquatic:glow_squid',
        'upgrade_aquatic:nautilus',
        'alexsmobs:mimic_octopus'
    ];
    event.get('enigmatica:cephalopods').add(entities);
});
