// priority: 9

// TODO: the text on this one... isn't the best, so it'd be
//  great if someone could help patch this up before release!

onEvent('ponder.registry', (event) => {
    let badOres = Ingredient.of([
        'emendatusenigmatica:iron_ore',
        'emendatusenigmatica:coal_ore',
        'emendatusenigmatica:apatite_ore',
        'emendatusenigmatica:tin_ore',
        'emendatusenigmatica:copper_ore',
        'emendatusenigmatica:cinnabar_ore'
    ]);

    event
        .create('enigmatica:laser_drill', [
            'industrialforegoing:ore_laser_base',
            'industrialforegoing:fluid_laser_base',
            'industrialforegoing:laser_drill',
            'industrialforegoing:laser_lens0',
            'industrialforegoing:laser_lens1',
            'industrialforegoing:laser_lens1',
            'industrialforegoing:laser_lens2',
            'industrialforegoing:laser_lens3',
            'industrialforegoing:laser_lens4',
            'industrialforegoing:laser_lens5',
            'industrialforegoing:laser_lens6',
            'industrialforegoing:laser_lens7',
            'industrialforegoing:laser_lens8',
            'industrialforegoing:laser_lens9',
            'industrialforegoing:laser_lens10',
            'industrialforegoing:laser_lens11',
            'industrialforegoing:laser_lens12',
            'industrialforegoing:laser_lens13',
            'industrialforegoing:laser_lens14',
            'industrialforegoing:laser_lens15',
            'industrialforegoing:ether_gas_bucket'
        ])
        //.tag('enigmatica:industrial_foregoing')
        .scene(
            'introduction',
            'How to use the Laser Drill',
            'enigmatica:industrial_foregoing/laser_drill/example_setup',
            (scene, util) => {
                scene.showBasePlate();

                scene.world().showSection(util.select().layersFrom(1), Facing.down);

                scene
                    .overlay()
                    .showText(100)
                    .colored(PonderPalette.WHITE)
                    .text(
                        'The Laser Drill is a mid- to late-game structure in Industrial Foregoing that lets you mine up various different resources from the void.'
                    )
                    .placeNearTarget()
                    .pointAt(util.vector().topOf(3, 3, 3));

                scene.idle(100);

                // only show the base first
                scene.world().hideSection(
                    util
                        .select()
                        .everywhere()
                        .substract(util.select().layer(0))
                        .substract(util.select().position(3, 3, 3)),
                    Facing.down
                );

                scene.addKeyframe();

                scene.idle(20);

                let hintBox = new Object();
                scene
                    .overlay()
                    .chaseBoundingBoxOutline(
                        PonderPalette.GREEN,
                        hintBox,
                        AABB.of(3.25, 3.25, 3.25, 3.75, 3.75, 3.75),
                        2
                    );

                scene.overlay().chaseBoundingBoxOutline(PonderPalette.GREEN, hintBox, AABB.of(3, 3, 3, 4, 4, 4), 120);

                scene
                    .overlay()
                    .showText(80)
                    .colored(PonderPalette.GREEN)
                    .text(
                        `To construct it, you'll first need either an Ore Laser Base or a Fluid Laser Base. We'll go over the Ore Laser first.`
                    )
                    .placeNearTarget()
                    .pointAt(util.vector().topOf(3, 3, 3));

                scene.idle(100);

                scene.addKeyframe();

                scene
                    .overlay()
                    .showText(80)
                    .colored(PonderPalette.GREEN)
                    .text(
                        `Next, add some Laser Drills within a 2-block radius around the Base to start powering it, for example like this:`
                    )
                    .placeNearTarget()
                    .pointAt(util.vector().centerOf(5, 5, 5));

                scene.overlay().chaseBoundingBoxOutline(PonderPalette.GREEN, hintBox, AABB.of(1, 1, 1, 6, 6, 6), 120);

                scene.idle(40);

                // add the drills
                scene.world().showSection(
                    util
                        .select()
                        .layer(3)
                        .substract(util.select().position(3, 3, 3)),
                    Facing.up
                );

                scene.idle(20);
                scene.addKeyframe();
                scene.idle(20);

                scene.world().showSection(util.select().layer(2), Facing.up);
                scene.idle(10);

                scene
                    .overlay()
                    .showText(40)
                    .colored(PonderPalette.RED)
                    .text(`..oh, and don't forget to power them!`)
                    .placeNearTarget()
                    .pointAt(util.vector().centerOf(5, 5, 5));

                scene.idle(50);

                scene.addKeyframe();

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.INPUT)
                    .text(`The more drills you add, the faster the Laser is going to be`)
                    .placeNearTarget()
                    .pointAt(util.vector().centerOf(3, 3, 3));

                scene.idle(40);

                scene
                    .overlay()
                    .showControls(
                        new PonderInput([3.5, 6.5, 3.5], PonderPointing.DOWN)
                            .showing(PonderIcons.I_CONFIG_OPEN)
                            .withItem('minecraft:clock'),
                        100
                    );
                scene.idle(120);

                scene
                    .overlay()
                    .showControls(new PonderInput([3.5, 4, 3.5], PonderPointing.DOWN).withItem(randomOf(badOres)), 40);

                scene
                    .overlay()
                    .showText(120)
                    .colored(PonderPalette.OUTPUT)
                    .text(
                        `After a while, we finally managed to get our first ore; but it's not quite the one we wanted, so let's try to change our luck!`
                    )
                    .placeNearTarget()
                    .pointAt([3.5, 3.5, 3.5]);

                scene.markAsFinished();
            }
        )
        .scene(
            'lenses',
            'Using Lenses to improve your chances',
            'enigmatica:industrial_foregoing/laser_drill/example_setup',
            (scene, util) => {
                scene.showBasePlate();

                scene.world().showSection(util.select().layersFrom(1), Facing.down);

                scene.idle(10);

                scene
                    .overlay()
                    .showText(100)
                    .colored(PonderPalette.WHITE)
                    .text(
                        'As you could see, the resources the Ore Laser drills up are random,' +
                            ' so how can we make sure we actually get our precious rare ores rather than ten different kinds of copper?'
                    )
                    .placeNearTarget()
                    .pointAt([3.5, 4, 3.5]);

                scene.idle(100);

                scene.addKeyframe();

                scene.idle(10);

                scene
                    .overlay()
                    .showText(120)
                    .colored(PonderPalette.WHITE)
                    .text(
                        `That's what lenses are for: By adding them into the Ore Laser Base,` +
                            ` we can skew the odds of getting ores that have a certain colour in our favour.`
                    )
                    .independent(20);

                // RANDOM LENSES!
                for (var i = 0; i < 4; i++) {
                    scene
                        .overlay()
                        .showControls(
                            new PonderInput([3.5, 4, 3.5], PonderPointing.DOWN).withItem(
                                `industrialforegoing:laser_lens${Utils.random.nextInt(16)}`
                            ),
                            20
                        );
                    scene.idle(30);
                }

                scene.addKeyframe();

                scene.idle(20);

                let fails = Utils.random.nextInt(8) + 1;

                scene
                    .overlay()
                    .showText(fails * 20 + 20)
                    .colored(PonderPalette.GREEN)
                    .text(
                        `For example, if we wanted more Uranium or Emerald Ore, we could add a lime lens to the Laser...`
                    )
                    .independent(20);

                scene
                    .overlay()
                    .showControls(
                        new PonderInput([3.5, 4, 3.5], PonderPointing.DOWN)
                            .rightClick()
                            .withItem(industrialforegoing.laser_lens.lime),
                        20
                    );

                scene.idle(20);

                scene
                    .overlay()
                    .showControls(
                        new PonderInput([3.5, 6.5, 3.5], PonderPointing.DOWN)
                            .showing(PonderIcons.I_CONFIG_OPEN)
                            .withItem('minecraft:clock'),
                        fails * 20 + 20
                    );

                scene.idle(20);

                for (var i = 0; i < fails; i++) {
                    scene
                        .overlay()
                        .showControls(
                            new PonderInput([3.5, 4, 3.5], PonderPointing.DOWN)
                                .showing(PonderIcons.I_DISABLE)
                                .withItem(randomOf(badOres)),
                            8
                        );
                    scene.idle(20);
                }

                scene
                    .overlay()
                    .showControls(
                        new PonderInput([3.5, 4, 3.5], PonderPointing.DOWN)
                            .showing(PonderIcons.I_CONFIRM)
                            .withItem(
                                randomOf(
                                    Ingredient.of([
                                        'emendatusenigmatica:uranium_ore',
                                        'emendatusenigmatica:emerald_ore'
                                    ])
                                )
                            ),
                        120
                    );

                scene
                    .overlay()
                    .showText(120)
                    .colored(PonderPalette.GREEN)
                    .text(`And soon enough, our efforts shall be rewarded!`)
                    .independent(20);
            }
        )
        .scene(
            'fluid_drill',
            'Using Lenses in the Fluid Laser',
            'enigmatica:industrial_foregoing/laser_drill/example_setup',
            (scene, util) => {
                scene.showBasePlate();

                scene.world().showSection(util.select().layersFrom(1), Facing.down);

                scene.idle(10);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.INPUT)
                    .text(
                        'In addition to increasing your odds with the Ore Laser, Lenses serve another important purpose:'
                    )
                    .independent(30);

                scene.idle(60);

                scene.addKeyframe();

                scene.world().setBlock([3, 3, 3], util.getDefaultState('industrialforegoing:fluid_laser_base'), true);

                scene.idle(10);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.GREEN)
                    .text('They serve as the "focus" for the Fluid Laser.')
                    .pointAt(util.vector().topOf(3, 3, 3));

                let fluidHint = new Object();
                scene
                    .overlay()
                    .chaseBoundingBoxOutline(
                        PonderPalette.GREEN,
                        fluidHint,
                        AABB.of(3.25, 3.25, 3.25, 3.75, 3.75, 3.75),
                        10
                    );

                scene.overlay().chaseBoundingBoxOutline(PonderPalette.GREEN, fluidHint, AABB.of(3, 3, 3, 4, 4, 4), 60);

                scene.idle(80);

                scene
                    .overlay()
                    .showText(100)
                    .colored(PonderPalette.INPUT)
                    .attachKeyFrame()
                    .text(
                        'Fundamentally, the Fluid Laser is quite similar to its Ore counterpart,' +
                            ' but it requires a Lens to function, and different recipes can' +
                            ' have special requirements you may have to watch out for.'
                    )
                    .independent(30);

                scene.idle(100);

                scene.world().setBlocks(util.select().layer(0), util.getDefaultState('minecraft:netherrack'), true);
                scene.addKeyframe();

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.RED)
                    .text('For example, if you place it in any Nether biome...')
                    .pointAt([3.5, 0.5, 3.5]);

                scene.overlay().chaseBoundingBoxOutline(PonderPalette.RED, fluidHint, AABB.of(0, 0, 0, 7, 0, 7), 20);
                scene.overlay().chaseBoundingBoxOutline(PonderPalette.RED, fluidHint, AABB.of(0, 0, 0, 7, 1, 7), 100);

                scene.idle(70);

                scene.overlay().chaseBoundingBoxOutline(PonderPalette.INPUT, fluidHint, AABB.of(3, 3, 3, 4, 4, 4), 120);

                scene
                    .overlay()
                    .showText(50)
                    .colored(PonderPalette.INPUT)
                    .attachKeyFrame()
                    .text(`...and give it the corresponding focus...`)
                    .placeNearTarget()
                    .pointAt([3.5, 3.5, 3.5]);

                scene
                    .overlay()
                    .showControls(
                        new PonderInput([3.5, 4, 3.5], PonderPointing.DOWN)
                            .showing(PonderIcons.I_ADD)
                            .withItem(industrialforegoing.laser_lens.orange),
                        30
                    );

                scene.world().hideSection(util.select().position(3, 4, 3), Facing.down);

                scene.idle(30);

                var tank1 = util.grid().at(3, 4, 3);
                scene
                    .world()
                    .setBlock(
                        tank1,
                        Block.id('industrialforegoing:common_black_hole_tank').with('subfacing', 'north').blockState,
                        true
                    );

                scene.idle(10);

                scene.world().showSection(util.select().position(3, 4, 3), Facing.down);

                scene.idle(20);
                scene.addKeyframe();
                scene.idle(20);

                scene.world().modifyTileNBT(
                    tank1,
                    {
                        tank: { FluidName: 'minecraft:lava', Amount: 1000 }
                    },
                    true
                );

                scene
                    .overlay()
                    .chaseBoundingBoxOutline(PonderPalette.OUTPUT, fluidHint, AABB.of(3, 4, 3, 4, 5, 4), 120);

                scene.idle(10);

                scene
                    .overlay()
                    .showText(80)
                    .colored(PonderPalette.OUTPUT)
                    .text(`...it'll start drilling up Lava!`)
                    .placeNearTarget()
                    .pointAt([3.5, 4.5, 3.5]);

                scene.idle(40);

                scene
                    .overlay()
                    .showText(80)
                    .colored(PonderPalette.WHITE)
                    .text(
                        `Other, more "involved" requirements exist as well, and we'll touch on my personal favourite in this next and final scene.`
                    )
                    .independent(40);

                scene.idle(60);
                scene.markAsFinished();
            }
        )
        .scene(
            'ether_gas',
            'Getting Ether Gas',
            'enigmatica:industrial_foregoing/laser_drill/wither_milker',
            (scene, util) => {
                scene.showBasePlate();

                scene.world().showSection(util.select().layersFrom(1), Facing.down);

                scene.idle(10);

                scene
                    .overlay()
                    .showText(80)
                    .colored(PonderPalette.INPUT)
                    .text(
                        `Welcome... to the Wither Milker (patent pending)!` +
                            ` You'll see why it's called that in a bit, but for now, let's go over the individual parts.`
                    )
                    .independent(30);

                scene.idle(80);

                scene.world().hideSection(util.select().layersFrom(1).substract(util.select().layer(6)), Facing.south);

                scene.idle(10);

                scene.addKeyframe();

                scene.idle(10);

                let layerHint = new Object();
                scene
                    .overlay()
                    .chaseBoundingBoxOutline(
                        PonderPalette.GREEN,
                        layerHint,
                        AABB.of(3.25, 6.25, 3.25, 3.75, 6.75, 3.75),
                        10
                    );

                scene.overlay().chaseBoundingBoxOutline(PonderPalette.GREEN, layerHint, AABB.of(1, 6, 1, 6, 7, 6), 80);

                scene
                    .overlay()
                    .showText(100)
                    .colored(PonderPalette.INPUT)
                    .text(
                        `First, we have our typical Fluid Laser Drill setup, with the Laser Base containing a Purple Lens.` +
                            ` I've also left out the energy input here because you should know that the Drills need energy by now.`
                    )
                    .independent(30);

                scene
                    .overlay()
                    .showControls(
                        new PonderInput([3.5, 7, 3.5], PonderPointing.DOWN)
                            .showing(PonderIcons.I_ADD)
                            .withItem(industrialforegoing.laser_lens.purple),
                        60
                    );

                scene.idle(100);

                scene.addKeyframe();

                scene.world().showSection(util.select().layer(1), Facing.north);

                scene.idle(10);

                const stasisTime = 150;

                scene
                    .overlay()
                    .showText(stasisTime - 10)
                    .colored(PonderPalette.GREEN)
                    .text(
                        `Next, we need to place down a stasis chamber. This puppy, when provided with power,` +
                            ` will prevent any entities within its working area (blue), including players,` +
                            ` from moving or interacting with the world in any way, hence the name.`
                    )
                    .placeNearTarget()
                    .pointAt([3.5, 1.5, 3.5]);

                scene
                    .overlay()
                    .chaseBoundingBoxOutline(PonderPalette.GREEN, layerHint, AABB.of(3, 1, 3, 4, 2, 4), stasisTime);

                let stasisHint = new Object();
                scene
                    .overlay()
                    .chaseBoundingBoxOutline(
                        PonderPalette.BLUE,
                        stasisHint,
                        AABB.of(3.25, 1.25, 3.25, 3.75, 1.75, 3.75),
                        5
                    );
                scene
                    .overlay()
                    .chaseBoundingBoxOutline(PonderPalette.BLUE, stasisHint, AABB.of(2, 2, 2, 5, 5, 5), stasisTime);

                scene.idle(stasisTime);

                //scene
                //  .overlay()
                //  .chaseBoundingBoxOutline(PonderPalette.RED, stasisHint, AABB.of(3.25, 1.25, 3.25, 3.75, 1.75, 3.75), 5);
                scene.overlay().chaseBoundingBoxOutline(PonderPalette.RED, stasisHint, AABB.of(3, 1, 3, 4, 2, 4), 90);

                scene
                    .overlay()
                    .showText(80)
                    .colored(PonderPalette.RED)
                    .text(`Trust me when I say: You DO NOT want to let this thing run out of power for this build.`)
                    .placeNearTarget()
                    .pointAt([3.5, 1.5, 3.5]);

                scene.idle(100);

                scene.addKeyframe();

                scene.idle(10);

                scene
                    .overlay()
                    .showText(50)
                    .colored(PonderPalette.WHITE)
                    .text(`Next, we will need a willing test subject. Luckily, I know just the right one for this job!`)
                    .independent(30);

                scene.world().showSection(util.select().layers(2, 3), Facing.down);

                scene.idle(60);

                var soulsand = util.getDefaultState('minecraft:soul_sand');
                var skull = Block.id('minecraft:wither_skeleton_skull').with('rotation', 0).blockState;

                scene.world().setBlock([3, 2, 3], soulsand, false);
                scene.idle(10);
                scene.world().setBlock([3, 3, 3], soulsand, false);
                scene.idle(10);
                scene.world().setBlock([2, 3, 3], soulsand, false);
                scene.idle(10);
                scene.world().setBlock([4, 3, 3], soulsand, false);
                scene.idle(10);
                scene.world().setBlock([3, 4, 3], skull, false);
                scene.idle(10);
                scene.world().setBlock([2, 4, 3], skull, false);
                scene.idle(10);
                scene.world().setBlock([4, 4, 3], skull, false);

                scene.addKeyframe();

                scene.idle(20);

                scene.world().setBlocks(util.select().layers(2, 3), util.getDefaultState('minecraft:air'), true);

                var wither = scene.world().createEntity('minecraft:wither', [3.5, 2, 3.5]);

                scene.rotateCameraY(-180);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`Say Hi to the camera, Bartholomew!`)
                    .placeNearTarget()
                    .pointAt([3.5, 4, 3.5]);

                scene.idle(80);

                scene.rotateCameraY(-180);

                scene
                    .overlay()
                    .showText(160)
                    .colored(PonderPalette.WHITE)
                    .text(
                        `Now that dear Bartholomew over here is trapped by the Stasis Chamber and cannot wreck our stuff,` +
                            ` we can use the Fluid Laser to... milk him. (Seriously, Buuz? This is a kids' game!)`
                    )
                    .placeNearTarget()
                    .pointAt([3.5, 4, 3.5]);

                scene.idle(80);

                scene.world().showSection(util.select().layer(7), Facing.down);

                scene.idle(10);

                scene
                    .overlay()
                    .showText(70)
                    .colored(PonderPalette.WHITE)
                    .text(`This will produce Ether Gas, which we will just stow away in a Black Hole Tank for now.`)
                    .pointAt([3.5, 7, 3.5]);

                scene.idle(80);

                scene
                    .overlay()
                    .showText(100)
                    .colored(PonderPalette.WHITE)
                    .text(
                        `And that's about it for the basics of the Industrial Foregoing Laser Drill!` +
                            ` There's more stuff we haven't covered in this tutorial, so we recommend you just give it a try yourself!`
                    )
                    .independent(30);

                scene.idle(110);
            }
        );
});

function randomOf(ingr) {
    return Utils.randomOf(Utils.random, ingr.stacks);
}
