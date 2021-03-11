events.listen('item.tags', (event) => {
    event.add('create:upright_on_belt', fishBuckets);
    event.add('create:upright_on_belt', ['quark:slime_in_a_bucket'])
});
