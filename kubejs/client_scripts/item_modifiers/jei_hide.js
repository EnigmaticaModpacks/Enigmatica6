events.listen('jei.hide.items', (event) => {
    global.disabledItems.forEach((item) => {
        event.hide(item);
    });
});
