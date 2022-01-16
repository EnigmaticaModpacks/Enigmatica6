onEvent('item.tags', (event) => {
    colors.forEach((color) => {
        event.get('atum:linen').add(`atum:linen_${color}`);
        event.get('atum:linen_carpet').add(`atum:linen_carpet_${color}`);
    });
});
