events.listen('recipes', (event) => {
    honeyVarieties.forEach((honeyVariety) => {
        var output = honeyVariety + '_block';

        if (honeyVariety == 'resourcefulbees:honey') {
            output = 'minecraft:honey_block';
        }

        event.custom({
            type: 'pneumaticcraft:heat_frame_cooling',
            input: {
                type: 'pneumaticcraft:fluid',
                tag: honeyVariety,
                amount: 1000
            },
            max_temp: 273,
            result: {
                item: output
            }
        });
        //event.recipes.thermal.chiller(item.of(honeyVariety + '_block'), fluid.of(honeyVariety, 1000));
    });
});
