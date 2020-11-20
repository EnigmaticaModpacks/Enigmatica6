events.listen('jei.hide.items', (event) => {
    disabledItems.forEach((item) => {
        event.hide(item);
    });
});
