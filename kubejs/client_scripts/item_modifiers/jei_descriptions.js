events.listen('jei.information', (event) => {
    // var data = {
    //     items: [
    //         { item: 'mekanism:jetpack', description: 'Cannot be enchanted.' },
    //         { item: 'mekanism:jetpack_armored', description: 'Cannot be enchanted.' }
    //     ]
    // };
    // data.items.forEach(function (pair) {
    //     event.add(pair.item, pair.description);
    // });

    disabledItems.forEach((item) => {
        event.add(
            item,
            "This item has been disabled, if you managed to obtain it please report it on Enigmatica 6's issue tracker: https://github.com/NillerMedDild/Enigmatica6/issues"
        );
    });
});
