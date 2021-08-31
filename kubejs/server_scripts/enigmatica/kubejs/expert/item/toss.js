onEvent('item.toss', (event) => {
    if (!event.player.isPlayer() || event.player.isFake()) {
        return;
    }
    const hotIngot = 'kubejs:hot_compressed_iron_ingot';

    if (event.item != hotIngot) {
        return;
    }

    const player = event.player;
    if (!playerHas(hotIngot, player)) {
        if (global.setOnFire) {
            player.extinguish();
            global.setOnFire = false;
        }
    }
});
