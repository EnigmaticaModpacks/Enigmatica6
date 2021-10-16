onEvent('jei.hide.items', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    let items = [
        'darkutils:rune_damage_player',
        /darkutils:export_plate/,
        'integrateddynamics:energy_battery',
        'integrateddynamics:mechanical_squeezer',
        'integrateddynamics:mechanical_drying_basin',
        'integrateddynamics:squeezer',
        'integrateddynamics:drying_basin',
        'integrateddynamics:coal_generator',
        /powah:energy_cable_/,
        'pneumaticcraft:air_compressor',
        'pneumaticcraft:advanced_air_compressor'
    ];
    items.forEach((entry) => {
        event.hide(entry);
    });
});
