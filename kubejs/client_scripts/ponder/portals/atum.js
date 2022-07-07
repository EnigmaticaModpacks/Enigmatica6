// priority: 9

onEvent('ponder.registry', (event) => {
    event
        .create('portals:atum', 'atum:scarab')

        .scene('atum_portal', `Atum's Portal - not a Stargate.`, 'enigmatica:portals/atum/portal', (scene, util) => {
            scene.showBasePlate();

            scene.idle(20);

            scene
                .overlay()
                .showText(80)
                .colored(PonderPalette.WHITE)
                .text(`So you're low on sand, and want to travel to a desert. Build this structure out of sandstone.`)
                .independent(60);

            scene.addKeyframe();

            for (let i = 1; i < 6; i++) {
                scene.world().showSection(util.select().fromTo(0, i, 0, 7, i, 7), Facing.south);
                scene.idle(20);
            }

            scene.overlay().showText(60).colored(PonderPalette.WHITE).text(`Fill it with water...`).independent(30);

            scene.idle(30);

            scene
                .world()
                .setBlocks(util.select().fromTo(2, 2, 2, 4, 2, 4), util.getDefaultState('minecraft:water'), true);

            scene.idle(40);

            scene.addKeyframe();

            scene.overlay().showText(60).colored(PonderPalette.WHITE).text(`...then drop in a Scarab.`).independent(0);

            scene.idle(20);

            scene
                .overlay()
                .showControls(
                    new PonderInput([3.5, 3.5, 3.5], PonderPointing.DOWN)
                        .showing(PonderIcons.I_PRIORITY_LOW)
                        .withItem('atum:scarab'),
                    40
                );

            scene.idle(20);

            scene.world().setBlocks(util.select().fromTo(2, 2, 2, 4, 2, 4), util.getDefaultState('atum:portal'), true);

            scene.idle(30);

            scene
                .overlay()
                .showText(60)
                .colored(PonderPalette.WHITE)
                .text(`Now jump in - your sandy vacation awaits!`)
                .independent(60);

            scene.idle(60);
        });
});
