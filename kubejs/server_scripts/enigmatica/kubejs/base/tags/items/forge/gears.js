events.listen('item.tags', (event) => {
    event.get('forge:gears').add('pneumaticcraft:compressed_iron_gear');
    event.get('forge:gears/compressed_iron').add('pneumaticcraft:compressed_iron_gear');
});
