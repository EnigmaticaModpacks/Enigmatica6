// priority: 9

onEvent('ponder.registry', (event) => {
    event
        .create('enigmatica:forge_hammer', [
            'tetra:hammer_base',
            'tetra:basic_workbench',
            'tetra:magmatic_cell',
            'tetra:vent_plate',
            'tetra:combustion_chamber',
            'tetra:planar_stabilizer',
            'tetra:lubricant_dispenser',
            'tetra:forged_workbench'
        ])

        .scene(
            'forge_hammer',
            'Tetra Forge Hammer - Building Better Tools',
            'enigmatica:tetra/forge_hammer/forge_hammer',
            (scene, util) => {
                scene.showBasePlate();

                scene.idle(20);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`To make better tools, you need the Forge Hammer multiblock.`)
                    .independent(0);

                scene.idle(30);

                scene.addKeyframe();

                scene.world().showSection(util.select().layersFrom(1), Facing.south);

                scene.idle(40);

                scene.addKeyframe();

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`Install Thermal Cells on both sides of the Forge Hammer.`)
                    .independent(90);
                scene.idle(10);
                scene
                    .overlay()
                    .showControls(
                        new PonderInput([1.5, 3.5, 1], PonderPointing.RIGHT)
                            .showing(PonderIcons.I_RMB)
                            .withItem('tetra:magmatic_cell'),
                        30
                    );
                scene.idle(10);
                scene
                    .overlay()
                    .showControls(
                        new PonderInput([1.5, 3, 2.5], PonderPointing.LEFT)
                            .showing(PonderIcons.I_RMB)
                            .withItem('tetra:magmatic_cell'),
                        40
                    );
                scene.idle(50);

                scene.addKeyframe();

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(
                        `Install upgrades for the forge hammer (such as the combustion chamber) on both sides of the Forge Hammer.`
                    )
                    .independent(90);
                scene.idle(10);
                scene
                    .overlay()
                    .showControls(
                        new PonderInput([2.25, 3.25, 1.5], PonderPointing.RIGHT)
                            .showing(PonderIcons.I_RMB)
                            .withItem('tetra:combustion_chamber'),
                        30
                    );
                scene.idle(10);
                scene
                    .overlay()
                    .showControls(
                        new PonderInput([1.5, 3, 2], PonderPointing.LEFT)
                            .showing(PonderIcons.I_RMB)
                            .withItem('tetra:planar_stabilizer'),
                        40
                    );
                scene.idle(50);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(
                        `Using the Forge Hammer will drain charge from the Magmatic Cells, which will need to be replaced when depleted.`
                    )
                    .independent(0);
                scene.idle(35);
                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`The Forge Hammer can be found in Tetra structures, found underground in cold biomes.`)
                    .independent(60);
                scene.idle(25);

                scene.addKeyframe();

                let workbench = new Object();
                scene.overlay().chaseBoundingBoxOutline(PonderPalette.GREEN, workbench, AABB.of(1, 1, 1, 2, 2, 2), 60);
                scene.idle(10);
                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`It can also be crafted, and is compatible with the normal Tetra Workbench.`)
                    .placeNearTarget()
                    .pointAt([1.5, 1.5, 1.5]);
                scene.idle(20);

                //scene.world().destroyBlock([3, 2, 3]);
                scene.world().setBlock([1, 1, 1], util.getDefaultState('tetra:basic_workbench'), true);

                scene.idle(80);
            }
        );
});
