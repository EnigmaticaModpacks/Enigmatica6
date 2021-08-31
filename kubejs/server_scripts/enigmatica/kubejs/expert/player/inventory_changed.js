onEvent('player.inventory.changed', (event) => {
    if (!event.player.isPlayer() || event.player.isFake()) {
        return;
    }

    const hotIngot = 'kubejs:hot_compressed_iron_ingot';
    console.log('event.item: ' + event.item);

    if (event.item != hotIngot) {
        return;
    }

    const player = event.player;
    const item = event.item;
    if (playerHas(hotIngot, player)) {
        if (!player.isInWater()) {
            event.player.setStatusMessage([Text.of(`The ${item.name} is burning hot!`).red()]);
            event.player.setOnFire(180);
        }
    } else {
        player.extinguish();
    }
});
