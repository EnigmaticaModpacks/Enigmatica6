events.listen('item.tags', (event) => {
    event.add('forge:workbench', [
        'minecraft:crafting_table',
        'byg:bulbis_crafting_table',
        'byg:ether_crafting_table',
        'byg:nightshade_crafting_table',
        'betterendforge:jellyshroom_crafting_table',
        'betterendforge:umbrella_tree_crafting_table',
        'betterendforge:helix_tree_crafting_table',
        'betterendforge:tenanea_crafting_table',
        'betterendforge:dragon_tree_crafting_table',
        'betterendforge:pythadendron_crafting_table',
        'betterendforge:end_lotus_crafting_table',
        'betterendforge:lacugrove_crafting_table',
        'betterendforge:mossy_glowshroom_crafting_table'
    ]);
});
