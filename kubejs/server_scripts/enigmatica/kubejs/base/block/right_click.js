onEvent('block.right_click', (event) => {
    const glowItem = 'minecraft:glowstone_dust';
    const glowBlock = 'mininggadgets:minerslight';

    if (event.item.id != glowItem) return;

    let targetBlock = event.block.offset(event.facing);
    if ((targetBlock.id == 'minecraft:air' || targetBlock.id == 'minecraft:cave_air') && event.player.isCrouching()) {
        targetBlock.set(glowBlock);
        if (!event.player.isCreativeMode()) {
            event.item.count--;
        }
        event.cancel();
    }
});
