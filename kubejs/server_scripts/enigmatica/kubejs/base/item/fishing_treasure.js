onEvent('item.right_click', (e) => {
    if (e.item.id != 'kubejs:soggy_treasure_box') return;
    if (!e.player.isCreativeMode()) {
        e.player.getMainHandItem().count--;
    }
    let lootTable = 'enigmatica:chests/soggy_treasure_box';
    let lootDrops = Utils.rollChestLoot(lootTable);

    if (!player.isPlayer() || player.isFake()) {
        //kludge until a better handler is available to drop the item at the fake player's location.
        let playerCoords = `${e.player.x} ${e.player.y + 1} ${e.player.z}`;
        e.world.server.runCommand(
            `/execute positioned ${playerCoords} run loot spawn ${playerCoords} loot ${lootTable}`
        );
    } else {
        lootDrops.forEach((lootDrop) => {
            e.player.give(lootDrop);
        });
    }
});
