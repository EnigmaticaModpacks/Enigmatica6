onEvent('jei.hide.items', (event) => {
    if (global.isNormalMode == false) {
        return;
    }
    let items = [
        'advancedperipherals:me_bridge',
        'advancedperipherals:colony_integrator'
    ];
    items.forEach((entry) => {
        event.hide(entry);
    });
});
