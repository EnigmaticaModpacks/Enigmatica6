// priority: 9

onEvent('ponder.registry', (event) => {
    event
        .create('enigmatica:mutation', [
            'resourcefulbees:t1_beehive',
            'resourcefulbees:t2_beehive',
            'resourcefulbees:t3_beehive',
            'resourcefulbees:t4_beehive',
            'resourcefulbees:t1_apiary',
            'resourcefulbees:t2_apiary',
            'resourcefulbees:t3_apiary',
            'resourcefulbees:t4_apiary',
            'resourcefulbees:aluminum_bee_spawn_egg',
            'resourcefulbees:blaze_bee_spawn_egg',
            'resourcefulbees:boobee_bee_spawn_egg',
            'resourcefulbees:brass_bee_spawn_egg',
            'resourcefulbees:bronze_bee_spawn_egg',
            'resourcefulbees:catnip_bee_spawn_egg',
            'resourcefulbees:clay_bee_spawn_egg',
            'resourcefulbees:coal_bee_spawn_egg',
            'resourcefulbees:constantan_bee_spawn_egg',
            'resourcefulbees:copper_bee_spawn_egg',
            'resourcefulbees:creeper_bee_spawn_egg',
            'resourcefulbees:diamond_bee_spawn_egg',
            'resourcefulbees:electrum_bee_spawn_egg',
            'resourcefulbees:emerald_bee_spawn_egg',
            'resourcefulbees:ender_bee_spawn_egg',
            'resourcefulbees:enderium_bee_spawn_egg',
            'resourcefulbees:ghast_bee_spawn_egg',
            'resourcefulbees:glowstone_bee_spawn_egg',
            'resourcefulbees:gold_bee_spawn_egg',
            'resourcefulbees:gravel_bee_spawn_egg',
            'resourcefulbees:icy_bee_spawn_egg',
            'resourcefulbees:invar_bee_spawn_egg',
            'resourcefulbees:iron_bee_spawn_egg',
            'resourcefulbees:lapis_bee_spawn_egg',
            'resourcefulbees:lead_bee_spawn_egg',
            'resourcefulbees:lumium_bee_spawn_egg',
            'resourcefulbees:netherite_bee_spawn_egg',
            'resourcefulbees:nether_quartz_bee_spawn_egg',
            'resourcefulbees:nickel_bee_spawn_egg',
            'resourcefulbees:obsidian_bee_spawn_egg',
            'resourcefulbees:osmium_bee_spawn_egg',
            'resourcefulbees:pigman_bee_spawn_egg',
            'resourcefulbees:redstone_bee_spawn_egg',
            'resourcefulbees:rgbee_bee_spawn_egg',
            'resourcefulbees:sand_bee_spawn_egg',
            'resourcefulbees:signalum_bee_spawn_egg',
            'resourcefulbees:silver_bee_spawn_egg',
            'resourcefulbees:skeleton_bee_spawn_egg',
            'resourcefulbees:slimy_bee_spawn_egg',
            'resourcefulbees:steel_bee_spawn_egg',
            'resourcefulbees:tin_bee_spawn_egg',
            'resourcefulbees:uranium_bee_spawn_egg',
            'resourcefulbees:water_bee_spawn_egg',
            'resourcefulbees:wither_bee_spawn_egg',
            'resourcefulbees:zinc_bee_spawn_egg',
            'resourcefulbees:zombie_bee_spawn_egg',
            'resourcefulbees:forest_bee_spawn_egg',
            'resourcefulbees:rocky_bee_spawn_egg',
            'resourcefulbees:industrious_bee_spawn_egg',
            'resourcefulbees:bloody_bee_spawn_egg',
            'resourcefulbees:elven_bee_spawn_egg',
            'resourcefulbees:infused_bee_spawn_egg',
            'resourcefulbees:mana_bee_spawn_egg',
            'resourcefulbees:sky_bee_spawn_egg',
            'resourcefulbees:starry_bee_spawn_egg',
            'resourcefulbees:tainted_bee_spawn_egg',
            'resourcefulbees:terrestrial_bee_spawn_egg',
            'resourcefulbees:enderslime_bee_spawn_egg',
            'resourcefulbees:ichor_bee_spawn_egg',
            'resourcefulbees:skyslime_bee_spawn_egg',
            'resourcefulbees:cobalt_bee_spawn_egg',
            'resourcefulbees:soup_bee_spawn_egg',
            'resourcefulbees:clockwork_bee_spawn_egg',
            'resourcefulbees:spelling_bee_spawn_egg',
            'resourcefulbees:wasabee_bee_spawn_egg',
            'resourcefulbees:basalz_bee_spawn_egg',
            'resourcefulbees:blitz_bee_spawn_egg',
            'resourcefulbees:blizz_bee_spawn_egg',
            'resourcefulbees:direbee20_bee_spawn_egg',
            'resourcefulbees:generikbee_bee_spawn_egg'
        ])
        .scene(
            'pollen_mechanics',
            'Bee Pollen - Practically Dripping with Function',
            'enigmatica:enigmatica/bases/3x3',
            (scene, util) => {
                scene.showBasePlate();
                scene.world().showSection(util.select().layer(1), Facing.south);

                scene.idle(20);

                scene.addKeyframe();

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text('Bees that have gathered nectar will drip pollen as they travel back to their hive.')
                    .independent(30);

                scene.idle(20);

                var bee = scene.world().createEntity('minecraft:bee', [1.5, 4, 1.5]);
                scene.world().modifyEntity(bee, (e) => {
                    e.mergeFullNBT({ Rotation: [NBT.floatTag(135), NBT.floatTag(0)], HasNectar: true });
                });

                scene.idle(50);

                scene.addKeyframe();

                //place farmland & crop here once I have IDs
                scene
                    .world()
                    .setBlock([1, 0, 1], Block.id('minecraft:farmland').with('moisture', '7').blockState, false);
                scene.idle(1);
                scene.world().setBlock([1, 1, 1], Block.id('minecraft:wheat').with('age', '0').blockState, false);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text('When pollen from vanilla bees falls on crops it can trigger a bone meal effect.')
                    .independent(30);

                scene.idle(20);

                //grow the crop a couple times here
                for (let i = 3; i <= 7; i = i + 2) {
                    scene
                        .world()
                        .setBlock([1, 1, 1], Block.id('minecraft:wheat').with('age', i.toString()).blockState, false);
                    scene.idle(30);
                }
            }
        )
        .scene('entity_mutation', 'Pollen as Mutagen', 'enigmatica:enigmatica/bases/3x3', (scene, util) => {
            scene.showBasePlate();
            scene.world().showSection(util.select().layer(1), Facing.south);

            scene.idle(20);

            var ironBee = scene.world().createEntity('resourcefulbees:iron_bee', [1.5, 4, 1.5]);
            scene.world().modifyEntity(ironBee, (e) => {
                e.mergeFullNBT({ Rotation: [NBT.floatTag(135), NBT.floatTag(0)], HasNectar: true });
            });

            scene
                .overlay()
                .showText(60)
                .colored(PonderPalette.WHITE)
                .text('Resourceful Bee pollen can trigger mutations in blocks, fluids, and entities.')
                .independent(0);

            scene.idle(70);

            scene
                .overlay()
                .showText(60)
                .colored(PonderPalette.WHITE)
                .text(
                    'Pollen can mutate things up to 2 blocks below the bee, and will pass through solid blocks to mutate things below.'
                )
                .independent(0);

            scene.idle(20);

            scene.addKeyframe();

            scene.idle(50);

            scene
                .overlay()
                .showText(60)
                .colored(PonderPalette.WHITE)
                .text('For example, the Iron Bee can mutate stone into iron ore.')
                .independent(0);

            scene.idle(20);

            scene.world().setBlock([1, 1, 1], util.getDefaultState('minecraft:stone'), false);

            scene.idle(20);

            scene.world().setBlock([1, 1, 1], util.getDefaultState('emendatusenigmatica:iron_ore'), true);

            scene.idle(40);

            scene.world().destroyBlock([1, 1, 1]);

            scene.addKeyframe();

            scene
                .overlay()
                .showText(60)
                .colored(PonderPalette.WHITE)
                .text('It can also mutate a block of coal into a Steel Bee Egg.')
                .independent(30);

            scene.idle(20);

            scene.world().setBlock([1, 1, 1], util.getDefaultState('minecraft:coal_block'), true);

            scene.idle(40);

            scene.world().destroyBlock([1, 1, 1]);
            scene.idle(1);
            spawnEgg = scene
                .world()
                .createItemEntity([1, 1.5, 1], [0, 0, 0], Item.of('resourcefulbees:steel_bee_spawn_egg'));

            scene.idle(40);

            scene.addKeyframe();

            scene.world().modifyEntity(ironBee, (e) => {
                e.mergeFullNBT({ Pos: [1.5, 0, 1.5] });
                e.kill();
            });
            scene.world().modifyEntity(spawnEgg, (e) => {
                e.mergeFullNBT({ Pos: [2, -1, 2] });
                e.kill();
            });
            scene.idle(20);
            var icyBee = scene.world().createEntity('resourcefulbees:icy_bee', [1.5, 4, 1.5]);
            scene.world().modifyEntity(icyBee, (e) => {
                e.mergeFullNBT({ Rotation: [NBT.floatTag(135), NBT.floatTag(0)], HasNectar: true });
            });

            scene.idle(20);

            scene
                .overlay()
                .showText(60)
                .colored(PonderPalette.WHITE)
                .text('The I-C-Bee can mutate Water, creating Blue Ice.')
                .independent(0);

            scene.idle(20);

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    scene.world().setBlock([i, 1, j], util.getDefaultState('connectedglass:clear_glass'), false);
                }
            }
            scene.world().setBlock([1, 1, 1], util.getDefaultState('minecraft:water'), false);

            scene.idle(20);

            scene.world().setBlock([1, 1, 1], util.getDefaultState('minecraft:blue_ice'), true);

            scene.idle(60);

            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    scene.world().destroyBlock([i, 1, j]);
                }
            }

            scene.idle(20);

            scene.addKeyframe();

            scene.world().modifyEntity(icyBee, (e) => {
                e.mergeFullNBT({ Pos: [1.5, 0, 1.5] });
                e.kill();
            });
            scene.idle(20);
            var blazeBee = scene.world().createEntity('resourcefulbees:blaze_bee', [1.5, 4, 1.5]);
            scene.world().modifyEntity(blazeBee, (e) => {
                e.mergeFullNBT({ Rotation: [NBT.floatTag(135), NBT.floatTag(0)], HasNectar: true });
            });

            scene.idle(30);

            scene
                .overlay()
                .showText(60)
                .colored(PonderPalette.WHITE)
                .text('The Blaze Bee can mutate Beepers into Ghast Bees')
                .independent(0);

            scene.idle(20);

            var creeperBee = scene.world().createEntity('resourcefulbees:creeper_bee', [1.5, 1.5, 1.5]);
            scene.world().modifyEntity(creeperBee, (e) => {
                e.mergeFullNBT({ Rotation: [NBT.floatTag(135), NBT.floatTag(0)] });
            });

            scene.idle(20);

            scene.world().modifyEntity(creeperBee, (e) => {
                e.mergeFullNBT({ Pos: [1.5, 0, 1.5] });
                e.kill();
            });
            var ghastBee = scene.world().createEntity('resourcefulbees:ghast_bee', [1.5, 1.5, 1.5]);
            scene.world().modifyEntity(ghastBee, (e) => {
                e.mergeFullNBT({ Rotation: [NBT.floatTag(135), NBT.floatTag(0)] });
            });

            scene.idle(40);
            scene.world().modifyEntity(ghastBee, (e) => {
                e.mergeFullNBT({ Pos: [1.5, -100, 1.5] });
                e.kill();
            });

            scene.addKeyframe();

            scene
                .overlay()
                .showText(60)
                .colored(PonderPalette.WHITE)
                .text('It can also mutate Blizz into Blizz Bees.')
                .independent(0);

            scene.idle(20);

            var blizz = scene.world().createEntity('thermal:blitz', [1.5, 1.5, 1.5]);

            scene.idle(20);

            scene.world().modifyEntity(blizz, (e) => {
                e.mergeFullNBT({ Pos: [1.5, -1, 1.5] });
                e.kill();
            });
            var blizzBee = scene.world().createEntity('resourcefulbees:blizz_bee', [1.5, 1.5, 1.5]);
            scene.world().modifyEntity(blizzBee, (e) => {
                e.mergeFullNBT({ Rotation: [NBT.floatTag(135), NBT.floatTag(0)] });
            });

            scene.idle(60);
        })
        .scene(
            'mutation_chamber',
            'Mutating Bees the Easy Way',
            'enigmatica:resourcefulbees/mutation/mutation_chamber',
            (scene, util) => {
                scene.showBasePlate();

                scene.idle(20);

                scene.addKeyframe();

                scene.world().showSection(util.select().layersFrom(1), Facing.down);

                scene.idle(20);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text('This is a good structure for mutating bees.')
                    .independent(30);

                scene.idle(70);

                scene.addKeyframe();

                var beeperBee = scene.world().createEntity('resourcefulbees:creeper_bee', [3.5, 2, 3.5]);
                scene.world().modifyEntity(beeperBee, (e) => {
                    e.mergeFullNBT({ Rotation: [NBT.floatTag(200), NBT.floatTag(0)] });
                });

                scene.rotateCameraY(45);
                scene.scaleSceneView(1.5);

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(
                        `Place the bee you'd like to mutate here; today we will be sacrificing a Beeper. Since things can be mutated through solid blocks, we can use a trap door to hold the Beeper in place.`
                    )
                    .placeNearTarget()
                    .pointAt([3.5, 2, 3.5]);

                scene.idle(60);

                var blazeBee = scene.world().createEntity('resourcefulbees:blaze_bee', [2.5, 3.5, 3.5]);
                scene.world().modifyEntity(blazeBee, (e) => {
                    e.mergeFullNBT({ Rotation: [NBT.floatTag(90), NBT.floatTag(0)], HasNectar: false });
                });
                scene.idle(20);

                scene.addKeyframe();

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(`We'll just place this Blaze Bee here and let it collect some nectar from this magma cake...`)
                    .placeNearTarget()
                    .pointAt([2.5, 3.5, 3.5]);

                scene.idle(40);

                for (let i = 100; i < 270; i = i + 10) {
                    let i2 = i;
                    scene.world().modifyEntity(blazeBee, (e) => {
                        e.mergeFullNBT({ Rotation: [NBT.floatTag(i2), NBT.floatTag(0)], HasNectar: true });
                    });
                    scene.idle(1);
                }

                scene.idle(10);

                scene.addKeyframe();

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text(
                        'Now that the Blaze Bee has gathered nectar, it will travel over to its hive, dripping pollen as it goes.'
                    )
                    .independent(30);

                scene.idle(60);

                for (let i = 2.5; i < 3.5; i = i + 0.1) {
                    let i2 = i;
                    scene.world().modifyEntity(blazeBee, (e) => {
                        e.mergeFullNBT({ Pos: [i2, 3.5, 3.5] });
                    });
                    scene.idle(1);
                }

                scene
                    .overlay()
                    .showText(60)
                    .colored(PonderPalette.WHITE)
                    .text('When the blaze bee passes over the Beeper it will mutate into a Ghast Bee.')
                    .placeNearTarget()
                    .pointAt([3.5, 2, 3.5]);

                scene.world().modifyEntity(beeperBee, (e) => {
                    e.mergeFullNBT({ Pos: [3.5, 0.5, 3.5] });
                });
                var ghastBee = scene.world().createEntity('resourcefulbees:ghast_bee', [3.5, 2, 3.5]);
                scene.world().modifyEntity(ghastBee, (e) => {
                    e.mergeFullNBT({ Rotation: [NBT.floatTag(200), NBT.floatTag(0)] });
                });

                for (let i = 3.5; i < 4.5; i = i + 0.1) {
                    let i2 = i;
                    scene.world().modifyEntity(blazeBee, (e) => {
                        e.mergeFullNBT({ Pos: [i2, 3.5, 3.5] });
                    });
                    scene.idle(1);
                }
                scene.world().modifyEntity(blazeBee, (e) => {
                    e.mergeFullNBT({ Pos: [3.5, 1, 3.5] });
                });

                scene.idle(60);

                scene.markAsFinished();
            }
        );
});
