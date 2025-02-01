

onEvent('jei.hide.items', (event) => {
    if (!isAE2Loaded) {
        return;
    }
    if (global.isExpertMode == false) {
        return;
    }
    
    itemsToHideAE.forEach((entry) => {
        event.hide(entry);
    });

});
