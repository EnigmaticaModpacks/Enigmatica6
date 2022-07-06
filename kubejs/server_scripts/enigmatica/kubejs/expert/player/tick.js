onEvent('player.tick', (event) => {
    if (!event.player.isPlayer() || event.player.isFake()) {
        return;
    }
    const hotIngot = 'kubejs:hot_compressed_iron_ingot';
    const player = event.player;
    const playerIsInWater = player.isInWater();
    if (playerIsInWater) {
        if (playerHas(hotIngot, player)) {
            let hotIngotCount = player.inventory.count(hotIngot);
            player.inventory.clear(Item.of(hotIngot));
            player.give(Item.of('pneumaticcraft:ingot_iron_compressed', hotIngotCount));
            player.sendInventoryUpdate();
        }
    }
});
