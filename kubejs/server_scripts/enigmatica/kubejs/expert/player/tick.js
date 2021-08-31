onEvent('player.tick', (event) => {
    if (!event.player.isPlayer() || event.player.isFake()) {
        return;
    }
    const hotIngot = 'kubejs:hot_compressed_iron_ingot';
    const player = event.player;

    if (player.isInWater()) {
        const playerHasHotIngot = playerHas(hotIngot, player);
        if (playerHasHotIngot) {
            console.log('trying to convert hot ingots');

            let hotIngotCount = player.inventory.count(hotIngot);
            console.log('hot ingot count: ' + hotIngotCount);
            player.inventory.clear(Item.of(hotIngot));
            player.give(Item.of('pneumaticcraft:ingot_iron_compressed', hotIngotCount));
            player.sendInventoryUpdate();
        }
    }
});
