// priority: 9

onEvent('ponder.registry', (event) => {
    event
        .create('enigmatica:nori_sheet_press', [
            'sushigocrafting:nori_sheets',
            'sushigocrafting:dried_seaweed_block',
            'sushigocrafting:dried_seaweed',
            'sushigocrafting:seaweed'
        ])

        .scene(
            'growing_seaweed',
            'Seaweed - Kelp But Tasty',
            'enigmatica:sushigocrafting/nori_sheets/seaweed',
            (scene, util) => {
                scene.showBasePlate();

                scene.idle(20);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`Seaweed can be made into Nori sheets. It can be found in the ocean, growing like kelp.`)
                    .independent(0);

                scene.idle(30);

                scene.addKeyframe();

                scene.world().showSection(util.select().layersFrom(1), Facing.south);

                scene.idle(30);

                scene.addKeyframe();

                let layerHint = new Object();
                scene.overlay().chaseBoundingBoxOutline(PonderPalette.GREEN, layerHint, AABB.of(2, 2, 2, 3, 3, 3), 90);

                scene.idle(10);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`Just like kelp, you can farm it by breaking segment second to the bottom.`)
                    .placeNearTarget()
                    .pointAt(util.vector().topOf(2, 1.5, 2));

                scene.idle(10);
                scene
                    .overlay()
                    .showControls(new PonderInput([2.5, 2, 2.5], PonderPointing.RIGHT).showing(PonderIcons.I_LMB), 50);
                scene.idle(70);
            }
        )
        .scene(
            'dried_seaweed_blocks',
            'Dried Seaweed Blocks - Extra Flakey',
            'enigmatica:enigmatica/bases/3x3',
            (scene, util) => {
                scene.showBasePlate();
                scene.world().showSection(util.select().layer(1), Facing.south);

                scene.idle(20);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`Once you've harvested your seaweed it needs to be dried and crafted into a block.`)
                    .independent(0);

                scene.idle(30);

                scene.addKeyframe();

                scene.world().setBlock([1, 1, 1], Block.id('minecraft:furnace').with('lit', false).blockState, true);

                scene.idle(40);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`Seaweed can be dried in a furnace, just like kelp.`)
                    .independent(0);
                scene.idle(20);
                scene.world().modifyBlock([1, 1, 1], (state) => state.with('lit', true));

                scene.idle(20);
                scene
                    .overlay()
                    .showControls(
                        new PonderInput([2.65, 1, 2], PonderPointing.RIGHT)
                            .showing(PonderIcons.I_CONFIG_OPEN)
                            .withItem('sushigocrafting:seaweed'),
                        30
                    );
                scene.idle(40);
                scene
                    .overlay()
                    .showControls(
                        new PonderInput([1, 1.5, 1.5], PonderPointing.LEFT)
                            .showing(PonderIcons.I_CONFIG_OPEN)
                            .withItem('sushigocrafting:dried_seaweed'),
                        30
                    );
                scene.idle(60);

                scene.addKeyframe();

                scene.idle(20);

                scene.world().setBlock([1, 1, 1], util.getDefaultState('minecraft:crafting_table'), true);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`Now craft or pack the dried seaweed into a dried seaweed block.`)
                    .independent(0);

                scene.idle(20);
                scene
                    .overlay()
                    .showControls(
                        new PonderInput([2.65, 1, 2], PonderPointing.RIGHT)
                            .showing(PonderIcons.I_3x3)
                            .withItem('sushigocrafting:dried_seaweed'),
                        30
                    );
                scene.idle(40);
                scene
                    .overlay()
                    .showControls(
                        new PonderInput([1, 1.5, 1.5], PonderPointing.LEFT)
                            .showing(PonderIcons.I_CONFIG_OPEN)
                            .withItem('sushigocrafting:dried_seaweed_block'),
                        30
                    );
                scene.idle(60);
            }
        )
        .scene(
            'nori_sheet_press',
            'Nori Sheet Press - Seaweed Plate Crafting',
            'enigmatica:sushigocrafting/nori_sheets/nori_press',
            (scene, util) => {
                scene.showBasePlate();

                scene.idle(20);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`Nori sheets are crafted by compressing a dried seaweed block with a piston.`)
                    .independent(0);

                scene.idle(30);

                scene.addKeyframe();

                scene.world().showSection(util.select().layersFrom(1), Facing.south);

                scene.idle(40);

                scene.addKeyframe();

                let iron_block = new Object();
                scene.overlay().chaseBoundingBoxOutline(PonderPalette.BLUE, iron_block, AABB.of(1, 1, 1, 2, 2, 2), 60);
                scene.idle(10);
                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.BLUE)
                    .text(`Place a Block of Iron down as a base.`)
                    .placeNearTarget()
                    .pointAt([1, 1.5, 1]);
                scene.idle(70);

                let pitson = new Object();
                scene.overlay().chaseBoundingBoxOutline(PonderPalette.OUTPUT, pitson, AABB.of(1, 3, 1, 2, 4, 2), 60);
                scene.idle(10);
                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.OUTPUT)
                    .text(`Place a piston, facing down, with a gap for your seaweed block.`)
                    .placeNearTarget()
                    .pointAt([1, 3.5, 1]);
                scene.idle(70);

                scene.world().setBlock([1, 2, 1], util.getDefaultState('sushigocrafting:dried_seaweed_block'), true);
                let seaweed_block = new Object();
                scene
                    .overlay()
                    .chaseBoundingBoxOutline(PonderPalette.GREEN, seaweed_block, AABB.of(1, 2, 1, 2, 3, 2), 60);
                scene.idle(10);
                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.GREEN)
                    .text(`Place the seaweed block to compress in the middle.`)
                    .placeNearTarget()
                    .pointAt([1, 2.5, 1]);
                scene.idle(70);

                scene.addKeyframe();

                let push_button = new Object();
                scene.overlay().chaseBoundingBoxOutline(PonderPalette.RED, push_button, AABB.of(1, 4, 1, 2, 5, 2), 60);
                scene.idle(10);
                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.RED)
                    .text(`Activate the piston by applying a redstone signal.`)
                    .placeNearTarget()
                    .pointAt([1, 4.5, 1]);

                scene.idle(70);

                scene.idle(20);
                scene.world().modifyBlock([1, 3, 1], (state) => state.with('extended', true));
                scene.world().setBlock([1, 2, 1], Block.id('piston_head').with('facing', 'down').blockState, true);
                scene.idle(5);
                scene.world().createItemEntity([1, 2, 1], [-0.1, -0.1, 0], Item.of('6x sushigocrafting:nori_sheets'));
                scene.idle(10);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.GREEN)
                    .text(`The piston will compress the seaweed block, dropping nori sheets.`)
                    .independent(0);
                scene.idle(70);
            }
        );
});
