onEvent('jei.hide.items', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    let items = [
        'darkutils:rune_damage_player',
        /darkutils:export_plate/,
        /powah:energy_cable_/,
        'pneumaticcraft:air_compressor',
        'pneumaticcraft:advanced_air_compressor'
    ];
    items.forEach((entry) => {
        event.hide(entry);
    });
});
