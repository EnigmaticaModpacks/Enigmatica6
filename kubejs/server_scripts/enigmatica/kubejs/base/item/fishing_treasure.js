onEvent('item.right_click', (e) => {
    if (e.item.id != 'kubejs:soggy_treasure_box') return;
    //if (!e.player.isPlayer() || e.player.isFake()) return;

    if (!e.player.isCreativeMode()) {
        e.player.getMainHandItem().count--;
    }

    let playerCoords = `${e.player.x} ${e.player.y + 1} ${e.player.z}`;
    e.world.server.runCommand(
        `/execute positioned ${playerCoords} run loot spawn ${playerCoords} loot minecraft:gameplay/fishing/treasure`
    );
});
