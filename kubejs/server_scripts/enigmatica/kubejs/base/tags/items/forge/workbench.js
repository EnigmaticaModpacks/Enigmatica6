onEvent('item.tags', (event) => {
    event.add('forge:workbenches', [
        'minecraft:crafting_table',
        /betterendforge:\w+_crafting_table/,
        /byg:\w+_crafting_table/,
        /mctb:\w+_crafting_table/
    ]);
});
