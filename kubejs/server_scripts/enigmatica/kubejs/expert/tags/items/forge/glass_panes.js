onEvent('item.tags', (event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.removeAllTagsFrom('atum:crystal_glass_pane');
    colors.forEach((color) => {
        event.removeAllTagsFrom('atum:' + color + '_stained_crystal_glass_pane');
    });
});
