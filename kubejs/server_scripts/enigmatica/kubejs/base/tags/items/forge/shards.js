events.listen('item.tags', (event) => {
    event.add('forge:shards', [
        'betterendforge:ender_shard',
        'betterendforge:crystal_shards',
        'betterendforge:raw_amber'
    ]);
    event.add('forge:shards/ender', ['betterendforge:ender_shard']);
    event.add('forge:shards/aurora', ['betterendforge:crystal_shards']);
    event.add('forge:shards/amber', ['betterendforge:raw_amber']);
});
