onEvent('jei.hide.items', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    [/powah:energy_cable_/, 'pneumaticcraft:air_compressor', 'pneumaticcraft:advanced_air_compressor'].forEach(
        (entry) => {
            event.hide(entry);
        }
    );
});
