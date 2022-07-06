onEvent('item.toss', (event) => {
    const player = event.player;
    if (!player.isPlayer() || player.isFake()) {
        return;
    }

    if (!event.item.hasTag('enigmatica:burning_hot')) {
        return;
    }

    if (!playerHas('#enigmatica:burning_hot', player)) {
        if (global.setOnFire) {
            player.extinguish();
            global.setOnFire = false;
        }
    }
});
