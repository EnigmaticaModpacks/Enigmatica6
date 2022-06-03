onEvent('entity_type.tags', (event) => {
    let entities = ['atum:villager_male', 'atum:villager_female', 'undergarden:stoneborn'];
    event.get('forge:villagers').add(entities);
});
