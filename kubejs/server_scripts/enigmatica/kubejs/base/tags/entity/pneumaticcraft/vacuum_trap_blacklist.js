onEvent('entity_type.tags', (event) => {
    let entities = ['#enigmatica:mob_spawner_blacklist'];
    event.get('pneumaticcraft:vacuum_trap_blacklisted').add(entities);
});
