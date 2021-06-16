onEvent('jei.hide.fluids', (event) => {
    fluidsToHide.forEach((disabledFluid) => {
        if (!Fluid.of(disabledFluid).isEmpty()) {
            event.hide(disabledFluid);
        }
    });
});
