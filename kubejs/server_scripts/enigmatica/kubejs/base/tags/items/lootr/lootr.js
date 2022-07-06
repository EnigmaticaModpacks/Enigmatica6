onEvent('item.tags', (event) => {
    event.add('lootr:chests', lootChests);
    event.add('lootr:loot_chests', lootChests);
    event.add('lootr:loot', lootChests);
});
