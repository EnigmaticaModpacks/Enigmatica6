events.listen('fluid.tags', function (event) {
    event.get('forge:crude_oil').add(['immersivepetroleum:oil', 'pneumaticcraft:oil', 'thermal:crude_oil']);
});
