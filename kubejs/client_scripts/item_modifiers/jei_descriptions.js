events.listen('jei.information', (event) => {
    var data = {
        items: [
            {
                item: 'simplefarming:cheese_slice',
                description: 'Obtained by right-clicking a Wheel of Cheese.'
            }
        ]
    };
    data.items.forEach(function (pair) {
        event.add(pair.item, pair.description);
    });

    global.disabledItems.forEach((item) => {
        event.add(
            item,
            "This item has been disabled, if you managed to obtain it please report it on Enigmatica 6's issue tracker: https://github.com/NillerMedDild/Enigmatica6/issues"
        );
    });
});
