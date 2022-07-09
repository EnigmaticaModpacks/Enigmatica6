// priority: 9

onEvent('ponder.registry', (event) => {
    event
        .create('enigmatica:respawn_ender_dragon', [
            'minecraft:end_crystal',
            'minecraft:dragon_egg',
            'minecraft:dragon_head'
        ])

        .scene(
            'respawn_ender_dragon',
            'Ender Dragon Respawning - when you need to make an omlet',
            'enigmatica:enigmatica/ender_dragon/end_portal',
            (scene, util) => {
                scene.showBasePlate();

                scene.idle(20);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`So, you've killed the Ender Dragon and activated the end portal - congrats!`)
                    .independent(60);

                scene.idle(30);

                scene.addKeyframe();

                scene.world().showSection(util.select().layersFrom(1), Facing.south);

                scene.idle(40);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`But now you need to summon it again - maybe you need another dragon egg or head.`)
                    .independent(180);

                scene.idle(10);
                scene.world().setBlocks(util.select().position(4, 5, 4), util.getDefaultState('minecraft:air'), true);
                scene.world().setBlocks(util.select().position(4, 4, 3), util.getDefaultState('minecraft:air'), true);
                scene.idle(60);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`Place End Crystals on the four sides of the portal frame, like this.`)
                    .independent(90);

                scene.idle(10);

                var crystal1 = scene.world().createEntity('minecraft:end_crystal', [1.5, 2, 4.5]);
                scene.world().modifyEntity(crystal1, { ShowBottom: '0b' });
                scene.world().modifyEntity(crystal1, (e) => {
                    let NBT = e.getFullNBT();
                    NBT.ShowBottom = false;
                    e.setFullNBT(NBT);
                });
                scene.idle(20);
                var crystal2 = scene.world().createEntity('minecraft:end_crystal', [4.5, 2, 1.5]);
                scene.world().modifyEntity(crystal2, (e) => {
                    let NBT = e.getFullNBT();
                    NBT.ShowBottom = false;
                    e.setFullNBT(NBT);
                });
                scene.idle(20);
                var crystal3 = scene.world().createEntity('minecraft:end_crystal', [7.5, 2, 4.5]);
                scene.world().modifyEntity(crystal3, (e) => {
                    let NBT = e.getFullNBT();
                    NBT.ShowBottom = false;
                    e.setFullNBT(NBT);
                });
                scene.idle(20);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`Placing the last one will shut off the End Portal, and resummon the Ender Dragon.`)
                    .independent(0);

                var crystal4 = scene.world().createEntity('minecraft:end_crystal', [4.5, 2, 7.5]);
                scene.world().modifyEntity(crystal4, (e) => {
                    let NBT = e.getFullNBT();
                    NBT.ShowBottom = false;
                    e.setFullNBT(NBT);
                });
                scene.idle(10);

                scene.world().modifyEntity(crystal1, (e) => {
                    let NBT = e.getFullNBT();
                    NBT.BeamTarget = { X: 4.5, Y: 5, Z: 4.5 };
                    e.setFullNBT(NBT);
                });
                scene.world().modifyEntity(crystal2, (e) => {
                    let NBT = e.getFullNBT();
                    NBT.BeamTarget = { X: 4.5, Y: 5, Z: 4.5 };
                    e.setFullNBT(NBT);
                });
                scene.world().modifyEntity(crystal3, (e) => {
                    let NBT = e.getFullNBT();
                    NBT.BeamTarget = { X: 4.5, Y: 5, Z: 4.5 };
                    e.setFullNBT(NBT);
                });
                scene.world().modifyEntity(crystal4, (e) => {
                    let NBT = e.getFullNBT();
                    NBT.BeamTarget = { X: 4.5, Y: 5, Z: 4.5 };
                    e.setFullNBT(NBT);
                });
                scene.idle(60);

                var dragon = scene.world().createEntity('minecraft:ender_dragon', [4.5, 5.5, 4.5]);

                scene.idle(10);

                scene.world().modifyEntity(crystal1, (e) => {
                    e.kill();
                });
                scene.world().modifyEntity(crystal2, (e) => {
                    e.kill();
                });
                scene.world().modifyEntity(crystal3, (e) => {
                    e.kill();
                });
                scene.world().modifyEntity(crystal4, (e) => {
                    e.kill();
                });

                scene
                    .world()
                    .setBlocks(util.select().fromTo(2, 1, 3, 3, 1, 5), util.getDefaultState('minecraft:air'), true);
                scene
                    .world()
                    .setBlocks(util.select().fromTo(3, 1, 2, 5, 1, 3), util.getDefaultState('minecraft:air'), true);
                scene
                    .world()
                    .setBlocks(util.select().fromTo(3, 1, 5, 5, 1, 6), util.getDefaultState('minecraft:air'), true);
                scene
                    .world()
                    .setBlocks(util.select().fromTo(5, 1, 3, 6, 1, 5), util.getDefaultState('minecraft:air'), true);

                scene.idle(100);
            }
        );
});
