onEvent('entity_type.tags', (event) => {
    let entities = ['eidolon:zombie_brute', 'minecraft:zombified_piglin', 'atum:mummy'];
    event.get('forge:zombies').add(entities);
});
