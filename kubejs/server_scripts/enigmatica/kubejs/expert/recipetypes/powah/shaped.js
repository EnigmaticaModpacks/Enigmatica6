onEvent('recipes', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    // TODO: Remove Powah cables when recipes using them are changed
    // event.remove({ id: /powah:crafting\/cable_/ });
});
