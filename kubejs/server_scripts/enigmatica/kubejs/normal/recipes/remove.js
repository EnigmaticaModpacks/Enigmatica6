onEvent('recipes', (event) => {
    if (global.isNormalMode == false) {
        return;
    }

    var outputRemovals = [
        'torchmaster:feral_flare_lantern',
        'torchmaster:megatorch',
        'quark:white_candle',
        'occultism:candle_white',
        'eidolon:candle'
    ];

    var idRemovals = [];

    outputRemovals.forEach(function (removal) {
        event.remove({ output: removal });
    });

    idRemovals.forEach(function (removal) {
        event.remove({ id: removal });
    });
});
