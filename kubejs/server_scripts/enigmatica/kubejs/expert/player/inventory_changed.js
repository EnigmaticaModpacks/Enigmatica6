onEvent('player.inventory.changed', (event) => {
    const player = event.player;
    if (!player.isPlayer() || player.isFake()) {
        return;
    }

    if (!event.item.hasTag('enigmatica:burning_hot')) {
        return;
    }

    if (!player.isInWater()) {
        event.player.setStatusMessage([Text.of(`A hot item is burning you!`).red()]);
        event.player.setOnFire(180);
        global.setOnFire = true;
    }
});
