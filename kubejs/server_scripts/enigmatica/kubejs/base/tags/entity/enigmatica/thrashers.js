onEvent('entity_type.tags', (event) => {
    let entities = ['upgrade_aquatic:great_thrasher', 'upgrade_aquatic:thrasher'];
    event.get('enigmatica:thrashers').add(entities);
});
