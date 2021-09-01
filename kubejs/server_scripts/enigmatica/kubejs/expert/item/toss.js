onEvent('item.toss', (event) => {
    if (!event.player.isPlayer() || event.player.isFake()) {
        return;
    }
    const hotItems = ['kubejs:hot_compressed_iron_ingot', 'kubejs:superheated_steel_ingot'];

    if (!hotItems.includes(event.item)) {
        return;
    }

    const player = event.player;
    if (playerHasAny(hotItems, player)) {
        if (global.setOnFire) {
            player.extinguish();
            global.setOnFire = false;
        }
    }
});
