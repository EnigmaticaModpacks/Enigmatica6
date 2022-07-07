onEvent('item.tags', (event) => {
    event.add('forge:fruits', [
        'ars_nouveau:mana_berry',
        'betterendforge:blossom_berry',
        'betterendforge:shadow_berry_raw',
        'atmospheric:yucca_fruit',
        'atmospheric:passionfruit',
    ]);

    event.add('forge:fruits/mana_berry', ['ars_nouveau:mana_berry']);
    event.add('forge:fruits/blossom_berry', ['betterendforge:blossom_berry']);
    event.add('forge:fruits/shadow_berry', ['betterendforge:shadow_berry_raw']);
    event.add('forge:fruits/yucca_fruit', ['atmospheric:yucca_fruit']);
    event.add('forge:fruits/passionfruit', ['atmospheric:passionfruit']);
    event.add('forge:fruits/menril_berries', ['integrateddynamics:menril_berries']);
    event.add('forge:fruits/blueberries', ['byg:blueberries']);
    event.add('forge:fruits/cherries', ['environmental:cherries']);
});
