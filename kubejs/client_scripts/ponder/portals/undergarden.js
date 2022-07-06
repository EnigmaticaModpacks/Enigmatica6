// priority: 9

onEvent('ponder.registry', (event) => {
    event
        .create('portals:undergarden', 'undergarden:catalyst')

        .scene(
            'undergarden_portal',
            `Undergarden's Portal - this won't take you to Narnia.`,
            'enigmatica:portals/undergarden/portal',
            (scene, util) => {
                scene.showBasePlate();

                scene.idle(20);

                scene
                    .overlay()
                    .showText(80)
                    .colored(PonderPalette.WHITE)
                    .text(
                        `Want to search the deep dark Undergarden? Build a nether portal like structure with Stone Bricks.`
                    )
                    .independent(60);

                scene.addKeyframe();

                for (let i = 1; i < 6; i++) {
                    scene.world().showSection(util.select().fromTo(0, i, 0, 7, i, 7), Facing.south);
                    scene.idle(10);
                }

                scene.idle(40);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`Click the portal with the Catalyst, as you would light a Nether Portal`)
                    .independent(0);

                scene.idle(20);

                scene
                    .overlay()
                    .showControls(
                        new PonderInput([3.5, 2.5, 3.5], PonderPointing.DOWN)
                            .showing(PonderIcons.I_PRIORITY_LOW)
                            .withItem('undergarden:catalyst'),
                        40
                    );

                scene.idle(20);

                scene
                    .world()
                    .setBlocks(
                        util.select().fromTo(2, 2, 3, 4, 4, 3),
                        util.getDefaultState('undergarden:undergarden_portal'),
                        true
                    );

                scene.idle(30);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`Now enter the portal - you'll find yourself less in hell, more in a damp, dark place.`)
                    .independent(60);

                scene.idle(60);
            }
        );
});
