onEvent('item.tags', (event) => {
    event.add('minecraft:leaves/coniferous', [
        'atmospheric:aspen_leaves',
        'byg:brown_zelkova_leaves',
        'byg:aspen_leaves',
        'byg:fir_leaves',
        'byg:redwood_leaves',
        'byg:zelkova_leaves',
        'byg:araucaria_leaves',
        'minecraft:spruce_leaves',
        'byg:blue_spruce_leaves',
        'byg:orange_spruce_leaves',
        'byg:red_spruce_leaves',
        'byg:yellow_spruce_leaves',
        'byg:pine_leaves'
    ]);

    event.add('minecraft:leaves', ['sushigocrafting:avocado_leaves', /ars_nouveau:\w+_leaves/]);
});
