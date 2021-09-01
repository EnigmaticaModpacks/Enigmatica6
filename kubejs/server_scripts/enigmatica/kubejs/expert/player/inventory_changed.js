onEvent('player.inventory.changed', (event) => {
    if (!event.player.isPlayer() || event.player.isFake()) {
        return;
    }
    const hotItems = ['kubejs:hot_compressed_iron_ingot', 'kubejs:superheated_steel_ingot'];

    if (!hotItems.includes(event.item)) {
        return;
    }

    const player = event.player;
    const item = event.item;
    if (playerHasAny(hotItems, player)) {
        if (!player.isInWater()) {
            event.player.setStatusMessage([Text.of(`A hot item is burning you!`).red()]);
            event.player.setOnFire(180);
            global.setOnFire = true;
        }
    } /* else {
         extinguish handled in item.toss event
    }*/
});
