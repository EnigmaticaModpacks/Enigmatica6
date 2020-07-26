events.listen('recipes', function (event) {
    if (global.packmode !== 'normal') {
        return;
    }

    var outputRemovals = ['torchmaster:feral_flare_lantern', 'torchmaster:megatorch'];

    var idRemovals = [];

    outputRemovals.forEach(function (removal) {
        event.remove({ output: removal });
    });

    idRemovals.forEach(function (removal) {
        event.remove({ id: removal });
    });
});
