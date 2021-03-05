events.listen('recipes', (event) => {
    if (!normalMode) {
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
