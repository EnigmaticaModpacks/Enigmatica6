// priority: 9

var itemsToPonder = generatableStone;
itemsToPonder.push('minecraft:stone');

onEvent('ponder.registry', (event) => {
    event
        .create('enigmatica:stoneworks', itemsToPonder)

        .scene(
            'vanilla_stonegen',
            'Stone Generators - so simple Vanilla has one!',
            'enigmatica:enigmatica/stoneworks/vanilla_stonegen',
            (scene, util) => {
                scene.showBasePlate();

                scene.idle(20);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`Let's start with a basic vanilla stone generator.`)
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
                        `When flowing lava falls on flowing water, it creates stone. This generator floods a stair block to protect the water source.`
                    )
                    .independent(30);

                scene.idle(70);

                scene.addKeyframe();

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`We should go ahead and break the stone here and see what happens.`)
                    .placeNearTarget()
                    .pointAt([3.5, 2.5, 3.5]);

                scene.idle(20);

                scene.world().destroyBlock([3, 2, 3]);

                scene.idle(20);

                var water = util.getDefaultState('minecraft:water');
                var stone = util.getDefaultState('minecraft:stone');

                scene.world().setBlock([3, 2, 3], water, false);
                scene.idle(10);

                scene.world().destroyBlock([3, 2, 3]);
                scene.world().setBlock([3, 2, 3], stone, false);

                scene.idle(20);

                scene.addKeyframe();

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(
                        `We can automate this with a block breaker of some sort - let's use a Modular Router with a breaker module. We'll clearly need silk touch on the breaker module.`
                    )
                    .independent(30);

                scene.idle(20);

                scene.world().destroyBlock([2, 2, 3]);
                scene
                    .world()
                    .setBlock(
                        [2, 2, 3],
                        Block.id('modularrouters:item_router').with('facing', 'east').blockState,
                        false
                    );

                scene.idle(50);

                scene
                    .overlay()
                    .showText(140)
                    .colored(PonderPalette.WHITE)
                    .text(`We can set the router to break any stone in front of it for infinite stone!`)
                    .independent(60);

                scene.idle(20);

                for (let i = 0; i < 3; i++) {
                    scene.world().destroyBlock([3, 2, 3]);
                    scene.idle(20);
                    scene.world().setBlock([3, 2, 3], water, false);
                    scene.idle(10);
                    scene.world().destroyBlock([3, 2, 3]);
                    scene.world().setBlock([3, 2, 3], stone, false);
                    scene.idle(10);
                }
            }
        )
        .scene(
            'targeted_stonegen',
            'Targeted Generation - need something specific?',
            'enigmatica:enigmatica/stoneworks/targeted_stonegen',
            (scene, util) => {
                scene.showBasePlate();

                scene.idle(20);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(
                        `Maybe you want something other than vanilla stone - let's say Scoria. This generator won't do.`
                    )
                    .independent(60);

                scene.idle(30);

                scene.world().showSection(util.select().layersFrom(1), Facing.down);

                var water = util.getDefaultState('minecraft:water');
                var scoria = util.getDefaultState('create:scoria');

                scene.idle(40);

                scene.addKeyframe();

                let layerHint = new Object();
                scene.overlay().chaseBoundingBoxOutline(PonderPalette.GREEN, layerHint, AABB.of(3, 1, 3, 4, 2, 4), 90);

                scene
                    .overlay()
                    .showText(90)
                    .colored(PonderPalette.GREEN)
                    .text(
                        `If we place a specific type of Stone under the stone generation point, the generator will now make that type of stone!`
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
                    scene.world().setBlock([3, 2, 3], water, false);
                    scene.idle(10);
                    scene.world().destroyBlock([3, 2, 3]);
                    scene.world().setBlock([3, 2, 3], scoria, false);
                    scene.idle(10);
                }
            }
        )
        .scene(
            'random_stonegen',
            `Random Generation - for when you don't have what you need!`,
            'enigmatica:enigmatica/stoneworks/random_stonegen',
            (scene, util) => {
                scene.showBasePlate();

                scene.idle(20);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`Don't have the stone you need? Your stone generator can produce random types of stone!`)
                    .independent(60);

                scene.idle(30);

                scene.addKeyframe();

                scene.world().showSection(util.select().layersFrom(1), Facing.down);

                scene.idle(40);

                var water = util.getDefaultState('minecraft:water');
                var diamondblock = util.getDefaultState('minecraft:diamond_block');

                let layerHint = new Object();
                scene.overlay().chaseBoundingBoxOutline(PonderPalette.GREEN, layerHint, AABB.of(3, 1, 3, 4, 2, 4), 80);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(
                        `If you place a block of Diamond under the stone generation point the generator will now make random stone!`
                    )
                    .placeNearTarget()
                    .pointAt([3.5, 1.5, 3.5]);

                scene.idle(30);

                scene.world().destroyBlock([3, 1, 3]);
                scene.idle(10);
                scene.world().setBlock([3, 1, 3], diamondblock, false);
                scene.idle(30);

                var randStone = [
                    'minecraft:andesite',
                    'byg:pink_sandstone',
                    'astralsorcery:marble_raw',
                    'create:limestone'
                ];

                randStone.forEach((thisStone) => {
                    scene.world().destroyBlock([3, 2, 3]);
                    scene.idle(20);
                    scene.world().setBlock([3, 2, 3], water, false);
                    scene.idle(5);
                    scene.world().destroyBlock([3, 2, 3]);
                    scene.world().setBlock([3, 2, 3], util.getDefaultState(thisStone), false);
                    scene.idle(10);
                });
            }
        );
});
