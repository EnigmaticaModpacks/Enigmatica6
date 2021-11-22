onEvent('jei.information', (event) => {
    const recipes = [
        {
            items: ['simplefarming:cheese_slice'],
            text: ['Obtained by right-clicking a Wheel of Cheese.']
        },
        {
            items: ['farmersdelight:ham'],
            text: ['Obtained by killing Pigs or Hoglins with a knife.']
        },
        {
            items: ['astralsorcery:stardust'],
            text: [
                'Obtained by left-clicking a Starmetal Ingot in-world with a Starmetal Cutting Tool. See the Astral Tome for more information.'
            ]
        },
        {
            items: ['buildinggadgets:construction_paste'],
            text: ['Obtained by breaking a Dense Construction Block with a Pickaxe.']
        },
        {
            items: ['powah:uraninite', 'powah:uraninite_block'],
            text: [
                'Uraninite Ore has been removed and does not spawn naturally. To obtain Uraninite, use the Powah Energizing Orb recipe.'
            ]
        },
        {
            items: ['thermal:blizz_rod', 'thermal:blizz_spawn_egg'],
            text: [
                'The Blizz spawns naturally in cold biomes. Mechanical Dirt and Nocturnal Powder work wonders for farming them.'
            ]
        },
        {
            items: ['thermal:blitz_rod', 'thermal:blitz_spawn_egg'],
            text: [
                'The Blitz spawns naturally in warm, dry biomes. Mechanical Dirt and Nocturnal Powder work wonders for farming them.'
            ]
        },
        {
            items: ['thermal:basalz_rod', 'thermal:basalz_spawn_egg'],
            text: [
                'The Basalz spawns naturally in barren biomes, such as Badlands. Mechanical Dirt and Nocturnal Powder work wonders for farming them.'
            ]
        },
        {
            items: ['betterendforge:emerald_ice'],
            text: [
                'Found naturally in Ice Starfields in the End, it can also be created from water placed next to Ancient Emerald Ice.'
            ]
        },
        {
            items: ['betterendforge:dense_emerald_ice'],
            text: [
                'Found naturally in Ice Starfields in the End, it can also be created from Emerald Ice placed next to Ancient Emerald Ice.'
            ]
        },
        {
            items: ['betterendforge:ancient_emerald_ice'],
            text: [
                'Found naturally in Ice Starfields in the End, it can convert adjacent water blocks to Emerald Ice and those to Dense Emerald Ice.'
            ]
        },
        {
            items: ['simplefarming:habanero'],
            text: ['A very rare drop from farming Peppers.']
        },
        {
            items: ['mekanismgenerators:fusion_reactor_controller'],
            text: [
                'The Fusion Reactor has been nerfed quite heavily.',
                'It produces 60k-250k rf/t passively, but has potential for far higher output when paired with one or multiple Steam Turbines.'
            ]
        },
        {
            items: [
                'industrialforegoing:infinity_backpack',
                'industrialforegoing:infinity_saw',
                'industrialforegoing:infinity_drill',
                'industrialforegoing:infinity_hammer',
                'industrialforegoing:infinity_trident',
                'industrialforegoing:infinity_nuke',
                'industrialforegoing:infinity_launcher'
            ],
            text: [
                "Nine Quintillion is big. Really big. You just won't believe how vastly hugely mind-bogglingly big it is."
            ]
        },
        {
            items: [
                'industrialforegoing:infinity_backpack',
                'industrialforegoing:infinity_saw',
                'industrialforegoing:infinity_drill',
                'industrialforegoing:infinity_hammer',
                'industrialforegoing:infinity_trident',
                'industrialforegoing:infinity_nuke',
                'industrialforegoing:infinity_launcher'
            ],
            text: [
                "Unless you plan on sitting here for a few centuries, filling this tool isn't possible through conventional means. Some say the answer lies in Nucleosynthesis instead."
            ]
        },
        {
            items: ['farmersdelight:brown_mushroom_colony', 'minecraft:brown_mushroom'],
            text: [
                'Plant a Brown Mushroom on Rich Soil in darkness to grow mushroom colonies, which may be broken for a nice yield.'
            ]
        },
        {
            items: ['farmersdelight:red_mushroom_colony', 'minecraft:red_mushroom'],
            text: [
                'Plant a Red Mushroom on Rich Soil in darkness to grow mushroom colonies, which may be broken for a nice yield.'
            ]
        },
        {
            items: [
                'integratedtunnels:part_interface_energy',
                'integratedtunnels:part_importer_energy',
                'integratedtunnels:part_exporter_energy'
            ],
            text: ['Max Energy Transfer Rate has been limited to 65,536 FE per tick.']
        },
        {
            items: [
                'integratedtunnels:part_interface_fluid',
                'integratedtunnels:part_importer_fluid',
                'integratedtunnels:part_exporter_fluid'
            ],
            text: ['Max Fluid Transfer Rate has been limited to 65,536 mb per tick.']
        },
        {
            items: ['minecraft:nautilus_shell'],
            text: [
                'Obtained by killing Nautilus, found in Oceans.',
                ' ',
                'Also obtained from Embedded Ammonite, found at any Y level in Oceans and Beaches.'
            ]
        },
        {
            items: ['architects_palette:twisted_sapling'],
            text: ['Obtained by tossing Saplings through a Nether Portal from the Overworld']
        },
        {
            items: ['architects_palette:warpstone'],
            text: ['Obtained by tossing Clay Blocks through a Nether Portal from the Overworld']
        },
        {
            items: ['byg:warped_cactus'],
            text: ['Obtained by tossing Cactus through a Nether Portal from the Overworld']
        },
        {
            items: ['byg:warped_coral', 'byg:warped_coral_fan', 'byg:warped_coral'],
            text: ['Obtained by tossing any coral through a Nether Portal from the Overworld']
        },
        {
            items: ['architects_palette:chiseled_abyssaline_bricks'],
            text: ['May be Charged by Right-Clicking with a Heart of the Sea. Used to power Abyssaline blocks.']
        },
        {
            items: [
                'architects_palette:abyssaline_lamp',
                'architects_palette:abyssaline_tile_slab',
                'architects_palette:abyssaline_tiles',
                'architects_palette:abyssaline_brick_slab',
                'architects_palette:abyssaline_pillar',
                'architects_palette:abyssaline_bricks',
                'architects_palette:abyssaline'
            ],
            text: [
                'Powered by placing next to a Charged Chiseled Abyssaline Bricks. Power is transmitted through to other Abyssaline blocks.'
            ]
        },
        {
            items: [
                'architects_palette:blank_acacia_totem',
                'architects_palette:shocked_acacia_totem',
                'architects_palette:placid_acacia_totem',
                'architects_palette:grinning_acacia_totem'
            ],
            text: ['Right-Click with an Axe to change the face.']
        },
        {
            items: ['betterendforge:silk_fiber'],
            text: ['Obtained by killing Silk Moths which are spawned by Silk Moth Nests.']
        },
        {
            items: [/upgrade_aquatic:\w+_coralstone$/],
            text: ['Obtained by placing Coralstone next to living coral.']
        },
        {
            items: ['upgrade_aquatic:coralstone'],
            text: ['Place next to living coral to infuse.']
        },
        {
            items: [/quark:\w+_crystal$/],
            text: ['Will grow up to four blocks tall if placed deep underground. Will emit particles while growing.']
        },
        {
            items: ['quark:bottled_cloud'],
            text: ['Obtained by Right-Clicking a Glass Bottle in the air between Y Levels 126 and 132.']
        },
        {
            items: [Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:overworld' })],
            text: [
                'Obtained by Right-Clicking a Bottle and Cork in the air in the Overworld or Atum. This action removes Aura from the area.',
                ' ',
                `Can be automated using a Dispenser.`
            ]
        },
        {
            items: [Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:end' })],
            text: [
                'Obtained by Right-Clicking a Bottle and Cork in the air in the End or The Undergarden. This action removes Aura from the area.',
                ' ',
                `Can be automated using a Dispenser.`
            ]
        },
        {
            items: [Item.of('naturesaura:aura_bottle', { stored_type: 'naturesaura:nether' })],
            text: [
                'Obtained by Right-Clicking a Bottle and Cork in the air in the Nether. This action removes Aura from the area.',
                ' ',
                `Can be automated using a Dispenser.`
            ]
        },
        {
            items: ['quark:root_item'],
            text: ['Drops occasionally when breaking Cave Roots.']
        },
        {
            items: ['meetyourfight:phantoplasm'],
            text: ['Drops from the Bellringer. Craft a Haunted Bell to summon.']
        },
        {
            items: ['meetyourfight:mossy_tooth'],
            text: ['Drops from Swampjaw. Craft a Fossil Bait to summon.']
        },
        {
            items: ['meetyourfight:fortunes_favor'],
            text: [`Drops from Dame Fortuna. Craft a Devil's Ante to summon.`]
        },
        {
            items: ['atum:ectoplasm'],
            text: [`Drops from Wraiths in the sandy wastes of Atum.`]
        },
        {
            items: ['minecraft:firework_rocket'],
            text: [`Shapeless Crafting: One paper and at least one gunpowder.`]
        },
        {
            items: ['minecraft:firework_rocket'],
            text: [
                `Adding more gunpowder increases the duration of the rocket.`,
                `Up to three gunpowder or up to seven firework stars can be added.`
            ]
        },
        {
            items: ['minecraft:firework_star'],
            text: [`Shapeless Crafting: One gunpowder and at least one dye.`]
        },
        {
            items: ['minecraft:firework_star'],
            text: [
                `Up to eight dyes can be added.`,
                `One head, gold nugget, feather, or fire charge can be added to set a shape.`,
                `A diamond and/or a glowstone dust can be added with any of the other ingredients.`
            ]
        },
        {
            items: ['minecraft:dragon_egg'],
            text: [
                `More eggs may be obtained by summoning the End Dragon again.`,
                ` `,
                `To summon, place an End Crystal on each of the cardinal directions of the End Portal in the End.`
            ]
        },
        {
            items: ['byg:leaf_pile'],
            text: [`Gathered with Shears.`]
        },
        {
            items: ['eidolon:soul_shard'],
            text: [
                `Obtained by performing a Crystallization Ritual near undead mobs. The ritual can be found in the Ars Ecclesia.`,
                ` `,
                `Alternatively obtained by killing undead mobs with a Reaper's Scythe.`
            ]
        },
        {
            items: ['atum:anputs_fingers_spores'],
            text: [`Found occasionally growing beneath Deadwood Trees. Requires darkness to grow.`]
        },
        {
            items: ['immersiveengineering:furnace_heater', 'mekanism:fuelwood_heater', 'mekanism:resistive_heater'],
            text: [`May be used to provide Heat for PneumaticCraft machines.`]
        },
        {
            items: ['immersiveengineering:logic_circuit'],
            text: [
                `Used in a Logic Unit to create advanced Redstone Logic.`,
                ` `,
                `Programmed on an Engineer's Circuit Table. Requires Circuit Backplanes, Lead or Copper Wire, and Vacuum Tubes.`
            ]
        },
        {
            items: ['alexsmobs:hemolymph_sac', 'alexsmobs:warped_muscle'],
            text: [
                `Obtained by defeating the Warped Mosco.`,
                ` `,
                `Warped Mosco are creatures of nightmare created when a Crimson Mosquito sucks the blood of a Mungus covered in Warped Fungus.`
            ]
        },
        {
            items: ['alexsmobs:hemolymph_sac', 'alexsmobs:warped_muscle'],
            text: [
                `Mungus may be summoned through the Altar of Birthing, while Crimson Mosquitos may be created by bringing a Fly into the Nether.`
            ]
        },
        {
            items: ['astralsorcery:gem_crystal_cluster'],
            text: [
                `Formed by dropping a Rock Crystal or Celestial Crystal in Liquid Starlight with an Illumination Powder.`,
                ` `,
                `Different varieties form at different times of the day.`
            ]
        },
        {
            items: ['astralsorcery:celestial_crystal_cluster'],
            text: [`Formed by dropping a Rock Crystal or Celestial Crystal in Liquid Starlight with a Stardust.`]
        },
        {
            items: ['astralsorcery:celestial_crystal_cluster'],
            text: [
                `If grown on Starmetal Ore, the growth rate is increased. The ore may revert during this process, so linking a Collector Crystal to it is important to convert it back.`
            ]
        },
        {
            items: ['bloodmagic:weak_tau'],
            text: [`Found in chests within the Demon Realm.`]
        },
        {
            items: ['bloodmagic:strong_tau'],
            text: [`Produced by growing Tau near mobs.`]
        },
        {
            items: ['eidolon:unholy_symbol'],
            text: [`Produced by chanting the Touch of Darkness at Pewter Inlay dropped on the ground.`]
        },
        {
            items: [
                'resourcefulbees:t1_beehive',
                'resourcefulbees:t2_beehive',
                'resourcefulbees:t3_beehive',
                'resourcefulbees:t4_beehive'
            ],
            text: [
                `Tiered Beehives have been depreciated. Use the Hive Upgrade items on nests found in the world instead. Tiered Beehives can be converted to Hive Upgrades in a crafting grid.`
            ]
        },
        {
            items: ['upgrade_aquatic:flare_spawn_egg'],
            text: [`Splash a Phantom with a Potion of Insomnia to convert it to a Flare.`]
        },
        {
            items: ['quark:dragon_scale'],
            text: [`Only drops from Ender Dragons after the first one has been killed.`]
        },
        {
            items: [
                'dankstorage:1_to_2',
                'dankstorage:2_to_3',
                'dankstorage:3_to_4',
                'dankstorage:4_to_5',
                'dankstorage:5_to_6',
                'dankstorage:6_to_7'
            ],
            text: [`Sneak Right Click to upgrade a Dank installed in a Dock.`]
        }
    ];

    recipes.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.add(item, recipe.text);
        });
    });

    disabledItems.forEach((item) => {
        event.add(
            item,
            "This item has been disabled, if you managed to obtain it please report it on Enigmatica 6's issue tracker: https://github.com/NillerMedDild/Enigmatica6/issues"
        );
    });

    refinedStorageItems.forEach((item) => {
        event.add(`refinedstorage:${item}`, 'Can be dyed through crafting or by right clicking it with dye in-world.');
    });

    generatableCobblestone.forEach((cobblestone) => {
        event.add(
            cobblestone,
            'Can be generated in a Vanilla Cobblestone Generator. The block below where the Cobblestone generates needs to be a Block of Iron.'
        );
    });

    generatableStone.forEach((stone) => {
        event.add(
            stone,
            'Can be generated in a Vanilla Stone Generator. The block below where the Stone generates needs to be a Block of Diamond.'
        );
    });

    var framedDrawers = [
        'compact_drawer',
        'drawer_controller',
        'slave',
        'trim',
        'full_one',
        'full_two',
        'full_four',
        'half_one',
        'half_two',
        'half_four'
    ];
    framedDrawers.forEach((drawer) => {
        event.add('framedcompactdrawers:framed_' + drawer, [
            'Must be painted with any block to be used. To paint, put in any crafting grid with one block directly above and to its left diagonally.',
            'You can also put a different block directly on top of the drawer and/or directly to its left to customize it even further!'
        ]);
    });
});
