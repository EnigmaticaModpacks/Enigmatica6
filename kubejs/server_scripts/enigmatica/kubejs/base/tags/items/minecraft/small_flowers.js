events.listen('item.tags', (event) => {
    var items = ['byg:prickly_pear_cactus', 'byg:mini_cactus'];
    event.get('minecraft:flowers').add(items);
    event.get('minecraft:small_flowers').add(items);
});
