// priority: 9

var itemsToPonder = generatableCobblestone;
itemsToPonder.push('minecraft:cobblestone');

onEvent('ponder.registry', (event) => {
    event
        .create('enigmatica:cobbleworks', itemsToPonder)

        .scene(
            'vanilla_cobblegen',
            'Cobble Generators - so simple Vanilla has one!',
            'enigmatica:enigmatica/cobbleworks/vanilla_cobblegen',
            (scene, util) => {
                scene.showBasePlate();

                scene.idle(20);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`Let's start with a basic vanilla cobblestone generator.`)
                    .independent(60);

                scene.idle(30);

                scene.addKeyframe();

                scene.world().showSection(util.select().layersFrom(1), Facing.down);

                scene.idle(40);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(
                        `When flowing lava touches water, it creates cobblestone. This generator floods a stair block to protect the water source.`
                    )
                    .independent(30);

                scene.idle(70);

                scene.addKeyframe();

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`We should go ahead and break the cobblestone here and see what happens.`)
                    .placeNearTarget()
                    .pointAt([3.5, 2.5, 3.5]);

                scene.idle(20);

                scene.world().destroyBlock([3, 2, 3]);

                scene.idle(20);

                var lava = util.getDefaultState('minecraft:lava');
                var cobble = util.getDefaultState('minecraft:cobblestone');

                scene.world().setBlock([3, 2, 3], lava, false);
                scene.idle(10);

                scene.world().destroyBlock([3, 2, 3]);
                scene.world().setBlock([3, 2, 3], cobble, false);

                scene.idle(20);

                scene.addKeyframe();

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(
                        `We can automate this with a block breaker of some sort - let's use a Modular Router with a breaker module.`
                    )
                    .independent(30);

                scene.idle(20);

                scene.world().destroyBlock([3, 2, 4]);
                scene
                    .world()
                    .setBlock(
                        [3, 2, 4],
                        Block.id('modularrouters:item_router').with('subfacing', 'south').blockState,
                        false
                    );

                scene.idle(50);

                scene
                    .overlay()
                    .showText(140)
                    .colored(PonderPalette.WHITE)
                    .text(`We can set the router to break any cobblestone in front of it for infinite cobblestone!`)
                    .independent(60);

                scene.idle(20);

                for (let i = 0; i < 3; i++) {
                    scene.world().destroyBlock([3, 2, 3]);
                    scene.idle(20);
                    scene.world().setBlock([3, 2, 3], lava, false);
                    scene.idle(10);
                    scene.world().destroyBlock([3, 2, 3]);
                    scene.world().setBlock([3, 2, 3], cobble, false);
                    scene.idle(10);
                }
            }
        )
        .scene(
            'targeted_cobblegen',
            'Targeted Generation - need something specific?',
            'enigmatica:enigmatica/cobbleworks/targeted_cobblegen',
            (scene, util) => {
                scene.showBasePlate();

                scene.idle(20);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(
                        `Maybe you want something other than vanilla cobblestone - let's say Scoria Cobblestone. This generator won't do.`
                    )
                    .independent(60);

                scene.idle(30);

                scene.world().showSection(util.select().layersFrom(1), Facing.down);

                var lava = util.getDefaultState('minecraft:lava');
                var scoria = util.getDefaultState('create:scoria_cobblestone');

                scene.idle(40);

                scene.addKeyframe();

                let layerHint = new Object();
                scene.overlay().chaseBoundingBoxOutline(PonderPalette.GREEN, layerHint, AABB.of(3, 1, 3, 4, 2, 4), 90);

                scene
                    .overlay()
                    .showText(90)
                    .colored(PonderPalette.GREEN)
                    .text(
                        `If we place a specific type of Cobblestone under the cobblestone generation point, the generator will now make that type of cobblestone!`
                    )
                    .placeNearTarget()
                    .pointAt([3.5, 1.5, 3.5]);

                scene.idle(30);

                scene.world().destroyBlock([3, 1, 3]);
                scene.idle(10);
                scene.world().setBlock([3, 1, 3], scoria, false);
                scene.idle(30);

                for (let i = 0; i < 3; i++) {
                    scene.world().destroyBlock([3, 2, 3]);
                    scene.idle(20);
                    scene.world().setBlock([3, 2, 3], lava, false);
                    scene.idle(10);
                    scene.world().destroyBlock([3, 2, 3]);
                    scene.world().setBlock([3, 2, 3], scoria, false);
                    scene.idle(10);
                }
            }
        )
        .scene(
            'random_cobblegen',
            `Random Generation - for when you don't have what you need!`,
            'enigmatica:enigmatica/cobbleworks/random_cobblegen',
            (scene, util) => {
                scene.showBasePlate();

                scene.idle(20);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(
                        `Don't have the cobblestone you need? Your cobblestone generator can produce random types of cobblestone!`
                    )
                    .independent(60);

                scene.idle(30);

                scene.addKeyframe();

                scene.world().showSection(util.select().layersFrom(1), Facing.down);

                scene.idle(40);

                var lava = util.getDefaultState('minecraft:lava');
                var ironblock = util.getDefaultState('minecraft:iron_block');

                let layerHint = new Object();
                scene.overlay().chaseBoundingBoxOutline(PonderPalette.GREEN, layerHint, AABB.of(3, 1, 3, 4, 2, 4), 80);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(
                        `If you place a block of Iron under the cobblestone generation point the generator will now make random cobblestone!`
                    )
                    .placeNearTarget()
                    .pointAt([3.5, 1.5, 3.5]);

                scene.idle(30);

                scene.world().destroyBlock([3, 1, 3]);
                scene.idle(10);
                scene.world().setBlock([3, 1, 3], ironblock, false);
                scene.idle(30);

                var randCobble = [
                    'byg:dacite_cobblestone',
                    'byg:soapstone',
                    'create:granite_cobblestone',
                    'quark:cobbedstone'
                ];

                randCobble.forEach((thisCobblestone) => {
                    scene.world().destroyBlock([3, 2, 3]);
                    scene.idle(20);
                    scene.world().setBlock([3, 2, 3], lava, false);
                    scene.idle(5);
                    scene.world().destroyBlock([3, 2, 3]);
                    scene.world().setBlock([3, 2, 3], util.getDefaultState(thisCobblestone), false);
                    scene.idle(10);
                });
            }
        );
});
