onEvent('item.tags', (event) => {
    colors.forEach((color) => {
        event.get('forge:ceramics').add(`atum:ceramic_${color}`);
        event.get(`forge:ceramics/${color}`).add(`atum:ceramic_${color}`);
    });
});
