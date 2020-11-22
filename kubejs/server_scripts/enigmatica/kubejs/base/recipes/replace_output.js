events.listen('recipes', function (event) {
    event.replaceOutput({}, 'thermal:cinnabar', '#forge:gems/cinnabar');
    event.replaceOutput({}, 'thermal:sulfur', '#forge:gems/sulfur');
    event.replaceOutput({}, 'thermal:apatite', '#forge:gems/apatite');
    event.replaceOutput({}, 'thermal:niter', '#forge:gems/niter');
});
