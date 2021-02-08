events.listen('item.tags', function (event) {
    powahTiers.forEach(function (tier) {
        powahBlocks.forEach(function (block) {
            event.get('powah:' + block).add('powah:' + block + '_' + tier);
        });
    });
});
