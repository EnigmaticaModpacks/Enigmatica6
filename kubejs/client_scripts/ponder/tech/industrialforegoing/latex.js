// priority: 9

onEvent('ponder.registry', (event) => {
    event
        .create('enigmatica:latex', [
            'industrialforegoing:latex_processing_unit',
            'industrialforegoing:fluid_extractor',
            'industrialforegoing:tinydryrubber',
            'industrialforegoing:dryrubber',
            'industrialforegoing:plastic',
            'industrialforegoing:latex_bucket'
        ])
        //.tag('enigmatica:industrial_foregoing')
        .scene(
            'extracting_fluids',
            'Gathering Latex From Trees',
            'enigmatica:industrial_foregoing/latex/extracting_fluids',
            (scene, util) => {
                scene.showBasePlate();

                scene.idle(20);

                scene.addKeyframe();

                // show the full tree first
                scene.world().showSection(util.select().layersFrom(1), Facing.down);

                scene.idle(20);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.OUTPUT)
                    .text(
                        'Latex is a renewable resource gathered from trees, and plays a vital role in Industrial Foregoing.'
                    )
                    .pointAt(util.vector().topOf(3, 4, 3));

                scene.idle(60);

                // hide basically everything except for the acacia log
                scene.world().hideSection(
                    util
                        .select()
                        .layersFrom(1)
                        .substract(util.select().position(4, 1, 4)),
                    Facing.up
                );

                scene.idle(10);

                scene.addKeyframe();

                scene.idle(10);

                // new snippet
                scene
                    .world()
                    .setBlock(
                        util.grid().at(4, 1, 3),
                        Block.id('industrialforegoing:fluid_extractor').with('subfacing', 'north').blockState,
                        true
                    );
                scene.world().showSection(util.select().position(4, 1, 3), Facing.down);

                scene.idle(20);

                scene
                    .overlay()
                    .showText(80)
                    .colored(PonderPalette.INPUT)
                    .text('To get started, you need to place a Fluid Extractor against a log of wood, such as Acacia.')
                    .pointAt(util.vector().topOf(4, 1, 3));

                scene.idle(80);

                scene.addKeyframe();

                var ex1 = scene.world().makeSectionIndependent(util.select().fromTo(4, 1, 3, 4, 1, 4));

                scene.world().moveSection(ex1, util.vector().of(-1, 0, 0), 10);

                scene.world().setBlock(util.grid().at(5, 1, 4), Block.id('oak_log').with('axis', 'y').blockState, true);
                scene
                    .world()
                    .setBlock(
                        util.grid().at(5, 1, 3),
                        Block.id('industrialforegoing:fluid_extractor').with('subfacing', 'north').blockState,
                        true
                    );
                scene.world().showSection(util.select().fromTo(5, 1, 3, 5, 1, 4), Facing.south);

                scene.idle(10);

                scene
                    .overlay()
                    .showText(80)
                    .colored(PonderPalette.RED)
                    .text(
                        'Keep in mind that using different logs with the Fluid Extractor may give you different fluids!'
                    )
                    .independent(60);

                scene.idle(40);

                var tank1 = util.grid().at(5, 2, 3);
                scene
                    .world()
                    .setBlock(
                        tank1,
                        Block.id('industrialforegoing:common_black_hole_tank').with('subfacing', 'north').blockState,
                        true
                    );
                scene.idle(20);
                scene.world().modifyTileNBT(tank1, {
                    tank: { FluidName: 'thermal:resin', Amount: 1000 }
                });

                var tank2 = util.grid().at(3, 2, 3);
                scene
                    .world()
                    .setBlock(
                        tank2,
                        Block.id('industrialforegoing:common_black_hole_tank').with('subfacing', 'north').blockState,
                        true
                    );
                scene.idle(20);
                scene.world().modifyTileNBT(tank2, {
                    tank: { FluidName: 'industrialforegoing:latex', Amount: 1000 }
                });

                scene.world().showSection(util.select().fromTo(3, 2, 3, 5, 2, 3), Facing.down);

                scene.idle(10);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.BLUE)
                    .text('Oak Logs will produce Resin')
                    .placeNearTarget()
                    .pointAt(util.vector().topOf(tank1));

                scene.idle(10);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.BLUE)
                    .text('Acacia Logs will produce Latex')
                    .placeNearTarget()
                    .pointAt(util.vector().topOf(tank2));

                scene.idle(30);

                scene
                    .overlay()
                    .showText(80)
                    .colored(PonderPalette.RED)
                    .attachKeyFrame()
                    .text(
                        'Be sure to check JEI for more information on what kinds of fluids you can extract at what rate from different blocks!'
                    )
                    .independent(60);

                scene.idle(60);
            }
        )
        .scene(
            'processing_latex',
            'Processing Latex into Rubber and Plastic',
            'enigmatica:industrial_foregoing/latex/processing_latex',
            (scene, util) => {
                scene.showBasePlate();

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.BLUE)
                    .text('So, now that you have a bunch of Latex, the question becomes: What do you do with it?')
                    .placeNearTarget()
                    .pointAt(util.vector().topOf(4, 3, 4));

                scene.idle(60);

                // show the latex processing unit
                scene.world().showSection(util.select().position(4, 1, 4), Facing.down);

                scene.addKeyframe();

                scene
                    .overlay()
                    .showText(50)
                    .colored(PonderPalette.INPUT)
                    .text('Enter: The Latex Processing Unit')
                    .placeNearTarget()
                    .pointAt(util.vector().topOf(4, 1, 4));

                scene.idle(60);

                // show water tank and transporter
                scene.world().showSection(util.select().fromTo(4, 1, 5, 4, 1, 8), Facing.north);

                scene.idle(10);

                scene.addKeyframe();

                scene
                    .overlay()
                    .showText(180)
                    .colored(PonderPalette.BLUE)
                    .text('When given Water...')
                    .placeNearTarget()
                    .pointAt(util.vector().topOf(4, 1, 6));

                scene.idle(20);

                // show energy cell
                scene.world().showSection(util.select().position(5, 1, 4), Facing.west);

                scene.idle(10);

                scene.addKeyframe();

                scene
                    .overlay()
                    .showText(140)
                    .colored(PonderPalette.RED)
                    .text('Power...')
                    .placeNearTarget()
                    .pointAt(util.vector().topOf(5, 1, 4));

                scene.idle(20);

                scene.rotateCameraY(-90);

                scene.idle(20);

                // show fluid tanks
                scene.world().showSection(util.select().fromTo(3, 1, 0, 5, 5, 3), Facing.south);

                scene.idle(10);

                scene.addKeyframe();

                scene
                    .overlay()
                    .showText(80)
                    .colored(PonderPalette.OUTPUT)
                    .text('and finally, Latex...')
                    .placeNearTarget()
                    .pointAt(util.vector().topOf(4, 4, 1));

                scene.idle(50);

                let chestPos = util.grid().at(4, 2, 4);

                // show black hole unit
                scene.world().showSection(util.select().position(chestPos), Facing.down);

                scene.idle(40);

                scene
                    .overlay()
                    .showText(80)
                    .colored(PonderPalette.WHITE)
                    .text(`It'll start coalescing the Latex fluid into tiny balls of rubber!`)
                    .attachKeyFrame()
                    .placeNearTarget()
                    .pointAt(util.vector().topOf(chestPos));

                scene.idle(100);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.RED)
                    .text(
                        `This is quite a slow process; you'll have to wait around 5 seconds for each Tiny Dry Rubber...`
                    )
                    .placeNearTarget()
                    .pointAt(util.vector().topOf(chestPos));

                scene.world().modifyTileNBT(
                    util.select().position(chestPos),
                    {
                        hasNBT: false,
                        blStack: { id: 'industrialforegoing:tinydryrubber', Count: 2 },
                        stored: 2,
                        voidItems: 1
                    },
                    true
                );

                scene.idle(80);

                scene.addKeyframe();

                scene.world().hideSection(util.select().layersFrom(1), Facing.east);

                scene.idle(20);

                scene
                    .world()
                    .setBlock(
                        util.grid().at(4, 1, 2),
                        Block.id('industrialforegoing:supreme_black_hole_unit').with('subfacing', 'west').blockState,
                        false
                    );

                scene.idle(1);

                scene.world().modifyTileNBT(
                    util.select().position(4, 1, 2),
                    {
                        hasNBT: false,
                        blStack: { id: 'industrialforegoing:tinydryrubber', Count: 9 },
                        stored: 9,
                        voidItems: 1
                    },
                    true
                );

                scene
                    .world()
                    .setBlock(util.grid().at(4, 1, 3), util.getDefaultState('minecraft:crafting_table'), false);

                scene
                    .world()
                    .setBlock(
                        util.grid().at(4, 1, 4),
                        Block.id('industrialforegoing:advanced_black_hole_unit').with('subfacing', 'west').blockState,
                        false
                    );

                scene
                    .world()
                    .setBlock(
                        util.grid().at(4, 1, 5),
                        Block.id('minecraft:furnace').with('facing', 'west').blockState,
                        false
                    );

                scene
                    .world()
                    .setBlock(
                        util.grid().at(4, 1, 6),
                        Block.id('industrialforegoing:simple_black_hole_unit').with('subfacing', 'west').blockState,
                        false
                    );

                var procline = scene
                    .world()
                    .showIndependentSection(util.select().fromTo(4, 1, 2, 4, 1, 6), Facing.down);

                scene.idle(20);

                scene
                    .overlay()
                    .showText(30)
                    .colored(PonderPalette.GREEN)
                    .text(`Once you have some Tiny Dry Rubber, you can then process it further...`)
                    .placeNearTarget()
                    .pointAt(util.vector().topOf(util.grid().at(4, 1, 2)));

                scene.idle(30);

                scene
                    .overlay()
                    .showControls(
                        new PonderInput(util.grid().at(4, 1, 3), PonderPointing.DOWN)
                            .showing(PonderIcons.I_3x3)
                            .withItem('9x industrialforegoing:tinydryrubber'),
                        30
                    );

                scene.overlay().showOutline(PonderPalette.GREEN, procline, util.select().position(4, 1, 3), 30);

                scene.idle(20);

                scene.world().modifyTileNBT(
                    util.select().position(4, 1, 2),
                    {
                        hasNBT: false,
                        blStack: { id: 'industrialforegoing:tinydryrubber', Count: 9 },
                        stored: 0,
                        voidItems: 1
                    },
                    true
                );

                scene.world().modifyTileNBT(
                    util.select().position(4, 1, 4),
                    {
                        hasNBT: false,
                        blStack: { id: 'industrialforegoing:dryrubber', Count: 1 },
                        stored: 1,
                        voidItems: 1
                    },
                    true
                );

                scene.idle(20);

                scene
                    .world()
                    .setBlock(
                        util.grid().at(4, 1, 5),
                        Block.id('minecraft:furnace').with('facing', 'west').with('lit', 'true').blockState,
                        false
                    );

                scene
                    .overlay()
                    .showControls(
                        new PonderInput(util.grid().at(4, 1, 5), PonderPointing.DOWN)
                            .showing(PonderIcons.I_TARGET)
                            .withItem('industrialforegoing:dryrubber'),
                        30
                    );

                scene.overlay().showOutline(PonderPalette.GREEN, procline, util.select().position(4, 1, 5), 30);

                scene.idle(20);

                scene
                    .world()
                    .setBlock(
                        util.grid().at(4, 1, 5),
                        Block.id('minecraft:furnace').with('facing', 'west').with('lit', 'false').blockState,
                        false
                    );

                scene.world().modifyTileNBT(
                    util.select().position(4, 1, 4),
                    {
                        hasNBT: false,
                        blStack: { id: 'industrialforegoing:dryrubber', Count: 1 },
                        stored: 0,
                        voidItems: 1
                    },
                    true
                );

                scene.world().modifyTileNBT(
                    util.select().position(4, 1, 6),
                    {
                        hasNBT: false,
                        blStack: { id: 'industrialforegoing:plastic', Count: 1 },
                        stored: 1,
                        voidItems: 1
                    },
                    true
                );

                scene.effects().indicateSuccess(util.grid().at(4, 1, 6));

                scene.idle(40);

                scene
                    .overlay()
                    .showText(90)
                    .colored(PonderPalette.BLUE)
                    .text('To get large piles of Dry Rubber...')
                    .placeNearTarget()
                    .pointAt(util.vector().topOf(4, 1, 4));

                scene.idle(10);

                scene.addKeyframe();

                scene
                    .overlay()
                    .showText(80)
                    .colored(PonderPalette.RED)
                    .text('...and Plastic!')
                    .placeNearTarget()
                    .pointAt(util.vector().topOf(4, 1, 6));
            }
        );
});
