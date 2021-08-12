onEvent('block.tags', (event) => {
    let items = [
        'minecraft:crafting_table',
        /betterendforge:\w+_crafting_table/,
        /byg:\w+_crafting_table/,
        /mctb:\w+_crafting_table/
    ];

    event.add('forge:workbenches', items);
    event.add('forge:workbench', items);
});
