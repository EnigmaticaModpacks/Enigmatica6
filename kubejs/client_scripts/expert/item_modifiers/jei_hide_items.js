onEvent('jei.hide.items', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    let items = [
        'integrateddynamics:coal_generator',
        /darkutils:export_plate/,
        /integrateddynamics:energy_battery/,
        /powah:energy_cable_/,
        'eidolon:crucible',
        'eidolon:worktable'
    ];
    items.forEach((entry) => {
        event.hide(entry);
    });
});
