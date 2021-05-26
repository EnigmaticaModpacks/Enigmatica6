events.listen('item.tags', (event) => {
    event.add('forge:fertilizer', [
        'botania:fertilizer',
        'thermal:phytogro',
        'farmingforblockheads:green_fertilizer',
        'farmingforblockheads:red_fertilizer',
        'farmingforblockheads:yellow_fertilizer'
    ]);
});
