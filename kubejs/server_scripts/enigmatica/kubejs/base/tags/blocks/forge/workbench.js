onEvent('block.tags', (event) => {
    event.add('forge:workbench', [
        'minecraft:crafting_table',
        /betterendforge:\w+_crafting_table/,
        /byg:\w+_crafting_table/,
        /mcth:\w+_crafting_table/
    ]);
});
