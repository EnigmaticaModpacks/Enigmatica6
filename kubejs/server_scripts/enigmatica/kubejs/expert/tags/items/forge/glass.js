onEvent('item.tags', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.removeAllTagsFrom('atum:crystal_glass');
    colors.forEach((color) => {
        event.removeAllTagsFrom('atum:' + color + '_stained_crystal_glass');
    });
});
