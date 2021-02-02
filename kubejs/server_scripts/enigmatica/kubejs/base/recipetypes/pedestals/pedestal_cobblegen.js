events.listen('recipes', function (event) {
    event.remove({ id: 'pedestals:pedestal_cobblegen/blackstone' });
    generatableCobblestone.forEach((cobblestone) => {
        event.custom({
            type: 'pedestals:pedestal_cobblegen',
            ingredient: {
                item: cobblestone
            },
            result: {
                item: cobblestone,
                count: 1
            }
        });
    });
    generatableStone.forEach((stone) => {
        event.custom({
            type: 'pedestals:pedestal_cobblegensilk',
            ingredient: {
                item: stone
            },
            result: {
                item: stone,
                count: 1
            }
        });
    });
});
