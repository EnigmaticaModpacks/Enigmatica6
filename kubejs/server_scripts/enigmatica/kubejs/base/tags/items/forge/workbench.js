events.listen('item.tags', (event) => {
    event.get('forge:workbench').add('minecraft:crafting_table');
});
