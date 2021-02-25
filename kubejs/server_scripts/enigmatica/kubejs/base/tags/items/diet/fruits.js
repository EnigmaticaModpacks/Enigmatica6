events.listen('item.tags', (event) => {
    event.add('diet:fruits', [
        'integrateddynamics:menril_berries',
        'betterendforge:shadow_berry_raw',
        'betterendforge:shadow_berry_cooked',
        'betterendforge:sweet_berry_jelly',
        'betterendforge:shadow_berry_jelly',
        'betterendforge:blossom_berry',
        'undergarden:blisterberry',
        'byg:baobab_fruit',
        'byg:holly_berries',
        'byg:green_apple',
        'byg:cooked_joshua_fruit',
        'byg:joshua_fruit',
        'byg:crimson_berries',
        'byg:nightshade_berries',
        'byg:blueberries',
        'ars_nouveau:mana_berry'
    ]);
});
