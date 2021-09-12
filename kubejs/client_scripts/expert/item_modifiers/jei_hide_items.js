onEvent('jei.hide.items', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    [/powah:energy_cable_/].forEach((entry) => {
        event.hide(entry);
    });
});
