onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.remove({ id: /powah:crafting\/cable_/ });
});
