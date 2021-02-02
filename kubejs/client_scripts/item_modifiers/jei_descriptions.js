events.listen('jei.information', (event) => {
    var data = {
        items: [
            {
                item: 'simplefarming:cheese_slice',
                description: ['Obtained by right-clicking a Wheel of Cheese.']
            },
            {
                item: 'astralsorcery:stardust',
                description: [
                    'Obtained by left-clicking a Starmetal Ingot in-world. See the Astral Tome for more information.'
                ]
            },
            {
                item: 'buildinggadgets:construction_paste',
                description: [
                    'Obtained by breaking a Dense Construction Block with a Pickaxe.'
                ]
            }
        ]
    };

    data.items.forEach(function (item) {
        event.add(item.item, item.description);
    });

    disabledItems.forEach((item) => {
        event.add(
            item,
            "This item has been disabled, if you managed to obtain it please report it on Enigmatica 6's issue tracker: https://github.com/NillerMedDild/Enigmatica6/issues"
        );
    });

    refinedStorageItems.forEach((item) => {
        event.add(`refinedstorage:${item}`, 'Can be dyed through crafting or by right clicking it with dye in-world.');
    });

    generatableCobblestone.forEach((cobblestone) => {
        event.add(
            cobblestone,
            'Can be generated in a Vanilla Cobblestone Generator. The block below where the Cobblestone generates needs to be a Block of Iron.'
        );
    });

    generatableStone.forEach((stone) => {
        event.add(
            stone,
            'Can be generated in a Vanilla Stone Generator. The block below where the Stone generates needs to be a Block of Diamond.'
        );
    });
});
