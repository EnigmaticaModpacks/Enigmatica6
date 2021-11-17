onEvent('item.tags', (event) => {
    powahTiers.forEach(function (tier) {
        powahBlocks.forEach(function (block) {
            if (tier != 'starter') {
                event.get('powah:' + block).add('powah:' + block + '_' + tier);
            }
        });
    });
});
