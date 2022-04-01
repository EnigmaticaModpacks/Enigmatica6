onEvent('item.tags', (event) => {
    event.get('tconstruct:slime_crystal').add(/tconstruct:\w+_slime_crystal/);
});
