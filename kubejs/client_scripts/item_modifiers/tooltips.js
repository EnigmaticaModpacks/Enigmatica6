onEvent('client.item_tooltip', (event) => {
    refinedStorageItems.forEach((item) => {
        if (event.item.id == 'refinedstorage:' + item) {
            event.add('Can be dyed through crafting or by right clicking it with dye in-world.');
        }
    });
});
