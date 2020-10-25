events.listen('item.tags', function (event) {
    event.get('forge:tools').add('#forge:fillet_knife');
    event.get('forge:tools/knife').add('#forge:fillet_knife');
    event.get('forge:fillet_knife').add('#farmersdelight:tools/knife');
});
